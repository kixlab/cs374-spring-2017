# 07-Needfinding

# Recap


# Admin
- sit with your group!
- 논술 테스트: how many are taking it?

Nanoquiz

- nanoquiz: shoutkey.com/
- no reading material during nanoquiz
- close laptop / smartphone after you submit


# UI HOFS
Tabbed Browsing
Today’s candidate for the User Interface Hall of Fame is tabbed browsing, a feature found in almost all web browsers. With tabbed browsing, multiple browser windows are grouped into a single top-level window and accessed by a row of tabs. You can open a hyperlink in a new tab by choosing that option from the right-click menu.

Tabbed browsing neatly solves a scaling problem in the Windows taskbar. If you accumulate several top-level windows, they cease to be separately clickable buttons in the taskbar and merge together into a single button with a popup menu. So your browser windows become less visible and less efficient to reach.

Tabbed browsing solves that by creating effectively a separate task bar specialized to the web browser. But it’s even better than that: you can open multiple top-level browser windows, each with its own set of tabs. Each browser window can then be dedicated to a particular task, e.g. apartment hunting, airfare searching, programming documentation, web surfing. It’s an easy and natural way for you to create task-specific groupings of your browser windows. That’s what the Windows task bar tries to do when it groups windows from the same application together into a single popup menu, but that simplistic approach doesn’t work at all because the Web is such a general-purpose platform.

Another neat feature of tabbed browsing is that you can bookmark a set of tabs so you can recover them again later – a nice shortcut for task-oriented users.

What are the downsides of tabbed browsing? For one thing, you can’t compare the contents of one tab with another. External windows let you do this by resizing and repositioning the windows.

Juho’s notes

moving between tabs: shortcut not standardized (command + arrow, command + option + arrow, control + tab)


## Word 6
Another problem is that tabs don’t really scale up either – you can’t have more than 5-10 without shrinking their labels so much that they’re unreadable. Some designers have tried using multiple rows of tabs, but if you stick slavishly to the tabbing metaphor, this turns out to be a horrible idea. Here’s the Microsoft Word 6 option dialog. Clicking on a tab in a back row (like Spelling) has to move the whole row forward in order to maintain the tabbing metaphor. This is disorienting for two reasons: first, because the tab you clicked on has leaped out from under the mouse; and second, because other tabs you might have visited before are now in totally different places. Some plausible solutions to these problems were proposed in class – e.g., color-coding each row of tabs, or moving the front rows of tabs below the page. Animation might help too. All these ideas might reduce disorientation, but they involve tradeoffs like added visual complexity, greater demands on screen real estate, or having to move the page contents in addition to the tabs. And none of them prevent the tabs from jumping around, which is a basic problem with the approach.

As a rule of thumb, only one row of tabs really works if you want the tabs to tie directly to the panel, and the number of tabs you can fit in one row is constrained by the screen width and the tab label width. Most tabbing controls can scroll the tabs left to right, but scrolling tabs is definitely slower than picking from a popup menu.

In fact, the Windows task bar actually scales better than tabbing does, because it doesn’t have to struggle to maintain a metaphor. The Windows task bar is just a row of buttons. Expanding the task bar to show two rows of buttons puts no strain on its usability, since the buttons don’t have to jump around.

## Eclipse
Here’s how Eclipse tries to address the tab scaling problem: it shows a few tabs, and the rest are found in a pulldown menu on the right end of the tab bar.

This menu has a couple of interesting features. First, it offers incremental search: typing into the first line of the menu will narrow the menu to tabs with matching titles. If you have a very large number of tabs, this could be a great shortcut. But it doesn’t communicate its presence very well. I used Eclipse for months, and didn’t even notice this feature until I started carefully exploring the tab interface for this Hall of Fame & Shame discussion.

Second, the menu tries to distinguish between the visible tabs and the hidden tabs using boldface. Quick, before studying the names of the tabs carefully – which do you think is which? Was that a good decision?

Picking an item from the menu will make it appear as a tab – replacing one of the tabs that’s currently showing. Which tab will get replaced? It’s not immediately clear.

The key problem with this pulldown menu is that it completely disregards the natural, spatial mapping that tabs provide. The menu’s order is unrelated to the order of the visible tabs; instead, the menu is alphabetical, but the tabs themselves are listed in order of recent use. If you choose a hidden tab, it replaces the least recently used visible tab. LRU is a great policy for caches. Is it appropriate for frequently-accessed menus? Probably not, because it interferes with users’ spatial memory.

# Nanoquiz

Which of the following are signals of abstraction?
[V] We usually
[V] In our group we do...
[X] That time we did.
[V] In our company

