'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputFileUpload
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

var _F4Modal = require('../F4Modal/F4Modal');

var _F4Modal2 = _interopRequireDefault(_F4Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputFileUpload = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputFileUpload, _Component);

  function F4InputFileUpload(props) {
    _classCallCheck(this, F4InputFileUpload);

    var _this = _possibleConstructorReturn(this, (F4InputFileUpload.__proto__ || Object.getPrototypeOf(F4InputFileUpload)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.openPreviewModal = _this.openPreviewModal.bind(_this);
    _this.closePreviewModal = _this.closePreviewModal.bind(_this);
    _this.state = {
      isPreviewModalOpen: false
    };
    return _this;
  }

  _createClass(F4InputFileUpload, [{
    key: 'openPreviewModal',
    value: function openPreviewModal() {
      this.setState({
        isPreviewModalOpen: true
      });
    }
  }, {
    key: 'closePreviewModal',
    value: function closePreviewModal() {
      this.setState({
        isPreviewModalOpen: false
      });
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(event) {
      var _props = this.props,
          name = _props.name,
          onChange = _props.onChange;


      if (onChange && typeof onChange !== 'undefined') {
        var file = event.target.files[0];
        if (window && typeof window !== 'undefined') {
          file.preview = window.URL.createObjectURL(file);
        }
        onChange(name, file);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          name = _props2.name,
          value = _props2.value;
      var isPreviewModalOpen = this.state.isPreviewModalOpen;


      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement('input', { type: 'file', name: name, onChange: this.handleOnChange }),
        value && value.preview && _react2.default.createElement(
          'div',
          { className: 'f4InputFileDropPreviewContainer' },
          _react2.default.createElement(
            _F4Modal2.default,
            {
              show: isPreviewModalOpen,
              title: 'PREVIEW: ' + value.name,
              onHide: this.closePreviewModal,
              onCancel: this.closePreviewModal,
              cancelText: "CLOSE",
              size: "large"
            },
            _react2.default.createElement(
              'div',
              { className: 'F4InputFileDropPreview', style: { textAlign: 'center' } },
              _react2.default.createElement('img', { src: value.preview, width: '700', title: value.name, responsive: true })
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _F4Button2.default,
            { style: 'primary', onClick: this.openPreviewModal },
            'Preview'
          )
        )
      );
    }
  }]);

  return F4InputFileUpload;
}(_react.Component)) || _class;

F4InputFileUpload.propTypes = {
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool,
  value: _propTypes2.default.any
};

F4InputFileUpload.defaultProps = {
  disabled: false
};

exports.default = (0, _asF4FormElement2.default)(F4InputFileUpload);
module.exports = exports['default'];