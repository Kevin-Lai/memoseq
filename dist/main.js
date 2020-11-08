/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n    // constructor(ctx, timeLimit){\n    constructor(inputTimeLimit){\n        this.sequenceKeys = [\n            \"w\",\"a\",\"d\",\n            \"1\", \"2\", \"3\",\n            \"4\", \"5\", \"6\",\n            \"7\", \"8\", \"9\"\n        ];\n\n        this.colors = [\n            \"red\",\n            \"blue\",\n            \"brown\",\n            \"green\",\n            \"orange\",\n            \"purple\"\n        ];\n\n        // this.DIM_X = 800;\n        // this.DIM_Y = 800;\n        // this.BG_COLOR = \"red\";\n        // this.ctx = ctx;\n\n        this.gameSequence = \"\";\n\n        this.timeLimit = inputTimeLimit+1;\n        this.countdown = inputTimeLimit+1;\n        this.timer = document.getElementById(\"timer\");\n        this.timer.innerHTML = inputTimeLimit;\n\n        this.enteredSequence = \"\";\n\n        this.highscore = 1;\n        this.level = document.getElementById(\"level\");\n        this.level.innerHTML = this.highscore;\n\n        // gameSeq and enterSeq are only used for testing purposes\n        // this.gameSeq = document.getElementById(\"game-seq\");\n        // this.enterSeq = document.getElementById(\"enter-seq\");\n\n        // This is the display of the sequence\n        this.drawSeq = document.getElementById(\"draw-seq\");\n\n        this.playRound = this.playRound.bind(this);\n\n        this.gameOverDisplay = document.getElementById(\"game-over\");\n        this.finalScoreDisplay = document.getElementById(\"final-score\");\n\n        this.startInterval = \"\";\n        this.checkIndex = 0;\n\n        this.startButton = document.getElementById(\"start-button\");\n        this.startBlock = document.getElementById(\"start-block\");\n    }\n    \n    generateRandomItem(){\n        let randomIndex = Math.floor(Math.random() * this.sequenceKeys.length)\n        return this.sequenceKeys[randomIndex];\n    }\n\n    generateRandomColor(){\n        let randomIndex = Math.floor(Math.random() * this.colors.length)\n        return this.colors[randomIndex];\n    }\n\n    draw(){\n        // // ctx.fillRect(x, y, width, height);\n        // this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n        // this.ctx.fillStyle = this.BG_COLOR;\n        // this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n\n        let drawSeq = document.getElementById(\"draw-seq\");\n\n        // if(drawSeq.children){\n        //     Array.from(drawSeq.children).forEach((child) => drawSeq.removeChild(child));\n        // }\n\n        this.gameSequence.forEach(\n            (element) => {\n                let newEle = document.createElement(\"li\");\n                \n                if (element === \"w\"){\n                    newEle.className = \"triangle\";\n                }\n                else if (element === \"a\"){\n                    newEle.className = \"square\";\n                }\n                else if (element === \"d\"){\n                    newEle.className = \"circle\";\n                }\n                else {\n                    newEle.className = \"number\";\n                }\n                \n                drawSeq.appendChild(newEle);\n            }\n        )\n        \n        // // arc(x, y, radius, startAngle, endAngle)\n        // this.ctx.beginPath();\n        // this.ctx.arc(95, 50, 40, 0, 2 * Math.PI);\n        // this.ctx.stroke();\n\n        // this.ctx.beginPath();\n        // this.ctx.arc(250, 50, 40, 0, 2 * Math.PI);\n        // this.ctx.stroke();\n\n    }\n\n    playRound(){\n\n        let randomItem = this.generateRandomItem();\n        let randomColor = this.generateRandomColor();\n\n        // this.gameSeq.textContent += randomItem;\n        this.gameSequence += randomItem;\n        \n        let newEle = document.createElement(\"div\");\n                \n        if (randomItem === \"w\"){\n            newEle.className = \"triangle\";\n            newEle.style.borderBottomColor = randomColor;\n        }\n        else if (randomItem === \"a\"){\n            newEle.className = \"square\";\n            newEle.style.backgroundColor = randomColor;\n        }\n        else if (randomItem === \"d\"){\n            newEle.className = \"circle\";\n            newEle.style.backgroundColor = randomColor;\n        }\n        else {\n            newEle.className = \"number\";\n            newEle.innerHTML = randomItem;\n            newEle.style.color = randomColor;\n        }\n        \n        this.drawSeq.appendChild(newEle);\n\n        //console.log(this.gameSequence);\n    }\n\n    countdownTimer(){\n        this.startInterval = setInterval(decrementTimer, 1000);\n\n        let that = this;\n\n        function decrementTimer(){\n            that.countdown--;\n            // console.log(countdown);\n            if(that.countdown < 0){\n                that.timer.innerHTML = \"0\";\n                clearInterval(that.startInterval);\n                that.gameOverDisplay.innerHTML = \"Game Over\";\n                that.finalScoreDisplay.innerHTML = \"Highscore: \" + that.highscore;\n                that.reapplyButtonStyling();\n                // console.log(\"Time Over!\");\n                // console.log(that.highscore);\n            }\n            else{\n                that.timer.innerHTML = that.countdown;\n            }\n        }\n    }\n\n    setup(){\n        // This needed to be in its own function to prevent\n        // attaching additional keydown listeners after restart.\n        // NOTE: There should only be 1 keydown event listener!\n        document.addEventListener('keydown', (e)=>{\n            this.enteredSequence += e.key;\n            // this.enterSeq.textContent += `${e.key}`;\n\n            //console.log(\"Entered key: \" + e.key);\n            //console.log(\"Check: \" + this.gameSequence + \" Index: \" + this.checkIndex);\n\n            if(e.key !== this.gameSequence[this.checkIndex]){\n                //console.log(\"Entered \" + this.checkIndex);\n                \n                this.gameOverDisplay.innerHTML = \"Game Over\";\n                this.finalScoreDisplay.innerHTML = \"Highscore: \" + this.highscore;\n                clearInterval(this.startInterval);\n                this.timer.innerHTML = \"0\";\n                this.reapplyButtonStyling();\n                \n                //console.log(\"Game Over!\");\n                //console.log(this.highscore);\n            }\n\n            this.checkIndex++;\n\n            // This needs to be put after the increment of the index\n            // to handle the case when the entered sequence matches\n            // and things need to be reset for the next round.\n            if(this.enteredSequence === this.gameSequence && this.enteredSequence){\n                // if the user entered the correct sequence, then the level increases\n                // and another item is added to the sequence\n                // and the countdown is reset.\n                // console.log(\"Matched\");\n                this.resetRound();\n                this.highscore++;\n                this.level.innerHTML = this.highscore;\n                this.playRound();\n            }\n        });\n    }\n\n    start(){\n        this.startButton.addEventListener(\"click\", ()=>{\n            this.startBlock.style.display = \"none\";\n            this.restartGame();\n            this.run();\n        });\n    }\n\n    resetRound(){\n        this.enteredSequence = \"\";\n        // this.enterSeq.textContent = \"User entered: \";\n        this.countdown = this.timeLimit;\n        this.checkIndex = 0;\n    }\n\n    restartGame(){\n        this.resetRound();\n        this.highscore = 1;\n        this.gameSequence = \"\";\n        this.timer.innerHTML = this.timeLimit-1;\n        this.level.innerHTML = this.highscore;\n        this.startInterval = \"\";\n        this.clearRestartDisplay();\n    }\n    \n    clearRestartDisplay(){\n        this.gameOverDisplay.innerHTML = \"\";\n        this.finalScoreDisplay.innerHTML = \"\";\n        this.drawSeq.innerHTML = \"\";\n    }\n\n    reapplyButtonStyling(){\n        this.startBlock.style.display = \"flex\";\n        this.startButton.textContent = \"Restart\";\n    }\n\n    run(){\n        this.playRound();\n        this.countdownTimer();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    \n    // const mainCanvas = document.getElementById(\"game-canvas\");\n    // // mainCanvas.width = 500;\n    // // mainCanvas.height = 500;\n\n    // const ctx = mainCanvas.getContext(\"2d\");\n    // const game = new Game(ctx,31);\n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n    game.setup();\n    game.start();\n    \n    // ctx.fillStyle = \"red\";\n    // ctx.fillRect(0, 0, 500, 500);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });