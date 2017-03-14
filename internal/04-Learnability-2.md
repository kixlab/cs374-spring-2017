# 04-Learnability Part 2


# Recap
- Learning Approaches
- Interaction Styles
- Conceptual Models


# Admin (1:03, 2m)
- nanoquiz: shoutkey.com/squeal
- Don't forget to write down the nanoquiz Shoutkey on the board.
- For activities, Shoutkey links should stay on the slide.
- Team formation


# UI HOFS: RealCD (1:05, 7m)

## RealCD home view
- How is a metaphor used here?
- Player uses a CD case, not a CD player as a metaphor. why is this problematic?
- What's tricky about metaphors is that sometimes it's not clear to what extent the interface follows the rules of the original object.
- What would you hope to do with a real CD case?
- One of the metaphors: It's a CD case so you can open it. How do you open it?
- Why use green light to turn off the interface?

## Opened view
- Playmode options: disabled buttons
- Volume: shift up and down, not left and right as shortcut
- What other information did it lose with this "creative" scrollbar? Where you are.
     - scrolls one track at a time. not paginated!
- Green dots: disable a track. Somewhat consistent with the power off button.

- Bullets to the right of track names: reordering control
- Track names are editable
- Help book: when you open it, now the interface has three sides open.

## Mouse over
- What makes it so hard to learn?
- They are professional designers. They must have thought this was a great idea. What do you think that idea was?
- Hope: transfer real-world knowledge into a computer representation.


# Nanoquiz (1:12, 4m)


# Consistency and Metaphor 

## Metaphor (1:16, 3m)
Amazon's Kindle e-book reader

- What is the metaphor here? Physical book
- How does this metaphor break down? How is it enhanced?
- How is it better than a physical book? How is it worse?
- What kinds of affordances are there?

- desktop: very successful, everyone knows it, now it's not really a metaphor anymore.

- for metaphors that are outdated, what do we do? e.g., call icon, floppy disk icon, even camera icon


## Skeuomorphism (1:19, 3m)
- form of metaphor
- pros: good learnability, familiarity, visually pleasing
- cons: too much unnecessary visual detail, awkward, metaphor breaks at some point anyway

## Activity: Kinetic Scrolling (1:22, 7m)

Law of physics in interfaces: motion and touching

- consistency between real-world vs GUI experience
- gaining popularity with touch devices and skeuomorphism
- swiping behavior in a touch device: natural deceleration
- discuss other physics-inspired interface widgets

## Design Guidelines & External Consistency (1:30, 2m)

- Material design by google
- style guides by many big product companies
- why?
- across various products within and across the entire ecosystem
- Efforts to maintain consistency across multiple apps


# Affordance

## Examples (1:32, 5m)
1) Hello, computer (Star Trek 4): http://youtu.be/LkqiDu1BQXY?t=1m4s
THERE’S that memorable scene in 1986’s Star Trek IV: The Voyage Home where the crew of the starship Enterprise has travelled back in time from the 23rd to the 20th century. Chief Engineer Scotty (James Doohan) attempts to use a Macintosh.
 
Facing the screen, he speaks to it (of course): “Computer? … Computer!”
 
His crewmate Dr ‘Bones’ McCoy (DeForest Kelley) looks as puzzled as him, then notices the mouse, which he hands over to Scotty. Scotty goes, “Ah!”, then speaks into the mouse, “Hello, computer.”
 
It doesn’t work. The 20th century engineer they’re trying to impress says, “Just use the keyboard” to which Scotty responds, “Keyboard. How quaint.” 

2) Baby swiping a magazine like a book: https://www.youtube.com/watch?v=aXV-yaFmQNk

- knowledge in the world is different
- learned to interact with touchscreen devices before interacting with paper books.
- Implication: keep in mind your target users. They are not you. What "you" believe to be consistent, good feedback, and metaphors might just not work.
- What's our solution then? Learn from users. Observe them. Talk to them. Watch them. Ask them. Pilot test with them. More in upcoming user-centered design and prototyping classes.



## Activity: Play with Affordances (1:37, 7m)

Here's an exercise that you can try with your favorite webpage. It's a chunk of Javascript that changes all the text on the page to X's, so that all you can see is what the page is telling you nonverbally, using affordances. (It doesn't affect text that's rendered in an image, unfortunately, so this has the interesting side effect of discovering pages with poor accessibility and poor internationalization.)

Do an actual demo: One way to use it is to open your browser's Javascript console and just paste the code in; it will change the current page. 

Another way to use it is to create a new bookmark in your browser, and use as the URL javascript: followed by the code given above. Clicking on this bookmark will run the Javascript on the current page. (This is called a bookmarklet, and it's an one way to modify web pages you don't own.)


# Video Break (1:45, 7m)
Draco (CHI 2014)

- learnability: complex animation parameter setting is made easy with immediate feedback and direct manipulation.


# Feedback


## Case study: web browser status bar (1:52, 3m)

Status bar in a web browser as a case study

- Too far from the actual link: not a good job of providing useful feedback about the ramification of an action. Poor learnability
- Do we really need progress bars when page loading is fast enough with fast internet connection? But how long is long? We need to understand human perception and capabilities.


## Activity: Unix Shell (1:55, 10m)

Unix may be beautiful for many reasons, but learnability is not one of them.

- The actions available to the user are completely invisible; the user must recall a command name from memory, along with the syntax for its arguments.

- The state of the underlying system is likewise mostly hidden.  Many users customize their prompts to make some state visible, such as the current directory or the hostname.  The contents of the current directory are not visible, even though many commands operate on files.

- The feedback from a command is minimal – in fact, one Unix design principle is that commands should say nothing when they succeed.  But that’s not a good thing.  It’s true that a generic feedback message like “command completed successfully” would indeed be useless; the subsequent appearance of a command prompt is sufficient feedback that the command has completed.  So what kind of visible feedback would be useful?

- show my custom shell prompt with syntax highlighting and custom shell: in what way does this help and not?



# Information Scent

## Activity: How does Google try to improve information scent? (2:05, 5m)

Try searching for different information types






===

# Diff with Reading
- removed perceptual fusion & response time: moved to human capabilities
- locus of attention: moved to human capabilities



# Post Class Notes
- not enough time to do the affordances (removing text) task, had to skip
- students really liked Draco


===

# Unused
Here's a quick exercise. Consider the lights in your room. Design a panel of light switches to control the room's lights, for installation next to one of the entrance doors. Devise a natural mapping between your switch panel and the lights it controls, so that a user can easily learn and remember how to use it. Don't stop with just one design, but sketch out a few.

A few things to think about:

1. It may not make sense to control every light individually. How should the lights be grouped?
2. Think about consistency. Will your panel be recognizable as light switches from across the room? On the other hand, are there better choices than the standard North American flip switches?
3. If you use flip switches, how should they be oriented?

