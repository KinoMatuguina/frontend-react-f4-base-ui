'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputField
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputField = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputField, _Component);

  function F4InputField(props) {
    _classCallCheck(this, F4InputField);

    var _this = _possibleConstructorReturn(this, (F4InputField.__proto__ || Object.getPrototypeOf(F4InputField)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.handleOnFocus = _this.handleOnFocus.bind(_this);
    _this.handleOnBlur = _this.handleOnBlur.bind(_this);
    return _this;
  }

  _createClass(F4InputField, [{
    key: 'handleOnChange',
    value: function handleOnChange(event) {
      var _props = this.props,
          name = _props.name,
          disabled = _props.disabled,
          onChange = _props.onChange;


      if (onChange && !disabled) {
        onChange(name, event.target.value);
      }
    }
  }, {
    key: 'handleOnFocus',
    value: function handleOnFocus(event) {
      var _props2 = this.props,
          onFocus = _props2.onFocus,
          name = _props2.name;


      if (typeof onFocus !== 'undefined' && onFocus) {
        onFocus(name);
      }
    }
  }, {
    key: 'handleOnBlur',
    value: function handleOnBlur(event) {
      var _props3 = this.props,
          onBlur = _props3.onBlur,
          name = _props3.name;


      if (typeof onBlur !== 'undefined' && onBlur) {
        onBlur(name);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          id = _props4.id,
          name = _props4.name,
          type = _props4.type,
          placeholder = _props4.placeholder,
          disabled = _props4.disabled,
          value = _props4.value,
          size = _props4.size,
          maxLength = _props4.maxLength,
          style = _props4.style,
          required = _props4.required;


      if (!size || typeof size === 'undefined') {
        return _react2.default.createElement('input', {
          className: 'f4InputField form-control',
          id: id,
          name: name,
          type: type,
          placeholder: placeholder,
          disabled: disabled,
          value: value,
          maxLength: maxLength,
          style: _extends({ width: 'initial !important' }, style),
          onChange: this.handleOnChange,
          onFocus: this.handleOnFocus,
          onBlur: this.handleOnBlur,
          required: required });
      } else {
        return _react2.default.createElement('input', {
          className: 'f4InputField form-control',
          id: id,
          name: name,
          type: type,
          placeholder: placeholder,
          disabled: disabled,
          value: value,
          maxLength: maxLength,
          size: size,
          style: _extends({ width: 'initial !important' }, style),
          onChange: this.handleOnChange,
          onFocus: this.handleOnFocus,
          onBlur: this.handleOnBlur,
          required: required });
      }
    }
  }]);

  return F4InputField;
}(_react.Component)) || _class;

F4InputField.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  isVisible: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string,
  isCentered: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  maxLength: _propTypes2.default.string,
  style: _propTypes2.default.object,
  required: _propTypes2.default.bool
};

F4InputField.defaultProps = {
  disabled: false,
  isVisible: true,
  maxLength: "255"
};

exports.default = (0, _asF4FormElement2.default)(F4InputField);
module.exports = exports['default'];