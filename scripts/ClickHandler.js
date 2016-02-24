"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by Nicolas on 2/23/2016.
 */

var ClickHandler = function () {
    function ClickHandler() {
        _classCallCheck(this, ClickHandler);

        document.getElementById("beginButton").addEventListener("click", function () {
            ClickHandler.FadeButton();
        });
    }

    _createClass(ClickHandler, null, [{
        key: "FadeButton",
        value: function FadeButton() {
            document.getElementById("classyJoke").value = "hidden";
        }
    }]);

    return ClickHandler;
}();

exports.default = ClickHandler;