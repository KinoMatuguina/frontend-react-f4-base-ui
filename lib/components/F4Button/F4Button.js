'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4Button = function (_Component) {
  _inherits(F4Button, _Component);

  function F4Button() {
    _classCallCheck(this, F4Button);

    return _possibleConstructorReturn(this, (F4Button.__proto__ || Object.getPrototypeOf(F4Button)).apply(this, arguments));
  }

  _createClass(F4Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          pullRight = _props.pullRight,
          pullLeft = _props.pullLeft,
          onClick = _props.onClick,
          size = _props.size,
          block = _props.block,
          halfBlock = _props.halfBlock,
          disabled = _props.disabled,
          style = _props.style,
          isLoading = _props.isLoading,
          children = _props.children,
          loadingText = _props.loadingText,
          type = _props.type;


      var floatStyle = {};
      var overrideStyle = {};
      if (pullRight) {
        floatStyle = {
          float: 'right !important'
        };
      } else if (!pullRight && pullLeft) {
        floatStyle = {
          float: 'left !important'
        };
      }

      if (halfBlock) {
        overrideStyle.width = '50%';
      }

      if (block) {
        overrideStyle.width = '100%';
      }

      return _react2.default.createElement(
        _Button2.default,
        {
          onClick: onClick,
          bsSize: size,
          bsClass: 'f4Button ' + style + ' btn',
          bsStyle: style,
          disabled: disabled || isLoading,
          type: type,
          style: _extends({}, floatStyle, overrideStyle) },
        isLoading && _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { style: { marginRight: '15px' } },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'spinner', style: { color: 'white' }, spin: true })
          ),
          loadingText
        ),
        !isLoading && children
      );
    }
  }]);

  return F4Button;
}(_react.Component);

exports.default = F4Button;


F4Button.propTypes = {
  children: _propTypes2.default.any,
  size: _propTypes2.default.string,
  type: _propTypes2.default.string,
  block: _propTypes2.default.bool,
  halfBlock: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  pullRight: _propTypes2.default.bool,
  pullLeft: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  overrideStyle: _propTypes2.default.any,
  isLoading: _propTypes2.default.bool,
  loadingText: _propTypes2.default.string
};
F4Button.defaultProps = {
  size: "sm",
  style: "default",
  block: false,
  halfBlock: false,
  pullRight: false,
  pullLeft: false,
  overrideStyle: {},
  isLoading: false,
  loadingText: "PLEASE WAIT..."
};
module.exports = exports['default'];