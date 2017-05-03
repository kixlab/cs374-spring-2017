# 15-Output

# Recap

# Admin
- nanoquiz: shoutkey.com/
- DP4 update
- Laptop policy
- Remind MIT/Stanford in class again


# UI HOFS
Korean Starbucks app

- selecting store shows the available amount
- 

Today’s hall of fame or shame candidate is the Domino’s Pizza build-your-own-pizza process. You can try it yourself by going to the Domino’s website and clicking Order to start an order (you’ll have to fill in an address to get to the part we care about, the pizza-building UI).

Some aspects to think about:

- learnability
- visibility
- user control & freedom
- efficiency

Direct manipulation via button presses, constant visual feedback. Easy to learn 

When visual feedback not present (cheese on left), pops a warning to let the user know
Allow for a lot of control in terms of left/right side of the pizza and amount of toppings. 
Good information scent (on which step someone is on, and what type of topping they want) 

This interface offers a huge amount of visibility (far more, in fact, than you get when you order a pizza over the phone, talking to a real human being!).  First, the available actions are clearly visible – kinds of crust, sizes, kinds of toppings, options like putting toppings on only half the pizza.  Second, the state of your pizza is shown clearly and redundantly – both as selections in the column, and as a continuously visible, what-you-see-is-what-you-get picture of your pizza.  Third, when you make choices, you see great feedback about how your pizza is affected by that choice.  Toppings appear on the pizza, one by one, but very quickly.  The feedback is animated but fast, so it draws your attention and explains what you did without slowing down your interaction too much.

The set of available toppings is too long to fit on the screen – but the pizza moves with you as you scroll, preserving the visibility of state and feedback.

The big red Add To Order button makes an important action clearly visible.  It’s also clear evidence of iterative design.  This button is essential (without it you can’t order your pizza) and its ordinary location at the bottom of the page evidently caused problems, so it was duplicated and placed under the pizza itself, where it can’t possibly be missed.



# Nanoquiz


# So far... 
- Usability dimensions
- Design process
- 
- Implementation classes
- Last part of the class

# Intro
GUI toolkit intro

- examples (Cocoa, Win32, Adobe Flex)
- what they do
- why we need them

# Output Representations

## Photoshop Puzzle
Rasterization converts from stroke to pixels. Why is it no longer editable?

## Play with Websites

Go to various web sites with the class following along. What text is object, what is stroked, and what is pixel?

tools to use:

- Cmd-F (Find)
- text selection
- zooming (since object text will remain crisp, pixel text will become fuzzy and pixelated)

sites to try:

- kaist.ac.kr
- https://www.freeriderhd.com/t/1016-layers

KAIST

- text objects are images (pixels) not text (objects): horrible usability decision
- teaser image also contains text within

FreeRider

- mostly strokes via canvas functions
- buttons on the left are objects

Other sites to try?
- http://google.com/
- http://airbnb.com/
- http://canvasdefense.appspot.com/

The last one is a good example of HTML5’s stroke representation, the canvas element. Most websites don’t use canvas.


# Video Break
Sutherland's SketchPad, with Alan Kay's narration

https://www.youtube.com/watch?v=USyoT_Ha_bA&feature=youtu.be&t=8m43s
- original video

https://www.youtube.com/watch?v=kzDpfk8YhlE
- Alan Kay's narration

https://www.mprove.de/diplom/text/3.1.2_sketchpad.html#fig31


# Activities

## Examine Widgets
http://jqueryui.com/slider

## Explore HTML Canvas
http://jsfiddle.net/oskar/GttyJ/https://jsfiddle.net/mcpanic/6k6bzhx6/## Explore Image Display
http://jsfiddle.net/danieljackson/PqhW2/22/https://jsfiddle.net/mcpanic/yzvou52p/

# Diff with Reading
What representation do each of the following technologies use?

- HTML
- Postscript laser printer
- plotter
- PDF 
- LCD panel

Answers:

- HTML: object
- Postscript laser printer: stroke input, pixel output
- plotter: stroke input and output
- PDF: stroke
- LCD panel: pixel. 

Removed some content

- Damage and Automatic Redraw
- Naive Redraw Causes Flashing Effects
- Double buffering
- Antialiasing
- Issues in Choosing Output Representations

# Post Class Notes
double-buffering in the reading: need a concise summary

Animation in the reading? The reading gets too long then.

Course recap after the midterm took long time (20 mins or so total)

Students' overall understanding of the material seems pretty low for the material.

Good to cover canvas code + examples

Time was limited: didnt have time for jQuery UI part 2 and image rendering activities

SketchPad was fine

Other examples not used:

http://codepen.io/dissimulate/pen/KrAwx
http://perfectionkills.com/exploring-canvas-drawing-techniques/

