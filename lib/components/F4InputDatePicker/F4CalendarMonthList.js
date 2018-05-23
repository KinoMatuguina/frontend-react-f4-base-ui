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

var _reactMotion = require('react-motion');

var _DateTimeUtil = require('../DateTimeUtil');

var _DateTimeUtil2 = _interopRequireDefault(_DateTimeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4CalendarMonthList = function (_Component) {
  _inherits(F4CalendarMonthList, _Component);

  function F4CalendarMonthList(props) {
    _classCallCheck(this, F4CalendarMonthList);

    var _this = _possibleConstructorReturn(this, (F4CalendarMonthList.__proto__ || Object.getPrototypeOf(F4CalendarMonthList)).call(this, props));

    _this.renderMonth = _this.renderMonth.bind(_this);
    return _this;
  }

  _createClass(F4CalendarMonthList, [{
    key: 'renderMonth',
    value: function renderMonth(month, index) {
      var _props = this.props,
          selectedDate = _props.selectedDate,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          handleMonthClick = _props.handleMonthClick;


      var className = "f4InputDatePicker monthListItem";

      if (selectedDate.getMonth() === index) {
        className += "Selected";
      }

      return _react2.default.createElement(
        'li',
        {
          key: month, className: className + ' cursor-pointer',
          onClick: handleMonthClick.bind(null, index),
          style: { display: 'block', width: '120px', padding: '10px', height: '40px', float: 'left' }
        },
        _react2.default.createElement(
          'div',
          { style: { margin: '0 auto' } },
          month
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var self = this;
      return _react2.default.createElement(
        _reactMotion.Motion,
        { defaultStyle: { x: 0 }, style: { x: (0, _reactMotion.spring)(1, { stiffness: 300 }) } },
        function (value) {
          return _react2.default.createElement(
            'ul',
            { className: 'f4InputDatePicker monthsList', style: { opacity: value.x, display: 'inline-block', paddingTop: '15px', listStyle: 'none' } },
            _DateTimeUtil2.default.getFullMonthList().map(function (month, index) {
              return self.renderMonth(month, index);
            })
          );
        }
      );
    }
  }]);

  return F4CalendarMonthList;
}(_react.Component);

exports.default = F4CalendarMonthList;


F4CalendarMonthList.propTypes = {
  handleMonthClick: _propTypes2.default.func,
  minDate: _propTypes2.default.object,
  maxDate: _propTypes2.default.object,
  selectedDate: _propTypes2.default.object
};
module.exports = exports['default'];