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

var _Glyphicon = require('react-bootstrap/lib/Glyphicon');

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _NavItem = require('react-bootstrap/lib/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4NavbarActionElement = function (_Component) {
  _inherits(F4NavbarActionElement, _Component);

  function F4NavbarActionElement(props) {
    _classCallCheck(this, F4NavbarActionElement);

    return _possibleConstructorReturn(this, (F4NavbarActionElement.__proto__ || Object.getPrototypeOf(F4NavbarActionElement)).call(this, props));
  }

  _createClass(F4NavbarActionElement, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          onClick = _props.onClick;

      return _react2.default.createElement(
        _NavItem2.default,
        { onSelect: onClick },
        _react2.default.createElement(_reactFontawesome2.default, { name: icon })
      );
    }
  }]);

  return F4NavbarActionElement;
}(_react.Component);

exports.default = F4NavbarActionElement;


F4NavbarActionElement.propTypes = {
  onClick: _propTypes2.default.func,
  icon: _propTypes2.default.string,
  text: _propTypes2.default.string
};
module.exports = exports['default'];