[V] Abstractions should be avoided.
[V] The interviewer needs to actively fill the hole when the customer talks about a past event.
[V] Alternate between watching and probing.
[V] The customer keeps getting interrupted while doing their work naturally.
It's fine to be nosy as an interviewer.

Interpretations
[V] Share interpretations with the customer.
[X] Sharing interpretations with the customer will bias the data.
[V] Nonverbal cues confirm interpretations.

# Studio Experience (7 mins)
- postmortem after the first studio
- overall mentality about studio
- move to before the first studio next time

Studio model: motivate the idea behind having weekly studios

- aligns well with iterative design
- a way to evaluate your ideas and prototypes with constructive peer feedback

the cartoon

- It’s not just about being nice. It’s about being principled and systematic about your feedback. Related to the many concepts and ideas introduced in the reading and class.


# Where are we? (3 mins)
- Design process
- Usability ==> Design Process


# Activity: TODO Contextual Inquiry (8 mins)

- 2 min interview, 1 min write-up
- switch
- 2 min interview, 1 min write-up
- end
- 2 min in-class discussion

- focus on high-level takeaways rather than specific TODO strategies
- what surprises? what only came out because you "interrupted"? 
- any interpretation that only came out because you shared interpretation?

# Needfinding Techniques

## Diary

- logitudinal or sporadic behavior
- participants capture the experience themselves.
- People complete at a specified time or interval (smartphones are common)
- Structured task
- Can use journals, cameras, voice, video
- Tailor the recording to the context
- Can scale better than direct observation
- Easier tools ==> better results

During a lecture? Writing down
- While driving? Audio

## Experience sampling

- ping people at a regular interval
- sometimes called "pager studies" (from 90s)
- "How happy do you feel?" "Where are you?"
- Technology can make these studies easier
- Aggregate information over lots of people

## Survey

- general perception on certain issues
- scale, diverse user population
- evidence for "people tend to think ..."

## Ethnography

- in-depth account of context, culture, environment, social settings
- evidence for "the hidden cultural background for xxx is..."


## Users as Designers
Lead users

- Eric von Hippel
- many of them already have clever solutions
- designers generalize these point solutions

Extreme users

- users with thousands of emails per day 
- make the solution for the most difficult problem first, and generalize



## Discussion

Advantages? Disadvantages?

How to pick the right method?


# Video Break (5 mins)
https://www.youtube.com/watch?v=emQNfA9dihU

https://hci.stanford.edu/research/voice4all/

Play from ~12 mins where Tap talks about DSC and Avaaj Otalo

Extreme users: Indian rural farmers

- They probably don't have TV / computer / landline phone at home, but have all have mobile phones.
- They probably won't know how to read and write, but they can speak.
- How would you go about tackling this user population? Fieldwork.


# Needfinding via Social Media: Namdaemun Market

## Exercise 1 (5 mins work, 2 mins discussion)

“Large, like a maze” both good and bad: This is why we need to identify different classes of users, because they might have different needs and motivations.


## Exercise 2 (3 mins work, 2 mins discussion)

A few different ways to categorize

- by motivation or activity pattern
- by demographic (students, family, foodies, tourists)

## Exercise 3 (3 mins work, 2 mins discussion)

- browse, buy specific items, eat

You’re likely to identify different goals for different user groups. How do you decide which goals to serve and not serve? (allocating limited resources)

- serve common cases well and common cases only
- focus on the most suffering population: gain will be huge.
- many other possible decision factors: business, risk, identity, “client” needs, etc.

## Discussion (3 mins)

Advantages of using social media as proxy for user input?

- lots of data points easily accessible
- computational approaches (e.g., word count, sentiment analysis)

Downsides of using social media as proxy?

- biased population, polarized comments (those with strong opinions are likely to leave a review)
- time difference between experience and review writing (not in situ, or “in place”)
- abstract and concise statements. Only explictly mentioned comments are used in the observation.
- no opportunity to ask questions
- type of comments you get depends on the platform

From actual class

- Pros: quantity, reduced time on needfinding, filtering / navigation support, diverse population, votes and ratings info available, header and text separation makes it easy to skim and parse.

- Cons: indirectness, bias, controversial / divided opinions (but I pointed out this could be a good thing and that's why thinking about different user classes might be a good idea), population bias (young, tech-savvy, tourists rather than regular visitors who are less likely to write a review), emotional / polarized reviews


# Diff with Reading


# Post Class Notes
Scott's video

- diary study
- experience sampling
- survey
- ethno
- lead users / extreme users

=> include these in the reading, and add a high-level comparison of all these methods, helping students decide which method to use under which circumstance.

Both activities worked quite well. Keep them.


