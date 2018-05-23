/**
* F4FullCalendarTaskView
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import Fontawesome from 'react-fontawesome';
import DateTimeUtil from '../DateTimeUtil';
import * as UUIDUtil from '../UUIDUtil';

@observer
export default class F4FullCalendarTaskView extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { taskData, day, viewDate, onSwitchDisplay } = this.props;

    return (
      <div className="f4FullCalendarTaskView">
        <div className="f4FullCalendarTaskViewCurrentDate">
          <span onClick={onSwitchDisplay}>{ DateTimeUtil.getFullMonth(viewDate) } { viewDate.getDate() }, { viewDate.getFullYear() }</span>
        </div>
        <ul>
        {
          taskData.tasks.map((task) => {
            return (
              <li key={`${UUIDUtil.get()}`}>
                <h3>{ task.title}</h3>
                <p>{ task.content}</p>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}
