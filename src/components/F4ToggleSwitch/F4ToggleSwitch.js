/**
* F4ToggleSwitch
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

@observer
export default class F4ToggleSwitch extends Component {
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
  render() {

    const { id, name, value, isRound, disabled, text } = this.props;

    let slideClassName = "f4ToggleSwitchSlider";

    if (disabled) {}

    if (isRound) {
      slideClassName += " round";
    }

    if (disabled) {
      slideClassName += " disabled";
    }

    return (
      <label className="f4ToggleSwitch">
        {
          disabled &&
          <input id={id} name={name} checked={value} type="checkbox" onChange={()=>{}} disabled/>
        }
        {
          !disabled &&
          <input id={id} name={name} checked={value} type="checkbox" onChange={this.handleOnChange}/>
        }
        <div className={slideClassName + " checkbox-inline"}></div>
        <div style={{ marginLeft: '45px'}}><span style={{ fontSize: '13px' }}>{ text }</span></div>
      </label>
    );
  }
}

F4ToggleSwitch.propTypes = {
  isRound: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  text: PropTypes.string
};

F4ToggleSwitch.defaultProps = {
  isRound: true,
  disabled: false
}
