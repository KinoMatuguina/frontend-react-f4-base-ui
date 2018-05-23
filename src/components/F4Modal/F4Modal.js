/**
* F4Modal
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import Modal from 'react-bootstrap/lib/Modal';

import F4Button from '../F4Button/F4Button';

export default class F4Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { show, onHide, onCancel, onProceed, title, children, proceedText, cancelText, size } = this.props;

    let overrideFloatStyle = {};
    if (onProceed) {
      overrideFloatStyle = {
        float: 'left'
      };
    }

    let overrideWidthStyle = {
      width: '100%',
      float: 'left'
    }

    if (onProceed) {
      overrideWidthStyle.width = '50%';
    }

    return (
      <Modal className="f4Modal" show={show} onHide={onHide} bsSize={size}>
        <Modal.Header className="f4ModalHeader" closeButton>
          <Modal.Title className="f4ModalTitle">{ title }</Modal.Title>
        </Modal.Header>
        <Modal.Body className="f4ModalBody">
          { children }
        </Modal.Body>
        { onCancel && onProceed &&
          <Modal.Footer className="f4ModalFooter">
            <div className="f4ButtonGroup">
              { onCancel && 
                <span style={overrideWidthStyle}>
                  <F4Button style="warning" onClick={onCancel} block={true}>
                    {`${cancelText}`}
                  </F4Button>
                </span>
              }
              { onProceed &&
                <span style={overrideWidthStyle}>
                  <F4Button style="primary" onClick={onProceed} block={true}>
                    {`${proceedText}`}
                  </F4Button>
                </span>
              }
            </div>
          </Modal.Footer>
        }
      </Modal>
    );

  }
}

F4Modal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onCancel: PropTypes.func,
  onProceed: PropTypes.func,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  proceedText: PropTypes.string,
  size: PropTypes.string
}

F4Modal.defaultProps = {
  cancelText: "CANCEL",
  proceedText: "PROCEED",
  size: "small"
}
