# 23-Experiment Analysis + IUI


# Recap

# Admin
- nanoquiz: shoutkey.com/



# UI HOFS


# Nanoquiz


# Experiment Analaysis
Using JavaScript, process the collected data.

Do a live R demonstration to show how data can be analyzed.

Dictionary vs Gibberish: t test

Anova for section differences (A, B, C) skipped

- reading didn't really cover ANOVA in depth.
- consider doing this next year.

# Paper Study Analysis
A Comparison of Static, Adaptive, and Adaptable Menus. Leah Findlater and Joanna McGrenere. CHI 2004

compared split menus that were static (unchanging), adaptive (changed by system), and adaptable (changed by user).  Adaptive menu has two most recent and two most frequent items in the split part.  Adaptable had arrow buttons next to each item to promote or demote it. Used frequency distributions from three most frequently-used Word menus (File, Format, Insert), collected from one user over 20 weeks, but changed all item names to mask them.  Measured time and ranked preference (on several dimensions: overall, efficiency, ease, error, frustration, etc.).  27 subjects, within-subjects 3x3.  Selection time had static (1.5), adaptable (1.6) >> adaptive (1.65).  Overall preference had adaptable >> adaptive >> static.

Ask a set of questions to students to answer in pairs

- IV?
- DV?
- Tasks
- Within vs Between? Why is this a good choice?
- Controls
- Stat used


# Online Experimentation
A/B tests, trends, large-scale experimentation

- Obama campaign
- Bing
- Amazon

Mention some trends

Compare against lab studies

# Video Break
skipped

# IUI

## Motivating Examples
More AI in UI

- reCAPTCHA v2
- Amazon reviews

## Clippy

AI reasons + social reasons

Cliff Nass
ignoring user studies
http://gizmodo.com/5632237/the-man-who-lied-to-his-laptop

Every time a user typed "Dear . . . ," Clippy would dutifully propose, "I see you are writing a letter. Would you like some help?"-no matter how many times the user had rejected this offer in the past. Clippy would give unhelpful answers to questions, and when the user rephrased the question, Clippy would give the same unhelpful answers again. No matter how long users worked with Clippy, he never learned their names or preferences. Indeed, Clippy made it clear that he was not at all interested in getting to know them. If you think of Clippy as a person, of course he would evoke hatred and scorn.

http://blog.hoaloharobotics.com/2013/11/19/a-parting-salute-to-cliff-nass-social-interface-pioneer-and-good-friend

No persistent user profiles.

No reasoning about user competence, i.e., novice versus experienced user

Small event queue with emphasis only on the most recent interactions of the user with the software interface (this means the engine was trying to guess the values of many variables using very little data.)

Separation between user interface events and word-based queries; for word-based queries the engine ignored any context and user actions.

Last and possibly most important and I quote from the paper, “The automated facility of providing assistance based on the likelihood that a user may need assistance or on the expected utility of such autonomous action was not employed.” Instead, “The Office team has employed a relatively simple rule-based system on top of the Bayesian query analysis system to bring the agent to the foreground with a variety of tips.” This is why Clippy kept popping up all the time. It was not using the mathematically correct engine that the researchers had designed. It was driven by some rule-based system that one or more of the developers from the product team thought was a reasonable substitute.

The Office team subsequently replaced their Bob implementation for the Office Assistant with Microsoft Agent. Unfortunately they also failed understand how to apply the technology effectively, creating not a helper, but an annoyance that slowed users down rather than improved their use of applications. In addition, the limited quality and accuracy of speech technology meant that speech could not be relied on as a part of a successful interface. This and the stigma of Bob’s past failure and mediocre response to the equally poor implementation in the Office Assistant resulted reluctance by the Windows team to include Agent as a core UI element; and Agent too faded from the scene, though did end up being used in some very innovative interface projects and has given me a better design perspective on what I am doing now.

All this suggests that while social interfaces can be attractive, it takes much more work than designing a conventional user interface in that you had to consider more than basic human cognitive abilities in terms of how they can interact with devices and technologies. You have to understand how humans interact with each other, and that the nuances of the choice of a word, how it is said, or a facial expression when spoken give meaning to its understanding. It is one thing to come up with design guidelines for how to present information effectively on the screen, but quite another to script social interaction to feel natural.

## Control
Adaptive vs Adaptable

## Search

## Recommendation systems

## Explanation and transparency

## Conversational agents

## Design Considerations


# Diff with Reading
- removed all R stuff entirely
- added IUI

# Post Class Notes
http://exp-platform.com/rules-of-thumb/

- cover DM vs Agents debate?
- 55 mins on experiment analysis, leaving only short time on the rest.
- live demo of R and using in-class data was a good idea, although some students didn't really seem to "Get" it.
- A/B testing: need to more concretely explain what it is and how it's done. e.g., does it launch multiple versions of the interface at the same time?
- students seem to find experiment analysis difficult and dry. Online experimentation & IUI had much higher engagement overall.

