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

var _reactMotion = require('react-motion');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _DateTimeUtil = require('../DateTimeUtil');

var _DateTimeUtil2 = _interopRequireDefault(_DateTimeUtil);

var _F4CalendarDay = require('./F4CalendarDay');

var _F4CalendarDay2 = _interopRequireDefault(_F4CalendarDay);

var _F4FormSeparator = require('../F4FormSeparator/F4FormSeparator');

var _F4FormSeparator2 = _interopRequireDefault(_F4FormSeparator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4CalendarMonth = function (_Component) {
  _inherits(F4CalendarMonth, _Component);

  function F4CalendarMonth(props) {
    _classCallCheck(this, F4CalendarMonth);

    var _this = _possibleConstructorReturn(this, (F4CalendarMonth.__proto__ || Object.getPrototypeOf(F4CalendarMonth)).call(this, props));

    _this.renderWeeks = _this.renderWeeks.bind(_this);
    _this.renderDays = _this.renderDays.bind(_this);
    _this.handleDayClick = _this.handleDayClick.bind(_this);
    return _this;
  }

  _createClass(F4CalendarMonth, [{
    key: 'handleDayClick',
    value: function handleDayClick(day) {
      var onDayClick = this.props.onDayClick;


      if (onDayClick) {
        onDayClick(day);
      }
    }
  }, {
    key: 'renderWeeks',
    value: function renderWeeks() {

      var weeksRange = _underscore2.default.range(0, 7);

      var weekNodes = weeksRange.map(function (i) {
        return _react2.default.createElement(
          'span',
          { key: i, className: 'f4InputDatePicker fullWeekHeader', style: { width: '34px', height: '30px', textAlign: 'center', display: 'inline-block' } },
          _DateTimeUtil2.default.getFullDayOfWeek(i).substring(0, 2)
        );
      });

      return weekNodes;
    }
  }, {
    key: 'renderDays',
    value: function renderDays() {
      var _this2 = this;

      var _props = this.props,
          viewDate = _props.viewDate,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          selectedDate = _props.selectedDate;


      var daysRange = _underscore2.default.range(1, _DateTimeUtil2.default.getDaysInMonth(viewDate) + 1);
      var self = this;
      return daysRange.map(function (i) {
        var date = new Date(viewDate.getFullYear(), viewDate.getMonth(), i);

        var disabled = _DateTimeUtil2.default.isDateDisabled(minDate, maxDate, date, 'both'); // min,max,both,none: last param - is min and max included in comparison

        return _react2.default.createElement(_F4CalendarDay2.default, {
          key: i,
          day: i,
          disabled: disabled,
          onClick: disabled ? null : self.handleDayClick.bind(_this2, i),
          selectedDate: selectedDate,
          viewDate: viewDate
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          viewDate = _props2.viewDate,
          handleSwitchDisplay = _props2.handleSwitchDisplay;


      return _react2.default.createElement(
        _reactMotion.Motion,
        { defaultStyle: { x: 0 }, style: { x: (0, _reactMotion.spring)(1, { stiffness: 300 }) } },
        function (value) {
          return _react2.default.createElement(
            'div',
            { className: 'f4InputDatePicker monthContainer', style: { opacity: value.x } },
            _react2.default.createElement(
              'span',
              {
                className: 'f4InputDatePicker monthTitle',
                style: { display: 'block', width: '100%', textAlign: 'center' }
              },
              _react2.default.createElement(
                'span',
                { onClick: handleSwitchDisplay.bind(null, 'monthList'), className: 'cursor-pointer' },
                _DateTimeUtil2.default.getFullMonth(viewDate, true)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'f4InputDatePicker weeks', style: { display: 'block', width: '100%', textAlign: 'center' } },
              _this3.renderWeeks()
            ),
            _react2.default.createElement(
              'div',
              { style: { display: 'block', width: '240px', margin: '0 auto' } },
              _react2.default.createElement(
                'div',
                { className: 'f4InputDatePicker days', style: { display: 'inline-block', height: '100%', width: '240px' } },
                _this3.renderDays()
              )
            )
          );
        }
      );
    }
  }]);

  return F4CalendarMonth;
}(_react.Component);

exports.default = F4CalendarMonth;


F4CalendarMonth.propTypes = {
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  onDayClick: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object,
  viewDate: _propTypes2.default.object
};
module.exports = exports['default'];