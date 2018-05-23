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

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4Modal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4Modal = function (_Component) {
  _inherits(F4Modal, _Component);

  function F4Modal(props) {
    _classCallCheck(this, F4Modal);

    return _possibleConstructorReturn(this, (F4Modal.__proto__ || Object.getPrototypeOf(F4Modal)).call(this, props));
  }

  _createClass(F4Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          onHide = _props.onHide,
          onCancel = _props.onCancel,
          onProceed = _props.onProceed,
          title = _props.title,
          children = _props.children,
          proceedText = _props.proceedText,
          cancelText = _props.cancelText,
          size = _props.size;


      var overrideFloatStyle = {};
      if (onProceed) {
        overrideFloatStyle = {
          float: 'left'
        };
      }

      var overrideWidthStyle = {
        width: '100%',
        float: 'left'
      };

      if (onProceed) {
        overrideWidthStyle.width = '50%';
      }

      return _react2.default.createElement(
        _Modal2.default,
        { className: 'f4Modal', show: show, onHide: onHide, bsSize: size },
        _react2.default.createElement(
          _Modal2.default.Header,
          { className: 'f4ModalHeader', closeButton: true },
          _react2.default.createElement(
            _Modal2.default.Title,
            { className: 'f4ModalTitle' },
            title
          )
        ),
        _react2.default.createElement(
          _Modal2.default.Body,
          { className: 'f4ModalBody' },
          children
        ),
        onCancel && onProceed && _react2.default.createElement(
          _Modal2.default.Footer,
          { className: 'f4ModalFooter' },
          _react2.default.createElement(
            'div',
            { className: 'f4ButtonGroup' },
            onCancel && _react2.default.createElement(
              'span',
              { style: overrideWidthStyle },
              _react2.default.createElement(
                _F4Button2.default,
                { style: 'warning', onClick: onCancel, block: true },
                '' + cancelText
              )
            ),
            onProceed && _react2.default.createElement(
              'span',
              { style: overrideWidthStyle },
              _react2.default.createElement(
                _F4Button2.default,
                { style: 'primary', onClick: onProceed, block: true },
                '' + proceedText
              )
            )
          )
        )
      );
    }
  }]);

  return F4Modal;
}(_react.Component);

exports.default = F4Modal;


F4Modal.propTypes = {
  show: _propTypes2.default.bool,
  onHide: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  onProceed: _propTypes2.default.func,
  title: _propTypes2.default.string,
  cancelText: _propTypes2.default.string,
  proceedText: _propTypes2.default.string,
  size: _propTypes2.default.string
};

F4Modal.defaultProps = {
  cancelText: "CANCEL",
  proceedText: "PROCEED",
  size: "small"
};
module.exports = exports['default'];