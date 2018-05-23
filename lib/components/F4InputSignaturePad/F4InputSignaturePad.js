'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputSignaturePad
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

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

var F4InputSignaturePad = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputSignaturePad, _Component);

  function F4InputSignaturePad(props) {
    _classCallCheck(this, F4InputSignaturePad);

    var _this = _possibleConstructorReturn(this, (F4InputSignaturePad.__proto__ || Object.getPrototypeOf(F4InputSignaturePad)).call(this, props));

    _this.signaturePad = undefined;
    _this.canvas = undefined;
    _this.clearCanvas = _this.clearCanvas.bind(_this);
    _this.saveImage = _this.saveImage.bind(_this);
    _this.openModal = _this.openModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.renderPad = _this.renderPad.bind(_this);
    _this.previewUrl = undefined;

    _this.state = {
      isOpen: false,
      dataUrl: undefined
    };
    return _this;
  }

  _createClass(F4InputSignaturePad, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {

      if (this.state.isOpen) {
        var id = this.props.id;


        var canvas = document.querySelector('#' + id + '-canvas');
        this.canvas = canvas;
        var SignaturePad = require('signature_pad');
        if (canvas && typeof canvas !== 'undefined') {
          this.signaturePad = new SignaturePad(canvas, {
            backgroundColor: "rgb(255,255,255)"
          });
          this.signaturePad.on();
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.props.id;


      var canvas = document.querySelector('#' + id + '-canvas');
      this.canvas = canvas;
      var SignaturePad = require('signature_pad');
      if (canvas && typeof canvas !== 'undefined') {
        this.signaturePad = new SignaturePad(canvas, {
          backgroundColor: "rgb(255,255,255)"
        });
        this.signaturePad.on();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      if (this.signaturePad && typeof this.signaturePad !== 'undefined') {
        this.signaturePad.off();
      }
    }
  }, {
    key: 'clearCanvas',
    value: function clearCanvas() {

      if (this.signaturePad && typeof this.signaturePad !== 'undefined') {
        this.signaturePad.clear();
      }
    }
  }, {
    key: 'convertToBlob',
    value: function convertToBlob(dataUrl) {
      var blobBin = atob(dataUrl.split(',')[1]);
      var array = [];
      for (var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
      }
      var blob = new Blob([new Uint8Array(array)], { type: 'image/jpg' });

      return blob;
    }
  }, {
    key: 'saveImage',
    value: function saveImage() {
      var _props = this.props,
          id = _props.id,
          name = _props.name,
          nameId = _props.nameId,
          uploadAction = _props.uploadAction,
          onChange = _props.onChange;


      if (this.signaturePad && typeof this.signaturePad !== 'undefined') {
        if (this.signaturePad.isEmpty()) {
          alert("Please sign first");
        } else {
          if (typeof window !== 'undefined' && window && this.canvas && typeof this.canvas !== 'undefined') {
            var dataUrl = this.canvas.toDataURL("image/jpeg"); //.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
            var self = this;

            this.closeModal();

            this.setState({
              dataUrl: dataUrl
            });

            var file = this.convertToBlob(dataUrl);
            file.mimetype = "image/jpeg";
            file.originalname = "signature.jpg";
            console.log(file);
            onChange(name, file);
            uploadAction(name, nameId);
            //window.open(dataUrl);
          }
        }
      }
    }
  }, {
    key: 'renderPad',
    value: function renderPad() {
      var _props2 = this.props,
          id = _props2.id,
          hasClearButton = _props2.hasClearButton,
          elementRef = _props2.elementRef;


      return _react2.default.createElement(
        'div',
        { className: 'f4InputSignaturePad' },
        _react2.default.createElement(
          'div',
          { className: 'f4InputSignaturePadBody' },
          _react2.default.createElement('canvas', { id: id + '-canvas', width: '250' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isOpen = _state.isOpen,
          dataUrl = _state.dataUrl;
      var _props3 = this.props,
          modalTitle = _props3.modalTitle,
          clearBtnText = _props3.clearBtnText,
          saveBtnText = _props3.saveBtnText,
          generateBtnText = _props3.generateBtnText;

      return _react2.default.createElement(
        'div',
        { className: 'f4InputSignaturePadContainer' },
        _react2.default.createElement(
          _F4Modal2.default,
          {
            show: isOpen,
            title: modalTitle,
            onHide: this.closeModal,
            onCancel: this.clearCanvas,
            onProceed: this.saveImage,
            cancelText: clearBtnText,
            proceedText: saveBtnText,
            size: "small"
          },
          _react2.default.createElement(
            'div',
            { style: { textAlign: 'center' } },
            this.renderPad()
          )
        ),
        _react2.default.createElement(
          _F4Button2.default,
          { style: 'primary', onClick: this.openModal },
          generateBtnText
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        typeof dataUrl !== 'undefined' && _react2.default.createElement(
          'div',
          { style: { width: '100%', textAlign: 'center' } },
          _react2.default.createElement('img', { style: { margin: '0 auto' }, src: dataUrl, className: 'thumbnail img-responsive', title: 'Digital Signature' })
        )
      );
    }
  }]);

  return F4InputSignaturePad;
}(_react.Component)) || _class;

F4InputSignaturePad.propTypes = {
  id: _propTypes2.default.string.isRequired,
  hasClearButton: _propTypes2.default.bool,
  elementRef: _propTypes2.default.string.isRequired,
  modalTitle: _propTypes2.default.string,
  clearBtnText: _propTypes2.default.string,
  saveBtnText: _propTypes2.default.string,
  generateBtnText: _propTypes2.default.string
};

F4InputSignaturePad.defaultProps = {
  hasClearButton: true,
  modalTitle: "DIGITAL SIGNATURE",
  clearBtnText: "CLEAR",
  saveBtnText: "SAVE",
  generateBtnText: "GENERATE DIGITAL SIGNATURE"
};

exports.default = (0, _asF4FormElement2.default)(F4InputSignaturePad);
module.exports = exports['default'];