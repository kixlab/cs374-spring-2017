# 05-Efficiency

# Recap


# Admin
- nanoquiz: shoutkey.com/clean


- no late submission for team project milestones
- feedback / confirmation on the initial problem: will be sent by your mentor TA individually
- group on Piazza will be created

- 전산학부 MT, 행사 소개


# UI HOFS

This message used to appear when you tried to delete the contents of your Internet Explorer cache from inside Windows Explorer (i.e., you browse to the cache directory, select a file containing one of IE’s browser cookies, and delete it).Put aside the fact that the message is almost tautological (“Cookie… is a Cookie”) and overexcited (“!!”).  Does it give the user enough information to make a decision?
(1) Message when use Windows Explorer to delete IE cache

  * browse to the cache directory
  * select a file containing one of IE's browser cookies,
  * delete it.
  * enough information for user to decide?

Suppose selected all your cookie files and delete. You get one dialog for every cookie you tried to delete!  

(2) What button is missing? Yes to all 

(3)
  * short-circuit questions by blanket answer.  
  * helpful shortcut improves efficiency

Not a panacea. 

  * dialog is from Microsoft's Web Publishing Wizard, 
  * uploads local files to a remote web site.  
  * usually develop complete local copy, and then upload 
  * so the wizard suggests deleting orphan files on host
  * what if want to keep some file?
  * What would you have to do?

Aggregate many related questions in one dialog

*  Provide a list of the files, 
*  ask the user to select which ones should be deleted.  
*  Select All and Unselect All buttons serve as Yes to All and No to All.

(4) Eclipse does it right

*  Small flaw: initially doesn't show the filenames, just their count
*  press Details to see the whole dialog box. 
*  Counting files rarely enough information to decide 
*  most users are likely to press Details anyway.


# Nanoquiz


# Part 1

## Shortcuts

* aggregation
* autocomplete
* pending delete
* defaults
* history
* anticipation

Covered by HOFS mostly, so don't spend extra time on this. Make sure some of these techniques are actually brought up and discussed in the HOFS.


## Bubble Cursor
http://ieor.berkeley.edu/~anandk/bubbleCursor.html
https://www.youtube.com/watch?v=JUBXkD_8ZeQ

How does this technique improve efficiency?

- S is not affected, but D is dramaticaly reduced.



# Video Break
Supple: Automatic Generation of Personalizable User Interfaces

- https://www.youtube.com/watch?v=B63whNtp4qc


- alternatively: from Krzysztof's Harvard talk: https://www.youtube.com/watch?v=QEh8S7A4Cuc
	- 7:00 - 9:30 (user context), 16:54 - 19:30 (interface demo)

- in the middle, mention cost(interface) = time
	- how quickly the user can perform a selection task
- also mention the calibration phase of asking users to perform simple tasks (pointing, selection, etc.)
- explore the large design space of possible interfaces and pick an "optimal" one


# Part 2


## KLM Modeling
https://kixlab.org/courses/hci/activities/klm/klm.html

* predictive evaluation: predict performance without building prototype

Whole class

- who were faster than prediction? slower? why?
- what does this tell us about the "modeling" approach?
	- strong assumption about the user: originally expert users (Card et al.) who are likely to have specific cognitive processes in performing simple text editing tasks.

Notes
- Students asked about where to insert M.
- Make sure to live test it on the server. Some students had "unsafe JavaScript" error in Chrome, due to https vs http mismatch.

  
## Lab in the Wild
Brief note on large-scale experimentation, beyond lab studies. 
- Pros: large, diverse user population
- Cons: noise in the data, scientific validity
- How to attract such a large group of volunteers? Gamification & social comparison. There were some "aha"s in the class when I mentioned "age guessing game".


# Diff with Reading
- removed chunking: move to human abilities

# Post Class Notes

- GOMS, KLM, and Fitts' Law probably should be covered in a single class
- Fitts' law introduced before talking about MHP / Human Information Processing Model. Make sure to fit this in first. Perceptual fuison is also mentioned in the Fitts law part.
- In the reading, students have provided some photos and references. Go over them all.