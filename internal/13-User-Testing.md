# 13-User Testing

In-class paper prototype testing

# Recap


# Admin
- nanoquiz: shoutkey.com/slate

# UI HOFS
Today’s candidate for the Hall of Shame is this entry form from the 1800Flowers web site. The purpose of the form is to enter a message for a greeting card that will accompany a delivered flower arrangement. (So you can see the whole interface, I’ve moved the Greeting Type drop-down menu to the right. In the real interface, it appears where you’d expect, right under the Greeting Type drop-down box.)

The 210 character limit is probably necessary for backend reasons (e.g. size of the card delivered with the flowers), but hard for a user to check. Suggest a dynamic progress bar showing how much of the quota you’ve used. (error prevention, flexibility & efficiency)

Special symbols like & is vague. What about asterisk and hyphen – are those special too? What am I allowed to use, exactly? (user control & freedom)

The underscores in the Greeting Type drop-down menu look like technical identifiers, and some even look mispelled because they’ve omitted other punctuation. Bosss_Day? (match the real world)

How does Greeting Type actually affect the card? (visibility)

If you select a greeting type, it displays a list of messages pre-populated for the selected greeting type. Once you choose a message, it’s entered into the message text area.

This is related to a Hall of Fame we had a little while ago: the Domino’s pizza ordering site does a much better job of showing you how your choices actually affect the final product.

## Newer interface

- List items alphabecially ordered, except for seasonal ones.
	- maybe a separator, or an explicit label.
- Prohibiting ~ or Enter keys: confusing. Exposing the system model too much.
- Feeling at a loss: Showing examples is good. More efficient. Learnable as to what it is for.
- Why characters remaining in a text box?

# Nanoquiz


# Ethics
User Testing => Usability Testing / Interface Testing

## Ghost Bustershttp://youtu.be/fn7-JZq0Yxs?t=22sStop the video right when the guy leaves the room in angerWhat did Bill Murray do wrong in this scene?Respect for person
- not quite informed consent
- deception
- Making participant even more stressed 
- User should be in control, clearly not
- User can stop at any time
- No reason to have 2 people inoom Beneficience 
- Not “do no harm”- Risk vs benefit to society NOT rightJustiice
- Not FairSee Venkman, P.  “The Effect of Negative Reinforcement on ESP Ability.”  Unpublished monograph, 1984.## Emotion Contagion StudyNow let's take a look at a more recent, real-life example.

Informed consent?

- is it considered harmful?
- "buried" in terms of service

The changing landscape of user testing

- big data
- easy to "manipulate" millions of people's experience

A/B tests are everywhere

- Major websites running hundreds of A/B tests at a given time
- A/B/N tests
- Facebook voting nudges
- Predicting illness / giving birth via search queries
- Google running pixel-level design A/B tests
- Learning analytics
- OKCupid analytics
- Uber controversial analytics

Users' mental model of the service

- The News Feed is a blackbox in the same way Google's search and Amazon's recommendation algorithms are. Many users don't necessarily realize that.
- ads: we're probably already immune to
- emotion: our mental model of Facebook and SNS - personal space, people-people connections, users have control

Implications

- Research should not be suppressed.
    - "Now companies are not even going to publicly share their findings"
- We need appropriate guidelines for a new medium and technology.
    - "Hammering ethical protocols designed for laboratory studies onto internet experimentation is fundamentally misguided."


### Resources

The paper

- http://www.pnas.org/content/111/24/8788.full

Kramer's response (one of the authors)

- https://www.facebook.com/akramer/posts/10152987150867796

Media responses

- http://www.theguardian.com/technology/2014/jun/30/facebook-emotion-study-breached-ethical-guidelines-researchers-say
- http://www.nytimes.com/2014/08/13/technology/the-boon-of-online-data-puts-social-science-in-a-quandary.html?_r=0
- http://www.theatlantic.com/technology/archive/2014/06/everything-we-know-about-facebooks-secret-mood-manipulation-experiment/373648/
- http://www.nytimes.com/2014/06/30/technology/facebook-tinkers-with-users-emotions-in-news-feed-experiment-stirring-outcry.html?_r=0
- http://www.forbes.com/sites/kashmirhill/2014/07/10/after-the-freak-out-over-facebooks-emotion-manipulation-study-what-happens-now/

Blogosphere

- http://www.talyarkoni.org/blog/2014/06/28/in-defense-of-facebook/
- http://www.talyarkoni.org/blog/2014/07/01/in-defense-of-in-defense-of-facebook/
- https://medium.com/@msbernst/the-destructive-silence-of-social-computing-researchers-9155cdff659
- https://ello.co/jayrosen/post/Ppg0VSUzxsy3mVNAQ9y5VA



# IRB Example
Show an actual exmaple IRB document

# Video Break

# Usability Testing

## Observing usability test sessions 
(7 mins)

### Paper Prototype Testing 
(3 mins)

https://www.youtube.com/watch?v=9wQkLthhHKA

- You're busy running formative evaluation with your paper prototypes. Let's look at a real-life example and discuss.

- Watch the first 30 seconds (before asking background questions): See how the facilitator starts a session
    - Thank the participant
    - Testing the interface, not the user: "We'd like your help."
    - Make it comfortable, ice breaking
    - Explain the compensation and duration
    - Make it clear that they can stop any time

- Then jump to 1:20 (starting of paper prototype testing)
    - open-ended question: make observations about learnability
    - can the user discover specific features?
    - 2:10 Gave an open ended task to test discoverability

- 2:55 Clicking everywhere: not likely to happen with real interfaces.

- Paper prototype testing

### Observing Think Aloud 
(3 mins)
https://www.youtube.com/watch?v=-h8hUtwkMCE

Let’s practice observing a user test, listening to think-aloud, and watching for critical incidents. It's a functional prototype of a controlling interface for cylinder testing.

First 25 seconds
- giving a task, asking to think aloud.

1:10
- the user is stuck. the facilitator interrupts with a question to guide the user.

1:20
- Critical incident: moments that strongly affect user performance or satisfaction.
    - researcher asks why he was confused.
    - user clearly describes why he's confused.
    - user gives some concrete suggestions.

Stop at 1:50

Notes
- It's easy to focus on getting just another data point. Apply the knowledge from the class so far (usability dimensions), etc. to "understand" what users are doing.


## User Testing Game 
(7 mins activity, 5 mins discussion)

USER: https://kixlab.org/courses/hci/activities/user-testing/user.html
WIZARD: https://kixlab.org/courses/hci/activities/user-testing/wizard.html

### Usability issues of the system discovered during testing
- Efficiency
    - Uncommon goals (list enrollment) come first in top menu.
    - Drop before Add? Add is more common, of course, as long as people take non-zero courses.
    - Changing / Dropping the subject can be simplified if the interface listed the currently enrolled courses.
- Learnability: Internal inconsistency between method to select a course in each task.
- Learnability: Bad mapping between keypad numbers and course numbers during add-course.
- Safety: No undo or cancel - instead the user can 'hang up' at anytime. Hang-ups are a measure of how many problems the system has.
- Lack of affordance: Dropping the MAS course is difficult unless user knows they can enter letters with numbers.


### Reflect on the process
- What was challenging as a wizard?
    - Keeping track of the state (current courses)
    - Wizard interface matters. ("top" link)
    - Don't switch roles between wizard & facilitator
- Which part of the interface was realitic / fake?
- What kind of potential usability issues was not covered?
    - Safety: How to authenticate the user?
    - Efficiency: How fast does the automated system respond?
- With a real working prototype, what would be different?




# Diff with Reading


# Post Class Notes



