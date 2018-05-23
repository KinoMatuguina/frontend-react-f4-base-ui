/**
* F4InputSelect
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Select from 'react-select';
 
import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4InputSelect extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(value) {

    const { name, disabled, onChange } = this.props;
    if(onChange && !disabled) {

      let val = "";
      let lab = "";
      if(value && value.value) val = value.value;
      if(value && value.label) lab = value.label;

      onChange(name, val);
    }
  }
  renderNone() {
    return (
      <span style={{ display: 'none' }}></span>
    );
  }
  render() {

    const { options, name, placeholder, disabled, isVisible, value, searchable, clearable } = this.props;

    if(isVisible) {
      return (
        <Select
            name={name}
            value={value}
            options={options}
            placeholder={placeholder}
            disabled={disabled}
            onChange={this.handleOnChange}
            searchable={searchable}
            clearable={clearable}
        />
      );
    }

    return this.renderNone();

  }
}

F4InputSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.any,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isVisible: PropTypes.bool,
  propKey: PropTypes.string,
  listFieldName: PropTypes.string,
  forList: PropTypes.bool,
  withLabel: PropTypes.bool,
  fieldLabel: PropTypes.string,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
};
F4InputSelect.defaultProps = {
  disabled: false,
  isVisible: true,
  withLabel: true,
  searchable: true,
  clearable: true,
};

export default asF4FormElement(F4InputSelect);
