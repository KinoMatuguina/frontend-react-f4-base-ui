'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4FullCalendarMonth
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

var _F4FullCalendarDay = require('./F4FullCalendarDay');

var _F4FullCalendarDay2 = _interopRequireDefault(_F4FullCalendarDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4FullCalendarMonth = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4FullCalendarMonth, _Component);

  function F4FullCalendarMonth(props) {
    _classCallCheck(this, F4FullCalendarMonth);

    var _this = _possibleConstructorReturn(this, (F4FullCalendarMonth.__proto__ || Object.getPrototypeOf(F4FullCalendarMonth)).call(this, props));

    _this.renderDays = _this.renderDays.bind(_this);
    _this.renderWeeks = _this.renderWeeks.bind(_this);

    return _this;
  }

  _createClass(F4FullCalendarMonth, [{
    key: 'renderWeeks',
    value: function renderWeeks() {

      var weeksRange = _.range(0, 7);

      var weekNodes = weeksRange.map(function (i) {
        return _react2.default.createElement(
          'div',
          { key: i, className: 'f4FullCalendarWeeks f4ResponsiveSquare' },
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
                  _DateTimeUtil2.default.getFullDayOfWeek(i).substring(0, 3)
                )
              )
            )
          )
        );
      });

      return weekNodes;
    }
  }, {
    key: 'renderDays',
    value: function renderDays() {
      var _props = this.props,
          viewDate = _props.viewDate,
          calendarData = _props.calendarData,
          onSwitchDisplay = _props.onSwitchDisplay;


      var firstDayOfWeek = _DateTimeUtil2.default.getFirstDayOfWeek(viewDate);
      var daysRange = _.range(1, _DateTimeUtil2.default.getDaysInMonth(viewDate) + 1);
      var grid = _.range(0, 35);
      var self = this;
      var startWeek = false;
      var counter = -1;
      return grid.map(function (i) {
        // const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), i);

        // let disabled = DateTimeUtil.isDateDisabled(minDate, maxDate, date, 'both'); // min,max,both,none: last param - is min and max included in comparison

        if (firstDayOfWeek === i) {
          startWeek = true;
        }

        if (startWeek) {

          counter++;

          return _react2.default.createElement(_F4FullCalendarDay2.default, {
            key: i,
            day: daysRange[counter],
            disabled: false,
            onSwitchDisplay: onSwitchDisplay,
            onClick: function onClick() {},
            viewDate: viewDate,
            calendarData: calendarData
          });
        } else {
          return _react2.default.createElement(_F4FullCalendarDay2.default, {
            key: i,
            day: "",
            disabled: false,
            onClick: function onClick() {},
            viewDate: viewDate
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'f4FullCalendarMonth' },
        _react2.default.createElement(
          'div',
          { className: 'f4FullCalendarMonthWeeks' },
          typeof window !== 'undefined' && this.renderWeeks()
        ),
        _react2.default.createElement('hr', { className: 'f4FullCalendarHr' }),
        _react2.default.createElement(
          'div',
          { className: 'f4FullCalendarMonthDays' },
          typeof window !== 'undefined' && this.renderDays()
        )
      );
    }
  }]);

  return F4FullCalendarMonth;
}(_react.Component)) || _class;

exports.default = F4FullCalendarMonth;


F4FullCalendarMonth.propTypes = {
  viewDate: _propTypes2.default.object.isRequired,
  calendarData: _propTypes2.default.any
};
module.exports = exports['default'];