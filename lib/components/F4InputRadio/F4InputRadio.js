'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputRadio
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputRadio = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputRadio, _Component);

  function F4InputRadio(props) {
    _classCallCheck(this, F4InputRadio);

    var _this = _possibleConstructorReturn(this, (F4InputRadio.__proto__ || Object.getPrototypeOf(F4InputRadio)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.renderInline = _this.renderInline.bind(_this);
    _this.renderNormal = _this.renderNormal.bind(_this);
    return _this;
  }

  _createClass(F4InputRadio, [{
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
          value = _props2.value;


      var self = this;
      var radioNodes = [];
      if (options && options.length > 0) {
        return _react2.default.createElement(
          'span',
          null,
          options.map(function (option, index) {
            var key = _lodash2.default.uniqueId('radio-');
            return _react2.default.createElement(
              'div',
              { key: key, className: 'f4InputRadio radio' },
              _react2.default.createElement(
                'label',
                null,
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
                option.label
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
          value = _props3.value;

      var self = this;
      var radioNodes = [];
      if (options && options.length > 0) {
        return _react2.default.createElement(
          'span',
          null,
          options.map(function (option, index) {
            var key = _lodash2.default.uniqueId('radio-');
            return _react2.default.createElement(
              'label',
              { key: key, className: 'f4InputRadio radio-inline' },
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
              option.label
            );
          })
        );
      }

      return radioNodes;
    }
  }, {
    key: 'render',
    value: function render() {
      var isInline = this.props.isInline;


      return _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        isInline ? this.renderInline() : this.renderNormal()
      );
    }
  }]);

  return F4InputRadio;
}(_react.Component)) || _class;

F4InputRadio.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.any,
  options: _propTypes2.default.array,
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  isVisible: _propTypes2.default.bool,
  propKey: _propTypes2.default.string,
  listFieldName: _propTypes2.default.string,
  forList: _propTypes2.default.bool,
  withLabel: _propTypes2.default.bool,
  isInline: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string
};

F4InputRadio.defaultProps = {
  disabled: false,
  isInline: true,
  isVisible: true,
  withLabel: true
};

exports.default = (0, _asF4FormElement2.default)(F4InputRadio);
module.exports = exports['default'];