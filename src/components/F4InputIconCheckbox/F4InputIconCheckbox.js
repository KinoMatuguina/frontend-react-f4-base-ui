/**
* F4InputIconCheckbox
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4InputIconCheckbox extends Component {
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

    const { id, name, disabled, value, checked, text, color } = this.props;

    return (
      <div className="f4IconCheckbox checkbox">
        <label style={{ fontSize: '0.99em', verticalAlign: 'middle', paddingLeft: '0 !important' }}>
          { !disabled &&
            <input
              id={id}
              name={name}
              type={"checkbox"}
              onChange={this.handleOnChange}
              value={value}
              checked={checked}
              />
          }
          { disabled &&
            <input
              id={id}
              name={name}
              type={"checkbox"}
              onChange={this.handleOnChange}
              value={value}
              checked={checked}
              disabled
              />
          }
            <span className="cr"><i style={{ color: color }} className="cr-icon fa fa-check"></i></span>
            {text}
        </label>
      </div>
    );
  }
  renderInline() {

    const { id, name, disabled, value, checked, text, color } = this.props;

    return (
      <div className="f4IconCheckbox">
        <label style={{ fontSize: '0.99em', verticalAlign: 'middle',paddingLeft: '0 !important' }}>
          { !disabled &&
            <input
              id={id}
              name={name}
              type={"checkbox"}
              onChange={this.handleOnChange}
              disabled={disabled}
              value={value}
              checked={checked}
              />
          }
          { disabled &&
            <input
              id={id}
              name={name}
              type={"checkbox"}
              onChange={this.handleOnChange}
              disabled={disabled}
              value={value}
              checked={checked}
              disabled
              />
          }
            <span className="cr"><i style={{ color: color }} className="cr-icon fa fa-check"></i></span>
            {text}
        </label>
      </div>
    )
  }
  render() {

    if(this.props.isInline) {
      return this.renderInline();
    }
    return this.renderNormal();
  }
}

F4InputIconCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  isInline: PropTypes.bool,
  isVisible: PropTypes.bool,
  withLabel: PropTypes.bool,
  fieldLabel: PropTypes.string,
  checked: PropTypes.bool,
  color: PropTypes.string
};

F4InputIconCheckbox.defaultProps = {
  disabled: false,
  isInline: false,
  isVisible: true,
  withLabel: true,
  text: "",
  color: "#2d71b3"
};

export default F4InputIconCheckbox;
