import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import _ from 'underscore';
import Fontawesome from 'react-fontawesome';
import DateTimeUtil from '../DateTimeUtil';

export default class F4CalendarDay extends Component {
  render() {

    const { onClick, day, viewDate, selectedDate, disabled } = this.props;

    let overrideStyle = {
      cursor: 'pointer',
      width: '34px',
      height: '34px',
      padding: '8px',
      textAlign: 'center',
      float: 'left'
    };

    let className = "f4InputDatePicker dayContainer";

    if (day === 1) {
      overrideStyle.marginLeft = `${34*(DateTimeUtil.getFirstDayOfWeek(viewDate))}px`;
    }

    // check if day is selected
    if (
      ( viewDate.getFullYear() === selectedDate.getFullYear() ) &&
      ( viewDate.getMonth() === selectedDate.getMonth() ) &&
      ( day === selectedDate.getDate() )
    ) {

      className += "Selected";
    }

    // check if day is current
    let now = new Date();
    if (
      now.getDate() === day &&
      now.getMonth() === viewDate.getMonth() &&
      now.getFullYear() === viewDate.getFullYear()
    ) {

      className += "Current";
      overrideStyle.backgroundColor = "rgba(0,0,0, 0.5)";
      overrideStyle.color = "white";
      overrideStyle.borderRadius = "50%";
    }

    // check if day is disabled
    if (disabled) {

      className += "Disabled";
      overrideStyle.opacity = 0.5;
    }


    return (
      <div onClick={onClick} className={className} style={overrideStyle}>
        { day }
      </div>
    );
  }
}


F4CalendarDay.propTypes = {
  day: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  selectedDate: PropTypes.object,
  viewDate: PropTypes.object
}
