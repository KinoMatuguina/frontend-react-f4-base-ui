'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputSelect
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputSelect = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputSelect, _Component);

  function F4InputSelect(props) {
    _classCallCheck(this, F4InputSelect);

    var _this = _possibleConstructorReturn(this, (F4InputSelect.__proto__ || Object.getPrototypeOf(F4InputSelect)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(F4InputSelect, [{
    key: 'handleOnChange',
    value: function handleOnChange(value) {
      var _props = this.props,
          name = _props.name,
          disabled = _props.disabled,
          onChange = _props.onChange;

      if (onChange && !disabled) {

        var val = "";
        var lab = "";
        if (value && value.value) val = value.value;
        if (value && value.label) lab = value.label;

        onChange(name, val);
      }
    }
  }, {
    key: 'renderNone',
    value: function renderNone() {
      return _react2.default.createElement('span', { style: { display: 'none' } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          options = _props2.options,
          name = _props2.name,
          placeholder = _props2.placeholder,
          disabled = _props2.disabled,
          isVisible = _props2.isVisible,
          value = _props2.value,
          searchable = _props2.searchable,
          clearable = _props2.clearable;


      if (isVisible) {
        return _react2.default.createElement(_reactSelect2.default, {
          name: name,
          value: value,
          options: options,
          placeholder: placeholder,
          disabled: disabled,
          onChange: this.handleOnChange,
          searchable: searchable,
          clearable: clearable
        });
      }

      return this.renderNone();
    }
  }]);

  return F4InputSelect;
}(_react.Component)) || _class;

F4InputSelect.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.any,
  options: _propTypes2.default.any,
  placeholder: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  isVisible: _propTypes2.default.bool,
  propKey: _propTypes2.default.string,
  listFieldName: _propTypes2.default.string,
  forList: _propTypes2.default.bool,
  withLabel: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string,
  searchable: _propTypes2.default.bool,
  clearable: _propTypes2.default.bool
};
F4InputSelect.defaultProps = {
  disabled: false,
  isVisible: true,
  withLabel: true,
  searchable: true,
  clearable: true
};

exports.default = (0, _asF4FormElement2.default)(F4InputSelect);
module.exports = exports['default'];