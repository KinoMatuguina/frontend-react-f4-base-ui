'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputFileDrop
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

var _F4Modal = require('../F4Modal/F4Modal');

var _F4Modal2 = _interopRequireDefault(_F4Modal);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _F4ProgressBar = require('../F4ProgressBar/F4ProgressBar');

var _F4ProgressBar2 = _interopRequireDefault(_F4ProgressBar);

var _FileUtils = require('../FileUtils');

var _FileUtils2 = _interopRequireDefault(_FileUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputFileDrop = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputFileDrop, _Component);

  function F4InputFileDrop(props) {
    _classCallCheck(this, F4InputFileDrop);

    var _this = _possibleConstructorReturn(this, (F4InputFileDrop.__proto__ || Object.getPrototypeOf(F4InputFileDrop)).call(this, props));

    _this.handleOnDrop = _this.handleOnDrop.bind(_this);
    _this.renderContent = _this.renderContent.bind(_this);
    _this.openPreviewModal = _this.openPreviewModal.bind(_this);
    _this.closePreviewModal = _this.closePreviewModal.bind(_this);

    _this.state = {
      isPreviewModalOpen: false
    };
    return _this;
  }

  _createClass(F4InputFileDrop, [{
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
    key: 'handleOnDrop',
    value: function handleOnDrop(files) {
      var _props = this.props,
          name = _props.name,
          nameId = _props.nameId,
          onChange = _props.onChange,
          isAutoUpload = _props.isAutoUpload,
          uploadAction = _props.uploadAction,
          accept = _props.accept;


      if (onChange && typeof onChange !== 'undefined') {
        console.log(files[0]);
        console.log("FILE TYPE");

        _FileUtils2.default.validateFileType(files[0], accept, function (mimetype) {
          files[0].mimetype = mimetype;
          onChange(name, files[0]);

          if (isAutoUpload && uploadAction && typeof uploadAction !== 'undefined') {
            uploadAction(name, nameId);
          }
        });
      }
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _props2 = this.props,
          value = _props2.value,
          loaded = _props2.loaded,
          total = _props2.total,
          placeholder = _props2.placeholder;


      var ratio = loaded / total;
      var progress = 0;
      var overrideStyle = {
        opacity: 0.2
      };

      if (!isNaN(ratio)) {
        progress = ratio * 100;
        overrideStyle.opacity = ratio + 0.2;
      }

      if (value && value !== "" && !_underscore2.default.isEmpty(value) && typeof value !== 'undefined') {
        var fileIcon = _react2.default.createElement(_reactFontawesome2.default, { name: "file", size: '2x' });

        if (value.type && value.type.indexOf("image") > -1) {
          fileIcon = _react2.default.createElement('img', { src: value.preview, className: 'img-responsive', title: value.name, style: overrideStyle });
        }

        return _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', padding: '5px', overflow: 'hidden', maxHeight: '115px' } },
          fileIcon,
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
            value.name
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { style: { textAlign: 'center', padding: '15px', position: 'absolute', top: '0' } },
          _react2.default.createElement(_reactFontawesome2.default, { name: 'upload', size: '2x' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          placeholder
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          name = _props3.name,
          value = _props3.value,
          accept = _props3.accept,
          loaded = _props3.loaded,
          total = _props3.total,
          placeholder = _props3.placeholder,
          isUploading = _props3.isUploading;
      var isPreviewModalOpen = this.state.isPreviewModalOpen;

      console.log(loaded + ' of ' + total);

      var progress = loaded / total * 100;

      if (isNaN(progress)) {
        progress = 0;
      }

      console.log('FILE DROP PROGRESS ' + progress);
      return _react2.default.createElement(
        'div',
        { className: 'f4InputFileDrop' },
        _react2.default.createElement(
          _reactDropzone2.default,
          { onDrop: this.handleOnDrop, accept: accept, className: 'f4InputFileDropZone', activeClassName: 'f4InputFileDropZoneActive', rejectClassName: 'f4InputFileDropZoneReject' },
          _react2.default.createElement(
            'div',
            { className: 'f4InputFileDropInfo' },
            this.renderContent(),
            isUploading && total !== 0 && progress !== 100 && _react2.default.createElement(
              'div',
              { className: 'f4InputFileDropProgress' },
              _react2.default.createElement(
                _F4ProgressBar2.default,
                { progress: progress },
                _react2.default.createElement(
                  'span',
                  null,
                  progress + '%'
                )
              )
            )
          )
        ),
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
              { className: 'F4InputFileDropPreview thumbnail', style: { textAlign: 'center' } },
              _react2.default.createElement('img', { className: 'img-responsive', src: value.preview, title: value.name })
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

  return F4InputFileDrop;
}(_react.Component)) || _class;

F4InputFileDrop.propTypes = {
  name: _propTypes2.default.string.isRequired,
  nameId: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.any,
  isUploading: _propTypes2.default.bool,
  uploadAction: _propTypes2.default.func,
  isAutoUpload: _propTypes2.default.bool
};

F4InputFileDrop.defaultProps = {
  disabled: false,
  isUploading: false,
  isAutoUpload: false,
  placeholder: "Click to select a file or drop the file here"
};

exports.default = (0, _asF4FormElement2.default)(F4InputFileDrop);
module.exports = exports['default'];