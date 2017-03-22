# 06-Safety

# Recap
- DP1 quick udpate

# Admin
- nanoquiz: shoutkey.com/
- try, pair, share as one activity design pattern. also look into Weiman active learning process


# UI HOFS
- Google Calculator


Many of the buttons on both calculators are cryptically worded (recognition, not recall). MC, MR, MS, and M+? What’s CE? My first guess was that CE meant “Clear Error” (for divide-by-zero errors and the like); some people in class suggested that it means “Clear Everything”. In fact, it means “Clear Entry”, which just deletes the last number you entered without erasing the previous part of the computation. “C” actually clears everything.

It turns out that both interfaces also let you type numbers on the keyboard, but the interface doesn’t give a hint (affordance) about that possibility. In fact, in a study of experienced GUI users who were given an onscreen calculator like this one to use, 13 of 24 never realized that they could use the keyboard instead of the mouse (Nielsen, Usability Engineering, p. 61-62). One possible solution to this problem would be to make the display look more like a text field, with a blinking cursor in it, implying “type here”.

This is the Google calculator (enter calculator in google search)

Summary
-- Many strange mode issues
-- Can’t easily reset state
-- Potential for errors: 

enter: 1 EXP - 100
compare to 1e - 100


Many very strange things

- Ans seems to be a variable holding the last answer; when you first press 1 say, you see a message “Ans = 0”!
- Skeumorphic radian/degrees is very odd; note half hearted typographic distinction
- exponent appears as E when you type it in, but then turns to “e” when negative; also a key marked e
- when you click on Ans, it inserts the string “Ans”
- AC/CE is modal: you can’t do an all clear in the middle of a computation!
- can’t press AC twice! can’t clear Ans
- Ans is only the last answer: you can read it but not write it: cf CRUD
- Inv is a mode switch, but it looks like all the other buttons!
- What is Rnd?

Some nice things
- operators like log aren’t postfix
- shows formula after and during; why not show parens in after view?


# Nanoquiz


# Kind of Error
- slips (capture, description, mode), lapses, mistakes

While going through the examples, put up on the board the root causes of error:

- similarity
- very frequent (habitual, automatic)
- very rare (mode)
- inattention


- Stata trash chutes: description
	- Write “similarity” and “inattention” on the board

- You type into your text editor, and your typing is overwriting what you have there. Mode error: insert mode is off. Overwrite mode is very rarely needed, and has very poor visibility
	- Write “low frequency” and reinforce “similarity” on the board.

- rm command example: Description, Possibly mode
	- Reinforce “similarity” (of keystrokes) and “inattention” (to display) on the board

- git command example
	- suppose your error is omitting the git push at the end; what is that?  lapse
	- Write down inattention, add distraction
	- can actually forget lots of these steps – what if you forget git add?  git commit?  git push?
	- emphasize similarity of all the states after "type text into editor", since they're command line and hence invisible



# Preventing Errors

Write on board general ways to prevent error:

- simplify
- confirmation (but only if rare, nonundoable, dissimilar, 
focus attention)
- Undo = user control



- Dropbox prevents all these errors, but it still has a problem: forgetting to File/Save.  How do we deal with that?  A confirmation dialog.  Some people chunk that confirmation dialog with exiting.  That's how they save!  (Personally I chunk File/Save with type text into editor.  I type some text and then I Cmd-S.  Always.  Save is how I finish a thought.)

- Github confirmation dialog example
	- emphasize when to use confirmation dialogs:
		- rare
		- catastrophic (really can't undo)
		- make dissimilar
		- draw attention

- Oil tanker example
	- This example comes from the great book Set Phasers on Stun by Steven Casey, about accidents and human error.  An oil spill was caused by a helm lever on an oil tanker.  The lever had three positions: Autopilot – Manual – Disconnected.  In a tight passage off English coast, trying to maneuver in a narrow channel with fishing boats, the captain accidentally pushed the lever too far – past Manual to Disconnected.  Since the supertanker turned very slowly anyway, the crew didn’t realize at first that they weren’t turning at all.  Even then, they had so many other hypotheses for why the helm wasn’t responding (burned-out fuse, interconnect problem, etc.) that they didn’t think of the lever. The tanker hit the rocks, and a large oil spill resulted.
	- What went wrong here?  How might we design the UI better?


# Undo
Write on board major kinds of undo

- cancel, exit, escape
- CRUD (Update and Delete are critical)
- direct manipulation reversibility
- undo history

## Mental Models
- Unit of undo: everything? model? view?
- CRUD with slide
	- When you make a new slide in PowerPoint, you have to choose a layout. What if this was actually the class of the slide object internally?  What if the UI didn't let you change your decision?
	- CRUD (particularly the U and D) are a kind of forward undo – correcting a mistake by issuing additional commands instead of changing history

- After discussing the undo history exploration, emphasize that the mental model for undo is actually tricky, and lead into the alternative takes on Undo that Adobe has (the next 3 examples)

## Activity
- 5 mins
## Undo variants
- In Photoshop, you can do the usual stepping backward and forward in history. You can also mark a point in the past for the “history brush” and paint in what it was like then.
- Lightroom includes view changes in its undo model – note the Undo Go To Next Photo.  So Cmd-Z actually backs up. Web browsers don't do this.  The Back history is completely different from the page's textbox editing history.



# Video Break
- Chronicle
	- Play mode with video overlay
	- Rich document editing history helps people "learn", even from other people's history

# Error Messages
Write down good attributes

- polite, non-blaming
- precise
- speaks user’s language
- restates the input
- suggests how to fix

## Activity
- 5 mins

# Usability Wrapup
- Understanding these dimensions matters, because that's how we'll build technology that adapts to people, not the other way around.

# Diff with Reading
Removed undo
Removed user control and freedom

# Post Class Notes
- Time worked out quite well
- Looking at the error message activity results together with class was quite interesting and engaging
- Writing down the main dimensions on the board is a good idea.
	- especially for the error messages, students actively participated.
	



