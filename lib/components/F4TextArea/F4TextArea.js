'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4TextArea
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4TextArea = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4TextArea, _Component);

  function F4TextArea(props) {
    _classCallCheck(this, F4TextArea);

    var _this = _possibleConstructorReturn(this, (F4TextArea.__proto__ || Object.getPrototypeOf(F4TextArea)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    return _this;
  }

  _createClass(F4TextArea, [{
    key: 'handleOnChange',
    value: function handleOnChange(event) {
      var _props = this.props,
          name = _props.name,
          disabled = _props.disabled,
          onChange = _props.onChange;


      if (onChange && !disabled) {
        onChange(name, event.target.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          name = _props2.name,
          placeholder = _props2.placeholder,
          disabled = _props2.disabled,
          value = _props2.value,
          resizable = _props2.resizable;


      var overrideStyle = {};

      if (!resizable) {
        overrideStyle = {
          resize: 'none'
        };
      }

      return _react2.default.createElement('textarea', {
        className: 'f4TextArea form-control',
        id: id,
        name: name,
        placeholder: placeholder,
        disabled: disabled,
        value: value,
        style: overrideStyle,
        onChange: this.handleOnChange
      });
    }
  }]);

  return F4TextArea;
}(_react.Component)) || _class;

F4TextArea.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  isVisible: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string,
  isCentered: _propTypes2.default.bool,
  resizable: _propTypes2.default.bool
};

F4TextArea.defaultProps = {
  disabled: false,
  isVisible: true,
  resizable: false
};

exports.default = (0, _asF4FormElement2.default)(F4TextArea);
module.exports = exports['default'];