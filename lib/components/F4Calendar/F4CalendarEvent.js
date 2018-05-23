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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4CalendarEvent.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

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

var F4CalendarEvent = function (_Component) {
  _inherits(F4CalendarEvent, _Component);

  function F4CalendarEvent(props) {
    _classCallCheck(this, F4CalendarEvent);

    var _this = _possibleConstructorReturn(this, (F4CalendarEvent.__proto__ || Object.getPrototypeOf(F4CalendarEvent)).call(this, props));

    _this.handleAddCalEventClick = _this.handleAddCalEventClick.bind(_this);
    _this.hrsSelect = _this.hrsSelect.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleSubmitCalEvent = _this.handleSubmitCalEvent.bind(_this);
    _this.onChangeTime = _this.onChangeTime.bind(_this);
    _this.deleteEvent = _this.deleteEvent.bind(_this);
    return _this;
  }

  _createClass(F4CalendarEvent, [{
    key: 'handleAddCalEventClick',
    value: function handleAddCalEventClick(event) {
      var _props = this.props,
          onAddCalEventClick = _props.onAddCalEventClick,
          calendarStore = _props.calendarStore;

      calendarStore.updateShowDialog(true);
      onAddCalEventClick(event);
    }
  }, {
    key: 'deleteEvent',
    value: function deleteEvent() {
      var calendarStore = this.props.calendarStore;

      var selectedDay = calendarStore.selectedDay;
      calendarStore.events.splice(calendarStore.eventIndex, 1);
      this.checkDay(selectedDay);
      this.handleClose();
    }
  }, {
    key: 'checkDay',
    value: function checkDay(data) {
      var calendarStore = this.props.calendarStore;

      if (data != undefined) {
        var today = (0, _moment2.default)();
        if (data < today) {
          calendarStore.canAddCalEvent = false;
          calendarStore.showEditCalEvt = false;
        } else {
          calendarStore.canAddCalEvent = true;
          if (calendarStore.events.filter(function (data, index) {
            return (0, _moment2.default)(calendarStore.selectedDay).format("MM, DD, YYYY") == (0, _moment2.default)(data.start).format("MM, DD, YYYY");
          }).length > 0) {
            calendarStore.showEditCalEvt = true;
          } else {
            calendarStore.showEditCalEvt = false;
          }
        }
      } else {
        calendarStore.canAddCalEvent = false;
        calendarStore.showEditCalEvt = false;
      }
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      var calendarStore = this.props.calendarStore;

      calendarStore.updateShowDialog(false);
      calendarStore.errorTime = false;
      calendarStore.errorDescription = false;
      calendarStore.showAddCalEvent = false;
      calendarStore.showEditCalEvt = false;
    }
  }, {
    key: 'handleSubmitCalEvent',
    value: function handleSubmitCalEvent(event) {
      var _props2 = this.props,
          calendarStore = _props2.calendarStore,
          errorTime = _props2.errorTime,
          errorDescription = _props2.errorDescription;

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

      if (errorTime != true && errorDescription != true) {

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
      console.log("start time" + startDay);
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
      var _props3 = this.props,
          calendarStore = _props3.calendarStore,
          removeStartTime = _props3.removeStartTime,
          removeTitle = _props3.removeTitle,
          showEditCalEvt = _props3.showEditCalEvt,
          showDialog = _props3.showDialog,
          errorTime = _props3.errorTime,
          errorDescription = _props3.errorDescription;

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
        null,
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: showDialog },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              { className: 'modal-title' },
              'Add Calendar Event'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(
                _reactBootstrap.Form,
                { inline: true, onChange: this.handleCalSchedChange },
                _react2.default.createElement(
                  'div',
                  { className: 'text-center' },
                  _react2.default.createElement(
                    _Col2.default,
                    { sm: 8 },
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { sm: 5, className: 'modalResponsive' },
                        _react2.default.createElement(
                          'h4',
                          { className: 'modal-title' },
                          dispSelectedDay
                        )
                      ),
                      _react2.default.createElement(
                        _Col2.default,
                        { sm: 6, className: 'modalResponsive' },
                        _react2.default.createElement(
                          _reactBootstrap.FormControl,
                          { id: 'startHr', defaultValue: parseInt(defaultStartHour), bsSize: 'sm', componentClass: 'select', placeholder: 'select', style: { width: "45px", display: "inline" } },
                          this.hrsSelect()
                        ),
                        " : ",
                        _react2.default.createElement(
                          _reactBootstrap.FormControl,
                          { id: 'startMin', bsSize: 'sm', componentClass: 'select', placeholder: 'select', style: { width: "45px", display: "inline" } },
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
                        ),
                        "  ",
                        _react2.default.createElement(
                          _reactBootstrap.FormControl,
                          { id: 'startGMT', bsSize: 'sm', componentClass: 'select', placeholder: 'select', style: { width: "45px", fontSize: "10px", paddingRight: "-5px", display: "inline" } },
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
                        )
                      ),
                      _react2.default.createElement(
                        _Col2.default,
                        { sm: 1, className: 'modalResponsive' },
                        'to'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _Col2.default,
                    { sm: 4, className: 'modalResponsive' },
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.FormControl,
                        { id: 'endHr', bsSize: 'sm', defaultValue: parseInt(defaultEndHour), componentClass: 'select', placeholder: 'select', style: { width: "45px", display: "inline" } },
                        this.hrsSelect()
                      ),
                      " : ",
                      _react2.default.createElement(
                        _reactBootstrap.FormControl,
                        { id: 'endMin', bsSize: 'sm', componentClass: 'select', placeholder: 'select', style: { width: "45px", display: "inline" } },
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
                      ),
                      "  ",
                      _react2.default.createElement(
                        _reactBootstrap.FormControl,
                        { id: 'endGMT', bsSize: 'sm', componentClass: 'select', placeholder: 'select', style: { width: "45px", display: "inline" } },
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
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(
                _reactBootstrap.Form,
                null,
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'addCalEvtDesc' },
                  _react2.default.createElement(
                    _Col2.default,
                    { xs: 3, className: 'desc eventLabel', componentClass: _reactBootstrap.ControlLabel },
                    'Description'
                  ),
                  _react2.default.createElement(
                    _Col2.default,
                    { xs: 9 },
                    _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', className: 'eventText' })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(_Col2.default, { xs: 3 }),
              _react2.default.createElement(
                _Col2.default,
                { xs: 9 },
                errorDescription === true ? _react2.default.createElement(
                  'h5',
                  { className: 'desc' },
                  _react2.default.createElement('i', { style: iconErrorDescStyles, className: 'fa fa-thumb-tack icon-pin' }),
                  '\xA0 Description is required.'
                ) : _react2.default.createElement('h5', null),
                errorTime === true ? _react2.default.createElement(
                  'h5',
                  { className: 'desc' },
                  _react2.default.createElement('i', { style: iconErrorDescStyles, className: 'fa fa-thumb-tack icon-pin' }),
                  '\xA0 End Time must be later than Start Time.'
                ) : _react2.default.createElement('h5', null)
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'cancelEvent', onClick: this.handleClose },
              'Cancel'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'submitEvent', bsStyle: 'primary', onClick: this.handleSubmitCalEvent },
              'Submit'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'event-schedule' },
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: showEditCalEvt },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              null,
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                { className: 'modal-title' },
                'Calendar Event Details'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              _react2.default.createElement(
                'h4',
                { className: 'modal-title' },
                (0, _moment2.default)(calendarStore.addCalEvtDay).format("MMMM DD, YYYY").toUpperCase()
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _reactBootstrap.ListGroup,
                null,
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { header: removeStartTime },
                  'Start Time'
                ),
                _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { header: removeTitle },
                  'Description'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                { className: 'cancelEvent', onClick: this.handleClose },
                'Cancel'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                { className: 'submitEvent', bsStyle: 'danger', onClick: this.deleteEvent },
                'Delete'
              )
            )
          )
        )
      );
    }
  }]);

  return F4CalendarEvent;
}(_react.Component);

F4CalendarEvent.propTypes = {
  calendarStore: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
  removeStartTime: _propTypes2.default.string,
  removeTitle: _propTypes2.default.string,
  showDialog: _propTypes2.default.bool,
  showEditCalEvt: _propTypes2.default.bool,
  errorTime: _propTypes2.default.bool,
  errorDescription: _propTypes2.default.bool
};

F4CalendarEvent.defaultProps = {
  // default props
};

exports.default = F4CalendarEvent;
module.exports = exports['default'];