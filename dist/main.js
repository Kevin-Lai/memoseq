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
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n    constructor(ctx, timeLimit){\n        this.sequenceKeys = [\n            \"w\",\"a\",\"d\",\n            \"1\", \"2\", \"3\",\n            \"4\", \"5\", \"6\",\n            \"7\", \"8\", \"9\"\n        ];\n\n        this.DIM_X = 800;\n        this.DIM_Y = 800;\n        this.BG_COLOR = \"red\";\n        this.ctx = ctx;\n\n        this.gameSequence = this.generateRandomItem();\n\n        this.timeLimit = timeLimit;\n        this.countdown = 0;\n\n        // this.decrementTimer = this.decrementTimer.bind(this);\n\n        this.enteredSequence = \"\";\n        this.gameOver = false;\n\n\n        this.gameSeq = document.getElementById(\"game-seq\");\n        this.enterSeq = document.getElementById(\"enter-seq\");\n\n        this.playRound = this.playRound.bind(this);\n\n    }\n    \n    generateRandomItem(){\n        let randomIndex = Math.floor(Math.random() * this.sequenceKeys.length)\n        return this.sequenceKeys[randomIndex];\n    }\n\n    draw(){\n        // // ctx.fillRect(x, y, width, height);\n        // this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n        // this.ctx.fillStyle = this.BG_COLOR;\n        // this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n\n        let drawSeq = document.getElementById(\"draw-seq\");\n\n        // if(drawSeq.children){\n        //     Array.from(drawSeq.children).forEach((child) => drawSeq.removeChild(child));\n        // }\n\n        this.gameSequence.forEach(\n            (element) => {\n                let newEle = document.createElement(\"div\");\n                \n                if (element === \"w\"){\n                    newEle.className = \"triangle\";\n                }\n                else if (element === \"a\"){\n                    newEle.className = \"square\";\n                }\n                else if (element === \"d\"){\n                    newEle.className = \"circle\";\n                }\n                else {\n                    newEle.className = \"number\";\n                }\n                \n                drawSeq.appendChild(newEle);\n            }\n        )\n        \n        // // arc(x, y, radius, startAngle, endAngle)\n        // this.ctx.beginPath();\n        // this.ctx.arc(95, 50, 40, 0, 2 * Math.PI);\n        // this.ctx.stroke();\n\n        // this.ctx.beginPath();\n        // this.ctx.arc(250, 50, 40, 0, 2 * Math.PI);\n        // this.ctx.stroke();\n\n    }\n\n    // drawCircle(){\n\n    // }\n\n    // drawSquare(){\n\n    // }\n\n\n\n    playRound(){\n\n        let randomItem = this.generateRandomItem();\n\n        this.gameSeq.textContent += randomItem;\n        this.gameSequence += randomItem;\n        \n        // while(this.countdown >= 0 ){\n            \n        //     // draw needs to occur before the interval\n        //     // this.draw();\n\n        //     setTimeout(this.decrementTimer(), 1000);\n\n        //     //console.log(this.timeLimit);\n        // }\n    }\n\n    run(){\n\n        this.playRound();\n\n        document.addEventListener('keypress', (e)=>{\n            this.enteredSequence += e.key;\n            this.enterSeq.textContent += `${e.key}`;\n\n            if(this.enteredSequence !== this.gameSequence && this.enteredSequence){\n                this.gameOver = true;\n                console.log(\"Game Over!\");\n            }\n\n        });\n\n        // while(!this.gameOver){\n        //     //setTimeout(this.playRound(), 30000);\n        //     this.playRound();\n        //     // if(this.enteredSequence !== this.gameSequence && this.enteredSequence){\n        //     //     this.gameOver = true;\n        //     // }\n        // }\n\n\n    }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const mainCanvas = document.getElementById(\"game-canvas\");\n    // mainCanvas.width = 500;\n    // mainCanvas.height = 500;\n\n    const ctx = mainCanvas.getContext(\"2d\");\n\n    let countdown = 31;\n\n    let intervalID = setInterval(decrementTimer, 1000);\n\n    function decrementTimer(){\n        countdown--;\n        // console.log(countdown);\n        if(countdown < 0){\n            document.getElementById(\"timer\").innerHTML = \"expired\";\n            clearInterval(intervalID);\n        }\n        else{\n            document.getElementById(\"timer\").innerHTML = countdown;\n        }\n    }\n\n    // let sequence = document.getElementById(\"seq\");\n    // document.addEventListener('keypress', (e)=>{\n    //     sequence.textContent += `${e.key}`\n    // });\n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx,10);\n    game.run();\n\n\n\n    // ctx.fillStyle = \"red\";\n    // ctx.fillRect(0, 0, 500, 500);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });