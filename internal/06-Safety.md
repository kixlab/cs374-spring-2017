# 06-Safety

# Recap


# Admin
- nanoquiz: shoutkey.com/
- try, pair, share as one activity design pattern. also look into Weiman active learning process


undo models: cress
error message: think

# UI HOFS


# Nanoquiz


# Part 1
Designing cancel and undo
Wizard vs center stage


# Video Break


# Part 2


# Diff with Reading
Removed undo
Removed user control and freedom

# Post Class Notes




===

Hall of Fame/Shame
Today’s candidate for the Halls of Fame and Shame is a tale of two calculators.

The left calculator is at www.online-calculator.com. It looks and works just like a familiar desk calculator, a stable interface that many people are familiar with. It’s a familiar metaphor, and trivial for calculator users to pick up and use.

But adheres to its metaphor so carefully that it passes up some tremendous opportunities to improve on the desk calculator interface. Why only one line of display? A history, analogous to the paper tape printed by some desk calculators, would cost almost nothing. Why only one memory slot? Why display “M” instead of the actual number stored in memory? All these issues violate the visibility of system state.

A more serious violation of the same heuristic: the left calculator actually has invisible modes. When I’m entering a number, pressing a digit appends it to the number. But after I press an operator button, the next digit I press starts a new number. There’s no visible feedback about what low-level mode I’m in. Nor can I tell, once it’s time to push the = button, what computation will actually be made.

The right calculator is Google’s calculator, which you can get by searching for “calculator“ in Google. It does much better with the hidden modes.

Many of the buttons on both calculators are cryptically worded (recognition, not recall). MC, MR, MS, and M+? What’s CE? My first guess was that CE meant “Clear Error” (for divide-by-zero errors and the like); some people in class suggested that it means “Clear Everything”. In fact, it means “Clear Entry”, which just deletes the last number you entered without erasing the previous part of the computation. “C” actually clears everything.

It turns out that both interfaces also let you type numbers on the keyboard, but the interface doesn’t give a hint (affordance) about that possibility. In fact, in a study of experienced GUI users who were given an onscreen calculator like this one to use, 13 of 24 never realized that they could use the keyboard instead of the mouse (Nielsen, Usability Engineering, p. 61-62). One possible solution to this problem would be to make the display look more like a text field, with a blinking cursor in it, implying “type here”.

Nanoquiz
Kinds of errors
While going through the examples, put up on the board the root causes of error:

similarity
very frequent (habitual, automatic)
very rare (mode)
inattention
Preventing errors
Write on board general ways to prevent error:

simplify
confirmation (but only if rare, nonundoable, dissimilar, focus attention)
Undo = user control
Write on board major kinds of undo

cancel, exit, escape
CRUD (Update and Delete are critical)
direct manipulation reversibility
undo history
After discussing the undo history exploration, emphasize that the mental model for undo is actually tricky, and lead into the alternative takes on Undo that Adobe has (the next 3 examples)

Error messages
While critiquing the messages, write on the board the key ideas:

polite, non-blaming
precise (or as precise as possible)
speaks user’s language
restates the input
suggests how to fix
… so that we’re ready for the final exercise