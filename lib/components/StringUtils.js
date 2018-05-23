"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* StringUtils
*/

var StringUtils = function () {
  function StringUtils() {
    _classCallCheck(this, StringUtils);
  }

  _createClass(StringUtils, null, [{
    key: "getLettersForAvatar",
    value: function getLettersForAvatar(string) {
      var splittedText = string.split(" ");

      if (splittedText.length >= 2) {
        return splittedText[0].charAt(0) + "" + splittedText[1].charAt(0);
      } else if (splittedText.length === 1) {
        return splittedText[0].charAt(0);
      } else {
        return "?";
      }
    }
  }]);

  return StringUtils;
}();

exports.default = StringUtils;
module.exports = exports["default"];