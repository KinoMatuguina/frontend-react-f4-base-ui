'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4ToggleSwitch
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4ToggleSwitch = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4ToggleSwitch, _Component);

  function F4ToggleSwitch(props) {
    _classCallCheck(this, F4ToggleSwitch);

    var _this = _possibleConstructorReturn(this, (F4ToggleSwitch.__proto__ || Object.getPrototypeOf(F4ToggleSwitch)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(F4ToggleSwitch, [{
    key: 'handleOnChange',
    value: function handleOnChange(event) {
      var _props = this.props,
          name = _props.name,
          disabled = _props.disabled,
          onChange = _props.onChange;


      if (onChange && !disabled) {
        onChange(name, event.target.checked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          name = _props2.name,
          value = _props2.value,
          isRound = _props2.isRound,
          disabled = _props2.disabled,
          text = _props2.text;


      var slideClassName = "f4ToggleSwitchSlider";

      if (disabled) {}

      if (isRound) {
        slideClassName += " round";
      }

      if (disabled) {
        slideClassName += " disabled";
      }

      return _react2.default.createElement(
        'label',
        { className: 'f4ToggleSwitch' },
        disabled && _react2.default.createElement('input', { id: id, name: name, checked: value, type: 'checkbox', onChange: function onChange() {}, disabled: true }),
        !disabled && _react2.default.createElement('input', { id: id, name: name, checked: value, type: 'checkbox', onChange: this.handleOnChange }),
        _react2.default.createElement('div', { className: slideClassName + " checkbox-inline" }),
        _react2.default.createElement(
          'div',
          { style: { marginLeft: '45px' } },
          _react2.default.createElement(
            'span',
            { style: { fontSize: '13px' } },
            text
          )
        )
      );
    }
  }]);

  return F4ToggleSwitch;
}(_react.Component)) || _class;

exports.default = F4ToggleSwitch;


F4ToggleSwitch.propTypes = {
  isRound: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  text: _propTypes2.default.string
};

F4ToggleSwitch.defaultProps = {
  isRound: true,
  disabled: false
};
module.exports = exports['default'];