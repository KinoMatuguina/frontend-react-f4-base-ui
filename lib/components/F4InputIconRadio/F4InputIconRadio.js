'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputIconRadio
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputIconRadio = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputIconRadio, _Component);

  function F4InputIconRadio(props) {
    _classCallCheck(this, F4InputIconRadio);

    var _this = _possibleConstructorReturn(this, (F4InputIconRadio.__proto__ || Object.getPrototypeOf(F4InputIconRadio)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(F4InputIconRadio, [{
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
    key: 'renderNormal',
    value: function renderNormal() {
      var _props2 = this.props,
          options = _props2.options,
          name = _props2.name,
          disabled = _props2.disabled,
          value = _props2.value,
          color = _props2.color;


      var self = this;
      var radioNodes = [];
      if (options && options.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: 'f4IconRadioContainer' },
          options.map(function (option, index) {
            var key = 'radio-' + option.value;
            return _react2.default.createElement(
              'div',
              { key: key, className: 'f4IconRadio radio' },
              _react2.default.createElement(
                'label',
                { style: { fontSize: '0.99em', verticalAlign: 'middle', paddingLeft: '0 !important' } },
                disabled && _react2.default.createElement('input', {
                  name: name,
                  type: "radio",
                  checked: option.value === value,
                  onChange: self.handleOnChange,
                  value: option.value,
                  disabled: true }),
                !disabled && _react2.default.createElement('input', {
                  name: name,
                  type: "radio",
                  checked: option.value === value,
                  onChange: self.handleOnChange,
                  value: option.value }),
                _react2.default.createElement(
                  'span',
                  { className: 'cr' },
                  _react2.default.createElement('i', { style: { color: color }, className: 'cr-icon fa fa-circle' })
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'cr-text' },
                  option.label
                )
              )
            );
          })
        );
      }

      return radioNodes;
    }
  }, {
    key: 'renderInline',
    value: function renderInline() {
      var _props3 = this.props,
          name = _props3.name,
          options = _props3.options,
          disabled = _props3.disabled,
          value = _props3.value,
          color = _props3.color;

      var self = this;
      var radioNodes = [];
      if (options && options.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: 'f4InputIconRadioContainer' },
          options.map(function (option, index) {
            var key = 'radio-' + option.value;
            return _react2.default.createElement(
              'div',
              { key: key, className: 'f4IconRadio radio', style: { float: 'left' } },
              _react2.default.createElement(
                'label',
                { style: { fontSize: '0.99em', verticalAlign: 'middle', paddingLeft: '0 !important' } },
                disabled && _react2.default.createElement('input', {
                  name: name,
                  type: "radio",
                  onChange: self.handleOnChange,
                  checked: option.value === value,
                  value: option.value,
                  disabled: true }),
                !disabled && _react2.default.createElement('input', {
                  name: name,
                  type: "radio",
                  checked: option.value === value,
                  onChange: self.handleOnChange,
                  value: option.value }),
                _react2.default.createElement(
                  'span',
                  { className: 'cr' },
                  _react2.default.createElement('i', { style: { color: color }, className: 'cr-icon fa fa-circle' })
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'cr-text' },
                  option.label
                )
              )
            );
          })
        );
      }

      return radioNodes;
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.props.isInline) {
        return this.renderInline();
      }
      return this.renderNormal();
    }
  }]);

  return F4InputIconRadio;
}(_react.Component)) || _class;

F4InputIconRadio.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  label: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  isInline: _propTypes2.default.bool,
  isVisible: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  fieldLabel: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  color: _propTypes2.default.string
};

F4InputIconRadio.defaultProps = {
  disabled: false,
  isInline: false,
  isVisible: true,
  withLabel: true,
  text: "",
  color: "#2d71b3"
};

exports.default = (0, _asF4FormElement2.default)(F4InputIconRadio);
module.exports = exports['default'];