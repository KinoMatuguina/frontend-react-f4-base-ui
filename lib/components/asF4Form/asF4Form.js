'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = asF4Form;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * asF4Form Higer Order Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

function asF4Form(RenderComponent, formDataName) {
  return function (_Component) {
    _inherits(Form, _Component);

    function Form(props) {
      _classCallCheck(this, Form);

      var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

      _this.updateField = _this.updateField.bind(_this);
      return _this;
    }

    _createClass(Form, [{
      key: 'updateField',
      value: function updateField(name, value) {
        this.props[formDataName][name] = value;
      }
    }, {
      key: 'updateCheckboxesField',
      value: function updateCheckboxesField(name, value) {

        var array = this.props[formDataName][name];
        var index = array.indexOf(value);

        if (array.indexOf(value) > -1) {
          array.splice(index, 1);
        } else {
          array.push(value);
        }
      }
    }, {
      key: 'renderNone',
      value: function renderNone() {
        return _react2.default.createElement('span', { style: { display: 'none' } });
      }
    }, {
      key: 'render',
      value: function render() {

        var isVisible = this.props.isVisible;
        if (typeof isVisible === 'undefined') {
          isVisible = true;
        }

        if (isVisible) {
          return _react2.default.createElement(RenderComponent, _extends({}, this.props, { updateField: this.updateField, updateCheckboxesField: this.updateCheckboxesField }));
        } else {
          return this.renderNone();
        }
      }
    }]);

    return Form;
  }(_react.Component);
}
module.exports = exports['default'];