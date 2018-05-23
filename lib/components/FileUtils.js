'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * FileUtils
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _fileType = require('file-type');

var _fileType2 = _interopRequireDefault(_fileType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileUtils = function () {
  function FileUtils() {
    _classCallCheck(this, FileUtils);
  }

  _createClass(FileUtils, null, [{
    key: 'validateFileType',
    value: function validateFileType(file, accept, validTypeCB) {
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        var int32View = new Uint8Array(e.target.result);
        var type = (0, _fileType2.default)(int32View);

        var splittedType = type.mime.split('/');
        var validType = false;
        if (accept && typeof accept === 'string') {
          console.log('TYPE of accept: ' + (typeof accept === 'undefined' ? 'undefined' : _typeof(accept)));

          var acceptedType = accept.split('/');

          if (acceptedType[1] === "*") {
            if (splittedType[0] === acceptedType[0]) {
              validType = true;
            }
          } else {
            if (type === accept) {
              validType = true;
            }
          }
        }

        if (validType) {
          validTypeCB && validTypeCB(type.mime);
        }
      };
      fileReader.readAsArrayBuffer(file);
    }
  }]);

  return FileUtils;
}();

exports.default = FileUtils;
module.exports = exports['default'];