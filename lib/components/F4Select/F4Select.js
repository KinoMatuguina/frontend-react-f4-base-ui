'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4Select = (_temp = _class = function (_Component) {
  _inherits(F4Select, _Component);

  function F4Select(props) {
    _classCallCheck(this, F4Select);

    var _this = _possibleConstructorReturn(this, (F4Select.__proto__ || Object.getPrototypeOf(F4Select)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.state = {
      value: _this.props.defaultValue
    };
    return _this;
  }

  _createClass(F4Select, [{
    key: 'handleChange',
    value: function handleChange(value) {

      this.setState({ value: value });
      var name = this.props.name;

      if (this.props.onChange && !this.props.disabled) {

        var val = "";
        var lab = "";
        if (value && value.value) val = value.value;
        if (value && value.label) lab = value.label;
        this.props.onChange(name, val, lab);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          name = _props.name,
          placeholder = _props.placeholder,
          disabled = _props.disabled;


      return _react2.default.createElement(_reactSelect2.default, {
        name: name,
        value: this.state.value,
        options: options,
        placeholder: placeholder,
        disabled: disabled,
        onChange: this.handleChange
      });
    }
  }]);

  return F4Select;
}(_react.Component), _class.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.any,
  domRef: _propTypes2.default.string,
  options: _propTypes2.default.any,
  placeholder: _propTypes2.default.placeholder,
  disabled: _propTypes2.default.bool
}, _class.defaultProps = {
  disabled: false
}, _temp);
exports.default = F4Select;
module.exports = exports['default'];