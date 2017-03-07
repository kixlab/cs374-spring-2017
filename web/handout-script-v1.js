/*
 * 6.005 Handout Script
 */

// configuration
var PREVIEW = document.location.protocol == 'file:';
var SEMESTER = 'Spring 2017';
var AUTHORS = 'This material is a derivative of <a href="http://web.mit.edu/6.813/www/sp16/">MIT\'s 6.813/6.831</a> reading material, used under <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC&nbsp;BY-SA&nbsp;4.0</a>. Collaboratively authored with contributions from: Elena Glassman, Philip Guo, Daniel Jackson, David Karger, Juho Kim, Rob Miller, Stephanie Mueller, Clayton Sims, and Haoqi Zhang. This work is licensed under <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">CC&nbsp;BY-SA&nbsp;4.0</a>.';
var HOME = 'https://kixlab.org/courses/hci';

// load jQuery, run setup, load other dependencies, and render
require('https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', function () {
  // future calls to require can use relative paths
  require.abspath = $('script[src*=handout-script]').attr('src').match(/.*\//)[0];
  
  setup();
  
  var stages = [
    [ './markdown/Markdown.Converter.js',
      'https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js' ],
    [ './markdown/Markdown.Extra.js' ],
  ];
  (function next() {
    var scripts = stages.shift();
    if ( ! scripts) { return render(); }
    
    // require all scripts in this stage, and recurse
    $.when.apply($, scripts.map(function(script) { return require(script) })).done(next);
  })();
});

// load JavaScript by injecting a <script> tag
function require(url, callback) {
  var deferred;
  if ( ! callback) {
    // if no callback function, return a Deferred that resolves when the script is loaded
    deferred = $.Deferred();
    callback = function() { deferred.resolve(); }
  }
  
  // fix relative URLs
  url = url.replace('./', require.abspath);
  
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onload = callback;
  document.getElementsByTagName('body')[0].appendChild(script);
  
  return deferred;
}

// perform setup that depends only on jQuery
function setup() {
  // header link
  $('header').html(function() {
    return $('<a>').attr('href', HOME).html(this.innerHTML);
  });
  // semester header
  $('header').append($('<div>').text(SEMESTER));
  // copyright footer
  $('footer#authors').addClass('col-sm-2 footer-margin').html($('<div>').html(AUTHORS));
  // page title
  var title = $('head title').text();
  $('.lecture').first().prepend($('<h1>').text(title).addClass('lecture-info col-sm-8 col-sm-offset-3'));
  // bootstrappiness
  $('.markdown, .with-content').addClass('col-sm-8 col-sm-offset-3');
  $('.slide').addClass('col-sm-6');
  $('nav').addClass('col-sm-3');
  // mobile
  if ( ! $('head meta[name="viewport"]').length) {
    $('head').append($('<meta>').attr({ name: 'viewport', content: 'width=device-width, initial-scale=1' }));
  }

  // align text and slide
  $(".slide").before('<div style="clear: both;"></div>');

}

// render the page with all dependencies loaded
function render() {
  // create Markdown converter
  var converter = new Markdown.Converter();
  Markdown.Extra.init(converter, {
    // note: changing the enabled extensions may break existing pages
    extensions: [ 'fenced_code_gfm', 'tables', 'def_list', 'attr_list', 'smartypants' ],
    highlighter: 'highlight',
    table_class: 'table',
  });
  
  
  // extend converter to understand java:... URLs as links to API docs
  converter.hooks.chain('postConversion', function(html) {
    return html.replace(/ href="java%3a([^"]+)"/g, function(link, clazz) {
      return ' href="http://docs.oracle.com/javase/8/docs/api/?'+clazz+'.html"'
    });
  });
  
  // convert all Markdown divs
  $('.markdown').each(function() {
    this.innerHTML = convertMarkdown(converter, this);
    $(this).addClass('converted');
  });
  
  // Bootstrap-ify elements that have handout-* CSS classes
  $('.handout-info').addClass('alert alert-info');
  $('.handout-solo').addClass('alert alert-warning');
  $('.handout-group').addClass('alert alert-success');
  $('.handout-due').addClass('alert alert-danger');

  
  // Bootstrap-ify generated HTML
  $('.alert a').addClass('alert-link');
  
  // assign IDs to all headers
  [ 'h1', 'h2', 'h3' ].forEach(function(h) { // higher-level headers get cleaner IDs
    $(h).each(function() {
      if ( ! this.id) { this.id = generateId(this.textContent); }
    });
  });
  
  // build table of contents
  $('nav').each(function() {
    var toc = $('<ul>').addClass('nav');
    var index = 0;
    $('h1, .markdown h2').not('.slide *').each(function() {
      toc.append($('<li>').append($('<a>').text(this.textContent).attr('href', '#' + this.id)));
    });
    $(this).append(toc);
  });
  $('body').scrollspy({ target: '.navigation', offset: 120 });
  
  // syntax highlight code
  if ($('code[class^=language]').length > 0) {
    require('./highlight/highlight.pack.js', function() {
      hljs.initHighlightingOnLoad();
    });
  }
  
  // wire up interactive elements
  $('.hover-figure').each(createHoverInteraction)
  
  // handle fragment identifiers
  if (location.hash) {
    document.getElementById(location.hash.substr(1)).scrollIntoView();
  }
}

// recursively convert a node containing Markdown and possibly HTML
function convertMarkdown(md, node) {
  return md.makeHtml(Array.prototype.map.call(node.childNodes, function(node) {
    if (node.nodeType == Node.TEXT_NODE) {
      return node.textContent;
    }
    if (node.nodeType == Node.COMMENT_NODE) {
      return '\n';
    }
    if (node.classList.contains('no-markdown')) {
      return node.outerHTML;
    }
    return node.outerHTML.replace(node.innerHTML, convertMarkdown(md, node));
  }).join(''));
}

function generateId(text) {
  var base = text.toLowerCase().replace(/\s+/g, '_').replace(/[^\w-]/g, '');
  var id = base;
  var idx = 2;
  while (document.getElementById(id)) { id = base + '_' + idx++; }
  return id;
}

// create a hover interaction
//   will update an attribute of a target element inside this element as the
//   user hovers over elements matching a selector
function createHoverInteraction() {
  var elt = $(this);
  var selector = elt.data('selector');
  var target = $(elt.data('target'), elt);
  var attr = elt.data('attr');
  var template = elt.data('template');
  function update() {
    var value = template.replace(/\{index\}/g, $(this).index());
    target.attr(attr, value);
  }
  $(selector).on('click mouseenter', update);
  update.apply($(selector).first());
}
