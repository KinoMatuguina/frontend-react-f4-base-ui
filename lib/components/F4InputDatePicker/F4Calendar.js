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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _DateTimeUtil = require('../DateTimeUtil');

var _DateTimeUtil2 = _interopRequireDefault(_DateTimeUtil);

var _F4CalendarMonth = require('./F4CalendarMonth');

var _F4CalendarMonth2 = _interopRequireDefault(_F4CalendarMonth);

var _F4CalendarMonthList = require('./F4CalendarMonthList');

var _F4CalendarMonthList2 = _interopRequireDefault(_F4CalendarMonthList);

var _F4CalendarYear = require('./F4CalendarYear');

var _F4CalendarYear2 = _interopRequireDefault(_F4CalendarYear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4Calendar = function (_Component) {
  _inherits(F4Calendar, _Component);

  function F4Calendar(props) {
    _classCallCheck(this, F4Calendar);

    var _this = _possibleConstructorReturn(this, (F4Calendar.__proto__ || Object.getPrototypeOf(F4Calendar)).call(this, props));

    _this.handleDayClick = _this.handleDayClick.bind(_this);
    _this.handleYearClick = _this.handleYearClick.bind(_this);
    _this.handleMonthClick = _this.handleMonthClick.bind(_this);
    _this.renderYears = _this.renderYears.bind(_this);
    _this.renderMonths = _this.renderMonths.bind(_this);
    _this.renderMonthList = _this.renderMonthList.bind(_this);
    return _this;
  }

  _createClass(F4Calendar, [{
    key: 'handleDayClick',
    value: function handleDayClick(day) {
      var _props = this.props,
          onChange = _props.onChange,
          viewDate = _props.viewDate;


      if (onChange) {
        onChange(_DateTimeUtil2.default.setDay(viewDate, day), true);
      }
    }
  }, {
    key: 'handleMonthClick',
    value: function handleMonthClick(month) {
      var _props2 = this.props,
          onChange = _props2.onChange,
          viewDate = _props2.viewDate;


      if (onChange) {
        onChange(_DateTimeUtil2.default.setMonth(viewDate, month), true);
      }
    }
  }, {
    key: 'handleYearClick',
    value: function handleYearClick(year) {
      var _props3 = this.props,
          selectedDate = _props3.selectedDate,
          onChange = _props3.onChange;

      var viewDate = _DateTimeUtil2.default.setYear(selectedDate, year);

      if (onChange) {
        onChange(viewDate, false);
      }
    }
  }, {
    key: 'renderYears',
    value: function renderYears() {
      var _props4 = this.props,
          selectedDate = _props4.selectedDate,
          id = _props4.id,
          minDate = _props4.minDate,
          maxDate = _props4.maxDate;


      return _react2.default.createElement(_F4CalendarYear2.default, {
        id: id,
        selectedDate: selectedDate,
        minDate: minDate,
        maxDate: maxDate,
        handleYearClick: this.handleYearClick
      });
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var _props5 = this.props,
          maxDate = _props5.maxDate,
          minDate = _props5.minDate,
          selectedDate = _props5.selectedDate,
          viewDate = _props5.viewDate,
          changeViewMonth = _props5.changeViewMonth,
          handleSwitchDisplay = _props5.handleSwitchDisplay;


      return _react2.default.createElement(
        'div',
        { className: 'f4InputDatePicker calendar', style: { position: 'relative', overflow: 'hidden' } },
        _react2.default.createElement(
          'div',
          { className: 'calendarArrow', onClick: changeViewMonth.bind(this, 'left', -1), style: { position: 'absolute', top: 0, left: '15px', cursor: 'pointer' } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-left' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'calendarArrow', onClick: changeViewMonth.bind(this, 'right', 1), style: { position: 'absolute', top: 0, right: '15px', cursor: 'pointer' } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-right' })
        ),
        _react2.default.createElement(_F4CalendarMonth2.default, {
          key: viewDate.getMonth(),
          maxDate: maxDate,
          minDate: minDate,
          onDayClick: this.handleDayClick,
          selectedDate: selectedDate,
          viewDate: viewDate,
          handleSwitchDisplay: handleSwitchDisplay
        })
      );
    }
  }, {
    key: 'renderMonthList',
    value: function renderMonthList() {
      var _props6 = this.props,
          maxDate = _props6.maxDate,
          minDate = _props6.minDate,
          selectedDate = _props6.selectedDate,
          viewDate = _props6.viewDate;


      return _react2.default.createElement(_F4CalendarMonthList2.default, {
        minDate: minDate,
        maxDate: maxDate,
        selectedDate: selectedDate,
        viewDate: viewDate,
        handleMonthClick: this.handleMonthClick
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          display = _props7.display,
          id = _props7.id;


      var overrideStyle = {
        display: 'block',
        minHeight: '280px',
        maxHeight: '280px'
      };

      if (display === 'years') {
        overrideStyle.overflowY = 'scroll';
        overrideStyle.overflowX = 'hidden';
      }

      return _react2.default.createElement(
        'div',
        { id: id + '__f4InputDatePickerCalendarContainer', className: 'f4InputDatePicker calendarContainer', style: overrideStyle },
        display === 'months' && this.renderMonths(),
        display === 'years' && this.renderYears(),
        display === 'monthList' && this.renderMonthList()
      );
    }
  }]);

  return F4Calendar;
}(_react.Component);

exports.default = F4Calendar;


F4Calendar.propTypes = {
  display: _propTypes2.default.string,
  maxDate: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  selectedDate: _propTypes2.default.object,
  viewDate: _propTypes2.default.object
};

F4Calendar.defaultProps = {
  display: 'months',
  selectedDate: new Date()
};
module.exports = exports['default'];