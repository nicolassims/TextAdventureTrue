/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*  AUTHOR: Nicolas Sims
	 *  VERSION: 1
	 *  CREATED: 2.18.2016
	 *  PURPOSE: Create a text adventure.
	 */

	'use strict';

	var _HideStuff = __webpack_require__(1);

	var _HideStuff2 = _interopRequireDefault(_HideStuff);

	var _RevealStuff = __webpack_require__(2);

	var _RevealStuff2 = _interopRequireDefault(_RevealStuff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function main() {
	    _classCallCheck(this, main);

	    _HideStuff2.default.hideFirstText();
	    _HideStuff2.default.hideBeginningItems();
	    _RevealStuff2.default.revealFirstText();
	};

	window.onload = function () {
	    new main();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by Owner on 2/28/2016.
	 */

	var HideStuff = function () {
	    function HideStuff() {
	        _classCallCheck(this, HideStuff);
	    }

	    _createClass(HideStuff, null, [{
	        key: "hideFirstText",
	        value: function hideFirstText() {
	            document.getElementById("firstText").style.display = "none";
	        }
	    }, {
	        key: "hideBeginningItems",
	        value: function hideBeginningItems() {
	            document.getElementById("beginButton").addEventListener("click", function () {
	                document.getElementById("beginButton").style.display = "none";
	            }, false);
	            document.getElementById("beginButton").addEventListener("click", function () {
	                document.getElementById("prompt").style.display = "none";
	            }, false);
	        }
	    }]);

	    return HideStuff;
	}();

	exports.default = HideStuff;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by Administrator on 2/26/2016.
	 */

	var RevealStuff = function () {
	    function RevealStuff() {
	        _classCallCheck(this, RevealStuff);
	    }

	    _createClass(RevealStuff, null, [{
	        key: "revealFirstText",
	        value: function revealFirstText() {
	            document.getElementById("beginButton").addEventListener("click", function () {
	                document.getElementById("firstText").style.display = "block";
	            }, false);
	        }
	    }]);

	    return RevealStuff;
	}();

	exports.default = RevealStuff;

/***/ }
/******/ ]);