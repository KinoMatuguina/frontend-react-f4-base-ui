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

var _NavItem = require('react-bootstrap/lib/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _Tooltip = require('react-bootstrap/lib/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _UUIDUtil = require('../UUIDUtil');

var UUIDUtil = _interopRequireWildcard(_UUIDUtil);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4ToolbarElement = function (_Component) {
  _inherits(F4ToolbarElement, _Component);

  function F4ToolbarElement(props) {
    _classCallCheck(this, F4ToolbarElement);

    return _possibleConstructorReturn(this, (F4ToolbarElement.__proto__ || Object.getPrototypeOf(F4ToolbarElement)).call(this, props));
  }

  _createClass(F4ToolbarElement, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          text = _props.text,
          iconSize = _props.iconSize,
          onClick = _props.onClick;


      var tooltip = _react2.default.createElement(
        _Tooltip2.default,
        { id: 'tooltip-' + UUIDUtil.get() },
        text
      );

      var overrideStyle = {
        fontSize: iconSize + 'px !important'
      };

      return _react2.default.createElement(
        'div',
        { className: 'f4ToolbarElementContainer' },
        _react2.default.createElement(
          'span',
          { className: 'f4ToolbarElement' },
          _react2.default.createElement(
            _OverlayTrigger2.default,
            {
              overlay: tooltip,
              placement: 'bottom'
            },
            _react2.default.createElement(
              'button',
              { style: overrideStyle, className: 'btn btn-link', onClick: onClick },
              _react2.default.createElement(_reactFontawesome2.default, { name: icon })
            )
          )
        )
      );
    }
  }]);

  return F4ToolbarElement;
}(_react.Component);

exports.default = F4ToolbarElement;


F4ToolbarElement.propTypes = {
  children: _propTypes2.default.any,
  onClick: _propTypes2.default.func.isRequired,
  icon: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  iconSize: _propTypes2.default.number
};

F4ToolbarElement.defaultProps = {
  iconSize: 15
};
module.exports = exports['default'];