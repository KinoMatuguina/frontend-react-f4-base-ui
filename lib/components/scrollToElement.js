'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollToElement(containerId, elementId) {
  var container = (0, _jquery2.default)(containerId);
  var element = (0, _jquery2.default)(elementId);

  console.log(container.scrollTop());
  console.log(element.offset());

  if (element && container) {
    container.animate({
      scrollTop: element.offset().top - container.offset().top + container.scrollTop() - container.height() / 2
    });
  }
} // http://stackoverflow.com/questions/2905867/how-to-scroll-to-specific-item-using-jquery

exports.default = scrollToElement;
module.exports = exports['default'];