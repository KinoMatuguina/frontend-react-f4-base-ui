/**
* F4InputCheckbox
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4InputCheckbox extends Component {
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
  renderNormal() {

    const { id, name, disabled, checked, value, text } = this.props;

    return (
      <div className="f4InputCheckbox checkbox">
        <label>
          <input
            id={id}
            name={name}
            type={"checkbox"}
            onChange={this.handleOnChange}
            disabled={disabled}
            value={value}
            checked={checked}/>
            {text}
        </label>
      </div>
    );
  }
  renderInline() {

    const { id, name, disabled, value, checked, text } = this.props;

    return (
      <label className="f4InputCheckbox checkbox-inline">
        <input
          id={id}
          name={name}
          type={"checkbox"}
          onChange={this.handleOnChange}
          disabled={disabled}
          value={value}
          checked={checked}/>
          {text}
      </label>
    )
  }
  render() {

    if(this.props.isInline) {
      return this.renderInline();
    }
    return this.renderNormal();
  }
}

F4InputCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.any,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  isInline: PropTypes.bool,
  isVisible: PropTypes.bool,
  withLabel: PropTypes.bool,
  fieldLabel: PropTypes.string
};

F4InputCheckbox.defaultProps = {
  disabled: false,
  isInline: true,
  isVisible: true,
  withLabel: true,
  text: ""
};

export default asF4FormElement(F4InputCheckbox);
