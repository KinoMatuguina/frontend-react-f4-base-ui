'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputMonthYearPicker
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _DateTimeUtil = require('../DateTimeUtil');

var _DateTimeUtil2 = _interopRequireDefault(_DateTimeUtil);

var _scrollToElement = require('../scrollToElement');

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

var _F4CalendarYear = require('../F4InputDatePicker/F4CalendarYear');

var _F4CalendarYear2 = _interopRequireDefault(_F4CalendarYear);

var _F4CalendarMonthList = require('../F4InputDatePicker/F4CalendarMonthList');

var _F4CalendarMonthList2 = _interopRequireDefault(_F4CalendarMonthList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputMonthYearPicker = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputMonthYearPicker, _Component);

  function F4InputMonthYearPicker(props) {
    _classCallCheck(this, F4InputMonthYearPicker);

    var _this = _possibleConstructorReturn(this, (F4InputMonthYearPicker.__proto__ || Object.getPrototypeOf(F4InputMonthYearPicker)).call(this, props));

    _this.updateStateDate = function (date) {
      if (Object.prototype.toString.call(date) === '[object Date]') {
        _this.setState({
          date: _DateTimeUtil2.default.getFirstDayOfMonth(date)
        });
      }
    };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.handleOnOkayClick = _this.handleOnOkayClick.bind(_this);
    _this.handleOnTodayClick = _this.handleOnTodayClick.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.renderMonthList = _this.renderMonthList.bind(_this);
    _this.renderYears = _this.renderYears.bind(_this);
    _this.handleYearClick = _this.handleYearClick.bind(_this);
    _this.handleMonthClick = _this.handleMonthClick.bind(_this);
    _this.handleSwitchDisplay = _this.handleSwitchDisplay.bind(_this);

    _this.state = {
      showModal: false,
      display: 'monthList',
      date: _this.props.value
    };

    return _this;
  }

  _createClass(F4InputMonthYearPicker, [{
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
    key: 'handleSwitchDisplay',
    value: function handleSwitchDisplay(display) {
      var id = this.props.id;

      this.setState({
        display: display
      });

      if (display === 'years') {
        var year = this.state.date.getFullYear();

        setTimeout(function () {
          (0, _scrollToElement2.default)('#' + id + '__f4InputMonthYearContainer', '#' + id + '__yearListItem__' + year);
        }, 300);
      }
    }
  }, {
    key: 'handleOnTodayClick',
    value: function handleOnTodayClick() {
      var date = this.state.date;

      var newDate = _DateTimeUtil2.default.getFirstDayOfMonth(new Date());

      this.setState({
        date: newDate
      });
    }
  }, {
    key: 'handleMonthClick',
    value: function handleMonthClick(month) {
      var date = this.state.date;

      var newDate = _DateTimeUtil2.default.setMonth(date, month);

      this.setState({
        date: newDate
      });
    }
  }, {
    key: 'handleYearClick',
    value: function handleYearClick(year) {
      var date = this.props.date;

      var newDate = _DateTimeUtil2.default.setYear(date, year);

      this.setState({
        date: newDate,
        display: 'monthList'
      });
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event) {
      event.preventDefault();

      var disabled = this.props.disabled;


      if (!disabled) {
        this.setState({
          showModal: true,
          display: 'monthList',
          date: this.props.value
        });
      }
    }
  }, {
    key: 'handleOnOkayClick',
    value: function handleOnOkayClick() {
      var _props = this.props,
          onChange = _props.onChange,
          name = _props.name;
      var date = this.state.date;


      if (onChange && typeof onChange !== 'undefined') {
        onChange(name, date);
      }

      this.setState({
        showModal: false
      });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        showModal: false
      });
    }
  }, {
    key: 'renderMonthList',
    value: function renderMonthList() {
      var _props2 = this.props,
          maxDate = _props2.maxDate,
          minDate = _props2.minDate;
      var date = this.state.date;


      return _react2.default.createElement(_F4CalendarMonthList2.default, {
        minDate: minDate,
        maxDate: maxDate,
        selectedDate: date,
        handleMonthClick: this.handleMonthClick
      });
    }
  }, {
    key: 'renderYears',
    value: function renderYears() {
      var _props3 = this.props,
          id = _props3.id,
          minDate = _props3.minDate,
          maxDate = _props3.maxDate;
      var date = this.state.date;

      return _react2.default.createElement(_F4CalendarYear2.default, {
        id: id,
        selectedDate: date,
        minDate: minDate,
        maxDate: maxDate,
        handleYearClick: this.handleYearClick
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          date = _state.date,
          display = _state.display,
          showModal = _state.showModal;
      var _props4 = this.props,
          id = _props4.id,
          value = _props4.value,
          format = _props4.format,
          disabled = _props4.disabled;


      console.log("DATE");
      console.log(date);

      var displayDate = (0, _moment2.default)(value).format(format);

      var overrideStyle = {
        display: 'block',
        minHeight: '280px',
        maxHeight: '280px'
      };

      if (display === 'years') {
        overrideStyle.overflowY = 'scroll';
        overrideStyle.overflowX = 'hidden';
      }

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
                  'h4',
                  { style: { textAlign: 'center' } },
                  _react2.default.createElement(
                    'span',
                    { className: 'f4InputDatePicker headerDate cursor-pointer', style: { marginRight: '15px' }, onClick: this.handleSwitchDisplay.bind(this, 'monthList') },
                    _DateTimeUtil2.default.getFullMonth(date, true)
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'f4InputDatePicker headerDate cursor-pointer', onClick: this.handleSwitchDisplay.bind(this, 'years') },
                    date.getFullYear()
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _Modal2.default.Body,
            { className: 'f4InputDatePicker f4ModalBody' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { id: id + '__f4InputMonthYearContainer', style: overrideStyle },
                display === 'years' ? this.renderYears() : this.renderMonthList()
              )
            )
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
                  onClick: this.handleOnTodayClick,
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

  return F4InputMonthYearPicker;
}(_react.Component)) || _class;

F4InputMonthYearPicker.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  minDate: _propTypes2.default.object,
  maxDate: _propTypes2.default.object,
  format: _propTypes2.default.string
};

F4InputMonthYearPicker.defaultProps = {
  disabled: false,
  value: _DateTimeUtil2.default.getFirstDayOfMonth(new Date()),
  format: "MMMM YYYY"
};

exports.default = (0, _asF4FormElement2.default)(F4InputMonthYearPicker);
module.exports = exports['default'];