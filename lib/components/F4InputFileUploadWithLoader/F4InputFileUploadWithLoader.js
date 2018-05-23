'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class3; /**
                     * F4InputFileUploadWithLoader.js
                     */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactBootstrap = require('react-bootstrap');

var _reactFileuploadProgress = require('react-fileupload-progress');

var _reactFileuploadProgress2 = _interopRequireDefault(_reactFileuploadProgress);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//TODO hide x when not selected

/**
 * lib using: https://www.npmjs.com/package/react-fileupload-progress
 * Custom looks: https://github.com/georgeOsdDev/react-fileupload-progress/blob/develop/example/app.js
 * store variables(inputFiles: [])
 * 
 * @observable inputFiles = [];
 * @observable inputFilesOnSubmit;
 * @observable inputFilesCancel;
 * @observable inputFilesLoading;
 */

var F4InputFileUploadWithLoader = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputFileUploadWithLoader, _Component);

  function F4InputFileUploadWithLoader(props) {
    _classCallCheck(this, F4InputFileUploadWithLoader);

    var _this = _possibleConstructorReturn(this, (F4InputFileUploadWithLoader.__proto__ || Object.getPrototypeOf(F4InputFileUploadWithLoader)).call(this, props));

    _this.requiredFormGetter = function (formData) {
      var _this$props = _this.props,
          store = _this$props.store,
          name = _this$props.name;


      var fileCount = store.inputFiles.length;
      if (fileCount > 0) {
        formData.set(name, store.inputFiles[0]);
        if (fileCount > 1) {
          for (var i = 1; i < fileCount; i++) {
            formData.append(name, store.inputFiles[i]);
          }
        }
      }

      return formData;
    };

    return _this;
  }

  _createClass(F4InputFileUploadWithLoader, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          url = _props.url,
          _formRenderer = _props.formRenderer,
          _progressRenderer = _props.progressRenderer,
          _formGetter = _props.formGetter,
          formId = _props.formId,
          loaderMaxWidth = _props.loaderMaxWidth,
          loaderHeight = _props.loaderHeight,
          multiple = _props.multiple,
          accept = _props.accept,
          name = _props.name,
          store = _props.store,
          required = _props.required,
          errorRenderer = _props.errorRenderer,
          successRenderer = _props.successRenderer,
          loadingRenderer = _props.loadingRenderer,
          messageHelperClassName = _props.messageHelperClassName,
          fileInputLabelClassName = _props.fileInputLabelClassName,
          fileInputClassName = _props.fileInputClassName,
          fileInputContainerClassName = _props.fileInputContainerClassName,
          selectedFilesClassName = _props.selectedFilesClassName,
          selectedFilesNameClassName = _props.selectedFilesNameClassName,
          selectedFilesRemoveButton = _props.selectedFilesRemoveButton;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactFileuploadProgress2.default, _extends({}, this.props, {
          formGetter: function formGetter() {
            return _this2.requiredFormGetter(_formGetter({ formId: formId }));
          },
          formRenderer: function formRenderer(onSubmit) {
            return _formRenderer({ onSubmit: onSubmit, name: name, multiple: multiple, accept: accept, store: store, required: required,
              messageHelperClassName: messageHelperClassName, fileInputLabelClassName: fileInputLabelClassName, fileInputClassName: fileInputClassName,
              fileInputContainerClassName: fileInputContainerClassName,
              selectedFilesClassName: selectedFilesClassName, selectedFilesNameClassName: selectedFilesNameClassName, selectedFilesRemoveButton: selectedFilesRemoveButton });
          },
          progressRenderer: function progressRenderer(progress, hasError, cancelHandler) {
            return _progressRenderer({
              progress: progress, hasError: hasError, cancelHandler: cancelHandler,
              maxWidth: loaderMaxWidth,
              height: loaderHeight, store: store,
              errorRenderer: errorRenderer, successRenderer: successRenderer, loadingRenderer: loadingRenderer });
          }
        })),
        _underscore2.default.map(store.inputFiles, function (file, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: (0, _classnames2.default)("f4InputFileUploadWithLoader_selectedFiles", selectedFilesClassName) },
            _react2.default.createElement(
              'span',
              { className: (0, _classnames2.default)("f4InputFileUploadWithLoader_selectedFilesName", selectedFilesNameClassName) },
              file.name
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: (0, _classnames2.default)("f4InputFileUploadWithLoader_selectedFilesRemoveButton", selectedFilesRemoveButton), bsStyle: 'link', onClick: function onClick() {
                  return store.removeSelectedFile(index);
                } },
              _react2.default.createElement('i', { className: 'fa fa-times', style: { color: '#afaba5' } })
            )
          );
        })
      );
    }
  }]);

  return F4InputFileUploadWithLoader;
}(_react.Component)) || _class;

