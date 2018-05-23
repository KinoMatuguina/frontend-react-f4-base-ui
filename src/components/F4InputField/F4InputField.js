/**
* F4InputField
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4InputField extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }
  handleOnChange(event) {
    const { name, disabled, onChange } = this.props;

    if (onChange && !disabled) {
      onChange(name, event.target.value);
    }
  }
  handleOnFocus(event) {

    const { onFocus, name } = this.props;

    if (typeof onFocus !== 'undefined' && onFocus) {
      onFocus(name);
    }
  }
  handleOnBlur(event) {
    const { onBlur, name } = this.props;

    if (typeof onBlur !== 'undefined' && onBlur) {
      onBlur(name);
    }
  }
  render() {
    const { id, name, type, placeholder, disabled, value, size, maxLength, style, required } = this.props;

    if (!size || typeof size === 'undefined') {
      return (
        <input
          className="f4InputField form-control"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          style={{ width: 'initial !important', ...style }}
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          required={required}/>
      );
    } else {
      return (
        <input
          className="f4InputField form-control"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          maxLength={maxLength}
          size={size}
          style={{ width: 'initial !important', ...style }}
          onChange={this.handleOnChange}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          required={required}/>
      );
    }


  }
}

F4InputField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isVisible: PropTypes.bool,
  fieldLabel: PropTypes.string,
  isCentered: PropTypes.bool,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  maxLength: PropTypes.string,
  style: PropTypes.object,
  required: PropTypes.bool
};

F4InputField.defaultProps = {
  disabled: false,
  isVisible: true,
  maxLength: "255"
};


export default asF4FormElement(F4InputField);
