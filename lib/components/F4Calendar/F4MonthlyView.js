'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _reactBootstrap = require('react-bootstrap');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactDayPicker = require('react-day-picker');

var _reactDayPicker2 = _interopRequireDefault(_reactDayPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4MonthlyView.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var moment = require('moment');

var F4MonthlyView = function (_Component) {
  _inherits(F4MonthlyView, _Component);

  function F4MonthlyView(props) {
    _classCallCheck(this, F4MonthlyView);

    var _this = _possibleConstructorReturn(this, (F4MonthlyView.__proto__ || Object.getPrototypeOf(F4MonthlyView)).call(this, props));

    _this.handleDayClick = _this.handleDayClick.bind(_this);
    _this.handleDayMouseEnter = _this.handleDayMouseEnter.bind(_this);
    _this.handleDayMouseLeave = _this.handleDayMouseLeave.bind(_this);
    return _this;
  }

  _createClass(F4MonthlyView, [{
    key: 'handleDayClick',
    value: function handleDayClick(day, _ref) {
      var selected = _ref.selected;
      var _props = this.props,
          onDayClick = _props.onDayClick,
          CalendarStore = _props.CalendarStore,
          checkDay = _props.checkDay;

      var selectedDay = CalendarStore.selectedDay;
      selectedDay = selected ? undefined : day;
      CalendarStore.updateSelectedDay(selectedDay);
      this.checkDay(selectedDay);
      onDayClick(day);
    }
  }, {
    key: 'handleDayMouseEnter',
    value: function handleDayMouseEnter(day, _ref2, event) {
      var calEvent = _ref2.calEvent;
      var _props2 = this.props,
          onDayMouseEnter = _props2.onDayMouseEnter,
          CalendarStore = _props2.CalendarStore;

      if (calEvent) {
        CalendarStore.showCalEvtTooltip = true;
        CalendarStore.updateHoveredDayCell(event.target);
      }
      CalendarStore.updateHoveredDay(day);
      onDayMouseEnter(day);
    }
  }, {
    key: 'handleDayMouseLeave',
    value: function handleDayMouseLeave(event) {
      var _props3 = this.props,
          onDayMouseLeave = _props3.onDayMouseLeave,
          CalendarStore = _props3.CalendarStore;

      CalendarStore.showCalEvtTooltip = false;
      onDayMouseLeave(event);
    }
  }, {
    key: 'checkDay',
    value: function checkDay(data) {
      var CalendarStore = this.props.CalendarStore;

      if (data != undefined) {
        if (data < moment().subtract(1, 'days').endOf('day')) {
          CalendarStore.canAddCalEvent = false;
          if (CalendarStore.events.filter(function (data, index) {
            return moment(CalendarStore.selectedDay).format("MM, DD, YYYY") == moment(data.start).format("MM, DD, YYYY");
          }).length > 0) {
            CalendarStore.showEventSched = true;
          } else {
            CalendarStore.showEventSched = false;
          }
        } else {
          CalendarStore.canAddCalEvent = true;
          if (CalendarStore.events.filter(function (data, index) {
            return moment(CalendarStore.selectedDay).format("MM, DD, YYYY") == moment(data.start).format("MM, DD, YYYY");
          }).length > 0) {
            CalendarStore.showEventSched = true;
          } else {
            CalendarStore.showEventSched = false;
          }
        }
      } else {
        CalendarStore.canAddCalEvent = false;
        CalendarStore.showEventSched = false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var CalendarStore = this.props.CalendarStore;

      var dispHoveredDay = moment(CalendarStore.hoveredDay).format("MMMM DD, YYYY").toUpperCase();
      //CALENDAR EVENT
      var calEvent = {
        calEvent: CalendarStore.events.map(function (data, index) {
          return data.start;
        }),
        holiday: CalendarStore.holidays.map(function (data, index) {
          return data.start;
        })
      };
      var calEventStyles = {
        calEvent: {
          color: '#ffc107',
          backgroundColor: '#fffdee'
        },
        holiday: {
          color: '#8f1c1c',
          backgroundColor: '#ffd7d1'
        },
        outside: {
          backgroundColor: 'white'
        }
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactDayPicker2.default, {
          selectedDays: CalendarStore.selectedDay,
          modifiers: calEvent,
          modifiersStyles: calEventStyles,
          onDayClick: this.handleDayClick,
          onDayMouseEnter: this.handleDayMouseEnter,
          onDayMouseLeave: this.handleDayMouseLeave,
          todayButton: 'Go to Today',
          showOutsideDays: true
        }),
        _react2.default.createElement(
          _reactHelmet2.default,
          null,
          _react2.default.createElement(
            'style',
            null,
            this.props.dayPickerStyles
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Overlay,
          {
            show: CalendarStore.showCalEvtTooltip,
            target: CalendarStore.hoveredDayCell,
            placement: 'right',
            animation: false
          },
          _react2.default.createElement(
            _reactBootstrap.Popover,
            { id: 'calEvtTooltip', title: 'Calendar Event' },
            _react2.default.createElement(
              'span',
              { style: { color: "#ffc107" } },
              dispHoveredDay
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              null,
              'Number of Events: \xA0',
              _react2.default.createElement(
                'strong',
                null,
                CalendarStore.events.filter(function (data, index) {
                  return moment(CalendarStore.hoveredDay).format("MM, DD, YYYY") == moment(data.start).format("MM, DD, YYYY");
                }).length
              )
            )
          )
        )
      );
    }
  }]);

  return F4MonthlyView;
}(_react.Component);

F4MonthlyView.propTypes = {
  // props definition
  CalendarStore: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,

  onDayClick: _propTypes2.default.func,
  onDayMouseEnter: _propTypes2.default.func,
  onDayMouseLeave: _propTypes2.default.func,
  onAddCalEventClick: _propTypes2.default.func,
  onEventSchedClick: _propTypes2.default.func,
  dayPickerStyles: _propTypes2.default.string
};

F4MonthlyView.defaultProps = {
  // default props
  // modifiers : {
  //   calEvent: 
  //     CalendarStore.events.map((data, index) => {
  //       return data.start;
  //     })
  // },
  // modifiersStyles: {
  //   calEvent: {
  //     color: '#ffc107',
  //     backgroundColor: '#fffdee',
  //   },
  //   outside: {
  //     backgroundColor: 'white',
  //   },
  // },
  dayPickerStyles: '\n    .DayPicker-Day--today {\n      background-color: #13304d;\n      color: white;\n    }\n    .DayPicker:not(.DayPicker--interactionDisabled)\n      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside).DayPicker-Day--today:hover {\n      background-color: #13304d;\n      color: white;\n    }\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--today {\n      background-color: #13304d;\n      color: white;\n    }\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--today:hover {\n      background-color: #13304d;\n      color: white;\n    }\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {\n      color: #f0f8ff;\n      background-color: lightslategray;\n      border-radius: 0px;\n    }\n    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {\n      background-color: gray;\n    }\n    .DayPicker:not(.DayPicker--interactionDisabled)\n      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {\n      background-color: #f0f8ff;\n      color: gray;\n      border-radius: 0px;\n    }\n    .DayPicker-Day {\n      border: 1px solid lightgray;\n      padding: 1rem;\n    }\n    .DayPicker-Caption > div {\n      font-size: 2rem;\n      font-weight: 500;\n    }\n    .DayPicker-Weekday {\n      font-size: 1.25rem;\n    }\n    .DayPicker-NavButton {\n      top: 1.15rem;\n      right: 0.50rem;\n      margin-top: 2px;\n      width: 2rem;\n      height: 2rem;\n    }\n    .DayPicker-NavButton--prev {\n      margin-right: 4rem;\n    }\n    .DayPicker-TodayButton {\n      margin-top: 0.5rem;\n      color: red;\n    }\n  '
};

exports.default = F4MonthlyView;
module.exports = exports['default'];