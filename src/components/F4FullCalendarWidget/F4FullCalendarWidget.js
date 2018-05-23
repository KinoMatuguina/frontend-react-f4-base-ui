/**
* F4FullCalendarWidget
http://stackoverflow.com/questions/20456694/grid-of-responsive-squares?rq=1
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import Fontawesome from 'react-fontawesome';
import DateTimeUtil from '../DateTimeUtil';

import asF4FormElement from '../asF4FormElement/asF4FormElement';
import F4Button from '../F4Button/F4Button';
import F4Card from '../F4Card/F4Card';
import F4Toolbar from '../F4Toolbar/F4Toolbar';
import F4ToolbarElement from '../F4ToolbarElement/F4ToolbarElement';

import F4FullCalendarMonth from './F4FullCalendarMonth';
import F4FullCalendarTaskView from './F4FullCalendarTaskView';

@observer
export default class F4FullCalendarWidget extends Component {
  constructor(props) {
    super(props);


    this.updateStateDate = this.updateStateDate.bind(this);
    this.changeViewMonth = this.changeViewMonth.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
    this.handleSwitchDisplay = this.handleSwitchDisplay.bind(this);
    this.today = this.today.bind(this);

    this.state = {
      viewDate: this.props.value,
      display: 'months'
    }
  }
  componentWillMount() {

    const { viewDate } = this.props;
    this.updateStateDate(viewDate);
  }
  componentWillReceiveProps(props) {
    this.updateStateDate(props.viewDate);
  }
  updateStateDate = (date) => {
   if (Object.prototype.toString.call(date) === '[object Date]') {
     this.setState({
       viewDate: date
     });
   }
  }
  handleCalendarChange(value, dayClick) {

    let newValue = null;

    if (dayClick) {
      newValue = value;
    } else {
      newValue = DateTimeUtil.setYear(this.state.date, value.getFullYear());
    }

    const state = {
      display: 'months',
      viewDate: value,
      taskData: []
    };

    this.setState(state);

  }
  changeViewMonth(direction, step) {

    const { viewDate } = this.state;

    const newViewDate = DateTimeUtil.addMonths(viewDate, step);

    this.setState({
      direction,
      viewDate: newViewDate
    });


    this.handleCalendarChange(newViewDate, false);

  }
  handleSwitchDisplay(display, day = null, taskData = []) {

    this.setState({
      display,
      taskData,
      day
    });

  }
  today() {
    this.handleCalendarChange(new Date(), true);
  }
  render() {

    const { viewDate, display, taskData, day } = this.state;
    const { calendarData } = this.props;

    return (
      <div className="f4FullCalendarWidget f4Card">
        <div style={{ padding: '15px 15px 0px 15px' }}>
          <F4Toolbar title="CALENDAR" icon="calendar">
            <F4ToolbarElement icon={"chevron-down"} text={"toggle"} onClick={ ()=> { alert("toggle") }} />
          </F4Toolbar>
        </div>
        <div className="f4FullCalendarWidgetHeader">

          {
            (display === 'months') &&
            <span className="f4FullCalendarWidgetHeaderTitle">{ DateTimeUtil.getFullMonth(viewDate) } { viewDate.getFullYear() }</span>
          }
          {
            (display === 'months') &&
            <div className="calendarArrow" onClick={this.changeViewMonth.bind(null, 'left', -1)} style={{ position: 'absolute', top: '-10px', left: '10px', cursor: 'pointer'}}>
              <Fontawesome name="chevron-left"/>
            </div>
          }
          {
            (display === 'months') &&
            <div className="calendarArrow" onClick={this.changeViewMonth.bind(null, 'right', 1)} style={{ position: 'absolute', top: '-10px', right: '10px', cursor: 'pointer'}}>
              <Fontawesome name="chevron-right"/>
            </div>
          }

        </div>
        {
          (display === 'months') && <F4FullCalendarMonth viewDate={viewDate} calendarData={calendarData} onSwitchDisplay={this.handleSwitchDisplay}/>
        }
        {
          (display === 'tasks') && <F4FullCalendarTaskView onSwitchDisplay={this.handleSwitchDisplay.bind(null, 'months')} day={day} viewDate={viewDate} taskData={taskData} />
        }
        <div className="f4InputDatePickerButtons">
          <button
            className="default btn btn-default btn-sm btn-default pull-left"
            onClick={this.today}
            style={{ fontSize: '12px', padding: '9px' }}>
            TODAY
          </button>
        </div>
      </div>

    );
  }
}

F4FullCalendarWidget.propTypes = {
  viewDate: PropTypes.object,
  calendarData: PropTypes.any
};

F4FullCalendarWidget.defaultProps = {
  viewDate: new Date(),
  calendarData: []
};
