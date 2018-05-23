/**
* F4InputFileDrop
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Fontawesome from 'react-fontawesome';
import _ from 'underscore';

import asF4FormElement from '../asF4FormElement/asF4FormElement';
import F4Button from '../F4Button/F4Button';
import F4Modal from '../F4Modal/F4Modal';

import Dropzone from 'react-dropzone';
import F4ProgressBar from '../F4ProgressBar/F4ProgressBar';


import FileUtils from '../FileUtils';

@observer
class F4InputFileDrop extends Component {
  constructor(props) {
    super(props);

    this.handleOnDrop = this.handleOnDrop.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.openPreviewModal = this.openPreviewModal.bind(this);
    this.closePreviewModal = this.closePreviewModal.bind(this);

    this.state = {
      isPreviewModalOpen: false
    }
  }
  openPreviewModal() {
    this.setState({
      isPreviewModalOpen: true
    });
  }
  closePreviewModal() {
    this.setState({
      isPreviewModalOpen: false
    });
  }
  handleOnDrop(files) {

    const { name, nameId, onChange, isAutoUpload, uploadAction, accept } = this.props;

    if (onChange && typeof onChange !== 'undefined') {
      console.log(files[0]);
      console.log("FILE TYPE");

      FileUtils.validateFileType(files[0], accept, (mimetype) => {
        files[0].mimetype = mimetype;
        onChange(name, files[0]);

        if (isAutoUpload && uploadAction && typeof uploadAction !== 'undefined') {
          uploadAction(name, nameId);
        }
      });
    }

  }
  renderContent() {

    const { value, loaded, total, placeholder } = this.props;

    let ratio = ( loaded / total );
    let progress = 0;
    let overrideStyle = {
      opacity: 0.2
    };

    if (!isNaN(ratio)) {
      progress = ratio * 100;
      overrideStyle.opacity = ratio + 0.2;
    }


    if (value && value !== "" && !_.isEmpty(value) && typeof value !== 'undefined') {
      let fileIcon = (
        <Fontawesome name={"file"} size="2x" />
      );

      if (value.type && value.type.indexOf("image") > -1) {
        fileIcon = (
          <img src={value.preview} className="img-responsive" title={value.name} style={overrideStyle}/>
        );
      }

      return (
        <div style={{ textAlign: 'center', padding: '5px', overflow: 'hidden', maxHeight: '115px' }}>
          { fileIcon }
          <br />
          <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{ value.name }</p>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: 'center', padding: '15px', position: 'absolute', top: '0' }}>
          <Fontawesome name="upload" size="2x"/>
          <br /><br />
          { placeholder }
        </div>
      );
    }

  }
  render() {

    const { name, value, accept, loaded, total, placeholder, isUploading } = this.props;
    const { isPreviewModalOpen } = this.state;
    console.log(`${loaded} of ${total}`);

    let progress = ( loaded / total ) * 100;

    if (isNaN(progress)) {
      progress = 0;
    }

    console.log(`FILE DROP PROGRESS ${progress}`);
    return (
      <div className="f4InputFileDrop">
        <Dropzone onDrop={this.handleOnDrop} accept={accept} className="f4InputFileDropZone" activeClassName="f4InputFileDropZoneActive" rejectClassName="f4InputFileDropZoneReject">
            <div className="f4InputFileDropInfo">
                { this.renderContent() }
                { (isUploading && total !== 0 && progress !== 100) &&
                <div className="f4InputFileDropProgress">
                  <F4ProgressBar progress={progress}>
                    <span>{`${progress}%`}</span>
                  </F4ProgressBar>
                </div>
                }
            </div>
        </Dropzone>
        { value && value.preview &&
          <div className="f4InputFileDropPreviewContainer">
            <F4Modal
              show={isPreviewModalOpen}
              title={`PREVIEW: ${value.name}`}
              onHide={this.closePreviewModal}
              onCancel={this.closePreviewModal}
              cancelText={"CLOSE"}
              size={"large"}
              >
              <div className="F4InputFileDropPreview thumbnail" style={{ textAlign: 'center' }}>
                <img className="img-responsive" src={value.preview} title={value.name}/>
              </div>
            </F4Modal>
            <br />
            <F4Button style="primary" onClick={this.openPreviewModal}>Preview</F4Button>
          </div>
        }
      </div>
    );
  }
}

F4InputFileDrop.propTypes = {
  name: PropTypes.string.isRequired,
  nameId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  isUploading: PropTypes.bool,
  uploadAction: PropTypes.func,
  isAutoUpload: PropTypes.bool
};

F4InputFileDrop.defaultProps = {
  disabled: false,
  isUploading: false,
  isAutoUpload: false,
  placeholder: "Click to select a file or drop the file here"
};

export default asF4FormElement(F4InputFileDrop);
