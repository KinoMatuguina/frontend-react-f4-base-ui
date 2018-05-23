/**
*
* asF4FormElement Higer Order Component
*
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

export default function asF4FormElement (FormElementComponent) {
  return class Form extends Component {
    constructor(props) {
      super(props);

      this.renderContent = this.renderContent.bind(this);
    }
    renderNone() {
      return (
        <span style={{ display: 'none' }}></span>
      );
    }
    renderContent() {

      const { id, name, fieldLabel, forInputList, forInputCarouselList, isCentered, infoText } = this.props;

      let labelsm = 0;
      let labelmd = 2;
      let formElsm = 12;
      let formElmd = 10;
      let labelmdOffset = 0;

      if (typeof isCentered !== 'undefined' && isCentered) {
        formElmd = 7;
        labelmdOffset = 1;
      }

      if (fieldLabel && (typeof forInputList === 'undefined' || !forInputList)) {
        return (
          <FormGroup controlId={id}>
            { fieldLabel && <Col sm={labelsm} md={labelmd} mdOffset={labelmdOffset} componentClass={ControlLabel} className="f4FormFieldLabel">{ fieldLabel }</Col> }
            <Col sm={formElsm} md={formElmd}>
              <FormElementComponent {...this.props}/>

              { infoText && typeof infoText !== 'undefined' &&
                <span className="help-block info">
                  { infoText }
                </span>
              }
            </Col>
          </FormGroup>
        );
      } else if(forInputList) {
        return (
          <div className="f4DivTableCell">
            <FormElementComponent {...this.props}/>
          </div>
        );
      } else {

        if (isCentered) {
          return (
            <FormGroup>
              <div style={{ width: '100%', textAlign: 'center', padding: '0px 15px 0px 15px' }}>
                <FormElementComponent {...this.props}/>
              </div>
            </FormGroup>
          );
        } else {
          return (
            <FormGroup>
              <FormElementComponent {...this.props}/>
            </FormGroup>
          );
        }
      }
    }
    render(){

      let isVisible = this.props.isVisible;

      if(typeof isVisible === 'undefined') {
        isVisible = true;
      }

      if (isVisible) {
        return this.renderContent();
      } else {
        return this.renderNone();
      }

    }
  }
}
