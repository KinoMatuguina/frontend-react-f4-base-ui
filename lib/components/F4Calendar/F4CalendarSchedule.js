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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4CalendarSchedule.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var moment = require('moment');
var dispEventStartTime = "";
var dispEventDescription = "";
var eventIndex = "";

var F4CalendarSchedule = function (_Component) {
  _inherits(F4CalendarSchedule, _Component);

  function F4CalendarSchedule(props) {
    _classCallCheck(this, F4CalendarSchedule);

    var _this = _possibleConstructorReturn(this, (F4CalendarSchedule.__proto__ || Object.getPrototypeOf(F4CalendarSchedule)).call(this, props));

    _this.handleAddCalEventClick = _this.handleAddCalEventClick.bind(_this);
    _this.handleEventSchedClick = _this.handleEventSchedClick.bind(_this);
    return _this;
  }

  _createClass(F4CalendarSchedule, [{
    key: 'handleAddCalEventClick',
    value: function handleAddCalEventClick(event) {
      var _props = this.props,
          onAddCalEventClick = _props.onAddCalEventClick,
          CalendarStore = _props.CalendarStore;

      CalendarStore.showAddCalEvt = true;
      onAddCalEventClick(event);
    }
  }, {
    key: 'handleEventSchedClick',
    value: function handleEventSchedClick(data, event) {
      var _props2 = this.props,
          onEventSchedClick = _props2.onEventSchedClick,
          CalendarStore = _props2.CalendarStore;

      CalendarStore.showCalEvtDetails = true;
      CalendarStore.eventIndex = data;
      CalendarStore.dispEventStartTime = moment(CalendarStore.events[data].start).format("hh:mm a");
      CalendarStore.dispEventDescription = CalendarStore.events[data].title;
      onEventSchedClick(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var CalendarStore = this.props.CalendarStore;

      var dispSelectedDay = moment(CalendarStore.selectedDay).format("MMMM DD, YYYY").toUpperCase();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: CalendarStore.showEventSched === true ? { display: "block" } : { display: "none" } },
          _react2.default.createElement(
            _reactBootstrap.Panel,
            null,
            _react2.default.createElement(
              _reactBootstrap.Panel.Heading,
              { className: 'modal-title', style: { color: "#13304d" } },
              'Calendar Event for ',
              moment(CalendarStore.selectedDay).format("dddd, MMMM DD, YYYY")
            ),
            _react2.default.createElement(
              _reactBootstrap.ListGroup,
              null,
              CalendarStore.events.map(function (data, index) {
                // console.log("The current iteration is: " + index);
                return moment(data.start).format("MM DD YYYY") == moment(CalendarStore.selectedDay).format("MM DD YYYY") ? _react2.default.createElement(
                  _reactBootstrap.ListGroupItem,
                  { key: index },
                  _react2.default.createElement('i', { style: { color: '#cc9900', fontSize: "10px" }, className: 'fa fa-circle' }),
                  ' \xA0',
                  _react2.default.createElement(
                    'strong',
                    null,
                    _react2.default.createElement(
                      'label',
                      { className: 'eventText' },
                      moment(data.start).format("hh:mm a").toUpperCase()
                    )
                  ),
                  ' \xA0',
                  _react2.default.createElement(
                    'label',
                    { className: 'eventText' },
                    data.title
                  ),
                  _react2.default.createElement('i', { style: { color: '#13304d', fontSize: "18px", float: "right" }, onClick: function onClick() {
                      return _this2.handleEventSchedClick(index);
                    }, className: 'fa fa-trash' })
                ) : _react2.default.createElement('div', { key: index });
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-center', style: CalendarStore.canAddCalEvent === true ? { display: "block" } : { display: "none" } },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'addEvent', bsStyle: 'danger', onClick: this.handleAddCalEventClick },
            'Add Calendar Event'
          )
        )
      );
    }
  }]);

  return F4CalendarSchedule;
}(_react.Component);

F4CalendarSchedule.propTypes = {
  // props definition
  CalendarStore: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired
};

F4CalendarSchedule.defaultProps = {
  // default props
};

exports.default = F4CalendarSchedule;
module.exports = exports['default'];