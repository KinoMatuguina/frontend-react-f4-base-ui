/**
* F4FullCalendarMonth
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Fontawesome from 'react-fontawesome';
import DateTimeUtil from '../DateTimeUtil';
import F4FullCalendarDay from './F4FullCalendarDay';

@observer
export default class F4FullCalendarMonth extends Component {
  constructor(props) {
    super(props);

    this.renderDays = this.renderDays.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);

  }
  renderWeeks() {

    const weeksRange = _.range(0, 7);

    const weekNodes = weeksRange.map((i) => {
      return (
        <div key={i} className="f4FullCalendarWeeks f4ResponsiveSquare">
          <div className="f4ResponsiveSquareContent">
              <div className="f4ResponsiveSquareTable">
                  <div className="f4ResponsiveSquareTableCell">
                      <span>
                        { DateTimeUtil.getFullDayOfWeek(i).substring(0,3) }
                      </span>
                  </div>
              </div>
          </div>
        </div>
      )
    });

    return weekNodes;
  }
  renderDays() {
    const { viewDate, calendarData, onSwitchDisplay } = this.props;

    const firstDayOfWeek = DateTimeUtil.getFirstDayOfWeek(viewDate);
    const daysRange = _.range(1, DateTimeUtil.getDaysInMonth(viewDate) + 1);
    const grid = _.range(0, 35);
    const self = this;
    let startWeek = false;
    let counter = -1;
    return grid.map(i => {
      // const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), i);

      // let disabled = DateTimeUtil.isDateDisabled(minDate, maxDate, date, 'both'); // min,max,both,none: last param - is min and max included in comparison

      if (firstDayOfWeek === i) {
        startWeek = true;
      }

      if (startWeek) {

        counter++;

        return (
          <F4FullCalendarDay
            key={i}
            day={daysRange[counter]}
            disabled={false}
            onSwitchDisplay={onSwitchDisplay}
            onClick={ ()=> {}}
            viewDate={viewDate}
            calendarData={calendarData}
          />
        );
      } else {
        return (
          <F4FullCalendarDay
            key={i}
            day={""}
            disabled={false}
            onClick={ ()=> {}}
            viewDate={viewDate}
          />
        );
      }


    });
  }
  render() {
    return (
      <div className="f4FullCalendarMonth">
        <div className="f4FullCalendarMonthWeeks">
          { (typeof window !== 'undefined') && this.renderWeeks() }
        </div>
        <hr className="f4FullCalendarHr"/>
        <div className="f4FullCalendarMonthDays">
          { (typeof window !== 'undefined') && this.renderDays() }
        </div>
      </div>
    );
  }
}

F4FullCalendarMonth.propTypes = {
  viewDate: PropTypes.object.isRequired,
  calendarData: PropTypes.any
};
