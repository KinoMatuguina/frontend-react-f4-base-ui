'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4StaticText
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4StaticText = function (_Component) {
  _inherits(F4StaticText, _Component);

  function F4StaticText(props) {
    _classCallCheck(this, F4StaticText);

    var _this = _possibleConstructorReturn(this, (F4StaticText.__proto__ || Object.getPrototypeOf(F4StaticText)).call(this, props));

    _this.defaultDateFormat = "MM/DD/YYYY";
    _this.renderValue = _this.renderValue.bind(_this);
    return _this;
  }

  _createClass(F4StaticText, [{
    key: 'renderValue',
    value: function renderValue() {
      var _props = this.props,
          type = _props.type,
          value = _props.value,
          dateFormat = _props.dateFormat;


      var formattedValue = value;

      if (type === 'date') {

        formattedValue = 'Invalid Date';

        if ((0, _moment2.default)(value).isValid()) {
          if ((0, _moment2.default)(value).format(dateFormat) === 'Invalid Date') {
            formattedValue = (0, _moment2.default)(value).format(this.defaultDateFormat);
          } else {
            formattedValue = (0, _moment2.default)(value).format(dateFormat);
          }
        }
      } else if (type === 'dateRange') {

        formattedValue = 'Invalid Dates';

        if (value && value.map && value.length === 2) {

          if ((0, _moment2.default)(value[0]).isValid() && (0, _moment2.default)(value[1]).isValid()) {
            var fromDate = (0, _moment2.default)(value[0]).format(dateFormat);
            var toDate = (0, _moment2.default)(value[1]).format(dateFormat);

            if (fromDate === 'Invalid Date') {
              fromDate = (0, _moment2.default)(value[0]).format(this.defaultDateFormat);
            }
            if (toDate === 'Invalid Date') {
              toDate = (0, _moment2.default)(value[1]).format(this.defaultDateFormat);
            }

            formattedValue = fromDate + ' to ' + toDate;
          }
        }
      }

      return formattedValue;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          name = _props2.name,
          disabled = _props2.disabled,
          overrideStyle = _props2.overrideStyle;


      return _react2.default.createElement(
        _FormControl2.default.Static,
        { className: 'f4StaticText', style: overrideStyle },
        this.renderValue()
      );
    }
  }]);

  return F4StaticText;
}(_react.Component);

F4StaticText.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  isVisible: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string,
  overrideStyle: _propTypes2.default.any,
  type: _propTypes2.default.string,
  dateFormat: _propTypes2.default.string
};

F4StaticText.defaultProps = {
  disabled: false,
  isVisible: true,
  overrideStyle: {},
  type: "text",
  dateFormat: "MM/DD/YYYY"
};

exports.default = (0, _asF4FormElement2.default)(F4StaticText);
module.exports = exports['default'];