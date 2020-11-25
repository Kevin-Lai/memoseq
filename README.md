# MemoSeq

[MemoSeq Live](https://kevin-lai.github.io/memoseq/)

## Table of Contents
* [Background](#background)
* [Technologies](#technologies)
* [Overview](#overview)
* [Game Features](#game-features)
   * [Title Screen](#title-screen)
   * [Controls Screen](#controls-screen)
   * [Full Game Demo](#full-game-demo)
   * [Restart Game](#restart-game)
* [Code Snippets](#code-snippets)
* [Future Planned Features](#future-planned-features)

## Background

MemoSeq is a memory game that involves memorizing a sequence of shapes and numbers and entering the corresponding keys in the correct order.

## Technologies
* Vanilla Javascript
* CSS
* HTML

## Overview
1) Players must memorize the sequence item that appears on each level.
2) Shapes are mapped to WAD keys, and numbers are mapped to number keys.
3) Players must press the correct key on the keyboard that corresponds to that shape or number.
4) For each level, the player must enter the entire sequence of keys that have appeared so far in the order that they have appeared in, starting from the item that appeared on level 1 up to all of the items that have appeared on all levels up to the current level. 
5) The number of items in the sequence increases with each level while the time limit for each level remains the same.
6) Pressing an incorrect key or running out of time will result in a Game Over.
7) High score is the level reached when getting a game over.
8) Best score is the highest level the player has ever reached in the current game session.
9) The colors of the numbers and the shapes are also randomized.

## Game Features
The following screenshots display the features of the game.

### Title Screen
![Title Screen](https://github.com/Kevin-Lai/memoseq/blob/master/images/title_screen.gif)

---

### Controls Screen
![Controls Screen](https://github.com/Kevin-Lai/memoseq/blob/master/images/controls.gif)

---

### Full Game Demo
![Game Demo](https://github.com/Kevin-Lai/memoseq/blob/master/images/game_demo.gif)

---

### Restart Game
![Restart Game](https://github.com/Kevin-Lai/memoseq/blob/master/images/restart.gif)

---

## Code Snippets

### Countdown Timer
```js
countdownTimer(){
	this.startInterval = setInterval(decrementTimer, 1000);

	let that = this;

	function decrementTimer(){
		that.countdown--;
		if(that.countdown < 0){
			that.gameOver();
		}
		else{
			that.timer.innerHTML = that.countdown;
		}
	}
}
```
At the start of the game, the countdown interval starts and decrements the timer by 1 for every second that passes. If the countdown goes down to 0, then the game is over, and the gameOver function will be executed to display the player's score. Otherwise, while the countdown timer is continuing to decrement, the timer display will update every second with the new remaining time.

---
### Keypress Checker
```js
document.addEventListener('keydown', (e)=>{
	this.enteredSequence += e.key;

	if(e.key !== this.gameSequence[this.checkIndex]){
		this.gameOver();
	}

	this.checkIndex++;

	if(this.enteredSequence === this.gameSequence && this.enteredSequence){
		this.resetRound();
		this.highscore++;
		this.level.innerHTML = this.highscore;
		this.playRound();
	}
});
```
The keypress checker is an event listener that is attached at the start of the game. On each level, it checks each key that the player presses. If the pressed key does not match the correct key in the sequence, then there will be a game over, and the gameOver function will be executed to display the player's score. If all of the keys that the player pressed on the current level matches all of items in the sequence, then the player will progress to the next level where the timer is reset, the level is increased, and an additional item is added to the sequence.

---

## Future Planned Features
* Multiple game modes - 3 modes
  * normal mode - (10 secs)
  * easy mode - (15 secs)
  * hard mode - (5 secs)
* Add sound or music
