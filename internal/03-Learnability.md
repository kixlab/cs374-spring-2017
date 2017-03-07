# 03-Learnability Part 1

# Recap
- Design thinking workshop, questions to think about
	- not a good idea to actually ask them, because it's been a while and students probably all embraced the idea through the workshop. No need to over-impose the lessons.
	- good to simply go over the points in the question.


# Admin
- First time to class? If you haven't signed up, you should talk to me after class.
- Nanoquiz code instruction: small case
- Team formation overview



# UI HOFS (1:11)
Award Template selection interface

## 1st screen
This dialog box, which appeared in a program that prints custom award certificates, presents the task of selecting a template for the certificate.  
This interface is clearly graphical.  It’s mouse-driven – no memorizing or typing complicated commands.  It’s even what-you-see-is-what-you-get (WYSIWYG) – the user gets a preview of the award that will be created.  

So why isn’t it usable?
- the long help message on the left side.  Why so much help for a simple selection task?  Because the interface is bizarre!  
- The scrollbar is used to select an award template. Each position on the scrollbar represents a template, and moving the scrollbar back and forth changes the template shown.
This is a cute but bad use of a scrollbar. Notice that the scrollbar doesn’t have any marks on it.  How many templates are there?  How are they sorted?  How far do you have to move the scrollbar to select the next one?  You can’t even guess from this interface.

## 2nd screen
Normally, a horizontal scrollbar underneath an image (or document, or some other content) is designed for scrolling the content horizontally. A new or infrequent user looking at the window sees the scrollbar, assumes it serves that function, and ignores it.  Inconsistency with prior experience and other applications tends to trip up new or infrequent users.
Another way to put it is that the horizontal scrollbar is an affordance for continuous scrolling, not for discrete selection. We  see affordances out in the real world, too; a door knob says “turn me”, a handle says “pull me”.  We’ve all seen those apparently-pullable door handles with a little sign that says “Push”; and many of us have had the embarrassing experience of trying to pull on the door before we notice the sign.  The help text on this dialog box is filling the same role here.
But the dialog doesn’t get any better for frequent users, either.  If a frequent user wants a template they’ve used before, how can they find it?  Surely they’ll remember that it’s 56% of the way along the scrollbar? This interface provides no shortcuts for frequent users.  In fact, this interface takes what should be a random access process and transforms it into a linear process.  Every user has to look through all the choices, even if they already know which one they want.  The computer scientist in you should cringe at that algorithm.
Even the help text has usability problems.  “Press OKAY”?  Where is that?  And why does the message have a ragged left margin?  You don’t see ragged left too often in newspapers and magazine layout, and there’s a good reason.
On the plus side, the designer of this dialog box at least recognized that there was a problem – hence the help message.  But the help message is indicative of a flawed approach to usability.  Usability can’t be left until the end of software development, like package artwork or an installer.  It can’t be patched here and there with extra messages or more documentation.  It must be part of the process, so that usability bugs can be fixed, instead of merely patched.
How could this dialog box be redesigned to solve some of these problems?



## 3rd screen
Here’s one way it might be redesigned.  The templates now fill a list box on the left; selecting a template shows its preview on the right.  This interface suffers from none of the problems of its predecessor: list boxes clearly afford selection to new or infrequent users; random access is trivial for frequent users.  And no help message is needed.



# Nanoquiz (1:18)



# Learning Approaches (1:21)

## Stata trash chutes
Ask students how they might learn to use this UI.

They are usually goal-directed &mdash; they have a goal of throwing out their trash while they're walking from place to place.

People don't usually read directions &mdash; they just go by muscle memory. Maybe they will read these directions if they're conscientious.

What is the cost of failure here?

What's a better design? ONE chute for everything. What are the tradeoffs of that design?

- how would you learn to use those trash chutes?
- what's the most common use case in using this UI? goal-directed!
- learnability issues? what makes it easy or hard to learn?
- better design?

## Stata mail chutes
No, these are actually mail chutes, but people might be used to them being trash chutes!
People don't read directions.

- Why do you think this confuses people? So close to the trash chutes. You have to consider the surroundings and external consistency between different design elements.

- How do people learn to use these chutes? If not instructions, what is it?
	- Learn by doing
	- Learn by watching
	- Learn by seeking help

Social learning is really powerful.


## Japanese trash cans
- interesting design from Japan. Good use of redundant graphical labels both on top (for adults) and also low (for short people such as children, or people in wheelchairs). Large, simple, abstract images. Different holes for different types of waste. (example by Philip Guo)


- graphical labels both on top and front. why?
- different holes for different types of trash.
- better affordance.

learnability trends

- no more long manuals
- more contextual
- more personalized
- frequent, immediate feedback
- more social (by other users)
- more fun / gamification

"learning" is not the user's goal.
Their goal is to complete their task at hand succesfully, hopefully with less time and pain.

