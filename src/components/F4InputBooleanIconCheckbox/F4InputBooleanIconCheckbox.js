/**
* F4InputBooleanIconCheckbox
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';

@observer
class F4InputBooleanIconCheckbox extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {

    const { name, disabled, onChange } = this.props;

    if (onChange && !disabled) {
      onChange(name, event.target.checked);
    }
  }
  renderNormal() {

    const { id, name, disabled, value, text } = this.props;

    return (
      <div className="f4IconCheckbox checkbox">
        <label style={{ fontSize: '0.99em', verticalAlign: 'middle', paddingLeft: '0px !important'}}>
          { !disabled &&
            <input
              id={id}
              name={name}
              type={"checkbox"}
              onChange={this.handleOnChange}
              checked={value}
              />
          }
          { disabled &&
            <input
              id={id}
              name={name}
              type={"checkbox"}
              onChange={this.handleOnChange}
              checked={value}
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

    const { id, name, disabled, value, text, color } = this.props;

    return (
      <div className="f4IconCheckbox checkbox">
        <label style={{ fontSize: '0.99em', verticalAlign: 'middle', paddingLeft: '0px !important'}}>
          { !disabled &&
            <input
              id={id}
              name={name}
              type={"checkbox"}
              onChange={this.handleOnChange}
              checked={value}
              />
          }
          { disabled &&
            <input
              id={id}
              name={name}
              type={"checkbox"}
              onChange={this.handleOnChange}
              checked={value}
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

F4InputBooleanIconCheckbox.propTypes = {
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
  color: PropTypes.string
};

F4InputBooleanIconCheckbox.defaultProps = {
  disabled: false,
  isInline: true,
  isVisible: true,
  withLabel: true,
  text: "",
  color: "#2d71b3"
};

export default F4InputBooleanIconCheckbox;
