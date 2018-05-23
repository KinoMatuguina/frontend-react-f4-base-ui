import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import Select from 'react-select';


export default class F4Select extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    domRef: PropTypes.string,
    options: PropTypes.any,
    placeholder: PropTypes.placeholder,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    disabled: false
  };
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: this.props.defaultValue
    };
  }
  handleChange(value) {

    this.setState({ value: value });
    const { name } = this.props;
    if(this.props.onChange && !this.props.disabled) {

      let val = "";
      let lab = "";
      if(value && value.value) val = value.value;
      if(value && value.label) lab = value.label;
      this.props.onChange(name, val, lab)
    }
  }
  render() {

    const { options, name, placeholder, disabled } = this.props;

    return (
      <Select
          name={name}
          value={this.state.value}
          options={options}
          placeholder={placeholder}
          disabled={disabled}
          onChange={this.handleChange}
      />
    );
  }
}
