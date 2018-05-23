/**
*
* asF4Form Higer Order Component
*
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 


export default function asF4Form (RenderComponent, formDataName) {
  return class Form extends Component {
    constructor(props) {
      super(props);

      this.updateField = this.updateField.bind(this);
    }

    updateField(name, value) {
      this.props[formDataName][name] = value;
    }

    updateCheckboxesField(name, value) {

      const array = this.props[formDataName][name];
      const index = array.indexOf(value);

      if (array.indexOf(value) > -1) {
        array.splice(index, 1);
      } else {
        array.push(value);
      }
    }
    renderNone() {
      return (
        <span style={{ display: 'none' }}></span>
      )
    }
    render(){

      let isVisible = this.props.isVisible;
      if(typeof isVisible === 'undefined') {
        isVisible = true;
      }

      if (isVisible) {
        return <RenderComponent {...this.props} updateField={this.updateField} updateCheckboxesField={this.updateCheckboxesField}/>
      } else {
        return this.renderNone();
      }
    }
  }
}
