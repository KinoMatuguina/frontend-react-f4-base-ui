import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { Motion, spring } from 'react-motion';
import _ from 'underscore';
import moment from 'moment';
import Fontawesome from 'react-fontawesome';
import DateTimeUtil from '../DateTimeUtil';

import F4CalendarDay from './F4CalendarDay';
import F4FormSeparator from '../F4FormSeparator/F4FormSeparator';

export default class F4CalendarMonth extends Component {
  constructor(props) {
    super(props);

    this.renderWeeks = this.renderWeeks.bind(this);
    this.renderDays = this.renderDays.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  handleDayClick(day) {

    const { onDayClick } = this.props;

    if (onDayClick) {
      onDayClick(day);
    }
  }
  renderWeeks() {

    const weeksRange = _.range(0, 7);

    const weekNodes = weeksRange.map((i) => {
      return (
        <span key={i} className="f4InputDatePicker fullWeekHeader" style={{ width: '34px', height: '30px', textAlign: 'center', display: 'inline-block' }}>
          { DateTimeUtil.getFullDayOfWeek(i).substring(0,2) }
        </span>
      )
    });

    return weekNodes;
  }
  renderDays() {
    const { viewDate, minDate, maxDate, selectedDate } = this.props;

    const daysRange = _.range(1, DateTimeUtil.getDaysInMonth(viewDate) + 1);
    const self = this;
    return daysRange.map(i => {
      const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), i);

      let disabled = DateTimeUtil.isDateDisabled(minDate, maxDate, date, 'both'); // min,max,both,none: last param - is min and max included in comparison

      return (
        <F4CalendarDay
          key={i}
          day={i}
          disabled={disabled}
          onClick={disabled ? null: self.handleDayClick.bind(this, i) }
          selectedDate={selectedDate}
          viewDate={viewDate}
        />
      );
    });
  }
  render() {

    const { viewDate, handleSwitchDisplay } = this.props;

    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1, { stiffness: 300 }) }}>
        { value =>
          <div className="f4InputDatePicker monthContainer" style={{ opacity: value.x }}>
            <span
              className="f4InputDatePicker monthTitle"
              style={{ display: 'block', width: '100%', textAlign: 'center'}}
            >
              <span onClick={handleSwitchDisplay.bind(null, 'monthList')} className="cursor-pointer">
                { DateTimeUtil.getFullMonth(viewDate, true) }
              </span>
            </span>
            <div className="f4InputDatePicker weeks" style={{ display: 'block', width: '100%', textAlign: 'center' }}>
              { this.renderWeeks() }
            </div>
            <div style={{ display: 'block', width: '240px', margin: '0 auto' }}>
              <div className="f4InputDatePicker days" style={{ display: 'inline-block', height: '100%', width: '240px'}}>
                { this.renderDays() }
              </div>
            </div>
          </div>
        }
      </Motion>
    );
  }
}

F4CalendarMonth.propTypes = {
  maxDate: PropTypes.object,
  minDate: PropTypes.object,
  onDayClick: PropTypes.func,
  selectedDate: PropTypes.object,
  viewDate: PropTypes.object
}
