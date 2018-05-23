/**
* F4StaticText
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import FormControl from 'react-bootstrap/lib/FormControl';
import moment from 'moment';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

class F4StaticText extends Component {
  constructor(props) {
    super(props);

    this.defaultDateFormat = "MM/DD/YYYY";
    this.renderValue = this.renderValue.bind(this);
  }
  renderValue() {
    const { type, value, dateFormat } = this.props;

    let formattedValue = value;

    if (type === 'date') {

      formattedValue = 'Invalid Date';

      if (moment(value).isValid()) {
        if (moment(value).format(dateFormat) === 'Invalid Date') {
          formattedValue = moment(value).format(this.defaultDateFormat);
        } else {
          formattedValue = moment(value).format(dateFormat);
        }
      }

    } else if (type === 'dateRange') {

      formattedValue = 'Invalid Dates';

      if (value && value.map && value.length === 2) {

        if (moment(value[0]).isValid() && moment(value[1]).isValid()) {
          let fromDate = moment(value[0]).format(dateFormat);
          let toDate = moment(value[1]).format(dateFormat);

          if (fromDate === 'Invalid Date') {
            fromDate = moment(value[0]).format(this.defaultDateFormat);
          }
          if (toDate === 'Invalid Date') {
            toDate = moment(value[1]).format(this.defaultDateFormat);
          }

          formattedValue = `${fromDate} to ${toDate}`;

        }

      }
    }

    return formattedValue;

  }
  render() {
    const { id, name, disabled, overrideStyle } = this.props;

    return (
      <FormControl.Static className="f4StaticText" style={overrideStyle}>
        { this.renderValue() }
      </FormControl.Static>
    );
  }
}

F4StaticText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  isVisible: PropTypes.bool,
  fieldLabel: PropTypes.string,
  overrideStyle: PropTypes.any,
  type: PropTypes.string,
  dateFormat: PropTypes.string
};

F4StaticText.defaultProps = {
  disabled: false,
  isVisible: true,
  overrideStyle: {},
  type: "text",
  dateFormat: "MM/DD/YYYY"
};


export default asF4FormElement(F4StaticText);