var styles = {
  bootstrapBar: {
    padding: 0,
    margin: 0
  },
  bootstrapBarContainer: {
    width: '100%'
  },
  clearButtonContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2
  }
};

var DefaultProgressRenderer = function (_Component2) {
  _inherits(DefaultProgressRenderer, _Component2);

  function DefaultProgressRenderer(props) {
    _classCallCheck(this, DefaultProgressRenderer);

    var _this3 = _possibleConstructorReturn(this, (DefaultProgressRenderer.__proto__ || Object.getPrototypeOf(DefaultProgressRenderer)).call(this, props));

    var _this3$props = _this3.props,
        cancelHandler = _this3$props.cancelHandler,
        store = _this3$props.store;

    store.inputFilesCancel = cancelHandler;
    return _this3;
  }

  _createClass(DefaultProgressRenderer, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          progress = _props2.progress,
          hasError = _props2.hasError,
          cancelHandler = _props2.cancelHandler,
          maxWidth = _props2.maxWidth,
          height = _props2.height,
          errorRenderer = _props2.errorRenderer,
          successRenderer = _props2.successRenderer,
          loadingRenderer = _props2.loadingRenderer,
          store = _props2.store;


      if (hasError || progress > -1) {
        var bsStyle = "success";
        var message = loadingRenderer({ progress: progress, files: store.inputFiles });
        if (hasError) {
          bsStyle = "danger";
          message = errorRenderer({ progress: progress, message: 'Failed to upload', files: store.inputFiles });
          store.inputFilesLoading = false;
        }

        var done = !hasError && progress === 100;
        if (done) {
          message = successRenderer({ progress: progress, message: 'Done', files: store.inputFiles });
          store.inputFilesLoading = false;
        }

        var bootstrapBarContainerStyle = Object.assign({}, styles.bootstrapBarContainer);
        bootstrapBarContainerStyle.maxWidth = maxWidth;

        var bootstrapBarStyle = Object.assign({}, styles.bootstrapBar);
        bootstrapBarStyle.height = height;

        var hideProgress = done || hasError;
        return _react2.default.createElement(
          'div',
          null,
          hideProgress ? '' : _react2.default.createElement(
            'div',
            { style: bootstrapBarContainerStyle },
            _react2.default.createElement(_reactBootstrap.ProgressBar, { now: progress, bsStyle: bsStyle, label: progress + '%', style: bootstrapBarStyle, srOnly: true })
          ),
          _react2.default.createElement(
            'div',
            null,
            message
          )
        );
      } else {
        return '';
      }
    }
  }]);

  return DefaultProgressRenderer;
}(_react.Component);

