/**
* F4InputIconRadio
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4InputIconRadio extends Component {
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

    const { options, name, disabled, value, color } = this.props;

    let self = this;
    let radioNodes = [];
    if(options && options.length > 0) {
      return (
        <div className="f4IconRadioContainer">
          {
            options.map((option, index) => {
              let key = 'radio-' + option.value;
              return (
                <div key={key} className="f4IconRadio radio">
                  <label style={{ fontSize: '0.99em', verticalAlign: 'middle', paddingLeft: '0 !important' }}>
                    { disabled &&
                      <input
                      name={name}
                      type={"radio"}
                      checked={ option.value === value }
                      onChange={self.handleOnChange}
                      value={option.value}
                      disabled/> }
                    { !disabled &&
                      <input
                      name={name}
                      type={"radio"}
                      checked={ option.value === value }
                      onChange={self.handleOnChange}
                      value={option.value}/> }
                      <span className="cr"><i style={{ color: color }} className="cr-icon fa fa-circle"></i></span>
                      <span className="cr-text">{ option.label }</span>
                  </label>
                </div>
              )
            })
          }
        </div>
      );
    }

    return radioNodes;
  }
  renderInline() {

    const { name, options, disabled, value, color } = this.props;
    let self = this;
    let radioNodes = [];
    if (options && options.length > 0) {
      return (
        <div className="f4InputIconRadioContainer">
          {
            options.map((option, index) => {
              let key = 'radio-' + option.value;
              return (
                <div key={key} className="f4IconRadio radio" style={{ float: 'left' }}>
                  <label style={{ fontSize: '0.99em', verticalAlign: 'middle', paddingLeft: '0 !important' }}>
                    { disabled &&
                      <input
                      name={name}
                      type={"radio"}
                      onChange={self.handleOnChange}
                      checked={ option.value === value }
                      value={option.value}
                      disabled/> }
                    { !disabled &&
                      <input
                      name={name}
                      type={"radio"}
                      checked={ option.value === value }
                      onChange={self.handleOnChange}
                      value={option.value}/> }
                      <span className="cr"><i style={{ color: color }} className="cr-icon fa fa-circle"></i></span>
                      <span className="cr-text">{ option.label }</span>
                  </label>
                </div>
              );
            })
          }
        </div>
      )
    }

    return radioNodes;
  }
  render() {

    if(this.props.isInline) {
      return this.renderInline();
    }
    return this.renderNormal();
  }
}

F4InputIconRadio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  isInline: PropTypes.bool,
  isVisible: PropTypes.bool,
  options: PropTypes.array,
  fieldLabel: PropTypes.string,
  checked: PropTypes.bool,
  color: PropTypes.string
};

F4InputIconRadio.defaultProps = {
  disabled: false,
  isInline: false,
  isVisible: true,
  withLabel: true,
  text: "",
  color: "#2d71b3"
};

export default asF4FormElement(F4InputIconRadio);
