'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = asF4FormElement;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * asF4FormElement Higer Order Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

function asF4FormElement(FormElementComponent) {
  return function (_Component) {
    _inherits(Form, _Component);

    function Form(props) {
      _classCallCheck(this, Form);

      var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

      _this.renderContent = _this.renderContent.bind(_this);
      return _this;
    }

    _createClass(Form, [{
      key: 'renderNone',
      value: function renderNone() {
        return _react2.default.createElement('span', { style: { display: 'none' } });
      }
    }, {
      key: 'renderContent',
      value: function renderContent() {
        var _props = this.props,
            id = _props.id,
            name = _props.name,
            fieldLabel = _props.fieldLabel,
            forInputList = _props.forInputList,
            forInputCarouselList = _props.forInputCarouselList,
            isCentered = _props.isCentered,
            infoText = _props.infoText;


        var labelsm = 0;
        var labelmd = 2;
        var formElsm = 12;
        var formElmd = 10;
        var labelmdOffset = 0;

        if (typeof isCentered !== 'undefined' && isCentered) {
          formElmd = 7;
          labelmdOffset = 1;
        }

        if (fieldLabel && (typeof forInputList === 'undefined' || !forInputList)) {
          return _react2.default.createElement(
            _FormGroup2.default,
            { controlId: id },
            fieldLabel && _react2.default.createElement(
              _Col2.default,
              { sm: labelsm, md: labelmd, mdOffset: labelmdOffset, componentClass: _ControlLabel2.default, className: 'f4FormFieldLabel' },
              fieldLabel
            ),
            _react2.default.createElement(
              _Col2.default,
              { sm: formElsm, md: formElmd },
              _react2.default.createElement(FormElementComponent, this.props),
              infoText && typeof infoText !== 'undefined' && _react2.default.createElement(
                'span',
                { className: 'help-block info' },
                infoText
              )
            )
          );
        } else if (forInputList) {
          return _react2.default.createElement(
            'div',
            { className: 'f4DivTableCell' },
            _react2.default.createElement(FormElementComponent, this.props)
          );
        } else {

          if (isCentered) {
            return _react2.default.createElement(
              _FormGroup2.default,
              null,
              _react2.default.createElement(
                'div',
                { style: { width: '100%', textAlign: 'center', padding: '0px 15px 0px 15px' } },
                _react2.default.createElement(FormElementComponent, this.props)
              )
            );
          } else {
            return _react2.default.createElement(
              _FormGroup2.default,
              null,
              _react2.default.createElement(FormElementComponent, this.props)
            );
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {

        var isVisible = this.props.isVisible;

        if (typeof isVisible === 'undefined') {
          isVisible = true;
        }

        if (isVisible) {
          return this.renderContent();
        } else {
          return this.renderNone();
        }
      }
    }]);

    return Form;
  }(_react.Component);
}
module.exports = exports['default'];