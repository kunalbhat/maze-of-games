### Introduction

Interfaces for puzzles from 'The Maze of Games - An Interactive Puzzle Novel by Mike Selinker'. As with solving puzzles goes, tools, research, info gathering, and being clever to aid in the solution is fully encouraged. These interfaces don't solve anything for you, they just create an interactive environment in which to tinker with the problem.

And, as with most things I do, it's largely for my own entertainment :smile:.

#### Overview

> "The Maze of Games is a full-length puzzle novel with over 50 puzzles and a
> deeply engaging story, all woven together in a "solve your own adventure"
> style which will keep you jumping from page to page." [[1]](#source1)

#### Puzzle 1

Puzzle 1 is a 13x13 grid of letters that initially spell a coherent phrase
("TURN THE TABLES") across the first row.  The grid is structured in columns
that can be 'rotated' up or down, the first of which is fixed in place.  The
goal of the puzzle is to manipulate the remaining twelve columns in such a way
that the entire grid reveals an entire hidden phrase. For example, rotating a
column upward by one would cause the letter in the top-most position to then
move to the bottom-most position. The second letter would move to the top-most
position, and so on.

I thought creating an interactive version of this would be fun, and it actually
took me longer to write the code than it did to solve the puzzle once it was
complete.

##### Using the interface

- Click on an arrow, up or down, to shift the column in that direction.
- The numbers at the bottom of the grid indicate the offset (in either
  direction). This isn't necessary for solving the puzzle, just an additional
  visual aid I decided to bake in.

A screenshot of the interface is below, and you can clone the repo to run it locally. Enjoy!

![Maze of Games - Puzzle 1 UI](https://raw.githubusercontent.com/kunalbhat/maze-of-games/master/puzzle_1/screenshots/puzzle_1_interface.png)

---

#### Sources
<a name="source1"></a>
[[1] - Loneshark Games, Inc.](http://www.lonesharkgames.com/maze/)
