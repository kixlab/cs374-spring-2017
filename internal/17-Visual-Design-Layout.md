# 17-Visual Design and Layout


# Recap

# Admin
- nanoquiz: shoutkey.com/hot
- DP5 
- DP implementation notes + Q&A

# UI HOFS

Google (search) is an outstanding example of simplicity. Its interface is as simple as possible. Unnecessary features and hyperlinks are omitted, lots of whitespace is used. Google is fast to load and trivial to use.But maybe Google goes a little too far! Let’s take the perspective of a completely novice user coming to Google for the first time. What are the learnability obstacles to forming a mental model of what Google actually does and how to use it?What does Google actually do?  The front page doesn’t say.  What should be typed into the text box?  It has no caption at all.  
The button labels are almost gibberish. “Google Search” isn’t meaningful English (although it’s gradually becoming more meaningful as Google enters the language as a noun, verb, and adjective).  And what does “I’m Feeling Lucky” mean?
Where is Help?  Turns out it’s reachable from About Google, but the scent isn’t too strong for that.
Although these problems would be easy for Google to fix, they are actually minor, because Google’s interface is simple enough that it can be learned by only a small amount of exploration.  (Except perhaps for the I’m Feeling Lucky button, which probably remains a mystery until a user is curious enough to hunt for the help.  After all, maybe it does a random choice from the search results!)
Notice that Google does not ask you to choose your search domain first.  It picks a good default (web pages), includes a mix of results if they seem relevant (e.g. images & videos & maps too, not purely web pages), and makes it easy to change.## Alexa

What about for this kind of new technology? 

# Nanoquiz


# Visual Design
Why?

Today's reading is the first in a series about graphic design for graphical user interfaces, and I want to explain why we're doing this.

We've made a point (earlier) that this course is focused on usability, but many of the guidelines in the upcoming readings are more about aesthetics than pure usability. Serious *mistakes* in graphic design certainly affect usability, however, so we're trying to help you avoid those pitfalls. There's also a phenomenon, sometimes called the Aesthetic Effect, that attractive user interfaces (like attractive people) are *perceived* as more usable, whether they are or not.

But there's a larger question here: in practice, should software engineers have to learn this stuff at all? Shouldn't you just hire a graphic designer and let them do it? Some people think that the most important lesson a software engineer can learn from a course like 6.813 is "UI design is *hard*; leave it to the *experts*." The person who told me that was a high-level designer at Microsoft Research. I was tempted to retort that *designers* shouldn't bother learning to *program* either, but I don't actually believe that so I held my tongue.

But there's some substance to the argument: a little knowledge can be a dangerous thing, and that a programmer with a little experience in UI design but too much self-confidence can be just as dangerous as an artist who's learned a little bit of HTML and thinks they now know how to program. But I prefer to believe that a little knowledge is a step on the road to greater knowledge. Some of you may decide to *become* UI designers, and this course is a step along that road.

In a commercial environment, you *should* hire experienced graphic designers, just as you should hire an architect for building your corporation's headquarters and you should contract with a licensed building firm. Big jobs for big bucks require experts who have focused their education and job experience on those problem. One reason this course is useful is that you can appreciate what UI experts do and evaluate their work, which will help you work on a team with them (or supervise them).

But it's also worth learning these principles because you can apply them yourself on smaller-scale problems. Are you going to hire a graphic designer for every PowerPoint presentation you make, every chart you draw, every web page you create, every blog post you write? Those are all user interfaces. Many interactions and communications in life have a user interface, and many of them are up to you to do-it-yourself. So you should know when to leave it to the experts, but you should be able to do a creditable job yourself too, when the job is yours to do. 

# Simplicity
Strive for simplicity

- Reduce features and data displayed
- Regularize visual properties that aren’t important
- Make elements perform double-duty


# Contrast

## Array of colored letters

Ask these questions:

find all the letters on the left edge of the page (position)
find all the red letters (hue)
find all the K’s (shape)
Which of these questions felt easy to answer, and which felt hard? The easy ones were selective visual variables.

## Visual variables in text
upper left (boldface = value) and lower right (size) pop out. upper right (different font face) and lower left (italics) don’t. They rely too strongly on shape.

## My Movies
Gestalt grouping reduction technique

## Hong Kong Cafe
contrast: does important information pop out? are hours easy to read?

## Search engine results
Here’s another example showing how redundant encoding can make an information display easier to scan and easier to use. Search engine results are basically just database records, but they aren’t rendered in a simplistic caption/field display like the one shown on top. Instead, they use rich visual variables – and no field labels! – to enhance the contrast among the items. Page titles convey the most information, so they use size, hue, and value (brightness), plus a little shape (the underline). The summary is in black for good readability, and the URL and size are in green to bracket the summary.

Take a lesson from this: your program’s output displays do not have to be arranged like input forms. When data is self-describing, like names and dates, let it describe itself. (This is yet another example of the double duty technique for achieving greater simplicity – data is acting as its own label.) And choose good visual variables to enhance the contrast of information that the user needs to see at a glance.


# Video Break
Hans Rosling's Gapminder

Brief overview of Infoviz: definition and goals

# Layout

get these on the board in the course of critiquing examples

- Grouping and hierarchy
- Whitespace (not covered)
- Balance and symmetry (not covered)
- Alignment and grids

## Whitespace

## Balance & Symmetry

Asymmetric typography

1) feels more dynamic (energy to the type),  2) don’t have difficult to read narrow columns around the figures.

# Diff with Reading

Visual Design: removed some examples and added them to slides

Layout: removed whitespace

# Post Class Notes

- Exercises each need 10+ minutes. They are good exercises. Asking students to submit their screenshots to Piazza is much better than asking them to submit code.

- Too much content in the slides. Need to cut down some of the examples.

- Balance + asymmetry should be mentioned together. Balance doesn't mean perfect symmetry. At least not in the modern design world.

- Refs
	- https://en.wikipedia.org/wiki/Principles_of_grouping
	- https://cacm.acm.org/magazines/2011/4/106586-design-principles-for-visual-communication/fulltext

- Consider showing Maneesh's map redraw research


