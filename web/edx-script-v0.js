/*
 * 6.005 edX Script
 */

(function() {
  
  if (window.six005edx) { return; }
  window.six005edx = true;
  
  // configuration
  var WEB = {
    BASE: '//web.mit.edu/6.005/www/fa14/web/',
  };
  
  style('./prism-edx-v0.css');
  
  var stages = [
    [ './prism/prism.js' ],
  ];
  (function next() {
    var scripts = stages.shift();
    if ( ! scripts) { return render(); }
    
    // require all scripts in this stage, and recurse
    $.when.apply($, scripts.map(function(script) { return require(script) })).done(next);
  })();
  
  // load JavaScript by injecting a <script> tag
  function require(url, callback) {
    var deferred;
    if ( ! callback) {
      // if no callback function, return a Deferred that resolves when the script is loaded
      deferred = $.Deferred();
      callback = function() { deferred.resolve(); }
    }
    
    // fix relative URLs
    url = url.replace('./', WEB.BASE);
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.getElementsByTagName('body')[0].appendChild(script);
    
    return deferred;
  }

  // load CSS by injecting <link> tag
  function style(url) {
    // fix relative URLs
    url = url.replace('./', WEB.BASE);
    
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.getElementsByTagName('body')[0].appendChild(link);
  }

  function render() {
    var content = document.getElementById('course-content');
    
    // either we're in the studio, or we're hosed
    if ( ! content) { return; }
    
    // re-render problems/solutions as they come and go
    new MutationObserver(rerender).observe(content, { childList: true, subtree: true });
    
    function rerender() {
      // handle code blocks
      var fences = $('.problem p', content).filter(function() {
        return this.textContent.indexOf('|||') === 0;
      });
      for (var ii = 0; ii < fences.length; ii += 2) {
        var attrs = fences[ii].textContent.match(/\|\|\|(\w*)\s*(.*)/);
        var lang = attrs[1] || 'java';
        var style = attrs[2];
        
        var block = $(fences[ii]).nextUntil(fences[ii+1]);
        var text = block.map(function() { return this.textContent; }).toArray().join("\n");
        
        block.addBack().remove();
        var code = $('<code>').addClass('language-'+lang).text(text);
        var pre = $('<pre>').addClass(style).append(code);
        $(fences[ii+1]).replaceWith(pre);
        Prism.highlightElement(code[0]);
      }
      
      // if answer labels change, they are never correct
      // so this doesn't work:  $('.problem label:contains("|")').each(render_spans);
      // handle all-code labels as a compromise
      var tags = $('.problem p', content).filter(function() { return this.textContent == '|codelabels|'; });
      tags.next().find('form').addClass('code-answers');
      tags.remove();
      
      // and handle code spans in problem & solution text
      // TODO if we fail to replace any pipes, we're going to get called again, and infinite loop
      // TODO update to test for regex match instead of mere pipes
      // TODO and update to allow for code containing the || operator
      $('.problem p:contains("|")', content).each(render_spans);
      
      function render_spans() {
        this.innerHTML = this.innerHTML.replace(/(^|\s)\|([^|]+)\|/gm, '$1<code>$2</code>');
      }
    }
    
    rerender();
  }
})();
