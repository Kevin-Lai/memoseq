# MemoSeq

[MemoSeq Live](https://kevin-lai.github.io/memoseq/)

## Table of Contents
* [Background](#background)
* [Technologies](#technologies)
* [Overview](#overview)
* [Future Planned Features](#future-planned-features)

## Background

MemoSeq is a memory game that involves memorizing a sequence of shapes and numbers and entering the corresponding keys in the correct order.

## Technologies
* Vanilla Javascript
* CSS
* HTML

## Overview:
1) Players must memorize the sequence item that appears on each level.
2) Shapes are mapped to WAD keys, and numbers are mapped to number keys.
3) Players must press the correct key on the keyboard that corresponds to that shape or number.
4) For each level, the player must enter the entire sequence of keys that have appeared so far in the order that they have appeared in, starting from the item that appeared on level 1 up to all of the items that have appeared on all levels up to the current level. 
5) The number of items in the sequence increases with each level while the time limit for each level remains the same.
6) Pressing an incorrect key or running out of time will result in a Game Over.
7) High score is the level reached when getting a game over.
8) Best score is the highest level the player has ever reached in the current game session.
9) The colors of the numbers and the shapes are also randomized.

## Future Planned Features
* Multiple game modes - 3 modes
  * normal mode - (10 secs)
  * easy mode - (15 secs)
  * hard mode - (5 secs)
