import React, { Component } from 'react';  import PropTypes from 'prop-types'; 


export default class F4FormSeparator extends Component {
  render() {

    const { label } = this.props;

    return (
      <div className="f4FormSeparator">
        <label className="f4FormFieldLabel">
          { label }
        </label>
        <hr className="f4FormSeparatorLine"/>
      </div>
    );
  }
}
