/**
* F4InputCheckboxes
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import _l from 'lodash';
import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4InputCheckboxes extends Component {
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

    const { id, name, disabled, value, options } = this.props;

    return (
      <span>
      {
        options.map((option) => {
          return (
            <div key={_l.uniqueId('checkbox-')} className="f4InputCheckbox checkbox">
              <label htmlFor={`${name}`}>
                <input
                  id={`${name}-${option}`}
                  name={`${name}`}
                  type={"checkbox"}
                  onChange={this.handleOnChange}
                  disabled={disabled}
                  value={option}
                  checked={checkedOptions.indexOf(option) > -1}/>
                <span>{option}</span>
              </label>
            </div>
          )
        })
      }
      </span>
    );
  }
  renderInline() {

    const { id, name, disabled, value, options } = this.props;

    return (
      <span>
        {
          options.map((option) => {
            return (
              <label htmlFor={`${name}`} key={_l.uniqueId('checkbox-')} className="f4InputCheckbox checkbox-inline">
                <input
                  id={`${name}-${option}`}
                  name={`${name}`}
                  type={"checkbox"}
                  onChange={this.handleOnChange}
                  disabled={disabled}
                  value={option}
                  checked={checkedOptions.indexOf(option) > -1} />
                { option }
              </label>
            )
          })
        }
      </span>
    )
  }
  render() {

    if(this.props.isInline) {
      return this.renderInline();
    }
    return this.renderNormal();
  }
}

F4InputCheckboxes.propTypes = {
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
  options: PropTypes.array.isRequired
};

F4InputCheckboxes.defaultProps = {
  disabled: false,
  isInline: true,
  isVisible: true,
  withLabel: true
};

export default asF4FormElement(F4InputCheckboxes);
