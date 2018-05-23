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

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactBigCalendar = require('react-big-calendar');

var _reactBigCalendar2 = _interopRequireDefault(_reactBigCalendar);

var _F4CalendarEvent = require('./F4CalendarEvent');

var _F4CalendarEvent2 = _interopRequireDefault(_F4CalendarEvent);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * CheckBox.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

_reactBigCalendar2.default.setLocalizer(_reactBigCalendar2.default.momentLocalizer(_moment2.default));
//import {Calendar, CalendarControls} from 'react-yearly-calendar';
var allViews = Object.keys(_reactBigCalendar2.default.Views).map(function (k) {
  return _reactBigCalendar2.default.Views[k];
});

var currentStartHour = "";
var countEvent = 0;
var counter = 1;
var removecounter = 1;
var currentId = 0;
var removeTitle = "";
var removeStartTime = "";
var color = false;
var button = {
  previous: _react2.default.createElement('i', { style: { color: '#13304d', fontSize: "1.5em" }, className: 'fa fa-caret-left' }),
  next: _react2.default.createElement('i', { style: { color: '#13304d', fontSize: "1.5em" }, className: 'fa fa-caret-right' }),
  allDay: 'all-day'
};

var F4WeekCalendar = function (_Component) {
  _inherits(F4WeekCalendar, _Component);

  function F4WeekCalendar(props) {
    _classCallCheck(this, F4WeekCalendar);

    var _this = _possibleConstructorReturn(this, (F4WeekCalendar.__proto__ || Object.getPrototypeOf(F4WeekCalendar)).call(this, props));

    _this.handleAddCalEventClick = _this.handleAddCalEventClick.bind(_this);
    _this.hrsSelect = _this.hrsSelect.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleSubmitCalEvent = _this.handleSubmitCalEvent.bind(_this);
    _this.onChangeTime = _this.onChangeTime.bind(_this);
    _this.removeEvent = _this.removeEvent.bind(_this);
    _this.deleteEvent = _this.deleteEvent.bind(_this);
    return _this;
  }

  _createClass(F4WeekCalendar, [{
    key: 'eventStyleGetter',
    value: function eventStyleGetter() {
      var style = {
        backgroundColor: "#CB9822"
      };
      return {
        style: style
      };
    }
  }, {
    key: 'selectSlot',
    value: function selectSlot(slotInfo) {
      var calendarStore = this.props.calendarStore;

      calendarStore.updateSelectedDay(slotInfo.start);
      calendarStore.checkWeekDay((0, _moment2.default)(slotInfo.start).format("MM DD YYYY"));
      calendarStore.updateEndSelectedDay(slotInfo.end);
      console.log(calendarStore.canAddCalEvent);
      console.log(calendarStore.selectedDay);
      calendarStore.selectSlotStatus = true;
      console.log(calendarStore.selectSlotStatus);
      calendarStore.checkEvent((0, _moment2.default)(slotInfo.start).format("MM DD YYYY"));
      color = true;
      this.checkDay(calendarStore.selectedDay);
    }
  }, {
    key: 'selectEvent',
    value: function selectEvent(event) {
      var calendarStore = this.props.calendarStore;

      calendarStore.updateEventClickStatus(true);
      calendarStore.selectEventDay = event.start;
      calendarStore.updateSaveTime((0, _moment2.default)(event.start).format("hh:mm a"));
      calendarStore.dateEvent = (0, _moment2.default)(event.start).format("MM DD YYYY");
      calendarStore.updateSaveTitle(event.title);
      calendarStore.checkWeekDay(event.start);
    }
  }, {
    key: 'handleAddCalEventClick',
    value: function handleAddCalEventClick(event) {
      var _props = this.props,
          onAddCalEventClick = _props.onAddCalEventClick,
          calendarStore = _props.calendarStore;

      calendarStore.updateShowDialog(true);
      onAddCalEventClick(event);
    }
  }, {
    key: 'removeEvent',
    value: function removeEvent(data, event) {
      var calendarStore = this.props.calendarStore;
      // calendarStore.events.splice(value,1);

      console.log(calendarStore.events[data].start);
      calendarStore.showEditCalEvt = true;
      calendarStore.eventIndex = data;
      calendarStore.dispEventStartTime = (0, _moment2.default)(calendarStore.events[data].start).format("hh:mm a");
      calendarStore.dispEventDescription = calendarStore.events[data].title;
    }
  }, {
    key: 'deleteEvent',
    value: function deleteEvent(value) {
      var calendarStore = this.props.calendarStore;

      var lastIndex = calendarStore.events.length;
      console.log(value);
      if (value === calendarStore.events[0].id) {
        calendarStore.events.splice(value - value, 1);
        calendarStore.showEditCalEvt = false;
        counter = counter + 1;
      } else if (value === calendarStore.events[lastIndex - 1].id) {
        calendarStore.events.splice(calendarStore.events.length - 1, 1);
        calendarStore.showEditCalEvt = false;
        counter = counter;
      } else {
        console.log("minus" + counter);
        calendarStore.events.splice(value - counter, 1);
        calendarStore.showEditCalEvt = false;
        counter = counter + 1;
      }

      if (lastIndex === 0) {
        calendarStore.updateEventClickStatus(false);
      }
      console.log("delete " + counter);
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      var calendarStore = this.props.calendarStore;

      calendarStore.updateShowDialog(false);
      calendarStore.showAddCalEvt = false;
      calendarStore.showCalEvtDetails = false;
    }
  }, {
    key: 'handleSubmitCalEvent',
    value: function handleSubmitCalEvent(event) {
      var calendarStore = this.props.calendarStore;


      var year = (0, _moment2.default)(calendarStore.selectedDay).format("YYYY");
      var month = (0, _moment2.default)(calendarStore.selectedDay).format("M");
      var day = (0, _moment2.default)(calendarStore.selectedDay).format("D");
      var hour = "";
      var min = $('#startMin').val();
      var startAmPm = $('#startGMT').val();
      var endHour = "";
      var endMin = $('#endMin').val();
      var endAmPm = $('#endGMT').val();
      var title = $('#addCalEvtDesc').val();

      if (startAmPm == "PM") {
        hour = parseInt($('#startHr').val()) + 12;
      } else {
        hour = parseInt($('#startHr').val());
        if (hour == 12) {
          hour = 0;
        }
      }
      if (endAmPm == "PM") {
        endHour = parseInt($('#endHr').val()) + 12;
      } else {
        endHour = parseInt($('#endHr').val());
        if (endHour == 12) {
          endHour = 0;
        }
      }
      if (hour > endHour) {
        calendarStore.errorTime = true;
      }
      if (title === "") {
        calendarStore.errorDescription = true;
      }
      if (hour <= endHour) {
        calendarStore.errorTime = false;
      }
      if (title !== "") {
        calendarStore.errorDescription = false;
      }
      // console.log(calendarStore.errorTime)
      var val = endHour - hour;
      var startDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hour, min, 0);
      var endDay = void 0;
      if (val > 1) {
        endDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hour + 1, endMin, 0);
      } else {
        endDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), endHour, endMin, 0);
      }

      var increment = calendarStore.countEvent + 1;
      calendarStore.countEvent = increment;

      if (calendarStore.errorTime != true && calendarStore.errorDescription != true) {

        if ($('#startHr').val() != "") {
          calendarStore.events.push({
            id: calendarStore.countEvent,
            title: $('#addCalEvtDesc').val(),
            start: startDay,
            end: endDay
          });
        } else {
          calendarStore.events.push({
            id: calendarStore.countEvent,
            title: $('#addCalEvtDesc').val(),
            start: calendarStore.selectedDay,
            end: calendarStore.endSelectedDay
          });
        }

        calendarStore.updateShowDialog(false);
        calendarStore.errorTime = false;
        calendarStore.errorDescription = false;
        calendarStore.showEditCalEvt = false;
      }
      // calendarStore.updateSaveTitle($('#addCalEvtDesc').val());
      // console.log($('#addCalEvtDesc').val())
      // calendarStore.events[14].title = $('#addCalEvtDesc').val();
      // console.log(calendarStore.events[14])    


      console.log("start time" + startDay);
      // calendarStore.updateAddCalEvtStartTime(addCalEvtStartTime);
      // calendarStore.updateAddCalEvtDesc($('#addCalEvtDesc').val());
    }
  }, {
    key: 'checkDay',
    value: function checkDay(data) {
      var calendarStore = this.props.calendarStore;

      if (data != undefined) {
        var today = (0, _moment2.default)().format("MM DD YYYY");
        if (data < today) {
          calendarStore.canAddCalEvent = false;
          calendarStore.showEventSched = false;
        } else {
          calendarStore.canAddCalEvent = true;
          if (calendarStore.events.filter(function (data, index) {
            return (0, _moment2.default)(calendarStore.selectedDay).format("MM, DD, YYYY") == (0, _moment2.default)(data.start).format("MM, DD, YYYY");
          }).length > 0) {
            calendarStore.showEventSched = true;
          } else {
            calendarStore.showEventSched = false;
          }
        }
      } else {
        calendarStore.canAddCalEvent = false;
        calendarStore.showEventSched = false;
      }
    }
  }, {
    key: 'hrsSelect',
    value: function hrsSelect() {
      var hrs = [];
      var calendarStore = this.props.calendarStore;

      var defaultHour = (0, _moment2.default)(calendarStore.selectedDay).format("hh");

      for (var i = 1; i <= 12; i++) {
        if (i < 10) {
          hrs.push(_react2.default.createElement(
            'option',
            { key: i, value: 0 + i },
            '0' + i
          ));
        } else {
          hrs.push(_react2.default.createElement(
            'option',
            { key: i, value: i },
            i
          ));
        }
      }
      return hrs;
      console.log(hrs);
    }
  }, {
    key: 'onChangeTime',
    value: function onChangeTime(value) {
      currentStartHour = value;
      console.log(currentStartHour);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var _props2 = this.props,
          className = _props2.className,
          divStyle = _props2.divStyle,
          defaultView = _props2.defaultView,
          calendarViews = _props2.calendarViews,
          contentFormat = _props2.contentFormat,
          isToolbar = _props2.isToolbar,
          isSelectable = _props2.isSelectable,
          stepNo = _props2.stepNo,
          eventPropGetter = _props2.eventPropGetter,
          onSelectEvent = _props2.onSelectEvent,
          onSelectSlot = _props2.onSelectSlot,
          messagesContent = _props2.messagesContent,
          addEventClick = _props2.addEventClick,
          isCustomEventClick = _props2.isCustomEventClick,
          eventsList = _props2.eventsList,
          defaultDate = _props2.defaultDate,
          timeSlot = _props2.timeSlot,
          weekCustomEvent = _props2.weekCustomEvent,
          calendarStore = _props2.calendarStore,
          iconIndicatorStyles = _props2.iconIndicatorStyles,
          iconDeleteStyles = _props2.iconDeleteStyles,
          iconErrorDescStyles = _props2.iconErrorDescStyles,
          showEventSched = _props2.showEventSched,
          canAddEventStatus = _props2.canAddEventStatus,
          errorDescription = _props2.errorDescription,
          errorTime = _props2.errorTime,
          showDialog = _props2.showDialog,
          showEditCalEvt = _props2.showEditCalEvt;


      var dispSelectedDay = (0, _moment2.default)(calendarStore.selectedDay).format("MMMM DD, YYYY").toUpperCase();
      var defaultStartHour = (0, _moment2.default)(calendarStore.selectedDay).format("h");
      var defaultEndHour = (0, _moment2.default)(calendarStore.endSelectedDay).format("h");
      var mins = _react2.default.createElement(
        _reactBootstrap.FormControl,
        { bsSize: 'sm', className: 'modal-picker', componentClass: 'select', placeholder: 'select' },
        _react2.default.createElement(
          'option',
          { value: '00' },
          '00'
        ),
        _react2.default.createElement(
          'option',
          { value: '30' },
          '30'
        )
      );
      var GMT = _react2.default.createElement(
        _reactBootstrap.FormControl,
        { bsSize: 'sm', className: 'modal-picker', componentClass: 'select', placeholder: 'select' },
        _react2.default.createElement(
          'option',
          { value: 'AM' },
          'AM'
        ),
        _react2.default.createElement(
          'option',
          { value: 'PM' },
          'PM'
        )
      );

      return _react2.default.createElement(
        'div',
        { style: { padding: "0px" } },
        _react2.default.createElement(
          _Col2.default,
          { lg: 4, md: 5, sm: 7, xs: 12 },
          _react2.default.createElement(
            'div',
            { className: className, style: divStyle },
            _react2.default.createElement(_reactBigCalendar2.default, (_React$createElement = {
              events: eventsList,
              defaultView: defaultView,
              views: calendarViews,
              formats: contentFormat,
              toolbar: isToolbar,
              selectable: isSelectable,
              defaultDate: defaultDate,
              timeslots: timeSlot,
              step: stepNo,
              eventPropGetter: this.eventStyleGetter,
              messages: messagesContent
            }, _defineProperty(_React$createElement, 'eventPropGetter', this.eventStyleGetter), _defineProperty(_React$createElement, 'onSelectEvent', function onSelectEvent(event) {
              return _this2.selectEvent(event);
            }), _defineProperty(_React$createElement, 'onSelectSlot', function onSelectSlot(slotInfo) {
              return _this2.selectSlot(slotInfo);
            }), _defineProperty(_React$createElement, 'components', {
              // dayWrapper: CustomDay, 
              week: {
                event: CustomEvent
              }
            }), _React$createElement))
          )
        ),
        _react2.default.createElement(
          _Col2.default,
          { lg: 8, md: 7, sm: 5, xs: 12, className: 'bigMargin' },
          _react2.default.createElement(
            'div',
            { style: showEventSched === true ? { display: "block" } : { display: "none" } },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _reactBootstrap.Panel.Heading,
                { className: 'modal-title' },
                'Calendar Event for ',
                (0, _moment2.default)(calendarStore.selectedDay).format("dddd, MMMM DD, YYYY")
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                calendarStore.events.map(function (data, index) {

                  return (0, _moment2.default)(data.start).format("MM DD YYYY") == (0, _moment2.default)(calendarStore.selectedDay).format("MM DD YYYY") ? _react2.default.createElement(
                    _reactBootstrap.ListGroupItem,
                    { key: index },
                    _react2.default.createElement('i', { style: iconIndicatorStyles, className: 'fa fa-circle' }),
                    '\xA0',
                    _react2.default.createElement(
                      'label',
                      { className: 'eventText' },
                      (0, _moment2.default)(data.start).format("hh:mm a").toUpperCase(),
                      '\xA0'
                    ),
                    _react2.default.createElement(
                      'label',
                      { className: 'eventText' },
                      data.title
                    ),
                    _react2.default.createElement('i', { style: iconDeleteStyles, onClick: function onClick() {
                        return _this2.removeEvent(index);
                      }, className: 'fa fa-trash' })
                  ) : _react2.default.createElement('div', { key: index });
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'text-center', style: canAddEventStatus === true ? { display: "block" } : { display: "none" } },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'addEvent', bsStyle: 'primary', onClick: this.handleAddCalEventClick },
              'Add Calendar Events'
            )
          )
        ),
        _react2.default.createElement(_F4CalendarEvent2.default, {
          calendarStore: calendarStore,
          showDialog: showDialog,
          removeStartTime: calendarStore.dispEventStartTime,
          removeTitle: calendarStore.dispEventDescription,
          errorTime: errorTime,
          errorDescription: errorDescription,
          showEditCalEvt: showEditCalEvt
        })
      );
    }
  }]);

  return F4WeekCalendar;
}(_react.Component);