var DefaultFormRenderer = (0, _mobxReact.observer)(_class3 = function (_Component3) {
  _inherits(DefaultFormRenderer, _Component3);

  function DefaultFormRenderer(props) {
    _classCallCheck(this, DefaultFormRenderer);

    var _this4 = _possibleConstructorReturn(this, (DefaultFormRenderer.__proto__ || Object.getPrototypeOf(DefaultFormRenderer)).call(this, props));

    var placeholder = props.multiple ? "Choose files" : "Choose file";
    _this4.state = {
      placeholder: placeholder,
      selectedFiles: []
    };

    _this4._onChange = _this4._onChange.bind(_this4);
    _this4._onClick = _this4._onClick.bind(_this4);
    _this4.clear = _this4.clear.bind(_this4);
    _this4.updatePlaceHolder = _this4.updatePlaceHolder.bind(_this4);
    _this4._onSubmit = _this4._onSubmit.bind(_this4);
    _this4.resize = _this4.resize.bind(_this4);
    _this4.removeSelectedFile = _this4.removeSelectedFile.bind(_this4);

    var _this4$props = _this4.props,
        onSubmit = _this4$props.onSubmit,
        store = _this4$props.store;

    store.inputFilesOnSubmit = _this4._onSubmit;
    store.removeSelectedFile = _this4.removeSelectedFile;
    return _this4;
  }

  _createClass(DefaultFormRenderer, [{
    key: '_onSubmit',
    value: function _onSubmit(event) {
      var _props3 = this.props,
          onSubmit = _props3.onSubmit,
          store = _props3.store;

      if (this.refs.fileUpload.value === null || this.refs.fileUpload.value === undefined || this.refs.fileUpload.value.trim() === '') return;

      onSubmit(event);
      store.inputFilesLoading = true;
    }
  }, {
    key: 'updatePlaceHolder',
    value: function updatePlaceHolder(multiple) {
      var placeholder = multiple ? "Choose files" : "Choose file";
      this.setState({ placeholder: placeholder });
    }
  }, {
    key: 'clear',
    value: function clear(event) {
      var _props4 = this.props,
          multiple = _props4.multiple,
          store = _props4.store;
      var selectedFiles = this.state.selectedFiles;


      this.refs.fileUpload.value = null;
      this.updatePlaceHolder(multiple);
      store.inputFilesCancel();
      store.inputFilesLoading = false;

      store.inputFiles = [];
      this.setState({ selectedFiles: [] });
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      var _props5 = this.props,
          onSubmit = _props5.onSubmit,
          store = _props5.store;


      var selectedFiles = Array.from(event.target.files);
      store.inputFiles = selectedFiles;
      var fileCount = selectedFiles.length;

      if (fileCount > 1) {
        this.setState({ placeholder: "Selected: " + fileCount + " files", selectedFiles: selectedFiles });
      } else if (fileCount === 1) {
        this.setState({ placeholder: event.target.files[0].name, selectedFiles: selectedFiles });
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      event.target.value = null;
      var multiple = this.props.multiple;


      if (event.target.files.length === 0) {
        this.updatePlaceHolder(multiple);
      }

      store.inputFiles = [];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.forceUpdate();
    }
  }, {
    key: 'removeSelectedFile',
    value: function removeSelectedFile(index) {
      var _props6 = this.props,
          store = _props6.store,
          multiple = _props6.multiple;

      var selectedFiles = this.state.selectedFiles;

      selectedFiles.splice(index, 1);

      store.inputFiles = selectedFiles;
      store.inputFilesCancel();
      store.inputFilesLoading = false;
      var fileCount = selectedFiles.length;

      if (fileCount > 1) {
        this.setState({ placeholder: "Selected: " + fileCount + " files", selectedFiles: selectedFiles });
      } else if (fileCount === 1) {
        this.setState({ placeholder: selectedFiles[0].name, selectedFiles: selectedFiles });
      } else {
        this.updatePlaceHolder(multiple);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          onSubmit = _props7.onSubmit,
          name = _props7.name,
          multiple = _props7.multiple,
          accept = _props7.accept,
          store = _props7.store,
          required = _props7.required,
          messageHelperClassName = _props7.messageHelperClassName,
          fileInputLabelClassName = _props7.fileInputLabelClassName,
          fileInputClassName = _props7.fileInputClassName,
          fileInputContainerClassName = _props7.fileInputContainerClassName,
          selectedFilesClassName = _props7.selectedFilesClassName,
          selectedFilesNameClassName = _props7.selectedFilesNameClassName,
          selectedFilesRemoveButton = _props7.selectedFilesRemoveButton;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)("f4InputFileUploadWithLoader_fileInputContainer", fileInputContainerClassName) },
        _react2.default.createElement(
          'span',
          { className: (0, _classnames2.default)("f4InputFileUploadWithLoader_helperMessage", messageHelperClassName) },
          'Browse Files here or Click to Upload'
        ),
        store.inputFiles.length !== 0 || store.inputFilesLoading ? _react2.default.createElement(
          'div',
          { style: styles.clearButtonContainer },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'link', onClick: this.clear },
            _react2.default.createElement('i', { className: 'fa fa-times', style: { color: '#afaba5' } })
          )
        ) : null,
        _react2.default.createElement(
          'label',
          {
            className: (0, _classnames2.default)("f4InputFileUploadWithLoader_fileInputLabel", fileInputLabelClassName)
          },
          this.state.placeholder
        ),
        _react2.default.createElement('input', {
          accept: accept,
          ref: 'fileUpload',
          className: (0, _classnames2.default)("f4InputFileUploadWithLoader_fileInput", fileInputClassName),
          type: 'file', name: name,
          multiple: multiple,
          onChange: this._onChange,
          onClick: this._onClick,
          required: required
        })
      );
    }
  }]);

  return DefaultFormRenderer;
}(_react.Component)) || _class3;

