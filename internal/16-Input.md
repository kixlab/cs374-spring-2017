# 16-Input




# Recap

# Admin
- nanoquiz: shoutkey.com/funny



# UI HOFS
Our Hall of Fame or Shame candidate for today is the command ribbon, which was introduced in Microsoft Office 2007.  The ribbon is a radically different user interface for Office, merging the menubar and toolbars together into a single common widget.  Clicking on one of the tabs (“Home”, “Insert”, “Page Layout”, etc) switches to a different ribbon of widgets underneath.  The metaphor is a mix of menubar, toolbar, and tabbed pane.  Notice how UIs have evolved to the point where new metaphorical designs are riffing on existing GUI objects, rather than physical objects.  Expect to see more of that in the future.Needless to say, strict external consistency has been thrown out the window – Office no longer has a menubar or toolbar.  But if we were slavishly consistent, we’d never make any progress in user interface design.  Despite the radical change, the ribbon is still externally consistent in some interesting ways, with other Windows programs and with previous versions of Office. If you look carefully at the interface, they are consistent in some important ways: (1) critical toolbar buttons still look the same, like Save, Cut, Copy, and Paste; (2) the command tab buttons resemble menubar menus, in both location and naming; (3) the ribbons look and act like rich toolbars, with familiar widgets and familiar affordances.  So even though some new learning has to happen for Office 12 users, the knowledge transfer from other apps or previous Office is likely NOT to be substantial.One thing Office 12’s developers did very effectively is task analysis.  In fact, they signed up thousands of Office users to a special program that collected statistics on how frequently they used Office commands and in which order – huge amounts of data that directly drove how commands were grouped into the command tabs, and which commands appear on command tabs as opposed to being buried in deeper dialogs.  When a user interface designer can get this kind of data, you can do a lot to improve the usability for an average user.  Web site designers are lucky, in this sense, because server logs give it to them for free!  Microsoft had to do a lot more work to get it.Office 2007 also provides more feedback about what a command will do, by showing a preview of its effect right in the document while you’re mousing over the command.  So if you hover over the Heading 2 option, your document will reformat to show you what the selection would look like with that new style.  As long as your computer is fast enough to do it within 100ms, this would be a tremendous improvement to the visibility and feedback of the interface.

# Nanoquiz


# Q1: Mouse Input

Have students answer the clicker question first (20 seconds), then discuss and try it

What do you get when you double click on A?

Followup questions for discussion + When does pressing down on A fail to produce a click event? + When does two clicks on A fail to produce a double-click event?

# Q2: Keyboard Input

Again, have students answer the clicker question first (20 seconds), then discuss and try it

What event sequence do you expect from typing a capital A?

Followup questions for discussion + What buttons on your keyboard don’t produce press events? + What buttons on your keyboard don’t produce down/up events at all?

If you hold down a letter key, what events do you expect to see?

Interesting keys to press: + Tab (there’s no key up event since a different component receives focus + Caps Lock (key down and up events are toggled) + Shift + Laptop keys for controlling volume and brightness

# Q3: Event Propagation

Again, have students answer the clicker question first (20 seconds), then discuss and try it

What event sequence do you expect from clicking D?

Answer: + D got mousedown over D + C got mousedown over D + D got D mouseup + C got D mouseup

What event sequence do you expect from:

click down and hold on C
move the cursor to D
release the mouse button while over D
Answer:

C got C mousedown
D got D mouseup
C got D mouseup



# Click Event Object
https://developer.mozilla.org/en-US/docs/Web/Events/click


# Mouse Capture

Without mouse capture, scrollbars are steering tasks.

Demonstrate with PowerPoint that the mouse can veer out of the scrollbar and it will keep tracking.

Then demonstrate with http://jqueryui.com/slider that mouse capture fails when you leave that iframe (above the slider) but works when you stay in the iframe (below the slider).

This is a common way that reimplementations of scrollbars get it wrong.

# Mouse Coalescing

Explain how sleep() works.

Have students try the mouse coalescing.


# TUI

## I/O Brush
https://www.youtube.com/watch?v=LE6ibwYlGtg

## Tangible Bits / metaDesk
https://vimeo.com/44545109

## DataTiles
https://www.youtube.com/watch?v=UfKfJs3QPeQ

## Illumiroom
https://www.youtube.com/watch?v=re1EatGRV0w

## Discussion
UI considerations for TUI

Difficulties of introducing new I/O device or framework


# Diff with Reading



# Post Class Notes


