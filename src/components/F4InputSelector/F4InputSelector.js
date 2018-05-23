/**
* F4InputSelector
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';

import asF4FormElement from '../asF4FormElement/asF4FormElement';
import * as UUIDUtil from '../UUIDUtil';

@observer
class F4InputSelector extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.buildSelectors = this.buildSelectors.bind(this);

  }
  handleOnChange(value) {

    const { disabled, onChange, name } = this.props;

    if (!disabled && typeof onChange !== 'undefined') {
      onChange(name, value);
    }
  }
  buildSelectors() {

    const { options, value, required } = this.props;

    let selectors = [];

    if (options && options.length > 0) {
      const self = this;

      let selectorOptions = options.slice();
      if (!required) {
        selectorOptions = [ { label: "None", value: null } ].concat(selectorOptions);
      }

      selectors = selectorOptions.map((option, index) => {

        let className = "f4InputSelectorButton btn btn-default";

        if (value === option.value) {
          className = "f4InputSelectorButton selected btn btn-default";
        }

        return (
          <div key={`${UUIDUtil.get()}`} className={className} onClick={self.handleOnChange.bind(self, option.value)}>
            { option.label }
          </div>
        );
      });
    }

    if (selectors && selectors.length > 0) {
      return (
        <div className="btn-group">
          { selectors }
        </div>
      );
    }

    return selectors;

  }
  render() {
    return (
      <label className="f4InputSelector">
        { this.buildSelectors() }
      </label>
    );
  }
}

F4InputSelector.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  fieldLabel: PropTypes.string,
  isVisible: PropTypes.bool,
  required: PropTypes.bool
};

F4InputSelector.defaultProps = {
  disabled: false,
  isVisible: true,
  required: false
};


export default asF4FormElement(F4InputSelector);
