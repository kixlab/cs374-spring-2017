# 10-UI SW Architecture


# Recap


# Admin
- nanoquiz: shoutkey.com/
- Essay Placement Test: Can we move the studio to 6:45?

# UI HOFS

## Alt-Tab

Today’s candidate for the Hall of Fame & Shame is the Alt-Tab window switching interface in Microsoft Windows. This interface has been copied by a number of desktop systems, including KDE, Gnome, and even Mac OS X.

For those who haven’t used it, here’s how it works. Pressing Alt-Tab makes this window appear. As long as you hold down Alt, each press of Tab cycles to the next window in the sequence. Releasing the Alt key switches to the window that you selected.

The first observation to make is that this interface is designed only for keyboard interaction. Alt-Tab is the only way to make it appear; pressing Tab (or Shift-Tab) is the only way to cycle through the choices. If you try to click on this window with the mouse, it vanishes. The interface is weak on affordances, and gives the user little help in remembering how to use it.

But that’s OK, because the Windows taskbar is the primary interface for window switching, providing much better visibility and affordances. This Alt-Tab interface is designed as a shortcut, and we should evaluate it as such.

It’s pleasantly simple, both in graphic design and in operation. Few graphical elements, good alignment, good balance. The 3D border around the window name could probably be omitted without any loss.

This interface is a mode (since pressing Tab is switching between windows rather than inserting tabs into text), but it’s spring-loaded, happening only as long as the Alt button is held down.

Is it efficient? A common error, when you’re tabbing quickly, is to overshoot your target window. You can fix that by cycling around again, but that’s not as reversible as just moving backwards with a mouse. (You can also back up by holding down Shift when you press Tab, but that’s not well-communicated by this interface, and it’s tricky to negotiate while you’re holding Alt down.)

DNJ’s comments: * Learnable? Yes, once you discover the magic initial key combo; most non-CS users have not found this and do much less efficient things (like moving windows away) * Efficient? very! note especially that you can use mouse pointer and cursor keys (but Rob’s notes say you can’t do this in Windows) * Safe? Yes, because very immediate feedback, and hard to cause problems

Juho’s comments: * Ordering of the tabs apparent? What’s the system model here? Most recently accessed window first. What do you think users’ conceptual model is? How many of you had to browse back and forth N times when transitioning between more than three windows? * Alt-shift-tab: holding two keys down is not learnable. Using the Shift key as “backward” operation: is this a consistent across other applications? Where else do we see this? How many people knew that Shift-Tab lets you move back to the previous item in a form?

## Exposé
For comparison, we’ll also look at the Exposé feature (now called Mission control) in Mac OS X. When you push F3 on a Mac, it displays all the open windows – even hidden windows, or windows covered by other windows – shrinking them as necessary so that they don’t overlap. Mousing over a window displays its title, and clicking on a window brings that window to the front and ends the Exposé mode, sending all the other windows back to their old sizes and locations.

Like Alt-Tab, Exposé is also a mode. Unlike Alt-Tab, however, it is not spring-loaded. It depends instead on dramatic visual differences as a mode indicator – with its shrunken, tiled windows, Exposé mode usually looks a lot different than the normal desktop.

To get out of Exposé mode without choosing a new window, you can press F9 again, or you can click the window you were using before. That’s easier to discover and remember than Alt-Tab’s mechanism – pressing Escape. When I use Alt-Tab, and then decide to abort it, I often find myself cycling through all the windows trying to find my original window again. Both interfaces support user control and freedom, but Exposé seems to make canceling more efficient.

The representation of windows is much richer in Exposé than Alt-Tab (at least on Windows XP). Rather than Alt-Tab’s icons (many of which are identical, when you have several documents open in the same application), Exposé uses the window itself as its visual representation. That’s much more in the spirit of direct manipulation. (The version of Alt-Tab included in Windows Vista now shows images of the windows themselves – try it!)

Let’s look at efficiency more deeply. Alt-Tab is a very linear interface – to pick an arbitrary window out of the n windows you have open, you have to press Tab O(n) times. Exposé, on the other hand, depends on pointing – so because of Fitts’s Law, the cost is more like O(log n). (Of course, this analysis only considers motor movement, not visual search time; it assumes you already know where the window you want is in each interface. But Exposé probably wins on visual search, too, since the visual representation shows the window itself, rather than a frequently-ambiguous icon.)

But Alt-Tab is designed to take advantage of temporal locality; the windows you visited recently are at the start of the list. So even if Exposé is faster at getting to an arbitrary window, Alt-Tab really wins on one very common operation: toggling back and forth between two windows.

## DNJ’s comments:

Learnable? Yes, once you discover the magic initial key combo— Efficient? no: only pointing works; I personally don’t find that images of docs help (and may hinder because of cognitive overload); F3 button too small on Mac (although control up arrow works too, but I didn’t know this until I checked); not so good to bind your own keyboard shortcut— Safe? I hate hot corners

## Juho’s comments:

Multiple windows cascaded: Is the model clear to the user? Is the selection efficient? Also, visual summary may not be sufficient for multiple windows in a single application because they may be visually similar.

Dragging a window: window becomes smaller if you drag near the “desktop” spaces at the top of the screen. This is to create a sense of 3D. The current desktop is zoomed in, and there are other desktops shown with small icons at the top. You can drag windows to a different desktop. Is this clear?

Placement of the window may be arbitrary.

# Nanoquiz


# View Tree

## View tree illustration
- It’s as if there’s an empty panel/canvas, and you keep on stacking / glueing visual elements. This analogy conveys a hierarchical structure.
- It’s more common that the leaves of the trees are what the user sees.
- Intermediate nodes often serve as containers.

## View tree in HTML
Show the Chrome Inspector inside a Twitter search result page.

https://twitter.com/search?q=boston%20snow&src=typd&mode=photos

## What’s the tree-relationship used for?
- Semantic structure is represented
- More information about the content structure represented in the tree, so that GUI implementation techniques can leverage this information.
- With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
- With capturing, the event is first captured by the outermost element and propagated to the inner elements.


# Video Break


# Activity: todomvc

It uses localstorage to remember your history, but there’s no server-side.

- Q1 (2 mins for self, 5 mins for group activity, 5 mins discussion)
- Data: List of todo items item: text, isDone Number of items remaining Number of items completed

View: checkbox text element destroy number/id complete count display remaining count display add new item textbox

Controller events: enter on new-todo (addToModel(event, not completed) listener: click on destory (removeFromModel events: click on clear completed

‘keypress #new-todo’: ‘createOnEnter’, ‘click #clear-completed’: ‘clearCompleted’, ‘click #toggle-all’: ‘toggleAllComplete’

# Diff with Reading


# Post Class Notes



