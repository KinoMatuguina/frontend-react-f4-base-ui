/**
* F4InputFileUpload
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import asF4FormElement from '../asF4FormElement/asF4FormElement';
import F4Button from '../F4Button/F4Button';
import F4Modal from '../F4Modal/F4Modal';

@observer
class F4InputFileUpload extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
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
  handleOnChange(event) {

    const { name, onChange } = this.props;

    if (onChange && typeof onChange !== 'undefined') {
      let file = event.target.files[0];
      if (window && typeof window !== 'undefined') {
        file.preview = window.URL.createObjectURL(file);
      }
      onChange(name, file);
    }

  }
  render() {

    const { name, value } = this.props;
    const { isPreviewModalOpen } = this.state;

    return (
      <span>

        <input type="file" name={name} onChange={this.handleOnChange}/>
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
                <div className="F4InputFileDropPreview" style={{ textAlign: 'center' }}>
                <img src={value.preview} width="700" title={value.name} responsive/>
              </div>
            </F4Modal>
            <br />
            <F4Button style="primary" onClick={this.openPreviewModal}>Preview</F4Button>
          </div>
        }
      </span>

    );
  }
}

F4InputFileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.any
};

F4InputFileUpload.defaultProps = {
  disabled: false
};

export default asF4FormElement(F4InputFileUpload);
