# 16-Input




# Recap

# Admin
- nanoquiz: shoutkey.com/funny



# UI HOFS
Our Hall of Fame or Shame candidate for today is the command ribbon, which was introduced in Microsoft Office 2007.  The ribbon is a radically different user interface for Office, merging the menubar and toolbars together into a single common widget.  Clicking on one of the tabs (“Home”, “Insert”, “Page Layout”, etc) switches to a different ribbon of widgets underneath.  The metaphor is a mix of menubar, toolbar, and tabbed pane.  Notice how UIs have evolved to the point where new metaphorical designs are riffing on existing GUI objects, rather than physical objects.  Expect to see more of that in the future.

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

