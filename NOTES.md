## Week 8, Friday
On a phone, there was a little too much space between the text inside of the footer and the bottom of the screen, so I changed padding-bottom within the footer (which did nothing) so I then changed the bottom padding within the body itself (where the footer lives) so that I could adjust the bottom of the body box that way. I'm sure there's a more elegant way to center the items vertically within the footer, but I'm not sure just yet.

## Week 9, Wednesday
1. What are your three pages, and why those three? *Since I've been drawing some bits of clip art for my projects, I felt it would be nice to have a page to comb through each of my little doodles.*
2. You changed one thing in styles.css and all three pages changed. What would you have had to do if each page carried its own copy? *If I didn't care about consistency, then nothing. But since I do, I'd have to change each stylesheet and make no mistakes, for each corresponding page.*
3. What is one thing on your page you don't know how to change yet? *I suppose that if I wanted to create bullet points out of some other symbol besides the default dot, I wouldn't know how to go about doing so just yet.*

## Week 9, Friday
Finding things to fix:
1. On the horizontal view, the header image is directly against the cards on the screen, which makes things feel cramped. To remedy this, I added bottom padding to the header.
2. The gaps between cards looked a little too big, especially on narrow screen sizes. Shrinking the gap value in the stylesheet tightens the gaps somewhat, but since changing the value also affects the card spacing on horizontal screens, I can't shrink the gap too much or risk squeezing the cards together on wide screens.

#### Task 7: Write it down
1. What width did you pick for your breakpoint, and how did you choose it? *I kept the breakpoint provided by the labs and classwork since it works for me without feeling cramped or looking ugly.*
2. The two things you found and fixed at phone width. *I changed the spacing on the header so that it doesn't directly touch the cards underneath it on pages that have cards. I also altered the gap between the cards so that they don't look too far apart in the mobile view, although doing so also changes the spacing in the horizontal view so I can't change the pacing too much.
3. In your own words: what is the difference between justify-content and align-items? *Justify content seems to adjust the horizontal, while the align-items seems to move things vertically. I can remember these pretty well though since "justify" is the wording that Google Docs uses when talking about text alignment, and that formatting always happens horizonally.*
4. Why does the plain-rule hold the narrow layout and the media query hold the wide one, instead of the other way around? *To me, it doesn't necessarily seem like the media view holds the horizontal view, but rather that the media view allows the flexibility to allow the page to fit within the screen properly. The plain view is kinda always a vertically inclined view (webpages are usually all meant to be scrollable) but it just has more screen real estate which it can spread across.*