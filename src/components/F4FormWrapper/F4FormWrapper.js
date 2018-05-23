/**
* F4FormWrapper
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import Form from 'react-bootstrap/lib/Form';


export default class F4FormWrapper extends Component {
  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const { onSubmit } = this.props;

    if (typeof onSubmit !== 'undefined' && onSubmit) {
      onSubmit();
    }
  }
  render() {

    const { children, isHorizontal } = this.props;

    let className = "f4FormWrapper";

    if (isHorizontal) {
      className += " form-horizontal"
    }

    return (
      <form className={className} onSubmit={this.handleOnSubmit}>
        { children }
      </form>
    )
  }
}

F4FormWrapper.propTypes = {
  isHorizontal: PropTypes.bool,
  onSubmit: PropTypes.func
};

F4FormWrapper.defaultProps = {
  isHorizontal: false
};
