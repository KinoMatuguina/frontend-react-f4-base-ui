'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4DayOfMonthPicker
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputDayOfMonthPicker = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputDayOfMonthPicker, _Component);

  function F4InputDayOfMonthPicker(props) {
    _classCallCheck(this, F4InputDayOfMonthPicker);

    var _this = _possibleConstructorReturn(this, (F4InputDayOfMonthPicker.__proto__ || Object.getPrototypeOf(F4InputDayOfMonthPicker)).call(this, props));

    _this.handleOnOptionClick = _this.handleOnOptionClick.bind(_this);
    _this.buildPicker = _this.buildPicker.bind(_this);
    _this.buildString = _this.buildString.bind(_this);
    _this.updateSelected = _this.updateSelected.bind(_this);
    _this.state = {
      selected: []
    };

    return _this;
  }

  _createClass(F4InputDayOfMonthPicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          value = _props.value,
          delimiter = _props.delimiter;


      this.updateSelected(value, delimiter);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      this.updateSelected(props.value, props.delimiter);
    }
  }, {
    key: 'updateSelected',
    value: function updateSelected(value, delimiter) {

      if (value === "" || typeof value === 'undefined' || value === null) {
        this.setState({
          selected: []
        });
      } else if (value && value !== "" && value.split) {

        var splitted = value.split(delimiter).map(function (n) {
          return parseInt(n);
        });

        this.setState({
          selected: splitted
        });
      }
    }
  }, {
    key: 'buildString',
    value: function buildString(arr) {
      var delimiter = this.props.delimiter;


      var str = "";

      if (arr && arr.map && arr.length > 0) {
        if (arr.length === 1) {
          str = arr[0] + "|";
        } else {
          str = arr.join(delimiter);
        }
      }

      return str;
    }
  }, {
    key: 'handleOnOptionClick',
    value: function handleOnOptionClick(clickedValue) {
      var _props2 = this.props,
          name = _props2.name,
          onChange = _props2.onChange,
          disabled = _props2.disabled,
          value = _props2.value;
      var selected = this.state.selected;


      if (!disabled && typeof onChange !== 'undefined' && onChange) {

        var newState = selected.slice();

        if (newState.length === 0) {

          newState.push(clickedValue);
        } else {

          var index = newState.indexOf(clickedValue);

          if (index > -1) {

            if (newState.length === 1) {
              newState = [];
            } else {
              newState.splice(index, 1);
            }
          } else {

            newState.push(clickedValue);
          }
        }

        newState.sort(function (a, b) {
          return a - b;
        });

        this.setState({
          selected: newState
        });

        var newValue = this.buildString(newState);

        onChange(name, newValue);
      }
    }
  }, {
    key: 'buildPicker',
    value: function buildPicker() {
      var value = this.props.value;
      var selected = this.state.selected;


      var self = this;
      return _underscore2.default.range(0, 31).map(function (i) {

        var className = "f4InputDayOfMonthPickerItem";

        if (selected.indexOf(i + 1) > -1) {
          className += "Selected";
        }

        return _react2.default.createElement(
          'div',
          { key: 'monthPicker-' + (i + 1), className: className + ' cursor-pointer', onClick: self.handleOnOptionClick.bind(null, i + 1) },
          _react2.default.createElement(
            'span',
            null,
            '' + (i + 1)
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'f4InputDayOfMonthPickerContainer' },
        _react2.default.createElement(
          'div',
          { className: 'f4InputDayOfMonthPicker' },
          this.buildPicker()
        )
      );
    }
  }]);

  return F4InputDayOfMonthPicker;
}(_react.Component)) || _class;

F4InputDayOfMonthPicker.propTypes = {
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  delimiter: _propTypes2.default.string
};

F4InputDayOfMonthPicker.defaultProps = {
  disabled: false,
  delimiter: "|"
};

exports.default = (0, _asF4FormElement2.default)(F4InputDayOfMonthPicker);
module.exports = exports['default'];