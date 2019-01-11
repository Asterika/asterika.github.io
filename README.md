
# Memory Matrix

This is my first formal project - a memory matching game with a Matrix theme.

## Technologies Used
Technologies implemented into this version of Memory Matrix (version 1) include HTML, CSS, Javascript, and jQuery.

## Approach Taken
The approach taken complements the developer's personal goal for this project: namely, to code a traditional game while integrating rudimentary knowledge of coding principles and practices. The primary objective was to practice implementing and experimenting with various coding techniques and game logic strategies in an effort to produce a functional game with some aesthetic appeal.

I began with a focus on Javascript and jQuery to devote considerable time to creating functions that guide the flow of gameplay and to revising code as errors occurred. Having successfully integrated functions pertaining to clicking and flipping cards, checking pairs of cards for a match, and determining a win or loss state, I then progressed to styling the game with CSS, including visual and interactive elements such as images, a modal, buttons, and scoreboards for each player.

## Link to Live Site
Link to live site: https://github.com/Asterika/asterika.github.io

All notes pertaining to this project that document the progression of my logic and code, as well as any attributions, are contained at the above GitHub repository.

## Key Feature
The feature I am most of for this project is the card flip animation. Achieving this animation and the related timing was my primary goal for this project. 

## Unsolved Problems
One of the greatest challenges of the current version is that the cards were initially hard-coded into HTML and are thus unable to be randomized, a key feature of this type of game. If time allows, I would improve future versions by ensuring a Javascript "for loop" is used to generate cards within the game grid, though appending images to the front and back of the cards provided me a challenge that my current skill level could not meet.

Other unsolved problems and outstanding issues include:

Better organization of code: Constants and global variables would be called near the beginning of app.js.

Enhanced understanding of core principles: Many functions were placed into a single function ("clickCard") that contained an event in an effort to avoid errors that I believe relate to scope but could not otherwise resolve. A deeper understanding of scope and how it relates to event-based functions would enhance future versions.

Similarly, a more thorough understanding of target and currentTarget and how to attach them to corresponding parent and child elements would resolve excess code within the "clickCard" function.

A better grasp of how "moves++" operates may help resolve issues related to tracking and counting moves in reporting player progress as well as ensuring synchronized timing with displaying moves; in the current version, moves are not registered on the scoreboard until the following move is complete.

Understanding "moves++" is also integral to setting win/loss parameters for the game, as the current version determines a win or loss based upon the number of moves a player makes.

Additional knowledge concerning timing features such as "setTimeout" would be invaluable to creating an optimally synchronized game, as there remain issues in this version of the game (such as cards sticking open and failing to close before others are selected) that affect overall game display and performance.

Awareness of additional features earlier in game development, such as methods that disable card clicks until a secondary event is initiated, would prove valuable in seeking to enhance this version.

##Future Optimizations
Future versions of the game would entail many alterations and additions, including, but not limited to:

A brief introduction to the game and rules, perhaps through use of a modal.

Randomization of cards.

Enhanced timing accuracy affecting card flips.

A way for players to select whether players trade roles upon completion of each turn or each grid.

Inclusion of a timer and health points to enhance both single and dual player game states.

A "win modal" reporting player stats and providing an option to move to progressively more challenging levels until a final level is reached.

Additional animation to accompany unmatched card states, matched card states, and the win state.

Changing themes (backgrounds, images, and animation) for each level.

