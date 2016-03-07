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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HideStuff = __webpack_require__(1);

	var _HideStuff2 = _interopRequireDefault(_HideStuff);

	var _RevealStuff = __webpack_require__(2);

	var _RevealStuff2 = _interopRequireDefault(_RevealStuff);

	var _AddNames = __webpack_require__(3);

	var _AddNames2 = _interopRequireDefault(_AddNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var main = function () {
	    function main() {
	        _classCallCheck(this, main);

	        new main.playGame();
	    }

	    _createClass(main, null, [{
	        key: 'playGame',
	        value: function playGame() {
	            _HideStuff2.default.hideAll();
	            _RevealStuff2.default.revealRestart();
	            _HideStuff2.default.hideIntroItems();
	            _RevealStuff2.default.revealFirstStuff();
	            _RevealStuff2.default.revealCheckboxResults();
	            _HideStuff2.default.hideFirstStuff();
	            _HideStuff2.default.hideCheckboxResults();
	            _RevealStuff2.default.revealNameInput();
	            _AddNames2.default.addHeroName();
	            _AddNames2.default.addLoserName();
	            document.getElementById("loserButton").addEventListener("click", function () {
	                return main.playGame();
	            }, false);
	            document.getElementById("heroButton").addEventListener("click", function () {
	                return main.playGame();
	            }, false);
	        }
	    }]);

	    return main;
	}();

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
	        key: "hideAll",
	        value: function hideAll() {
	            document.getElementById("firstText").style.display = "none";
	            document.getElementById("leftInput").style.display = "none";
	            document.getElementById("rightInput").style.display = "none";
	            document.getElementById("secondButton").style.display = "none";
	            document.getElementById("bothDirections").style.display = "none";
	            document.getElementById("rightDirection").style.display = "none";
	            document.getElementById("leftDirection").style.display = "none";
	            document.getElementById("noDirection").style.display = "none";
	            document.getElementById("heroName").style.display = "none";
	            document.getElementById("loserName").style.display = "none";
	            document.getElementById("heroButton").style.display = "none";
	            document.getElementById("loserButton").style.display = "none";
	            document.getElementById("wentLeft").style.display = "none";
	            document.getElementById("wentElsewhere").style.display = "none";
	            document.getElementById("continueFromCheckboxResults").style.display = "none";
	        }
	    }, {
	        key: "hideIntroItems",
	        value: function hideIntroItems() {
	            document.getElementById("beginButton").addEventListener("click", function () {
	                document.getElementById("beginButton").style.display = "none";
	                document.getElementById("prompt").style.display = "none";
	            }, false);
	        }
	    }, {
	        key: "hideFirstStuff",
	        value: function hideFirstStuff() {
	            document.getElementById("secondButton").addEventListener("click", function () {
	                document.getElementById("firstText").style.display = "none";
	                document.getElementById("leftInput").style.display = "none";
	                document.getElementById("rightInput").style.display = "none";
	                document.getElementById("secondButton").style.display = "none";
	            }, false);
	        }
	    }, {
	        key: "hideCheckboxResults",
	        value: function hideCheckboxResults() {
	            document.getElementById("continueFromCheckboxResults").addEventListener("click", function () {
	                document.getElementById("bothDirections").style.display = "none";
	                document.getElementById("rightDirection").style.display = "none";
	                document.getElementById("leftDirection").style.display = "none";
	                document.getElementById("noDirection").style.display = "none";
	                document.getElementById("continueFromCheckboxResults").style.display = "none";
	            }, false);
	        }
	    }]);

	    return HideStuff;
	}();

	exports.default = HideStuff;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by Administrator on 2/26/2016.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RevealStuff = function () {
	    function RevealStuff() {
	        _classCallCheck(this, RevealStuff);
	    }

	    _createClass(RevealStuff, null, [{
	        key: "revealFirstStuff",
	        value: function revealFirstStuff() {
	            document.getElementById("beginButton").addEventListener("click", function () {
	                document.getElementById("firstText").style.display = "block";
	                document.getElementById("leftInput").style.display = "block";
	                document.getElementById("rightInput").style.display = "block";
	                document.getElementById("secondButton").style.display = "block";
	            }, false);
	        }
	    }, {
	        key: "revealCheckboxResults",
	        value: function revealCheckboxResults() {
	            document.getElementById("secondButton").addEventListener("click", function () {
	                var leftChecked = document.getElementById("firstInputLeft").checked;
	                var rightChecked = document.getElementById("firstInputRight").checked;
	                console.log(leftChecked);
	                console.log(rightChecked);
	                if (leftChecked == true && rightChecked == true) {
	                    document.getElementById("bothDirections").style.display = "block";
	                } else if (leftChecked == true || rightChecked == true) {
	                    if (leftChecked == true) {
	                        document.getElementById("leftDirection").style.display = "block";
	                    } else {
	                        document.getElementById("rightDirection").style.display = "block";
	                    }
	                } else {
	                    document.getElementById("noDirection").style.display = "block";
	                }
	                document.getElementById("continueFromCheckboxResults").style.display = "block";
	            }, false);
	        }
	    }, {
	        key: "revealNameInput",
	        value: function revealNameInput() {
	            document.getElementById("continueFromCheckboxResults").addEventListener("click", function () {
	                var leftChecked = document.getElementById("firstInputLeft").checked;
	                var rightChecked = document.getElementById("firstInputRight").checked;
	                if (leftChecked == true && rightChecked != true) {
	                    document.getElementById("wentLeft").style.display = "block";
	                    document.getElementById("heroName").style.display = "block";
	                    document.getElementById("heroButton").style.display = "block";
	                } else {
	                    document.getElementById("wentElsewhere").style.display = "block";
	                    document.getElementById("loserName").style.display = "block";
	                    document.getElementById("loserButton").style.display = "block";
	                }
	            }, false);
	        }
	    }, {
	        key: "revealRestart",
	        value: function revealRestart() {
	            document.getElementById("beginButton").style.display = "block";
	            document.getElementById("prompt").style.display = "block";
	        }
	    }]);

	    return RevealStuff;
	}();

	exports.default = RevealStuff;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by Administrator on 3/3/2016.
	 */

	var AddNames = function () {
	    function AddNames() {
	        _classCallCheck(this, AddNames);
	    }

	    _createClass(AddNames, null, [{
	        key: "addHeroName",
	        value: function addHeroName() {
	            document.getElementById("heroButton").addEventListener("click", function () {
	                var heroNameList = document.getElementById('heroNameList');
	                var heroName = "> " + document.getElementById('heroName').value + "<br>";
	                heroNameList.innerHTML = heroNameList.innerHTML + heroName;
	                console.log(heroNameList.innerHTML);
	            }, false);
	        }
	    }, {
	        key: "addLoserName",
	        value: function addLoserName() {
	            document.getElementById("loserButton").addEventListener("click", function () {
	                var loserNameList = document.getElementById('loserNameList');
	                var loserName = "> " + document.getElementById('loserName').value + "<br>";
	                loserNameList.innerHTML = loserNameList.innerHTML + loserName;
	                console.log(loserNameList.innerHTML);
	            }, false);
	        }
	    }]);

	    return AddNames;
	}();

	exports.default = AddNames;

/***/ }
/******/ ]);