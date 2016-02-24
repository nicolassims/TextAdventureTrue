/*  AUTHOR: Nicolas Sims
 *  VERSION: 1
 *  CREATED: 2.18.2016
 *  PURPOSE: Create a text adventure.
 */

'use strict';

var _ClickHandler = require('./ClickHandler.js');

var _ClickHandler2 = _interopRequireDefault(_ClickHandler);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var main = function main() {
    _classCallCheck(this, main);

    new _ClickHandler2.default.FadeButton();
};

window.onload = function () {
    new main();
};