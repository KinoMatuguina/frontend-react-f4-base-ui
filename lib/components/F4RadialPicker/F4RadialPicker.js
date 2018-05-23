'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2; /**
                     * F4RadialPicker
                     */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = require('react-motion');

var _mobxReact = require('mobx-react');

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChildOption = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(ChildOption, _Component);

  function ChildOption() {
    _classCallCheck(this, ChildOption);

    return _possibleConstructorReturn(this, (ChildOption.__proto__ || Object.getPrototypeOf(ChildOption)).apply(this, arguments));
  }

  _createClass(ChildOption, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          onClick = _props.onClick,
          overrideStyle = _props.overrideStyle;


      return _react2.default.createElement(
        'span',
        { onClick: onClick, className: 'f4RadialPickerButton child f4RadialOption', title: title, style: overrideStyle },
        title
      );
    }
  }]);

  return ChildOption;
}(_react.Component)) || _class;

var F4RadialPicker = (0, _mobxReact.observer)(_class2 = function (_Component2) {
  _inherits(F4RadialPicker, _Component2);

  function F4RadialPicker(props) {
    _classCallCheck(this, F4RadialPicker);

    var _this2 = _possibleConstructorReturn(this, (F4RadialPicker.__proto__ || Object.getPrototypeOf(F4RadialPicker)).call(this, props));

    _this2.state = {
      selected: "",
      isOpen: false
    };

    _this2.handleOnClick = _this2.handleOnClick.bind(_this2);
    _this2.closePicker = _this2.closePicker.bind(_this2);
    _this2.handleOnOptionClick = _this2.handleOnOptionClick.bind(_this2);
    return _this2;
  }

  _createClass(F4RadialPicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {

      if (props && props.value && props.options && props.options.map && props.options.length > 0) {

        var label = "";
        props.options.forEach(function (option) {
          if (option.value === props.value) {
            label = option.label;
            return;
          }
        });

        this.setState({
          selected: label
        });
      }
    }
  }, {
    key: 'handleOnOptionClick',
    value: function handleOnOptionClick(value, label) {
      var _props2 = this.props,
          onChange = _props2.onChange,
          disabled = _props2.disabled,
          name = _props2.name;


      if (!disabled && typeof onChange !== 'undefined') {
        console.log('VALUE ' + value);
        onChange(name, value);
      }

      this.setState({
        selected: label,
        isOpen: false
      });
    }
  }, {
    key: 'handleOnClick',
    value: function handleOnClick(event) {

      event.preventDefault();
      var currIsOpen = this.state.isOpen;
      currIsOpen = !currIsOpen;

      this.setState({
        isOpen: currIsOpen
      });
    }
  }, {
    key: 'closePicker',
    value: function closePicker() {

      this.setState({
        isOpen: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          isOpen = _state.isOpen,
          selected = _state.selected;
      var _props3 = this.props,
          placeholder = _props3.placeholder,
          options = _props3.options;


      var parentContent = _react2.default.createElement('span', { className: 'fa fa-bars f4RadialTrigger', style: { color: 'white' } });

      if (typeof placeholder !== 'undefined' && placeholder != "") {
        parentContent = placeholder;
      }

      if (typeof selected !== 'undefined' && selected !== "") {
        parentContent = selected;
      }

      var l = options.length;
      var optionNodes = options.map(function (option, i) {
        var style = {
          left: (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%",
          top: (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%"
        };

        return _react2.default.createElement(ChildOption, { title: option.label, onClick: _this3.handleOnOptionClick.bind(null, option.value, option.label), key: 'radial-' + option.label, overrideStyle: style });
      });

      return _react2.default.createElement(
        'div',
        { className: 'f4RadialPicker' },
        _react2.default.createElement(
          _reactMotion.Motion,
          { defaultStyle: { x: 0 }, style: { x: (0, _reactMotion.spring)(isOpen ? 1 : 0, { stiffness: 300 }) } },
          function (value) {
            return _react2.default.createElement(
              'div',
              { className: 'f4RadialPickerContent', style: { opacity: value.x, transform: 'scale(' + value.x + ') rotateZ(' + value.x * 360 + 'deg)' } },
              optionNodes
            );
          }
        ),
        _react2.default.createElement(
          'span',
          { onClick: this.handleOnClick, className: 'f4RadialPickerButton parent f4RadialTrigger' },
          parentContent
        )
      );
    }
  }]);

  return F4RadialPicker;
}(_react.Component)) || _class2;

F4RadialPicker.propTypes = {
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool
};

F4RadialPicker.defaultProps = {
  disabled: false
};

exports.default = (0, _asF4FormElement2.default)(F4RadialPicker);
module.exports = exports['default'];