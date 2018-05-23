/**
* F4FullCalendarDay
*/
import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Fontawesome from 'react-fontawesome';
import DateTimeUtil from '../DateTimeUtil';
import _ from 'underscore';

@observer
export default class F4FullCalendarDay extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    const { viewDate, day, calendarData, onSwitchDisplay } = this.props;

    let className = "f4FullCalendarDay f4ResponsiveSquare";

    // check if day is current
    let now = new Date();
    if (
      now.getDate() === day &&
      now.getMonth() === viewDate.getMonth() &&
      now.getFullYear() === viewDate.getFullYear()
    ) {

      className = "f4FullCalendarDay Current f4ResponsiveSquare";
    }

    // check if day has tasks
    let taskData = undefined;
    let onClick = () => {};
    if (typeof calendarData !== 'undefined' && calendarData && calendarData.map && calendarData.length > 0) {

      taskData = _.find(calendarData, (data) => {
        const taskDate = data.date;

        return (
          taskDate.getDate() === day &&
          taskDate.getMonth() === viewDate.getMonth() &&
          taskDate.getFullYear() === viewDate.getFullYear()
        );
      });

      if (typeof taskData !== 'undefined' && taskData) {
        className = "f4FullCalendarDay Tasks f4ResponsiveSquare"

        onClick = onSwitchDisplay.bind(null, "tasks", day, taskData);

      }
    }

    return (
      <div className={className} onClick={onClick}>
        <div className="f4ResponsiveSquareContent">
            <div className="f4ResponsiveSquareTable">
                <div className="f4ResponsiveSquareTableCell">
                    <span>{ day }</span>
                </div>
            </div>
        </div>
        {
          ( typeof taskData !== 'undefined' && taskData ) &&
          <div className="f4FullCalendarDayTaskBadge">
            <span>{ taskData.tasks.length }</span>
          </div>
        }
      </div>
    );
  }
}