var CustomEvent = function (_React$Component) {
  _inherits(CustomEvent, _React$Component);

  function CustomEvent(props) {
    _classCallCheck(this, CustomEvent);

    return _possibleConstructorReturn(this, (CustomEvent.__proto__ || Object.getPrototypeOf(CustomEvent)).call(this, props));
  }

  _createClass(CustomEvent, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      console.log(this.props.event.length);
      var popoverClickRootClose = _react2.default.createElement(
        _reactBootstrap.Popover,
        { id: 'popover-trigger-click-root-close', title: 'Calendar Events' },
        _react2.default.createElement(
          'strong',
          null,
          ' ',
          (0, _moment2.default)(this.props.event.start).format("MMM DD, YYYY")
        ),
        _react2.default.createElement('br', null),
        this.props.event.title
      );
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
          { id: 'help', trigger: ['hover', 'focus'], rootClose: true, placement: 'right', overlay: popoverClickRootClose },
          _react2.default.createElement(
            'div',
            null,
            this.props.event.title
          )
        )
      );
    }
  }]);

  return CustomEvent;
}(_react2.default.Component);

F4WeekCalendar.propTypes = {
  calendarStore: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
  className: _propTypes2.default.string,
  eventsList: _propTypes2.default.object,
  divStyle: _propTypes2.default.object,
  timeSlot: _propTypes2.default.number,
  weekCustomEvent: _propTypes2.default.object,
  eventPropGetter: _propTypes2.default.func,
  defaultDate: _propTypes2.default.instanceOf(Date),
  defaultView: _propTypes2.default.string.isRequired,
  calendarViews: _propTypes2.default.array,
  contentFormat: _propTypes2.default.object,
  isToolbar: _propTypes2.default.bool,
  isCustomEventClick: _propTypes2.default.bool,
  isSelectable: _propTypes2.default.bool,
  stepNo: _propTypes2.default.number,
  messagesContent: _propTypes2.default.object,
  //function
  onSelectEvent: _propTypes2.default.func,
  onSelectSlot: _propTypes2.default.func,
  addEventClick: _propTypes2.default.func,
  handleClose: _propTypes2.default.func,

  //styles
  iconIndicatorStyles: _propTypes2.default.object,
  iconDeleteStyles: _propTypes2.default.object,
  iconErrorDescStyles: _propTypes2.default.object,

  showEventSched: _propTypes2.default.bool,
  canAddEventStatus: _propTypes2.default.bool,
  showDialog: _propTypes2.default.bool,
  errorTime: _propTypes2.default.bool,
  errorDescription: _propTypes2.default.bool,
  showEditCalEvt: _propTypes2.default.bool
};

F4WeekCalendar.defaultProps = {
  className: "big-calendar",
  defaultView: "week",
  isCustomEventClick: false,
  calendarViews: ['week'],
  isToolbar: true,
  isSelectable: true,
  stepNo: 60,
  timeSlot: 1,
  defaultDate: new Date(2018, 2, 4),
  iconIndicatorStyles: { color: '#cc9900', fontSize: "10px" },
  iconDeleteStyles: { color: '#13304d', fontSize: "18px", float: "right" },
  iconErrorDescStyles: { color: '#13304d', fontSize: "14px" }
};

exports.default = F4WeekCalendar;
module.exports = exports['default'];