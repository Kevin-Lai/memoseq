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
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n    constructor(ctx){\n        this.sequenceKeys = [\n            \"w\",\"a\",\"s\",\"d\",\n            \"1\", \"2\", \"3\",\n            \"4\", \"5\", \"6\",\n            \"7\", \"8\", \"9\"\n        ];\n\n        this.DIM_X = 1000;\n        this.DIM_Y = 1000;\n        this.BG_COLOR = \"red\";\n        this.ctx = ctx;\n    }\n    \n    generateRandomSequence(array, numberOfItems){\n        let randomIndices = [];\n        for(let i = 0; i<numberOfItems; i++){\n            randomIndices.push(Math.floor(Math.random() * array.length));\n        }\n        return randomIndices;\n    }\n\n    draw(){\n        // ctx.fillRect(x, y, width, height);\n        this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n        this.ctx.fillStyle = this.BG_COLOR;\n        this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n\n        \n        // arc(x, y, radius, startAngle, endAngle)\n        this.ctx.beginPath();\n        this.ctx.arc(95, 50, 40, 0, 2 * Math.PI);\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.arc(250, 50, 40, 0, 2 * Math.PI);\n        this.ctx.stroke();\n\n    }\n\n    run(){\n        let gameOver = false;\n        // while(!gameOver){\n            \n        // }\n        this.draw();\n    }\n\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const mainCanvas = document.getElementById(\"game-canvas\");\n    // mainCanvas.width = 500;\n    // mainCanvas.height = 500;\n\n    const ctx = mainCanvas.getContext(\"2d\");\n\n\n\n    let sequence = document.getElementById(\"seq\");\n    document.addEventListener('keypress', (e)=>{\n        sequence.textContent += `${e.key}`\n    });\n\n\n    const game = new Game(ctx);\n    game.run();\n\n\n\n    // ctx.fillStyle = \"red\";\n    // ctx.fillRect(0, 0, 500, 500);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });