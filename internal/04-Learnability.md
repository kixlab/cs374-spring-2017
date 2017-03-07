# 04-Learnability Part 2


# Recap


# Admin


# UI HOFS
- RealCD

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


# Nanoquiz


# Part 1

Metaphor
- desktop: very successful, everyone knows it, now it's not really a metaphor anymore.
- kids who swipe physical books.


Here's a quick exercise. Consider the lights in your room. Design a panel of light switches to control the room's lights, for installation next to one of the entrance doors. Devise a natural mapping between your switch panel and the lights it controls, so that a user can easily learn and remember how to use it. Don't stop with just one design, but sketch out a few.

A few things to think about:

1. It may not make sense to control every light individually. How should the lights be grouped?
2. Think about consistency. Will your panel be recognizable as light switches from across the room? On the other hand, are there better choices than the standard North American flip switches (3) If you use flip switches, how should they be oriented?

## External consistency example
- from Luis von Ahn's talk: recaptcha
- glass window that doesn't give enough affordance about whether it's a window (vs empty space).
	- visually pleasing and clean, but...


##
<div class="slide">
<h1>Find the Affordances</h1>
<img src="figures/12.png" />
</div>

##
Here's an exercise that you can try with your favorite webpage. It's a chunk of Javascript that changes all the text on the page to X's, so that all you can see is what the page is telling you nonverbally, using affordances. (It doesn't affect text that's rendered in an image, unfortunately, so this has the interesting side effect of discovering pages with poor accessibility and poor internationalization.)

Here's the Javascript code:

	var result = document.evaluate("//text()", document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		for (var i = 0; i &lt; result.snapshotLength; ++i) {
		  var node = result.snapshotItem(i);
		  if ((node.textContent+"").match(/\w/)&&node.parentNode.nodeName != "STYLE") {
		    node.textContent = node.textContent.replace(/[A-Z0-9]/g, "X").replace(/[a-z]/g, "x");
		  }
		}
	void 0

One way to use it is to open your browser's Javascript console and just paste the code in; it will change the current page. Another way to use it is to create a new bookmark in your browser, and use as the URL javascript: followed by the code given above. Clicking on this bookmark will run the Javascript on the current page. (This is called a bookmarklet, and it's an one way to modify web pages you don't own.)


# Video Break
Xerox Star


# Part 2







===

# Diff with Reading
- removed perceptual fusion & response time: move to human capabilities?
- locus of attention

===

# Recap


# Admin


# UI HOFS


# Nanoquiz


# Part 1


# Video Break


# Part 2


# Diff with Reading


# Post Class Notes

