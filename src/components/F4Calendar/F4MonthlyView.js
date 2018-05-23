/**
* F4MonthlyView.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import { Overlay, Popover } from 'react-bootstrap';
import Helmet from 'react-helmet';
import DayPicker from 'react-day-picker';


let moment = require('moment');

class F4MonthlyView extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleDayMouseLeave = this.handleDayMouseLeave.bind(this);
  }

  handleDayClick(day, { selected }) {
    const { onDayClick, CalendarStore, checkDay } = this.props;
    let selectedDay = CalendarStore.selectedDay;
    selectedDay = selected ? undefined : day;
    CalendarStore.updateSelectedDay(selectedDay);
    this.checkDay(selectedDay);
    onDayClick(day);
  }

  handleDayMouseEnter(day, { calEvent }, event) {
    const { onDayMouseEnter, CalendarStore } = this.props;
    if(calEvent) {
      CalendarStore.showCalEvtTooltip = true;
      CalendarStore.updateHoveredDayCell(event.target);
    }
    CalendarStore.updateHoveredDay(day);
    onDayMouseEnter(day);
  }

  handleDayMouseLeave(event) {
    const { onDayMouseLeave, CalendarStore } = this.props;
    CalendarStore.showCalEvtTooltip = false;
    onDayMouseLeave(event);
  }

  checkDay(data) {
    const { CalendarStore } = this.props;
    if(data != undefined) {
      if(data < moment().subtract(1,'days').endOf('day')) {
        CalendarStore.canAddCalEvent = false;
        if(CalendarStore.events.filter((data, index) => { return moment(CalendarStore.selectedDay).format("MM, DD, YYYY") == moment(data.start).format("MM, DD, YYYY") }).length > 0){
          CalendarStore.showEventSched = true;
        } else {
          CalendarStore.showEventSched = false;
        }
      }else {
        CalendarStore.canAddCalEvent = true;
        if(CalendarStore.events.filter((data, index) => { return moment(CalendarStore.selectedDay).format("MM, DD, YYYY") == moment(data.start).format("MM, DD, YYYY") }).length > 0){
          CalendarStore.showEventSched = true;
        } else {
          CalendarStore.showEventSched = false;
        }
      }
    } else {
      CalendarStore.canAddCalEvent = false;
      CalendarStore.showEventSched = false;
    }
  }

  
  render() {

    const { CalendarStore } = this.props;
    let dispHoveredDay = moment(CalendarStore.hoveredDay).format("MMMM DD, YYYY").toUpperCase();  
    //CALENDAR EVENT
    const calEvent = {
      calEvent: 
      CalendarStore.events.map((data, index) => {
          return data.start;
        }),
      holiday: 
        CalendarStore.holidays.map((data, index) => {
            return data.start;
          })
    };
    const calEventStyles = {
      calEvent: {
        color: '#ffc107',
        backgroundColor: '#fffdee',
      },
      holiday:{
        color: '#8f1c1c',
        backgroundColor: '#ffd7d1',
      },
      outside: {
        backgroundColor: 'white',
      },
    };
    return (
      <div>
        {/* MONTHLY VIEW */}
        <DayPicker
          selectedDays={CalendarStore.selectedDay}
          modifiers={calEvent}
          modifiersStyles={calEventStyles}
          onDayClick={this.handleDayClick}
          onDayMouseEnter={this.handleDayMouseEnter}
          onDayMouseLeave={this.handleDayMouseLeave}
          todayButton="Go to Today"
          showOutsideDays
        />
        {/* MONTHLY VIEW CALENDAR CSS */}
        <Helmet>
          <style>{this.props.dayPickerStyles}</style>
        </Helmet>
        {/* CALENDAR EVENT TOOLTIP */}
        <Overlay
          show={CalendarStore.showCalEvtTooltip}
          target={CalendarStore.hoveredDayCell}
          placement="right"
          animation={false}
        >
          <Popover id="calEvtTooltip" title="Calendar Event">
            <span style={{color: "#ffc107"}}>{dispHoveredDay}</span>
            <br />
            <div>
              Number of Events: &nbsp;
              <strong>
                {CalendarStore.events.filter((data, index) => {
                  return moment(CalendarStore.hoveredDay).format("MM, DD, YYYY") == moment(data.start).format("MM, DD, YYYY")
                }).length}
              </strong>
            </div>
          </Popover>
        </Overlay>
      </div>
    );
  }
}

F4MonthlyView.propTypes = {
  // props definition
  CalendarStore: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  onAddCalEventClick: PropTypes.func,
  onEventSchedClick: PropTypes.func,
  dayPickerStyles: PropTypes.string,
}

F4MonthlyView.defaultProps = {
  // default props
  // modifiers : {
  //   calEvent: 
  //     CalendarStore.events.map((data, index) => {
  //       return data.start;
  //     })
  // },
  // modifiersStyles: {
  //   calEvent: {
  //     color: '#ffc107',
  //     backgroundColor: '#fffdee',
  //   },
  //   outside: {
  //     backgroundColor: 'white',
  //   },
  // },
  dayPickerStyles: `
    .DayPicker-Day--today {
      background-color: #13304d;
      color: white;
    }
    .DayPicker:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside).DayPicker-Day--today:hover {
      background-color: #13304d;
      color: white;
    }
    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--today {
      background-color: #13304d;
      color: white;
    }
    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside).DayPicker-Day--today:hover {
      background-color: #13304d;
      color: white;
    }
    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      color: #f0f8ff;
      background-color: lightslategray;
      border-radius: 0px;
    }
    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
      background-color: gray;
    }
    .DayPicker:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      background-color: #f0f8ff;
      color: gray;
      border-radius: 0px;
    }
    .DayPicker-Day {
      border: 1px solid lightgray;
      padding: 1rem;
    }
    .DayPicker-Caption > div {
      font-size: 2rem;
      font-weight: 500;
    }
    .DayPicker-Weekday {
      font-size: 1.25rem;
    }
    .DayPicker-NavButton {
      top: 1.15rem;
      right: 0.50rem;
      margin-top: 2px;
      width: 2rem;
      height: 2rem;
    }
    .DayPicker-NavButton--prev {
      margin-right: 4rem;
    }
    .DayPicker-TodayButton {
      margin-top: 0.5rem;
      color: red;
    }
  `
}


export default F4MonthlyView;