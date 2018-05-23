import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import _ from 'underscore';
import moment from 'moment';
import Fontawesome from 'react-fontawesome';
import DateTimeUtil from '../DateTimeUtil';

import F4CalendarMonth from './F4CalendarMonth';
import F4CalendarMonthList from './F4CalendarMonthList';
import F4CalendarYear from './F4CalendarYear';

export default class F4Calendar extends Component {
  constructor(props) {
    super(props);

    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleYearClick = this.handleYearClick.bind(this);
    this.handleMonthClick = this.handleMonthClick.bind(this);
    this.renderYears = this.renderYears.bind(this);
    this.renderMonths = this.renderMonths.bind(this);
    this.renderMonthList = this.renderMonthList.bind(this);
  }
  handleDayClick(day) {

    const { onChange, viewDate } = this.props;

    if (onChange) {
      onChange(DateTimeUtil.setDay(viewDate, day), true);
    }
  }
  handleMonthClick(month) {

    const { onChange, viewDate } = this.props;

    if (onChange) {
      onChange(DateTimeUtil.setMonth(viewDate, month), true);
    }
  }
  handleYearClick(year) {

    const { selectedDate, onChange } = this.props;
    const viewDate = DateTimeUtil.setYear(selectedDate, year);

    if (onChange) {
      onChange(viewDate, false);
    }
  }
  renderYears() {
    const { selectedDate, id, minDate, maxDate } = this.props;

    return (
      <F4CalendarYear
        id={id}
        selectedDate={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        handleYearClick={this.handleYearClick}
      />
    );
  }
  renderMonths() {

    const { maxDate, minDate, selectedDate, viewDate, changeViewMonth, handleSwitchDisplay } = this.props;

    return (
      <div className="f4InputDatePicker calendar" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="calendarArrow" onClick={changeViewMonth.bind(this, 'left', -1)} style={{ position: 'absolute', top: 0, left: '15px', cursor: 'pointer'}}>
          <Fontawesome name="chevron-left"/>
        </div>
        <div className="calendarArrow" onClick={changeViewMonth.bind(this, 'right', 1)} style={{ position: 'absolute', top: 0, right: '15px', cursor: 'pointer'}}>
          <Fontawesome name="chevron-right"/>
        </div>
        <F4CalendarMonth
          key={viewDate.getMonth()}
          maxDate={maxDate}
          minDate={minDate}
          onDayClick={this.handleDayClick}
          selectedDate={selectedDate}
          viewDate={viewDate}
          handleSwitchDisplay={handleSwitchDisplay}
        />
      </div>
    );
  }
  renderMonthList() {
    const { maxDate, minDate, selectedDate, viewDate } = this.props;

    return (
      <F4CalendarMonthList
        minDate={minDate}
        maxDate={maxDate}
        selectedDate={selectedDate}
        viewDate={viewDate}
        handleMonthClick={this.handleMonthClick}
      />
    );
  }
  render() {

    const { display, id } = this.props;

    let overrideStyle = {
      display: 'block',
      minHeight: '280px',
      maxHeight: '280px'
    };

    if (display === 'years') {
      overrideStyle.overflowY = 'scroll';
      overrideStyle.overflowX = 'hidden';
    }

    return (
      <div id={`${id}__f4InputDatePickerCalendarContainer`} className="f4InputDatePicker calendarContainer" style={overrideStyle}>
        { display === 'months' && this.renderMonths() }
        { display === 'years' && this.renderYears() }
        { display === 'monthList' && this.renderMonthList() }
      </div>
    )
  }
}

F4Calendar.propTypes = {
  display: PropTypes.string,
  maxDate: PropTypes.object,
  minDate: PropTypes.object,
  onChange: PropTypes.func,
  selectedDate: PropTypes.object,
  viewDate: PropTypes.object
};

F4Calendar.defaultProps = {
  display: 'months',
  selectedDate: new Date()
};
