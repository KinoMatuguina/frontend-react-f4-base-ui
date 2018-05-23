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

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _DateTimeUtil = require('../DateTimeUtil');

var _DateTimeUtil2 = _interopRequireDefault(_DateTimeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4CalendarDay = function (_Component) {
  _inherits(F4CalendarDay, _Component);

  function F4CalendarDay() {
    _classCallCheck(this, F4CalendarDay);

    return _possibleConstructorReturn(this, (F4CalendarDay.__proto__ || Object.getPrototypeOf(F4CalendarDay)).apply(this, arguments));
  }

  _createClass(F4CalendarDay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          day = _props.day,
          viewDate = _props.viewDate,
          selectedDate = _props.selectedDate,
          disabled = _props.disabled;


      var overrideStyle = {
        cursor: 'pointer',
        width: '34px',
        height: '34px',
        padding: '8px',
        textAlign: 'center',
        float: 'left'
      };

      var className = "f4InputDatePicker dayContainer";

      if (day === 1) {
        overrideStyle.marginLeft = 34 * _DateTimeUtil2.default.getFirstDayOfWeek(viewDate) + 'px';
      }

      // check if day is selected
      if (viewDate.getFullYear() === selectedDate.getFullYear() && viewDate.getMonth() === selectedDate.getMonth() && day === selectedDate.getDate()) {

        className += "Selected";
      }

      // check if day is current
      var now = new Date();
      if (now.getDate() === day && now.getMonth() === viewDate.getMonth() && now.getFullYear() === viewDate.getFullYear()) {

        className += "Current";
        overrideStyle.backgroundColor = "rgba(0,0,0, 0.5)";
        overrideStyle.color = "white";
        overrideStyle.borderRadius = "50%";
      }

      // check if day is disabled
      if (disabled) {

        className += "Disabled";
        overrideStyle.opacity = 0.5;
      }

      return _react2.default.createElement(
        'div',
        { onClick: onClick, className: className, style: overrideStyle },
        day
      );
    }
  }]);

  return F4CalendarDay;
}(_react.Component);

exports.default = F4CalendarDay;


F4CalendarDay.propTypes = {
  day: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object,
  viewDate: _propTypes2.default.object
};
module.exports = exports['default'];