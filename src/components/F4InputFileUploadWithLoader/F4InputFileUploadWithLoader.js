/**
* F4InputFileUploadWithLoader.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { ProgressBar, Button } from 'react-bootstrap';

import FileUploadProgress  from 'react-fileupload-progress';
import classNames from 'classnames';
import _ from 'underscore';


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

@observer
class F4InputFileUploadWithLoader extends Component {
  constructor(props) {
    super(props);
  }

  requiredFormGetter = (formData) => {
    const { store, name } = this.props;

    let fileCount = store.inputFiles.length;
    if (fileCount > 0) {
      formData.set(name, store.inputFiles[0]);
      if (fileCount > 1) {
        for (let i = 1; i < fileCount; i++) {
          formData.append(name, store.inputFiles[i]);
        }
      }
    }
    
    return formData;
  }

  render() {

    const { 
      url,
      formRenderer, progressRenderer,
      formGetter, formId,

      loaderMaxWidth, loaderHeight,

      multiple, accept,
      name, store, required,

      errorRenderer, successRenderer, loadingRenderer,

      messageHelperClassName, fileInputLabelClassName, fileInputClassName,
      fileInputContainerClassName,

      selectedFilesClassName, selectedFilesNameClassName, selectedFilesRemoveButton
      } = this.props;
      
    return (
      <div>
        <FileUploadProgress
          
          {...this.props}
          formGetter={() => this.requiredFormGetter(formGetter({formId})) }
          formRenderer={
            onSubmit => 
              formRenderer({onSubmit, name,multiple,accept,store,required,
                messageHelperClassName, fileInputLabelClassName, fileInputClassName,
                fileInputContainerClassName, 
                selectedFilesClassName, selectedFilesNameClassName, selectedFilesRemoveButton})
          }
          progressRenderer={
            (progress,hasError,cancelHandler) => 
              progressRenderer({
                  progress,hasError,cancelHandler, 
                  maxWidth: loaderMaxWidth, 
                  height: loaderHeight, store,
                  errorRenderer, successRenderer, loadingRenderer})
          }
          />

          {_.map(store.inputFiles, (file, index) => {
            return <div key={index} className={classNames("f4InputFileUploadWithLoader_selectedFiles", selectedFilesClassName)}>
              <span className={classNames("f4InputFileUploadWithLoader_selectedFilesName", selectedFilesNameClassName)}>{file.name}</span>
              <Button className={classNames("f4InputFileUploadWithLoader_selectedFilesRemoveButton", selectedFilesRemoveButton)} bsStyle="link" onClick={() => store.removeSelectedFile(index)}><i className="fa fa-times" style={{color: '#afaba5'}}></i></Button></div>
          })}
      </div>
    );
  }
}

const styles = {
  bootstrapBar: {
    padding: 0,
    margin: 0,
  },
  bootstrapBarContainer: {
    width: '100%',
  },
  clearButtonContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2
  },
};

class DefaultProgressRenderer extends Component {

  constructor(props) {
    super(props);

    const { cancelHandler, store } = this.props;
    store.inputFilesCancel = cancelHandler;
  }

  render() {

    const { progress, hasError, cancelHandler, maxWidth, height, 
      errorRenderer, successRenderer, loadingRenderer,
      store } = this.props;

    if (hasError || progress > -1 ) {
      let bsStyle = "success";
      let message = loadingRenderer({progress, files: store.inputFiles});
      if (hasError) {
        bsStyle="danger";
        message = errorRenderer({progress, message: 'Failed to upload', files: store.inputFiles});
        store.inputFilesLoading = false;
      }

      let done = !hasError && progress === 100;
      if (done){
        message = successRenderer({progress, message: 'Done', files: store.inputFiles});
        store.inputFilesLoading = false;
      }

      
      let bootstrapBarContainerStyle = Object.assign({}, styles.bootstrapBarContainer);
      bootstrapBarContainerStyle.maxWidth = maxWidth;

      let bootstrapBarStyle = Object.assign({}, styles.bootstrapBar);
      bootstrapBarStyle.height = height;
  
      let hideProgress = done || hasError;
      return (
        <div>
          {hideProgress ? '' : <div style={bootstrapBarContainerStyle}>
            <ProgressBar now={progress} bsStyle={bsStyle} label={`${progress}%`} style={bootstrapBarStyle} srOnly/>
          </div>}
          <div>
            {message}
          </div>
        </div>
      );
    } else {
      return '';
    }
  }
}

@observer
class DefaultFormRenderer extends Component {

  constructor(props) {
    super(props);

    let placeholder = (props.multiple) ? "Choose files" : "Choose file";
    this.state = {
      placeholder: placeholder,
      selectedFiles: [],
    }

    this._onChange = this._onChange.bind(this);
    this._onClick = this._onClick.bind(this);
    this.clear = this.clear.bind(this);
    this.updatePlaceHolder = this.updatePlaceHolder.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this.resize = this.resize.bind(this);
    this.removeSelectedFile = this.removeSelectedFile.bind(this);

    const { onSubmit, store } = this.props;
    store.inputFilesOnSubmit = this._onSubmit;
    store.removeSelectedFile = this.removeSelectedFile;
  }

  _onSubmit(event) {
    const { onSubmit, store } = this.props;
    if (this.refs.fileUpload.value === null 
        || this.refs.fileUpload.value === undefined 
        || this.refs.fileUpload.value.trim() === '') return;

    onSubmit(event);
    store.inputFilesLoading = true;
  }
  
  updatePlaceHolder(multiple) {
    let placeholder = (multiple) ? "Choose files" : "Choose file";
    this.setState({placeholder});
  }

  clear(event) {
    const { multiple, store } = this.props;
    const { selectedFiles } = this.state;

    this.refs.fileUpload.value = null;
    this.updatePlaceHolder(multiple);
    store.inputFilesCancel();
    store.inputFilesLoading = false;

    store.inputFiles = [];
    this.setState({selectedFiles: []});
  }

  _onChange(event) {
    const { onSubmit, store } = this.props;

    let selectedFiles = Array.from(event.target.files);
    store.inputFiles = selectedFiles;
    let fileCount = selectedFiles.length;

    if (fileCount > 1) {
      this.setState({placeholder: "Selected: " + fileCount + " files", selectedFiles});
    } else if (fileCount === 1) {
      this.setState({placeholder: event.target.files[0].name, selectedFiles});
    }
  }

  _onClick(event) {
    event.target.value = null;
    const { multiple } = this.props;

    if (event.target.files.length === 0){
      this.updatePlaceHolder(multiple);
    }

    store.inputFiles = [];

  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    this.forceUpdate();
  }

  removeSelectedFile(index) {
    const { store, multiple } = this.props;
    let selectedFiles = this.state.selectedFiles;


    selectedFiles.splice(index,1);

    store.inputFiles = selectedFiles;
    store.inputFilesCancel();
    store.inputFilesLoading = false;
    let fileCount = selectedFiles.length;

     if (fileCount > 1) {
      this.setState({placeholder: "Selected: " + fileCount + " files", selectedFiles});
    } else if (fileCount === 1) {
      this.setState({placeholder: selectedFiles[0].name, selectedFiles});
    } else {
      this.updatePlaceHolder(multiple);
    }
  }

  render() {
    const { onSubmit, name, multiple, accept, store, required,
      messageHelperClassName, fileInputLabelClassName, fileInputClassName,
      fileInputContainerClassName,
      selectedFilesClassName, selectedFilesNameClassName, selectedFilesRemoveButton } = this.props;

    return(
          <div className={classNames("f4InputFileUploadWithLoader_fileInputContainer",fileInputContainerClassName)}>
            <span className={classNames("f4InputFileUploadWithLoader_helperMessage",messageHelperClassName)}>Browse Files here or Click to Upload</span>
            {store.inputFiles.length !== 0 || store.inputFilesLoading ? 
              <div style={styles.clearButtonContainer}>
                <Button bsStyle="link" onClick={this.clear}><i className="fa fa-times" style={{color: '#afaba5'}}></i></Button>
              </div> : null}
            <label 
              className={classNames("f4InputFileUploadWithLoader_fileInputLabel",fileInputLabelClassName)}
            >{this.state.placeholder}</label>
            <input 
              accept={accept}
              ref="fileUpload"
              className={classNames("f4InputFileUploadWithLoader_fileInput",fileInputClassName)}
              type="file" name={name} 
              multiple={multiple}
              onChange={this._onChange}
              onClick={this._onClick}
              required={required}
            />
          </div>
    );
  }
}

const DefaultLoadingRenderer = (props) => {
  const { progress } = props;
  return (
    <span>{progress + '%'}</span>
  );
}

const DefaultFormGetter = (props) => {
  const { formId } = props;

  let formElement = document.getElementById(formId);
  let formData = new FormData(formElement);
  return formData;
}

const DefaultErrorRenderer = (props) => {
  const {message} = props;
  return (
    <div style={
      {
        maxWidth: 450, 
        width: 'auto', 
        padding: 10, 
        color: '#fff', 
        backgroundColor: '#fc0001',
        marginTop: 5,
        display: 'block'
      }}
    >
      {message}
    </div>
  );
}

const DefaultSuccessRenderer = (props) => {
  const {message} = props;
  return (
    <div style={
      {
        maxWidth: 450, 
        width: 'auto', 
        padding: 10, 
        color: '#fff', 
        backgroundColor: '#21ba5c',
        marginTop: 5,
        display: 'block'
      }}
    >
      {message}
    </div>
  );
}

F4InputFileUploadWithLoader.propTypes = {
  url: PropTypes.string.isRequired,
  store: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  formId: PropTypes.string.isRequired,
  name: PropTypes.string,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  required: PropTypes.bool,
  
  loaderMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loaderHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  onProgress: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  onAbort: PropTypes.func,

  formRenderer: PropTypes.func, 
  progressRenderer: PropTypes.func,
  formGetter: PropTypes.func,

  errorRenderer: PropTypes.func,
  successRenderer: PropTypes.func,
  loadingRenderer: PropTypes.func,

  messageHelperClassName: PropTypes.string,
  fileInputLabelClassName: PropTypes.string,
  fileInputClassName: PropTypes.string,
  fileInputContainerClassName: PropTypes.string,
  selectedFilesClassName: PropTypes.string, 
  selectedFilesNameClassName: PropTypes.string, 
  selectedFilesRemoveButton: PropTypes.string,
}

F4InputFileUploadWithLoader.defaultProps = {
  name: 'files',
  loaderMaxWidth: '300px',
  loaderHeight: '20px',
  multiple: false,
  required: false,

  formGetter: DefaultFormGetter,
  formRenderer: props => <DefaultFormRenderer {...props}/>,
  progressRenderer: props => <DefaultProgressRenderer {...props}/>,

  errorRenderer: props => <DefaultErrorRenderer {...props}/>,
  successRenderer: props => <DefaultSuccessRenderer {...props}/>,
  loadingRenderer: props => <DefaultLoadingRenderer {...props}/>,
}


export default F4InputFileUploadWithLoader;