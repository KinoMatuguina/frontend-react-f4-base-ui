/**
* F4InputRadio
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import _l from 'lodash';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4InputRadio extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.renderInline = this.renderInline.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
  }
  handleOnChange(event) {

    const { name, disabled, onChange } = this.props;

    if (onChange && !disabled) {
      onChange(name, event.target.value);
    }
  }
  renderNormal() {

    const { options, name, disabled, value } = this.props;

    let self = this;
    let radioNodes = [];
    if(options && options.length > 0) {
      return (
        <span>
          {
            options.map((option, index) => {
              let key = _l.uniqueId('radio-');
              return (
                <div key={key} className="f4InputRadio radio">
                  <label>
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
                      { option.label }
                  </label>
                </div>
              )
            })
          }
        </span>
      );
    }

    return radioNodes;
  }
  renderInline() {

    const { name, options, disabled, value } = this.props;
    let self = this;
    let radioNodes = [];
    if (options && options.length > 0) {
      return (
        <span>
          {
            options.map((option, index) => {
              let key = _l.uniqueId('radio-');
              return (
                <label key={key} className="f4InputRadio radio-inline">
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
                    { option.label }
                </label>
              );
            })
          }
        </span>
      )
    }

    return radioNodes;
  }
  render() {
    const { isInline } = this.props;

    return (
      <div className="btn-group">
        { isInline ? this.renderInline() : this.renderNormal() }
      </div>
    );
  }
}

F4InputRadio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  propKey: PropTypes.string,
  listFieldName: PropTypes.string,
  forList: PropTypes.bool,
  withLabel: PropTypes.bool,
  isInline: PropTypes.bool,
  fieldLabel: PropTypes.string
};

F4InputRadio.defaultProps = {
  disabled: false,
  isInline: true,
  isVisible: true,
  withLabel: true
};


export default asF4FormElement(F4InputRadio);
