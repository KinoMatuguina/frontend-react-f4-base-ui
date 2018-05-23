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

var _F4InputField = require('../F4InputField/F4InputField');

var _F4InputField2 = _interopRequireDefault(_F4InputField);

var _F4InputSelect = require('../F4InputSelect/F4InputSelect');

var _F4InputSelect2 = _interopRequireDefault(_F4InputSelect);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

var _F4Modal = require('../F4Modal/F4Modal');

var _F4Modal2 = _interopRequireDefault(_F4Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4CalendarModal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var moment = require('moment');

var F4CalendarModal = function (_Component) {
  _inherits(F4CalendarModal, _Component);

  function F4CalendarModal(props) {
    _classCallCheck(this, F4CalendarModal);

    var _this = _possibleConstructorReturn(this, (F4CalendarModal.__proto__ || Object.getPrototypeOf(F4CalendarModal)).call(this, props));

    _this.handleFieldChange = _this.handleFieldChange.bind(_this);
    _this.handleSubmitCalEventClick = _this.handleSubmitCalEventClick.bind(_this);
    _this.handleDelEventSchedClick = _this.handleDelEventSchedClick.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }

  // GET DATA FROM FIELDS


  _createClass(F4CalendarModal, [{
    key: 'handleFieldChange',
    value: function handleFieldChange(event, value) {
      var CalendarStore = this.props.CalendarStore;

      if (event == "startHr") {
        CalendarStore.startHr = value;
      } else if (event == "startMin") {
        CalendarStore.startMin = value;
      } else if (event == "startGMT") {
        CalendarStore.startGMT = value;
      } else if (event == "endHr") {
        CalendarStore.endHr = value;
      } else if (event == "endMin") {
        CalendarStore.endMin = value;
      } else if (event == "endGMT") {
        CalendarStore.endGMT = value;
      } else if (event == "description") {
        CalendarStore.description = value;
      }
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      var CalendarStore = this.props.CalendarStore;

      CalendarStore.showAddCalEvt = false;
      CalendarStore.showCalEvtDetails = false;
    }

    //START OF ADD CALENDAR EVENT METHOD

  }, {
    key: 'handleSubmitCalEventClick',
    value: function handleSubmitCalEventClick(event) {
      var _props = this.props,
          CalendarStore = _props.CalendarStore,
          saveBackEnd = _props.saveBackEnd;

      // BACKEND

      var startTime = CalendarStore.startHr + ":" + CalendarStore.startMin + CalendarStore.startGMT;
      var endTime = CalendarStore.endHr + ":" + CalendarStore.endMin + CalendarStore.endGMT;
      var selectedDay = CalendarStore.selectedDay.toString();
      // saveBackEnd(startTime, endTime, selectedDay);

      var year = moment(CalendarStore.selectedDay).format("YYYY");
      var month = moment(CalendarStore.selectedDay).format("M");
      var day = moment(CalendarStore.selectedDay).format("D");

      if (CalendarStore.startGMT == "PM") {
        CalendarStore.startHr = parseInt(CalendarStore.startHr) + 12;
      } else {
        CalendarStore.startHr = parseInt(CalendarStore.startHr);
        if (CalendarStore.startHr == 12) {
          CalendarStore.startHr = 0;
        }
      }
      if (CalendarStore.endGMT == "PM") {
        CalendarStore.endHr = parseInt(CalendarStore.endHr) + 12;
      } else {
        CalendarStore.endHr = parseInt(CalendarStore.endHr);
        if (CalendarStore.endHr == 12) {
          CalendarStore.endHr = 0;
        }
      }

      var startDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), CalendarStore.startHr, CalendarStore.startMin, 0);
      var endDay = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), CalendarStore.endHr, CalendarStore.endMin, 0);
      var countEvent = CalendarStore.countEvent + 1;
      CalendarStore.countEvent = countEvent;
      CalendarStore.events.push({
        id: CalendarStore.countEvent,
        title: CalendarStore.description,
        start: startDay,
        end: endDay
      });

      saveBackEnd({
        id: CalendarStore.countEvent,
        title: CalendarStore.description,
        start: startDay,
        end: endDay
      });

      CalendarStore.showEventSched = true;
      // console.log(CalendarStore.events.slice());

      this.handleClose();
    }
    //END OF ADD CALENDAR EVENT METHOD

    //START OF VIEW OR DELETE EVENT SCHEDULE

  }, {
    key: 'handleDelEventSchedClick',
    value: function handleDelEventSchedClick() {
      var _props2 = this.props,
          CalendarStore = _props2.CalendarStore,
          deleteBackEnd = _props2.deleteBackEnd;

      // BACKEND

      deleteBackEnd();

      var selectedDay = CalendarStore.selectedDay;
      CalendarStore.events.splice(CalendarStore.eventIndex, 1);
      this.checkDay(selectedDay);
      this.handleClose();
    }
  }, {
    key: 'checkDay',
    value: function checkDay(data) {
      var CalendarStore = this.props.CalendarStore;

      if (data != undefined) {
        var today = moment();
        if (data < today) {
          CalendarStore.canAddCalEvent = false;
          CalendarStore.showEventSched = false;
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
    //END OF VIEW OR DELETE EVENT SCHEDULE

    //ADD CALENDAR EVENT HRS SELECT BUTTON

  }, {
    key: 'hrsSelect',
    value: function hrsSelect() {
      var hrs = [];
      for (var i = 1; i <= 12; i++) {
        if (i < 10) {
          hrs.push({ value: '0' + i, label: '0' + i });
        } else {
          hrs.push({ value: '' + i, label: '' + i });
        }
      }
      return hrs;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          CalendarStore = _props3.CalendarStore,
          showCreate = _props3.showCreate,
          showDelete = _props3.showDelete;

      var dispSelectedDay = moment(CalendarStore.selectedDay).format("MMMM DD, YYYY").toUpperCase();
      var defaultStartHour = moment(CalendarStore.selectedDay).format("h");
      var defaultEndHour = moment(CalendarStore.endSelectedDay).format("h");
      var min = [{ value: '00', label: '00' }, { value: '30', label: '30' }];
      var GMT = [{ value: 'AM', label: 'AM' }, { value: 'PM', label: 'PM' }];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _F4Modal2.default,
            {
              show: showCreate,
              title: 'Add Calendar Event',
              size: 'md',
              onHide: this.handleClose,
              onCancel: this.handleClose,
              onProceed: this.handleSubmitCalEventClick,
              cancelText: 'Cancel',
              proceedText: 'Submit'
            },
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _Row2.default,
              null,
              _react2.default.createElement(
                _reactBootstrap.Form,
                { inline: true },
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
                        { sm: 5, className: 'modalResponsive', style: { paddingRight: "0px", paddingLeft: "0px" } },
                        _react2.default.createElement(
                          'h4',
                          { className: 'modal-title' },
                          dispSelectedDay
                        )
                      ),
                      _react2.default.createElement(
                        _Col2.default,
                        { sm: 6, className: 'modalResponsive', style: { paddingLeft: "0px", paddingRight: "0px" } },
                        _react2.default.createElement(_F4InputSelect2.default, {
                          name: 'startHr',
                          onChange: this.handleFieldChange,
                          searchable: false,
                          clearable: false,
                          value: CalendarStore.startHr,
                          options: this.hrsSelect()
                        }),
                        ' : ',
                        _react2.default.createElement(_F4InputSelect2.default, {
                          name: 'startMin',
                          onChange: this.handleFieldChange,
                          searchable: false,
                          clearable: false,
                          value: CalendarStore.startMin,
                          options: min
                        }),
                        '  ',
                        _react2.default.createElement(_F4InputSelect2.default, {
                          name: 'startGMT',
                          onChange: this.handleFieldChange,
                          searchable: false,
                          clearable: false,
                          value: CalendarStore.startGMT,
                          options: GMT
                        })
                      ),
                      _react2.default.createElement(
                        _Col2.default,
                        { sm: 1, className: 'modalResponsive', style: { paddingLeft: "0px", paddingRight: "0px" } },
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
                      _react2.default.createElement(_F4InputSelect2.default, {
                        name: 'endHr',
                        onChange: this.handleFieldChange,
                        searchable: false,
                        clearable: false,
                        value: CalendarStore.endHr,
                        options: this.hrsSelect()
                      }),
                      ' : ',
                      _react2.default.createElement(_F4InputSelect2.default, {
                        name: 'endMin',
                        onChange: this.handleFieldChange,
                        searchable: false,
                        clearable: false,
                        value: CalendarStore.endMin,
                        options: min
                      }),
                      '  ',
                      _react2.default.createElement(_F4InputSelect2.default, {
                        name: 'endGMT',
                        onChange: this.handleFieldChange,
                        searchable: false,
                        clearable: false,
                        value: CalendarStore.endGMT,
                        options: GMT
                      })
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
                    { xs: 3, className: 'desc', style: { textAlign: 'right', marginTop: '10px' }, componentClass: _reactBootstrap.ControlLabel },
                    'Description'
                  ),
                  _react2.default.createElement(
                    _Col2.default,
                    { xs: 9 },
                    _react2.default.createElement(_F4InputField2.default, {
                      id: 'addCalEvtDesc',
                      name: 'description',
                      onChange: this.handleFieldChange,
                      placeholder: 'e.g. Meeting, Appointment'
                    })
                  )
                )
              )
            ),
            _react2.default.createElement('br', null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'event-schedule' },
          _react2.default.createElement(
            _F4Modal2.default,
            {
              show: showDelete,
              title: 'Calendar Event Details',
              size: 'lg',
              onHide: this.handleClose,
              onCancel: this.handleClose,
              onProceed: this.handleDelEventSchedClick,
              cancelText: 'Cancel',
              proceedText: 'Delete'
            },
            _react2.default.createElement(
              'h4',
              { className: 'modal-title' },
              dispSelectedDay
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _reactBootstrap.ListGroup,
              null,
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { header: CalendarStore.dispEventStartTime },
                'Start Time'
              ),
              _react2.default.createElement(
                _reactBootstrap.ListGroupItem,
                { header: CalendarStore.dispEventDescription },
                'Description'
              )
            )
          )
        )
      );
    }
  }]);

  return F4CalendarModal;
}(_react.Component);

F4CalendarModal.propTypes = {
  // props definition
  CalendarStore: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
  showCreate: _propTypes2.default.bool.isRequired,
  showDelete: _propTypes2.default.bool.isRequired
};

F4CalendarModal.defaultProps = {
  // default props
};

exports.default = F4CalendarModal;
module.exports = exports['default'];