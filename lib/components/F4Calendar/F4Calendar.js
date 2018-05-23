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

var _F4MonthlyView = require('./F4MonthlyView');

var _F4MonthlyView2 = _interopRequireDefault(_F4MonthlyView);

var _F4WeekCalendar = require('./F4WeekCalendar');

var _F4WeekCalendar2 = _interopRequireDefault(_F4WeekCalendar);

var _F4CalendarSchedule = require('./F4CalendarSchedule');

var _F4CalendarSchedule2 = _interopRequireDefault(_F4CalendarSchedule);

var _F4CalendarModal = require('./F4CalendarModal');

var _F4CalendarModal2 = _interopRequireDefault(_F4CalendarModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4Calendar.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var button = {
  previous: _react2.default.createElement('i', { style: { color: '#13304d', fontSize: "1.5em" }, className: 'fa fa-caret-left' }),
  next: _react2.default.createElement('i', { style: { color: '#13304d', fontSize: "1.5em" }, className: 'fa fa-caret-right' }),
  allDay: 'all-day'
};

var F4Calendar = function (_Component) {
  _inherits(F4Calendar, _Component);

  function F4Calendar(props) {
    _classCallCheck(this, F4Calendar);

    return _possibleConstructorReturn(this, (F4Calendar.__proto__ || Object.getPrototypeOf(F4Calendar)).call(this, props));
  }

  _createClass(F4Calendar, [{
    key: 'handleDayClick',
    value: function handleDayClick(day) {
      console.log("Entering 'handleDayClick'");
    }
  }, {
    key: 'handleAddCalEventClick',
    value: function handleAddCalEventClick(event) {
      console.log("Entering 'handleAddCalEventClick'");
    }
  }, {
    key: 'handleSettingsClick',
    value: function handleSettingsClick() {
      alert('Settings clicked');
    }
  }, {
    key: 'handleViewClick',
    value: function handleViewClick() {
      alert('View clicked');
    }

    //START OF F4MONTHLYVIEW COMPONENT FUNCTIONS

  }, {
    key: 'handleDayMouseEnter',
    value: function handleDayMouseEnter(day) {}
  }, {
    key: 'handleDayMouseLeave',
    value: function handleDayMouseLeave(event) {}
  }, {
    key: 'handleEventSchedClick',
    value: function handleEventSchedClick(event) {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onDayClick = _props.onDayClick,
          onDayMouseEnter = _props.onDayMouseEnter,
          onDayMouseLeave = _props.onDayMouseLeave,
          CalendarStore = _props.CalendarStore,
          onAddCalEventClick = _props.onAddCalEventClick,
          onEventSchedClick = _props.onEventSchedClick,
          eventsList = _props.eventsList,
          onSelectSlot = _props.onSelectSlot,
          showEventSched = _props.showEventSched,
          canAddEventStatus = _props.canAddEventStatus,
          showDialog = _props.showDialog,
          errorDescription = _props.errorDescription,
          errorTime = _props.errorTime,
          showEditCalEvt = _props.showEditCalEvt,
          showCreate = _props.showCreate,
          showDelete = _props.showDelete,
          saveBackEnd = _props.saveBackEnd,
          deleteBackEnd = _props.deleteBackEnd;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Tabs,
          { bsStyle: 'pills', defaultActiveKey: 1, animation: false, id: 'uncontrolled-tab-example' },
          _react2.default.createElement(
            _reactBootstrap.Tab,
            { eventKey: 1, title: 'Month' },
            _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(
                _Col2.default,
                { lg: 4, md: 5, sm: 7, xs: 12 },
                _react2.default.createElement('div', { className: 'tab-top' }),
                _react2.default.createElement(
                  'div',
                  { className: 'text-center', style: { marginTop: "10px" } },
                  _react2.default.createElement(_F4MonthlyView2.default, {
                    onDayClick: this.handleDayClick,
                    onDayMouseEnter: this.handleDayMouseEnter,
                    onDayMouseLeave: this.handleDayMouseLeave,
                    CalendarStore: CalendarStore
                  })
                )
              ),
              _react2.default.createElement(
                _Col2.default,
                { lg: 8, md: 7, sm: 5, xs: 12, style: { marginTop: "10px" } },
                _react2.default.createElement(
                  'div',
                  { className: 'schedule' },
                  _react2.default.createElement(_F4CalendarSchedule2.default, {
                    onAddCalEventClick: this.handleAddCalEventClick,
                    onEventSchedClick: this.handleEventSchedClick,
                    CalendarStore: CalendarStore
                  })
                )
              )
            ),
            _react2.default.createElement(_F4CalendarModal2.default, { CalendarStore: CalendarStore,
              showCreate: showCreate,
              showDelete: showDelete,
              saveBackEnd: saveBackEnd,
              deleteBackEnd: deleteBackEnd
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Tab,
            { eventKey: 2, title: 'Week' },
            _react2.default.createElement('div', { className: 'tab-top' }),
            _react2.default.createElement(
              'div',
              { style: { marginTop: "10px", marginLeft: "0px" } },
              _react2.default.createElement(_F4WeekCalendar2.default, {
                contentFormat: {
                  dayFormat: 'ddd DD',
                  timeGutterFormat: 'ha'
                },
                stepNo: 60,
                timeSlot: 1,
                messagesContent: button,
                onAddCalEventClick: this.handleAddCalEventClick,
                showEventSched: showEventSched,
                calendarStore: CalendarStore,
                eventsList: eventsList,
                canAddEventStatus: canAddEventStatus,
                showDialog: showDialog,
                errorDescription: errorDescription,
                errorTime: errorTime,
                showEditCalEvt: showEditCalEvt
              })
            )
          )
        )
      );
    }
  }]);

  return F4Calendar;
}(_react.Component);

F4Calendar.propTypes = {
  onAddCalEventClick: _propTypes2.default.func,
  onSelectSlot: _propTypes2.default.func,
  CalendarStore: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
  eventsList: _propTypes2.default.object,
  onEventSchedClick: _propTypes2.default.func,
  onDayClick: _propTypes2.default.func,
  onDayMouseEnter: _propTypes2.default.func,
  onDayMouseLeave: _propTypes2.default.func,
  showEventSched: _propTypes2.default.bool,
  canAddEventStatus: _propTypes2.default.bool,
  showDialog: _propTypes2.default.bool,
  errorTime: _propTypes2.default.bool,
  errorDescription: _propTypes2.default.bool,
  showEditCalEvt: _propTypes2.default.bool,
  showCreate: _propTypes2.default.bool,
  showDelete: _propTypes2.default.bool,
  modifiers: _propTypes2.default.any,
  modifiersStyles: _propTypes2.default.any
};

F4Calendar.defaultProps = {
  // default props
};

exports.default = F4Calendar;
module.exports = exports['default'];