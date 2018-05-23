/**
* F4TextArea
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4TextArea extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    const { name, disabled, onChange } = this.props;

    if (onChange && !disabled) {
      onChange(name, event.target.value);
    }
  }
  render() {
    const { id, name, placeholder, disabled, value, resizable } = this.props;

    let overrideStyle = {};

    if (!resizable) {
      overrideStyle = {
        resize: 'none'
      };
    }

    return (
      <textarea
        className="f4TextArea form-control"
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        style={overrideStyle}
        onChange={this.handleOnChange}
      />
    );
  }
}

F4TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  fieldLabel: PropTypes.string,
  isCentered: PropTypes.bool,
  resizable: PropTypes.bool
};

F4TextArea.defaultProps = {
  disabled: false,
  isVisible: true,
  resizable: false
};


export default asF4FormElement(F4TextArea);
