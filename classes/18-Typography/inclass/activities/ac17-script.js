var project_names = [
"The Code Doctors",
"Shoes",
"Final Four",
"YungUI",
"foodies",
"Clover",
"Team Awesome 1",
"Apollo",
"aJACS",
"༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽",
"Team Awesome 2",
"Team Goat",
"TeamBuildr",
"Lacah",
"KLT (Kids Learning Together)",
"Jordan's Inner Circle",
"KEEM",
"The Lounge",
"The Blobs",
"Asian on Occasion",
"Jane",
"3 Peas in a Pod",
"99 Victors but Victor Ain't One",
"Aika",
"Aladdin",
"Trendsetters",
"Mew IV",
"MITBabies",
"MedConnect",
"Grouper",
"Posh Dev",
"Group A",
"Recrüt",
"RIP",
"Spokes",
"TableMaestro",
"Tacit",
"Lunch Break",
"Assure",
"Internal Consistency",
"Chupacabras",
"deadbeef pancakes",
"Wei + babes",
"The Struggle Bus",
"Game Plan",
"Gho",
"The Van Helsing's",
"Blank Text Box",
"News Bridge",
"Hidden Subtext",
"DormUp"
];

var project_urls = [
"https://wikis.mit.edu/confluence/display/6DOT813sp15/The+Code+Doctors",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Shoes",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Final+Four",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/YungUI",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/foodies",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Clover",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Team+Awesome+1",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Apollo",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/aJACS",
"https://wikis.mit.edu/confluence/pages/viewpage.action?pageId=108497178",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Team+Awesome+2",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Team+Goat",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/TeamBuildr",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Lacah+-+Project+Page",
"https://wikis.mit.edu/confluence/pages/viewpage.action?pageId=108498443",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Jordan%27s+Inner+Circle",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/KEEM",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/The+Lounge",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/The+Blobs",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Asian+on+Occasion",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Jane",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/3+Peas+in+a+Pod",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/99+Victors+but+Victor+Ain%27t+One",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Aika",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Aladdin",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Trendsetters",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Mew+IV",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/MITBabies",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/MedConnect",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Grouper",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Posh+Dev",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Group+A",
"https://wikis.mit.edu/confluence/pages/viewpage.action?pageId=108496988",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/RIP",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Spokes",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/TableMaestro",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Tacit",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Lunch+Break",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Assure",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Internal+Consistency",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Chupacabras",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/deadbeef+pancakes",
"https://wikis.mit.edu/confluence/pages/viewpage.action?pageId=108498018",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/PortPholio",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Game+Plan",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Gho",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/The+Van+Helsing%27s",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Blank+Text+Box+-+Climb+Your+World",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/News+Bridge",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/Hidden+Subtext",
"https://wikis.mit.edu/confluence/display/6DOT813sp15/DormUp"
];


function show_next(n) {
    var $progress = $("#progress");
    var $prompt = $("#prompt");

    if (n > 3) {
        $progress.text("You're done!");
        $prompt.text("");
        //$("#next").hide();
        return;
    }

//    $progress.text("Project "+n+" of 3");
    var proj_id = Math.floor(Math.random()*project_names.length);
    $prompt.html('Find a font for: <a href="' + project_urls[proj_id] + '" target="_blank">' + project_names[proj_id] + '</a>');
    //$("#next").attr("href", "javascript:show_next("+(n+1)+");");

    $("#form").attr("src", function(i,v) {return v;});
}

$(document).ready( function() {
    show_next(1);
});
