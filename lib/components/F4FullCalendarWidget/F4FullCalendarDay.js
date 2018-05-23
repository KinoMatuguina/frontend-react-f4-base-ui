'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4FullCalendarDay
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

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4FullCalendarDay = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4FullCalendarDay, _Component);

  function F4FullCalendarDay(props) {
    _classCallCheck(this, F4FullCalendarDay);

    return _possibleConstructorReturn(this, (F4FullCalendarDay.__proto__ || Object.getPrototypeOf(F4FullCalendarDay)).call(this, props));
  }

  _createClass(F4FullCalendarDay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          viewDate = _props.viewDate,
          day = _props.day,
          calendarData = _props.calendarData,
          onSwitchDisplay = _props.onSwitchDisplay;


      var className = "f4FullCalendarDay f4ResponsiveSquare";

      // check if day is current
      var now = new Date();
      if (now.getDate() === day && now.getMonth() === viewDate.getMonth() && now.getFullYear() === viewDate.getFullYear()) {

        className = "f4FullCalendarDay Current f4ResponsiveSquare";
      }

      // check if day has tasks
      var taskData = undefined;
      var onClick = function onClick() {};
      if (typeof calendarData !== 'undefined' && calendarData && calendarData.map && calendarData.length > 0) {

        taskData = _underscore2.default.find(calendarData, function (data) {
          var taskDate = data.date;

          return taskDate.getDate() === day && taskDate.getMonth() === viewDate.getMonth() && taskDate.getFullYear() === viewDate.getFullYear();
        });

        if (typeof taskData !== 'undefined' && taskData) {
          className = "f4FullCalendarDay Tasks f4ResponsiveSquare";

          onClick = onSwitchDisplay.bind(null, "tasks", day, taskData);
        }
      }

      return _react2.default.createElement(
        'div',
        { className: className, onClick: onClick },
        _react2.default.createElement(
          'div',
          { className: 'f4ResponsiveSquareContent' },
          _react2.default.createElement(
            'div',
            { className: 'f4ResponsiveSquareTable' },
            _react2.default.createElement(
              'div',
              { className: 'f4ResponsiveSquareTableCell' },
              _react2.default.createElement(
                'span',
                null,
                day
              )
            )
          )
        ),
        typeof taskData !== 'undefined' && taskData && _react2.default.createElement(
          'div',
          { className: 'f4FullCalendarDayTaskBadge' },
          _react2.default.createElement(
            'span',
            null,
            taskData.tasks.length
          )
        )
      );
    }
  }]);

  return F4FullCalendarDay;
}(_react.Component)) || _class;

exports.default = F4FullCalendarDay;
module.exports = exports['default'];