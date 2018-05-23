'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputCheckbox
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

var F4InputCheckbox = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputCheckbox, _Component);

  function F4InputCheckbox(props) {
    _classCallCheck(this, F4InputCheckbox);

    var _this = _possibleConstructorReturn(this, (F4InputCheckbox.__proto__ || Object.getPrototypeOf(F4InputCheckbox)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(F4InputCheckbox, [{
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
          id = _props2.id,
          name = _props2.name,
          disabled = _props2.disabled,
          checked = _props2.checked,
          value = _props2.value,
          text = _props2.text;


      return _react2.default.createElement(
        'div',
        { className: 'f4InputCheckbox checkbox' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            id: id,
            name: name,
            type: "checkbox",
            onChange: this.handleOnChange,
            disabled: disabled,
            value: value,
            checked: checked }),
          text
        )
      );
    }
  }, {
    key: 'renderInline',
    value: function renderInline() {
      var _props3 = this.props,
          id = _props3.id,
          name = _props3.name,
          disabled = _props3.disabled,
          value = _props3.value,
          checked = _props3.checked,
          text = _props3.text;


      return _react2.default.createElement(
        'label',
        { className: 'f4InputCheckbox checkbox-inline' },
        _react2.default.createElement('input', {
          id: id,
          name: name,
          type: "checkbox",
          onChange: this.handleOnChange,
          disabled: disabled,
          value: value,
          checked: checked }),
        text
      );
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

  return F4InputCheckbox;
}(_react.Component)) || _class;

F4InputCheckbox.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  label: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.any,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  isInline: _propTypes2.default.bool,
  isVisible: _propTypes2.default.bool,
  withLabel: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string
};

F4InputCheckbox.defaultProps = {
  disabled: false,
  isInline: true,
  isVisible: true,
  withLabel: true,
  text: ""
};

exports.default = (0, _asF4FormElement2.default)(F4InputCheckbox);
module.exports = exports['default'];