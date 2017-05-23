var realwords = [ "academically"
                , "acknowledged"
                , "boatbuilding"
                , "brontosaurus"
                , "neuroscience"
                , "nimbostratus"
                , "chocolatiers"
                , "sociobiology"
                , "smorgasbords"
                , "formulations"
                , "fundamentals"
                , "gluttonously"
                , "glassblowing"
                , "interstellar"
                , "meticulously"
                , "overtraining"
                , "preassembled"
                , "prehistorian"
                , "sharpshooter"
                , "timepleaser"];

var fakewords = [ "illacdacmaye"
                , "odengcadwlke"
                , "tdagunbilbio"
                , "souronrubats"
                , "oeeensrcciun"
                , "tbsnstmraoiu"
                , "sctlrheioaco"
                , "icyoosobogli"
                , "brrsadsomsgo"
                , "rofmaouisltn"
                , "lduatfamnsen"
                , "luotunlosgyt"
                , "sngolawlsbgi"
                , "rstierealnlt"
                , "uusmtyoleilc"
                , "rigrnoanviet"
                , "lreambspedse"
                , "threisaniopr"
                , "torphsohsrae"
                , "atrepsmelise"];

var practice = ["designations", "eintosniagsd"];

var responses = [];
var $label;
var $progress;
var $input;
var $ready;
var $start;
var $game;

function run(wordset, i, j) {
    console.log("run:"+i+" "+j+" "+wordset);
    if (i == 0) {
        store_responses();
        return;
    }
    if (i >= wordset.length) {    
        console.log("final:"+responses);
        store_responses();
        return;
    }

    if (i % 2 == 0) {
        ready(wordset[i][0], function(){
            $ready.hide();
            $game.show();
            run(wordset,i+1,0);
        });
        return;
    }

    if (j >= wordset[i].length) {
        run(wordset,i+1,0);
        return;
    }

    var word = wordset[i][j];
    var start = (new Date()).getTime();
    $label.html(word);
    $progress.text("Completed "+j+" of "+wordset[i].length+" words.");
    $input.val("").focus();

    $input.unbind("keypress")
          .keypress(function(e) {
        if (e.which == 13 || e.keyCode == 13) {
            if ($input.val() == word) {
                responses.push([word, (new Date()).getTime() - start]);
                console.log(responses);
                run(wordset, i, j+1);
            } else {
                $input.addClass("wrong");
                window.setTimeout(function(){$input.removeClass("wrong");},500);
                console.log("wrong");
            }
        }
    });
}

function ready(msg, f) {
    $game.hide();
    $("#readyplayer").html(msg);
    $ready.show();
    $start.unbind("click");
    $start.click(f);
}

function v_1() {
    //person a does 20 english
    //person b does 20 gibberish
    //each of these should be randomized within their set.
    $("#menu").hide();
    responses.push("v1");
    var r = shuffle(realwords);
    var f = shuffle(fakewords);
    var wordset = [
                   ["Player 1 practice. Press 'Ready' to begin."]
                  ,practice
                  ,["Player 1's turn. Press 'Ready' to begin."]
                  ,realwords.slice(0,10)
                  ,["Take a short break (20s). Press 'Ready' to continue."]
                  ,realwords.slice(10)
                  ,["Player 2 practice. Press 'Ready' to begin."]
                  ,practice
                  ,["Player 2's turn. Press 'Ready' to begin."]
                  ,fakewords.slice(0,10)
                  ,["Take a short break (20s). Press 'Ready' to continue."]
                  ,fakewords.slice(10)
                  ];
    run(wordset,0,0);
}

function v_2() {
    //person a does 10 english
    //person a does 10 gibberish
    //person b does 10 english
    //person b does 10 gibberish
    //each of these should be randomized within their set.

    $("#menu").hide();
    responses.push("v2");
    var r = shuffle(realwords);
    var f = shuffle(fakewords);
    var wordset = [
                   ["Player 1 practice. Press 'Ready' to begin."]
                  ,practice
                  ,["Player 1's turn. Press 'Ready' to begin."]
                  ,realwords.slice(0,10)
                  ,["Take a short break (20s). Press 'Ready' to continue."]
                  ,fakewords.slice(0,10)
                  ,["Player 2 practice. Press 'Ready' to begin."]
                  ,practice
                  ,["Player 2's turn. Press 'Ready' to begin."]
                  ,realwords.slice(10)
                  ,["Take a short break (20s). Press 'Ready' to continue."]
                  ,fakewords.slice(10)
                  ];
    run(wordset,0,0);
}

function v_3() {
    //person a does 20 randomized gibberish/english
    //person b does 20 randomized gibberish/english
    //each of these should be randomized within their set.

    $("#menu").hide();
    responses.push("v3");
    var words = shuffle(realwords.slice(10).concat(fakewords.slice(10)));
    var wordset = [
                   ["Player 1 practice. Press 'Ready' to begin."]
                  ,practice
                  ,["Player 1's turn. Press 'Ready' to begin."]
                  ,words
                  ,["Player 2 practice. Press 'Ready' to begin."]
                  ,practice
                  ,["Player 2's turn. Press 'Ready' to begin."]
                  ,words
                  ];
    run(wordset,0,0);
}

function shuffle(a) {
    var i,j,t;
    for (i=a.length-1; i>0; i--) {
        j = Math.floor(Math.random() * (i+1));
        t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
    return a;
}

function store_responses() {
    $("#menu").hide();
    $game.hide();
    $ready.hide();
    $("#done").show();
    console.log("Sending: "+responses);
    $.ajax(
        { url:"/courses/hci/activities/experiment-design/store.py"
        , type:"post"
        , data: {"data":JSON.stringify(responses)}
        , dataType:"json"
        , success:function(r) {
            $("#done").html("Thanks. Your results have been uploaded to our server.");
        }
        , error:function(r) {
            $("#done").html("We encountered an error uploading your data to the\
                server. Please email the following data to\
                juho@juhokim.com<br>"+JSON.stringify(responses));
        }
        });
}

$(function() {
    $ready = $("#ready").hide();
    $game = $("#game").hide();
    $label = $("#label");
    $progress = $("#progress");
    $input = $("#response");
    $start = $("#start");
    $("#done").hide();
    $("#response").bind("copy paste", function(e) {
        return false;
    });
});
