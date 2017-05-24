# 22-Experiment Design


# Recap

# Admin
- nanoquiz: shoutkey.com/
- DP6 update
- DP7 update


# UI HOFS
### Adaptive Menus

- A few most commonly used items shown first
- Predictability: Somewhat independent of how good the modeling algorithm is. Users don't keep track of their usage history and may be surprised by the suggestions.
- Serving the common cases better, at the cost of doing a worse job for the less common cases.

- How common is the common case?
- Is the common case actually supported better?
    - Visual memory not leveraged. Position not static.
- User context not taken into account
    - Beginning of a new semester, project: previous history not likely to help much.
    - Multi-user scenario: Patina?
- No user control


Today’s candidate for the Hall of Fame or Shame is adaptive menus, a feature of Microsoft Office 2003.  Initially, a menu shows only the most commonly used commands.  Clicking on the arrow at the bottom of the menu expands it to show all available commands. Adaptive menus track how often a user invokes each command, in order to display frequently-used commands and recently-used commands.

Let’s discuss the usability of this idea.

This interface is striving for a compromise between simplicity (i.e., providing as few features as possible) and task analysis (supporting the tasks required by many users, and trying to adapt to the common tasks of each individual user).  Both properties are important for usability.  Unfortunately they also compete with each other. Adaptive menus are an interesting hybrid technique that’s trying to satisfy both.

The downside is lack of predictability.  Because the menu may change in complex and unpredictable ways – with new items appearing and underused items disappearing for no visible reason – the user can no longer rely on a lot of useful cues to find menu items.  One of these cues that’s lost is spatial memory – Paste may be found at different distances down the menu each time the menu appears.  Another missing cue is context: Paste’s neighbors may change as well.

Another downside is lack of user control. The adaptation happens automatically; the user can’t manually fixate or remove items from a menu.

This particular implementation of adaptive menus has some specific usability problems.  When the full menu appears, the new items are inserted into place, and there’s very little contrast in the graphic design to distinguish between the old items and the new items. So the user has to search through the entire menu again.

But this particular implementation addresses other usability problems very well.  When the user is hunting through all the menus, looking for a command, the full menu only has to be requested once; then all subsequent menus are fully displayed.

### Split Menu

Here’s an alternative approach to providing easy access to high-frequency menu choices: a split menu.  You can see it in Microsoft Office’s font drop-down menu. A small number of fonts that you’ve used recently appear in the upper part of the menu, while the entire list of fonts is available in the lower part of the menu. The upper list is sorted by recency, while the lower part is sorted alphabetically.

Let’s discuss the split menu approach too.

These menu approaches are particularly relevant to today’s lecture because they’ve been tested by a couple of excellent controlled experiments. The split menu idea was evaluated by Sears & Shneiderman, “Split menus: effectively using selection frequency to organize menus”, ACM TOCHI, March 1994.  And the adaptive menu was tested by Findlater & McGrenere, “A comparison of static, adaptive, and adaptable menus”, CHI 2004.

Sears & Shneiderman: compared alphabetic, frequency-ordered, and split menus (with up to 4 high-frequency items at top of menu, ordered in same way as rest of menu, removed from the rest of menu – so not the same as Office’s font split menu).  15-item menus (randomly selected from a dictionary of 1000 common words).  Three different frequency distributions across the alphabetic menu (end of menu, middle of menu, top of menu).  36 subjects, within-subjects, each saw 3x3 menus (random unique items) counterbalanced.  Pulldown menus, timed from mouse press on menu bar until selection of item.  100 trials per menu, chosen from frequency distribution of menu.  Measured time and ranked preference of menu type (1-3).  Subjective ranking had split (1.4) > alphabetic (2.0) > frequency (2.6).  Selection time for frequent items at end of menu had split (1.4s) > freq (1.5s) > alphabetic (1.7s); for frequent items at start of menu had split, alphabetic (1.4s) > freq (1.5s).  Also proposed and fitted a cognitive model that high-frequency menu items take time logarithmic in item position (a la Fitts’s Law) while low-frequency items take linear time in position (visual scan).

Findlater & McGrenere: compared split menus that were static (unchanging), adaptive (changed by system), and adaptable (changed by user).  Adaptive menu has two most recent and two most frequent items in the split part.  Adaptable had arrow buttons next to each item to promote or demote it. Used frequency distributions from three most frequently-used Word menus (File, Format, Insert), collected from one user over 20 weeks, but changed all item names to mask them.  Measured time and ranked preference (on several dimensions: overall, efficiency, ease, error, frustration, etc.).  27 subjects, within-subjects 3x3.  Selection time had static (1.5), adaptable (1.6) >> adaptive (1.65).  Overall preference had adaptable >> adaptive >> static.

### Patina

- Heatmap overlay: maintaining the visual item arrangement
- Personal history + Group history


# Nanoquiz


# Research Methods in HCI
5 mins

The picture shows how these methods compare on several interesting dimensions. In the vertical dimension, lab experiments often use highly abstract tasks, which are simplified and highly controlled in order to make strong statistical claims, but also farther removed from the real-world. An example is the classic Fitts’s Law experiment, which measures the time it takes to hit targets on the screen by using plain rectangles rather than realistic pointing targets like buttons, menus, and hyperlinks. Field studies and surveys, by contrast, can use more concrete, real-world examples.

In the horizontal direction, lab experiments and surveys are obtrusive: people need to be interrupted and forced to give their attention to the study. Because they’re aware they’re being studied, their behavior can change; we’ll mention some of the ways that can happen later in this reading. Field studies, on the other hand, can be far less obtrusive, since the subjects are doing their own tasks in their own environment, and so the likelihood of obtaining natural behavior is much higher.