var DefaultLoadingRenderer = function DefaultLoadingRenderer(props) {
  var progress = props.progress;

  return _react2.default.createElement(
    'span',
    null,
    progress + '%'
  );
};

var DefaultFormGetter = function DefaultFormGetter(props) {
  var formId = props.formId;


  var formElement = document.getElementById(formId);
  var formData = new FormData(formElement);
  return formData;
};

var DefaultErrorRenderer = function DefaultErrorRenderer(props) {
  var message = props.message;

  return _react2.default.createElement(
    'div',
    { style: {
        maxWidth: 450,
        width: 'auto',
        padding: 10,
        color: '#fff',
        backgroundColor: '#fc0001',
        marginTop: 5,
        display: 'block'
      }
    },
    message
  );
};

var DefaultSuccessRenderer = function DefaultSuccessRenderer(props) {
  var message = props.message;

  return _react2.default.createElement(
    'div',
    { style: {
        maxWidth: 450,
        width: 'auto',
        padding: 10,
        color: '#fff',
        backgroundColor: '#21ba5c',
        marginTop: 5,
        display: 'block'
      }
    },
    message
  );
};

F4InputFileUploadWithLoader.propTypes = {
  url: _propTypes2.default.string.isRequired,
  store: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
  formId: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  accept: _propTypes2.default.string,
  required: _propTypes2.default.bool,

  loaderMaxWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  loaderHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  onProgress: _propTypes2.default.func,
  onLoad: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onAbort: _propTypes2.default.func,

  formRenderer: _propTypes2.default.func,
  progressRenderer: _propTypes2.default.func,
  formGetter: _propTypes2.default.func,

  errorRenderer: _propTypes2.default.func,
  successRenderer: _propTypes2.default.func,
  loadingRenderer: _propTypes2.default.func,

  messageHelperClassName: _propTypes2.default.string,
  fileInputLabelClassName: _propTypes2.default.string,
  fileInputClassName: _propTypes2.default.string,
  fileInputContainerClassName: _propTypes2.default.string,
  selectedFilesClassName: _propTypes2.default.string,
  selectedFilesNameClassName: _propTypes2.default.string,
  selectedFilesRemoveButton: _propTypes2.default.string
};

F4InputFileUploadWithLoader.defaultProps = {
  name: 'files',
  loaderMaxWidth: '300px',
  loaderHeight: '20px',
  multiple: false,
  required: false,

  formGetter: DefaultFormGetter,
  formRenderer: function formRenderer(props) {
    return _react2.default.createElement(DefaultFormRenderer, props);
  },
  progressRenderer: function progressRenderer(props) {
    return _react2.default.createElement(DefaultProgressRenderer, props);
  },

  errorRenderer: function errorRenderer(props) {
    return _react2.default.createElement(DefaultErrorRenderer, props);
  },
  successRenderer: function successRenderer(props) {
    return _react2.default.createElement(DefaultSuccessRenderer, props);
  },
  loadingRenderer: function loadingRenderer(props) {
    return _react2.default.createElement(DefaultLoadingRenderer, props);
  }
};

exports.default = F4InputFileUploadWithLoader;
module.exports = exports['default'];