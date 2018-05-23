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

var F4CalendarYear = function (_Component) {
  _inherits(F4CalendarYear, _Component);

  function F4CalendarYear(props) {
    _classCallCheck(this, F4CalendarYear);

    var _this = _possibleConstructorReturn(this, (F4CalendarYear.__proto__ || Object.getPrototypeOf(F4CalendarYear)).call(this, props));

    _this.renderYear = _this.renderYear.bind(_this);
    return _this;
  }

  _createClass(F4CalendarYear, [{
    key: 'renderYear',
    value: function renderYear(year) {
      var _props = this.props,
          selectedDate = _props.selectedDate,
          id = _props.id,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          handleYearClick = _props.handleYearClick;


      var className = "yearListItem";
      var disabled = _DateTimeUtil2.default.isYearDisabled(minDate, maxDate, year, 'both');

      if (selectedDate.getFullYear() === year) {
        className += "Selected";
      }

      if (disabled) {
        className += "Disabled";
      }

      return _react2.default.createElement(
        'li',
        {
          id: id + '__yearListItem__' + year,
          key: year, className: className,
          style: { cursor: 'pointer', padding: '5px 10px 5px 10px' },
          onClick: disabled ? null : handleYearClick.bind(null, year)
        },
        year
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
            { className: 'f4InputDatePicker yearsList', style: { opacity: value.x } },
            _.range(1900, 2100).map(function (i) {
              return self.renderYear(i);
            })
          );
        }
      );
    }
  }]);

  return F4CalendarYear;
}(_react.Component);

exports.default = F4CalendarYear;


F4CalendarYear.propTypes = {
  id: _propTypes2.default.string,
  handleYearClick: _propTypes2.default.func,
  minDate: _propTypes2.default.object,
  maxDate: _propTypes2.default.object,
  selectedDate: _propTypes2.default.object
};
module.exports = exports['default'];