Finally, the picture also shows how the three methods compare on three criteria which are all desirable but virtually impossible to obtain at once from a single method. Realism means whether the phenomena captured are actually what happens in the real world (in real contexts on real tasks); field studies are strongest on that. Generalizability concerns whether the results apply to the whole population of people relevant to the study; a survey is strongest on that, because it’s far cheaper to survey a large number of people, and good statistical sampling techniques exist to make the results generalizable. Precision means control over measurement error and extraneous factors that might introduce noise into the results; lab experiments are strongest on that, because they can tightly control the tasks and environment to eliminate as much error as possible.

(This picture actually omits one important class of methods, which is occasionally but not widely used in HCI research: a theoretical model or computer simulation of human behavior. We talked about some theoretical models for HCI, like KLM and GOMS, in the efficiency reading.)

# Controlled Experiments
5 mins

- How to convince others? systematic UI evalution
- Ask questions about the core concepts
- Look at an actual example from a paper?
 


# Activity: Sampling
8 mins

https://docs.google.com/forms/d/e/1FAIpQLSfi2cLjTO2dAjZ_oaPnQfIQXTjCwjMKNb_3tC1aIKasKOnlNA/viewform?usp=sf_link
## Section division / Data Collection (2 mins)
- Divide the room into three quadrants (A, B, C).
- Students fill out the form.

## Activity 
(1 min: show results, 2 mins with a partner, 3 mins group discussion)

- Instructor shows the quadrant distributions to the whole class in the spreadsheet. Make sure "Sheet2" is pre-loaded with all the right formula.

- What might cause the distribution of demographics in different parts of the room to be different from the overall class population?
    - Friends sitting next to each other

- What may be some of the dangers of using a non-representative sample?
    - If only section A people were recruited in a survey about student attitudes towards some aspect of this class?
    - Sampling bias

- What if you ran an experiment with each section assigned to different conditions?
    - Depending on how good section division is, randomization is compromised.
    - Selection bias

- What'd be a better way to divide into sections?
    - Use KAIST ID modulo 3?
    - Random draw?


# Video Break
10 mins

Pre-touch sensing for mobile interaction

https://www.youtube.com/watch?v=fiZkEYLXctE

Discuss evaluating this interaction technique

# Threats to Validity
5 mins

# Activity: Typing Game
20-25 mins

### Pre-Experiment 
2 mins

- Give a short overview of what to do in the activity, but do not have a meta-discussion about the design to give students an opportunity to think about it.

- Make sure everyone knows which section they are in.


### Experiment: data collection 
5 mins

### Discussion 
7 mins with partner + 7 mins class discussion

- What were the independent variables and dependent variables in this experiment?
    - IV: dictionary vs gibberish
    - DV: time on task.

- What about other variables that might affect the experiment -- which were you controlling for, and which were uncontrolled? What differences between each pair of people might threaten internal validity?
    - Accuracy is controlled. Why? How well was it controlled?
    - Typing speed, English proficiency perhaps not controlled
    - Difficulty of the dictionary words used perhaps not controlled
    - Length of the words controlled

- What are the ordering effects that might come into play in this task?
    - Dictionary first, gibberish first?
    - Ordering of the words (seeing your partner work on it can bias + pre-expose you)

- What biases in this experiment might be caused by your expectations about how it should turn out?
    - Belief that "dictionary is better" may affect your performance.

- Between vs Within vs Within+random: When might between subjects be a good idea? Which one is the right choice for this experiment?
    - Between would be good if there wasn’t a potential difference for typing speed between people, but is bad in this case, since we want to know how it compares WITHIN subjects. Generally, if you expect huge individual variances, within-subjects might be better.

- Critique the current study design
    - Lab study? Field Study? Survey?
        - No precision or control in other options, self-report not good.
    - Users: KAIST students in a CS class, highly skewed. Age?
    - Implementation:
    - Tasks
    - Measurement: when does the time measurement begin and end? Current implementation: begins as soon as a word is displayed, ends upon enter key.
    - Ordering
    - Hardware

- Internal validity: is the difference in time on task from the conditions?
    - Ordering effects: order well presented?
    - Selection effects: pre-existing groups?
    - Experimenter bias: biased toward one condition?

- External validity: will the result hold beyond this particular run?
    - Population: random sample? gender? MIT students in a CS class, highly skewed.
    - Ecological: How realistic was the setting? Using your laptop vs other's (or the one in the lab)
    - Training: mimicked the real experience well?
    - Task: realistic task users are likely to run into?

- Reliability: is the result repeatable? any uncontrolled variables?
    - User differences: skill level, motor capability
    - Measurement error: time on task accurate? 10 words per set, time diff within the set?
    - Repetition: enough repetitions? but fatigue can be an issue.


# Diff with Reading
- techniques part removed (blocking, within/between, counterbalancing)

# Post Class Notes

- the game exercise was quite fun and led to some interesting discussion
- time-wise things worked quite well, not too packed not too loose.
- many students were confused about IVs: tasks (words) are not IVs, they are repetitions to get reliable results. the manipulation is related to the hypothesis -- what you want to show the difference "of".
- question wording was confusing to some students (last question in the game form -- one about the potential bias coming from the initial expectation of how the experiment result would be)
- section survey: The spreadsheet for the classroom area experiment is not reliable.  If you test it, and then delete all your test data responses, it breaks the formulas so that they show #REF (circular dependency) in class.  Find a more reliable way to do the calculations. When I pressed Enter key, however, the formula worked, and we did get the results successfully.


