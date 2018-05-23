/**
* F4DayOfMonthPicker
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import _ from 'underscore';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4InputDayOfMonthPicker extends Component {
  constructor(props) {
    super(props);

    this.handleOnOptionClick = this.handleOnOptionClick.bind(this);
    this.buildPicker = this.buildPicker.bind(this);
    this.buildString = this.buildString.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
    this.state = {
      selected: []
    }

  }
  componentWillMount() {

    const { value, delimiter } = this.props;

    this.updateSelected(value, delimiter);
  }
  componentWillReceiveProps(props) {

    this.updateSelected(props.value, props.delimiter);

  }
  updateSelected(value, delimiter) {

    if(value === "" || typeof value === 'undefined' || value === null) {
      this.setState({
        selected: []
      })
    } else if (value && value !== "" && value.split) {

      let splitted = value.split(delimiter).map((n) => { return parseInt(n) });

      this.setState({
        selected: splitted
      })
    }

  }
  buildString(arr) {

    const { delimiter } = this.props;

    let str = "";

    if (arr && arr.map && arr.length > 0) {
      if (arr.length === 1) {
        str = arr[0] + "|";
      } else {
        str = arr.join(delimiter);
      }
    }


    return str;
  }
  handleOnOptionClick(clickedValue) {

    const { name, onChange, disabled, value } = this.props;
    const { selected } = this.state;

    if (!disabled && typeof onChange !== 'undefined' && onChange) {

      let newState = selected.slice();

      if (newState.length === 0) {

        newState.push(clickedValue);

      } else {

        let index = newState.indexOf(clickedValue);

        if (index > -1) {

          if (newState.length === 1) {
            newState = [];
          } else {
            newState.splice(index, 1);
          }

        } else {

          newState.push(clickedValue);
        }
      }

      newState.sort((a, b) => {
        return a - b;
      });

      this.setState({
        selected: newState
      });

      let newValue = this.buildString(newState);

      onChange(name, newValue);
    }
  }
  buildPicker() {

    const { value } = this.props;
    const { selected } = this.state;

    const self = this;
    return _.range(0, 31).map((i) => {

      let className = "f4InputDayOfMonthPickerItem";

      if (selected.indexOf(i+1) > -1) {
        className += "Selected";
      }

      return (
        <div key={`monthPicker-${i+1}`} className={`${className} cursor-pointer`} onClick={self.handleOnOptionClick.bind(null, i+1)}>
          <span>
            { `${i+1}` }
          </span>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="f4InputDayOfMonthPickerContainer">
        <div className="f4InputDayOfMonthPicker">
          { this.buildPicker() }
        </div>
      </div>
    );
  }
}


F4InputDayOfMonthPicker.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  delimiter: PropTypes.string
};

F4InputDayOfMonthPicker.defaultProps = {
  disabled: false,
  delimiter: "|"
}

export default asF4FormElement(F4InputDayOfMonthPicker);
