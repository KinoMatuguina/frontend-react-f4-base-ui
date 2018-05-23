'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4FullCalendarWidget
            http://stackoverflow.com/questions/20456694/grid-of-responsive-squares?rq=1
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _DateTimeUtil = require('../DateTimeUtil');

var _DateTimeUtil2 = _interopRequireDefault(_DateTimeUtil);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

var _F4Card = require('../F4Card/F4Card');

var _F4Card2 = _interopRequireDefault(_F4Card);

var _F4Toolbar = require('../F4Toolbar/F4Toolbar');

var _F4Toolbar2 = _interopRequireDefault(_F4Toolbar);

var _F4ToolbarElement = require('../F4ToolbarElement/F4ToolbarElement');

var _F4ToolbarElement2 = _interopRequireDefault(_F4ToolbarElement);

var _F4FullCalendarMonth = require('./F4FullCalendarMonth');

var _F4FullCalendarMonth2 = _interopRequireDefault(_F4FullCalendarMonth);

var _F4FullCalendarTaskView = require('./F4FullCalendarTaskView');

var _F4FullCalendarTaskView2 = _interopRequireDefault(_F4FullCalendarTaskView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4FullCalendarWidget = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4FullCalendarWidget, _Component);

  function F4FullCalendarWidget(props) {
    _classCallCheck(this, F4FullCalendarWidget);

    var _this = _possibleConstructorReturn(this, (F4FullCalendarWidget.__proto__ || Object.getPrototypeOf(F4FullCalendarWidget)).call(this, props));

    _this.updateStateDate = function (date) {
      if (Object.prototype.toString.call(date) === '[object Date]') {
        _this.setState({
          viewDate: date
        });
      }
    };

    _this.updateStateDate = _this.updateStateDate.bind(_this);
    _this.changeViewMonth = _this.changeViewMonth.bind(_this);
    _this.handleCalendarChange = _this.handleCalendarChange.bind(_this);
    _this.handleSwitchDisplay = _this.handleSwitchDisplay.bind(_this);
    _this.today = _this.today.bind(_this);

    _this.state = {
      viewDate: _this.props.value,
      display: 'months'
    };
    return _this;
  }

  _createClass(F4FullCalendarWidget, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var viewDate = this.props.viewDate;

      this.updateStateDate(viewDate);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.updateStateDate(props.viewDate);
    }
  }, {
    key: 'handleCalendarChange',
    value: function handleCalendarChange(value, dayClick) {

      var newValue = null;

      if (dayClick) {
        newValue = value;
      } else {
        newValue = _DateTimeUtil2.default.setYear(this.state.date, value.getFullYear());
      }

      var state = {
        display: 'months',
        viewDate: value,
        taskData: []
      };

      this.setState(state);
    }
  }, {
    key: 'changeViewMonth',
    value: function changeViewMonth(direction, step) {
      var viewDate = this.state.viewDate;


      var newViewDate = _DateTimeUtil2.default.addMonths(viewDate, step);

      this.setState({
        direction: direction,
        viewDate: newViewDate
      });

      this.handleCalendarChange(newViewDate, false);
    }
  }, {
    key: 'handleSwitchDisplay',
    value: function handleSwitchDisplay(display) {
      var day = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var taskData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];


      this.setState({
        display: display,
        taskData: taskData,
        day: day
      });
    }
  }, {
    key: 'today',
    value: function today() {
      this.handleCalendarChange(new Date(), true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          viewDate = _state.viewDate,
          display = _state.display,
          taskData = _state.taskData,
          day = _state.day;
      var calendarData = this.props.calendarData;


      return _react2.default.createElement(
        'div',
        { className: 'f4FullCalendarWidget f4Card' },
        _react2.default.createElement(
          'div',
          { style: { padding: '15px 15px 0px 15px' } },
          _react2.default.createElement(
            _F4Toolbar2.default,
            { title: 'CALENDAR', icon: 'calendar' },
            _react2.default.createElement(_F4ToolbarElement2.default, { icon: "chevron-down", text: "toggle", onClick: function onClick() {
                alert("toggle");
              } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'f4FullCalendarWidgetHeader' },
          display === 'months' && _react2.default.createElement(
            'span',
            { className: 'f4FullCalendarWidgetHeaderTitle' },
            _DateTimeUtil2.default.getFullMonth(viewDate),
            ' ',
            viewDate.getFullYear()
          ),
          display === 'months' && _react2.default.createElement(
            'div',
            { className: 'calendarArrow', onClick: this.changeViewMonth.bind(null, 'left', -1), style: { position: 'absolute', top: '-10px', left: '10px', cursor: 'pointer' } },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-left' })
          ),
          display === 'months' && _react2.default.createElement(
            'div',
            { className: 'calendarArrow', onClick: this.changeViewMonth.bind(null, 'right', 1), style: { position: 'absolute', top: '-10px', right: '10px', cursor: 'pointer' } },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-right' })
          )
        ),
        display === 'months' && _react2.default.createElement(_F4FullCalendarMonth2.default, { viewDate: viewDate, calendarData: calendarData, onSwitchDisplay: this.handleSwitchDisplay }),
        display === 'tasks' && _react2.default.createElement(_F4FullCalendarTaskView2.default, { onSwitchDisplay: this.handleSwitchDisplay.bind(null, 'months'), day: day, viewDate: viewDate, taskData: taskData }),
        _react2.default.createElement(
          'div',
          { className: 'f4InputDatePickerButtons' },
          _react2.default.createElement(
            'button',
            {
              className: 'default btn btn-default btn-sm btn-default pull-left',
              onClick: this.today,
              style: { fontSize: '12px', padding: '9px' } },
            'TODAY'
          )
        )
      );
    }
  }]);

  return F4FullCalendarWidget;
}(_react.Component)) || _class;

exports.default = F4FullCalendarWidget;


F4FullCalendarWidget.propTypes = {
  viewDate: _propTypes2.default.object,
  calendarData: _propTypes2.default.any
};

F4FullCalendarWidget.defaultProps = {
  viewDate: new Date(),
  calendarData: []
};
module.exports = exports['default'];