/**
* F4InputSignaturePad
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';


import asF4FormElement from '../asF4FormElement/asF4FormElement';
import F4Button from '../F4Button/F4Button';
import F4Modal from '../F4Modal/F4Modal';

@observer
class F4InputSignaturePad extends Component {
  constructor(props) {
    super(props);

    this.signaturePad = undefined;
    this.canvas = undefined;
    this.clearCanvas = this.clearCanvas.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderPad = this.renderPad.bind(this);
    this.previewUrl = undefined;

    this.state = {
      isOpen: false,
      dataUrl: undefined
    }
  }
  openModal() {
    this.setState({
      isOpen: true
    });
  }
  closeModal() {
    this.setState({
      isOpen: false
    });
  }
  componentDidUpdate() {

    if (this.state.isOpen) {
      const { id } = this.props;

      const canvas = document.querySelector(`#${id}-canvas`);
      this.canvas = canvas;
      const SignaturePad = require('signature_pad');
      if (canvas && typeof canvas !== 'undefined') {
        this.signaturePad = new SignaturePad(canvas, {
           backgroundColor: "rgb(255,255,255)"
        });
        this.signaturePad.on();
      }
    }
  }
  componentDidMount() {

    const { id } = this.props;

    const canvas = document.querySelector(`#${id}-canvas`);
    this.canvas = canvas;
    const SignaturePad = require('signature_pad');
    if (canvas && typeof canvas !== 'undefined') {
      this.signaturePad = new SignaturePad(canvas, {
         backgroundColor: "rgb(255,255,255)"
      });
      this.signaturePad.on();
    }
  }
  componentWillUnmount() {

    if (this.signaturePad && typeof this.signaturePad !== 'undefined') {
      this.signaturePad.off();
    }
  }
  clearCanvas() {

    if (this.signaturePad && typeof this.signaturePad !== 'undefined') {
      this.signaturePad.clear();
    }
  }
  convertToBlob(dataUrl) {
    const blobBin = atob(dataUrl.split(',')[1]);
    const array = [];
    for(let i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
    }
    const blob = new Blob([new Uint8Array(array)], {type: 'image/jpg'});

    return blob;
  }
  saveImage() {

    const { id, name, nameId, uploadAction, onChange } = this.props;

    if (this.signaturePad && typeof this.signaturePad !== 'undefined') {
      if (this.signaturePad.isEmpty()) {
        alert("Please sign first");
      } else {
        if (typeof window !== 'undefined' && window && this.canvas && typeof this.canvas !== 'undefined') {
          const dataUrl = this.canvas.toDataURL("image/jpeg");//.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
          const self = this;

          this.closeModal();

          this.setState({
            dataUrl
          });

          const file = this.convertToBlob(dataUrl);
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
  renderPad() {

    const { id, hasClearButton, elementRef } = this.props;

    return (
      <div className="f4InputSignaturePad">
        <div className="f4InputSignaturePadBody">
          <canvas id={`${id}-canvas`} width="250"></canvas>
        </div>
        {/*
        <div className="f4InputSignaturePadFooter">
          <F4Button style="default" onClick={this.clearCanvas}>
            {`CLEAR`}
          </F4Button>
          <F4Button style="primary" onClick={this.saveImage}>
            {`SAVE`}
          </F4Button>
        </div>*/}
      </div>
    );

  }
  render() {
    const { isOpen, dataUrl } = this.state;
    const { modalTitle, clearBtnText, saveBtnText, generateBtnText } = this.props;
    return (
      <div className="f4InputSignaturePadContainer">
        <F4Modal
          show={isOpen}
          title={modalTitle}
          onHide={this.closeModal}
          onCancel={this.clearCanvas}
          onProceed={this.saveImage}
          cancelText={clearBtnText}
          proceedText={saveBtnText}
          size={"small"}
          >
          <div style={{ textAlign: 'center' }}>
            { this.renderPad() }
          </div>
        </F4Modal>
        <F4Button style="primary" onClick={this.openModal}>{ generateBtnText }</F4Button>
        <br />
        <br />
        { (typeof dataUrl !== 'undefined') &&
          <div style={{ width: '100%', textAlign: 'center'}}>
            <img style={{ margin: '0 auto' }} src={dataUrl} className="thumbnail img-responsive"  title="Digital Signature"/>
          </div>
        }
      </div>
    );
  }
}

F4InputSignaturePad.propTypes = {
  id: PropTypes.string.isRequired,
  hasClearButton: PropTypes.bool,
  elementRef: PropTypes.string.isRequired,
  modalTitle: PropTypes.string,
  clearBtnText: PropTypes.string,
  saveBtnText: PropTypes.string,
  generateBtnText: PropTypes.string
};

F4InputSignaturePad.defaultProps = {
  hasClearButton: true,
  modalTitle: "DIGITAL SIGNATURE",
  clearBtnText: "CLEAR",
  saveBtnText: "SAVE",
  generateBtnText: "GENERATE DIGITAL SIGNATURE"
};


export default asF4FormElement(F4InputSignaturePad);
