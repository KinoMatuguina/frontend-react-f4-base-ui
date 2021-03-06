'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _F4Footer = require('../../components/F4Footer/F4Footer');

var _F4Footer2 = _interopRequireDefault(_F4Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4AbsoluteCenterContainer = function (_Component) {
  _inherits(F4AbsoluteCenterContainer, _Component);

  function F4AbsoluteCenterContainer(props) {
    _classCallCheck(this, F4AbsoluteCenterContainer);

    return _possibleConstructorReturn(this, (F4AbsoluteCenterContainer.__proto__ || Object.getPrototypeOf(F4AbsoluteCenterContainer)).call(this, props));
  }

  _createClass(F4AbsoluteCenterContainer, [{
    key: 'render',
    value: function render() {
      var footer = [];
      var otherChildren = [];

      var children = this.props.children;


      if (typeof children !== 'undefined' && children) {
        if (children.map && children.length > 0) {
          _underscore2.default.map(this.props.children, function (child) {
            if (child.type === _F4Footer2.default) {
              footer.push(child);
            } else {
              otherChildren.push(child);
            }
          });
        } else {
          if (children.type === _F4Footer2.default) {
            footer.push(children);
          } else {
            otherChildren.push(children);
          }
        }
      }

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'f4AbsoluteCenter' },
            otherChildren
          ),
          _react2.default.createElement('div', { id: 'push' })
        ),
        footer
      );
    }
  }]);

  return F4AbsoluteCenterContainer;
}(_react.Component);

exports.default = F4AbsoluteCenterContainer;
module.exports = exports['default'];