'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

var _DateTimeUtil = require('../DateTimeUtil');

var _DateTimeUtil2 = _interopRequireDefault(_DateTimeUtil);

var _scrollToElement = require('../scrollToElement');

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _F4Calendar = require('./F4Calendar');

var _F4Calendar2 = _interopRequireDefault(_F4Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4InputDatePicker
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4InputDatePicker = function (_Component) {
  _inherits(F4InputDatePicker, _Component);

  function F4InputDatePicker(props) {
    _classCallCheck(this, F4InputDatePicker);

    var _this = _possibleConstructorReturn(this, (F4InputDatePicker.__proto__ || Object.getPrototypeOf(F4InputDatePicker)).call(this, props));

    _this.updateStateDate = function (date) {
      if (Object.prototype.toString.call(date) === '[object Date]') {
        _this.setState({
          date: date
        });
      }
    };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.handleOnOkayClick = _this.handleOnOkayClick.bind(_this);
    _this.handleCalendarChange = _this.handleCalendarChange.bind(_this);
    _this.changeViewMonth = _this.changeViewMonth.bind(_this);
    _this.handleSwitchDisplay = _this.handleSwitchDisplay.bind(_this);
    _this.state = {
      showModal: false,
      date: _this.props.value,
      viewDate: _this.props.value
    };
    return _this;
  }

  _createClass(F4InputDatePicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var value = this.props.value;

      this.updateStateDate(value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.updateStateDate(props.value);
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
        date: newValue,
        viewDate: value
      };

      this.setState(state);
    }
  }, {
    key: 'handleSwitchDisplay',
    value: function handleSwitchDisplay(display) {
      var id = this.props.id;

      this.setState({
        display: display
      });

      if (display !== 'months' && display !== 'monthList') {
        var year = this.state.date.getFullYear();

        setTimeout(function () {
          (0, _scrollToElement2.default)('#' + id + '__f4InputDatePickerCalendarContainer', '#' + id + '__yearListItem__' + year);
        }, 300);
      }
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event) {
      event.preventDefault();

      var disabled = this.props.disabled;


      if (!disabled) {
        this.setState({
          showModal: true,
          display: 'months',
          date: this.props.value
        });
      }
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        showModal: false
      });
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
    key: 'handleOnOkayClick',
    value: function handleOnOkayClick() {
      var _props = this.props,
          onChange = _props.onChange,
          name = _props.name;
      var date = this.state.date;


      if (onChange) {
        onChange(name, date);
      }

      this.setState({
        showModal: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          showModal = _state.showModal,
          date = _state.date,
          display = _state.display,
          viewDate = _state.viewDate;
      var _props2 = this.props,
          maxDate = _props2.maxDate,
          minDate = _props2.minDate,
          format = _props2.format,
          value = _props2.value,
          id = _props2.id,
          disabled = _props2.disabled;


      var displayDate = (0, _moment2.default)(value).format(format).toString();

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          _Modal2.default,
          { className: 'f4InputDatePicker f4Modal', show: showModal, onHide: this.closeModal, bsSize: 'small' },
          _react2.default.createElement(
            _Modal2.default.Header,
            { className: 'f4ModalHeader' },
            _react2.default.createElement(
              _Modal2.default.Title,
              { className: 'f4ModalTitle' },
              _react2.default.createElement(
                'div',
                { className: 'f4InputDatePicker header' },
                _react2.default.createElement(
                  'span',
                  { className: 'f4InputDatePicker headerYear cursor-pointer', onClick: this.handleSwitchDisplay.bind(this, 'years') },
                  date.getFullYear()
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'f4InputDatePicker headerDate cursor-pointer', onClick: this.handleSwitchDisplay.bind(this, 'months'), style: { textAlign: 'center' } },
                  _DateTimeUtil2.default.getFullDayOfWeek(date.getDay()),
                  ', ',
                  _DateTimeUtil2.default.getFullMonth(date),
                  ' ',
                  date.getDate()
                )
              )
            )
          ),
          _react2.default.createElement(
            _Modal2.default.Body,
            { className: 'f4InputDatePicker f4ModalBody' },
            _react2.default.createElement(_F4Calendar2.default, {
              id: id,
              display: display,
              maxDate: maxDate,
              minDate: minDate,
              onChange: this.handleCalendarChange,
              changeViewMonth: this.changeViewMonth,
              handleSwitchDisplay: this.handleSwitchDisplay,
              selectedDate: date,
              viewDate: viewDate
            })
          ),
          _react2.default.createElement(
            _Modal2.default.Footer,
            { className: 'f4ModalFooter' },
            _react2.default.createElement(
              'div',
              { className: 'f4InputDatePickerButtons' },
              _react2.default.createElement(
                'button',
                {
                  className: 'default btn btn-default btn-sm btn-default pull-left',
                  onClick: this.handleCalendarChange.bind(this, new Date(), true),
                  style: { fontSize: '12px', padding: '9px' } },
                'TODAY'
              ),
              _react2.default.createElement(
                'button',
                {
                  className: 'warning btn warning btn-sm warning btn-warning',
                  onClick: this.closeModal,
                  style: { fontSize: '12px' } },
                'CANCEL'
              ),
              _react2.default.createElement(
                'button',
                {
                  className: 'primary btn primary btn-sm primary btn-primary',
                  onClick: this.handleOnOkayClick,
                  style: { fontSize: '12px' } },
                'OK'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { type: 'text', className: 'f4InputField form-control', readOnly: true, style: { cursor: disabled ? 'not-allowed' : 'pointer' }, onClick: this.handleOnClick, value: displayDate, onKeyPress: function onKeyPress(event) {
              event.preventDefault();
            } })
        )
      );
    }
  }]);

  return F4InputDatePicker;
}(_react.Component);

F4InputDatePicker.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  maxDate: _propTypes2.default.object,
  onChange: _propTypes2.default.func.isRequired,
  format: _propTypes2.default.string,
  closeOnDayClick: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
};

F4InputDatePicker.defaultProps = {
  value: new Date(),
  format: "MM/DD/YYYY",
  closeOnDayClick: false,
  disabled: false
};

exports.default = (0, _asF4FormElement2.default)(F4InputDatePicker);
module.exports = exports['default'];