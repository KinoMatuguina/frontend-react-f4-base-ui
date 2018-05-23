'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4FullCalendarTaskView
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

var _UUIDUtil = require('../UUIDUtil');

var UUIDUtil = _interopRequireWildcard(_UUIDUtil);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4FullCalendarTaskView = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4FullCalendarTaskView, _Component);

  function F4FullCalendarTaskView(props) {
    _classCallCheck(this, F4FullCalendarTaskView);

    return _possibleConstructorReturn(this, (F4FullCalendarTaskView.__proto__ || Object.getPrototypeOf(F4FullCalendarTaskView)).call(this, props));
  }

  _createClass(F4FullCalendarTaskView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          taskData = _props.taskData,
          day = _props.day,
          viewDate = _props.viewDate,
          onSwitchDisplay = _props.onSwitchDisplay;


      return _react2.default.createElement(
        'div',
        { className: 'f4FullCalendarTaskView' },
        _react2.default.createElement(
          'div',
          { className: 'f4FullCalendarTaskViewCurrentDate' },
          _react2.default.createElement(
            'span',
            { onClick: onSwitchDisplay },
            _DateTimeUtil2.default.getFullMonth(viewDate),
            ' ',
            viewDate.getDate(),
            ', ',
            viewDate.getFullYear()
          )
        ),
        _react2.default.createElement(
          'ul',
          null,
          taskData.tasks.map(function (task) {
            return _react2.default.createElement(
              'li',
              { key: '' + UUIDUtil.get() },
              _react2.default.createElement(
                'h3',
                null,
                task.title
              ),
              _react2.default.createElement(
                'p',
                null,
                task.content
              )
            );
          })
        )
      );
    }
  }]);

  return F4FullCalendarTaskView;
}(_react.Component)) || _class;

exports.default = F4FullCalendarTaskView;
module.exports = exports['default'];