Learning by doing is natural and powerful.

With examples and contextual tasks, you're much more likely to be more engaged and understand better.

That's what we're trying to do in this class as well. Just doing the reading and listening to instructors talk will not get you there. We want you to try to design various interfaces, fail as much as possible, and learn how to do it better. That's another reason we do many interactive activities in class.


# Interaction Styles 
## Forms
https://www.aa.com/homePage.do?locale=en_US

- live demonstration and discussion

- learnability: knowledge in the world vs head? pre-filling with your location/time
     - why auto-complete and pre-populating good? likely to align with your goal, requires knowledge in the head transfer, example already provided
- safety: error message isn't immediate, lacks reason and suggestions for fixes
- efficiency: expert interface? 3-character code for expert users

## Direct Manipulation: Google streetview 
- 3 mins alone, 3 mins discussion

The Street View feature of Google Maps is a great example of direct manipulation in an interface. The interface allows the user to either click or click-drag to change their perspective and location in Google Maps. The interactive map gives the user a continuous visual representation of geographical data that responds rapidly, visually, and incrementally to physical mouse movements.

- continuous visual representation: image stitching, sometimes awkward but mostly doesn't matter to much (for user's goal)
- physical actions
- rapid response
- incremental response
- reversible?

- 3D interaction is hard: when you drag, should it look up or move forward? Many FPS games have this challenge.
- left, right arrow not quite clear: probably okay because precision is not the most important goal for many (casual exploration not really getting highly accurate images)



# Video Break
Xerox Star
- discuss some learnability breakthroughs and issues
- seeing and pointing vs reading and remembering



# Conceptual Models 

## Mental Model
Conceptual model of a system = a representation of the parts of a system and how they work together

The interface model is crucial in building a user's mental model.



## Examples of mental models
- examples where products / interfaces try to push for a new model

Example: compare friends lists in Facebook and Twitter: Facebook has one list, Twitter has two lists (Follows and Following)


- Gmail: archiving vs trashing. How many of you use gmail? How many of you trash? How many of you archive?
- Dropbox: desktop file management + cloud
- Github: distributed version control

## Back vs Previous

Here’s an example drawn directly from graphical user interfaces: the Back button in a web browser. What is the model for the behavior of Back? Specifically: how does the user think it behaves (the mental model), and how does it actually behave (the system model)?

The system model is that Back goes back to the last page the user was viewing, in a temporal history sequence.

But on a web site that has pages in some kind of linear sequence of their own–such as the result pages of a search engine (shown here) or multiple pages of a news article–then the user’s mental model might easily confuse these two sequences, thinking that Back will go to the previous page in the web site’s sequence. In other words, that Back is the same as Previous! (The fact that the “back” and “previous” are close synonyms, and that the arrow icons are almost identical, strongly encourages this belief.)

Most of the time, this erroneous mental model of Back will behave just the same as the true system model. But it will deviate if the user mixes the Previous link with the Back button–after pressing Previous, the Back button will behave like Next!

A nice article with other examples of tricky mental model/system model mismatch problems is “Mental and conceptual models, and the problem of contingency” by Charles Hannon, interactions, November 2008.



## Thermostat activity 
- 3 mins alone, 5 mins sketching


Walk around and take photos of interesting examples with a cell phone

It would be great to connect phone display to the laptop using Reflector (app for screencasting iPhone -> Mac) and AirPlay.  Unfortunately the MIT wifi network blocks using AirPlay.

Alternatively, use AirDrop or the webcam on your laptop to take a photo of student activity submissions

At the end of the exercise, discuss a few examples with class: peer feedback and design critique


## Nest example (skipped)
Internals are much more complex, but the interface model does a great job of abstracting out, so that the user model is simplified.

## Thermostat discussion (skipped, Piazza)

- challenge: immediate feedback is not possible for temperature (direct manipulation)
- ideally, you indicate your desired temperature, and the room instantly gets to that temperature.

Student examples

- IMG_1386.JPG: Clever idea of using the thermometer as a metaphor. Shows the current and target temperature.
- IMG_1387.JPG: Explicit textual description of what's happening in the system.
- IMG_1388.JPG: Big ON/OFF button is an attempt to making the switching model obvious, but not necessarily effective.


Underlying technology, even for the same task, matters.

- Design of the player should be consistent and different at the same time.
- When a new technology is coupled with a great UI that aligns with its properties, the benefits maximize.

Cognitive load is something you have be aware of all the time

- when we say usable, intuitive, easy-to-use interfaces, it often means it's designed so that users can complete the task at hand with lower cognitive load.



===

# Diff from MIT Reading
- removed some of the examples for in-class coverage



# Post Class Notes
- Time-wise it was fine.
- Many students didn't get the thermostat exercise. Might need a better example, or give better instruction.
- Prepare scratch paper to all classes