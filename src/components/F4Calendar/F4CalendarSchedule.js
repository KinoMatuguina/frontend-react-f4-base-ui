/**
* F4CalendarSchedule.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import { Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';


let moment = require('moment');
let dispEventStartTime = "";
let dispEventDescription = "";
let eventIndex = "";

class F4CalendarSchedule extends Component {
  constructor(props) {
    super(props);
    this.handleAddCalEventClick = this.handleAddCalEventClick.bind(this);
    this.handleEventSchedClick = this.handleEventSchedClick.bind(this);
  }

  handleAddCalEventClick(event) {
    const { onAddCalEventClick, CalendarStore } = this.props;
    CalendarStore.showAddCalEvt = true;
    onAddCalEventClick(event);
  }

  handleEventSchedClick(data, event) {
    const { onEventSchedClick, CalendarStore } = this.props;
    CalendarStore.showCalEvtDetails = true;
    CalendarStore.eventIndex = data;
    CalendarStore.dispEventStartTime = moment(CalendarStore.events[data].start).format("hh:mm a");
    CalendarStore.dispEventDescription = CalendarStore.events[data].title;
    onEventSchedClick(event);
  }

  render() {
    const { CalendarStore } = this.props;
    let dispSelectedDay = moment(CalendarStore.selectedDay).format("MMMM DD, YYYY").toUpperCase();

    return (
      <div>
        {/* DISPLAY "ADD CALENDAR EVENT" button AND SCHEDULE */}
        <div style={(CalendarStore.showEventSched === true) ? {display: "block"} : {display: "none"}}>
          <Panel>
            <Panel.Heading className="modal-title" style={{ color: "#13304d"}}>Calendar Event for {moment(CalendarStore.selectedDay).format("dddd, MMMM DD, YYYY")}</Panel.Heading>
            <ListGroup>
              {CalendarStore.events.map((data, index) => {
                // console.log("The current iteration is: " + index);
                return moment(data.start).format("MM DD YYYY") == moment(CalendarStore.selectedDay).format("MM DD YYYY") ? (
                  <ListGroupItem key={index}>
                    <i style={{color: '#cc9900', fontSize: "10px"}} className="fa fa-circle"></i> &nbsp;
                    <strong><label className="eventText">{moment(data.start).format("hh:mm a").toUpperCase()}</label></strong> &nbsp;
                    <label className="eventText">{data.title}</label>
                    <i style={{color: '#13304d', fontSize: "18px", float: "right"}} onClick={() => this.handleEventSchedClick(index)} className="fa fa-trash"></i>
                  </ListGroupItem>
                ) 
                :
                (<div key={index}></div>)
              })}
            </ListGroup>
          </Panel>
        </div>
        <div className="text-center" style={(CalendarStore.canAddCalEvent === true) ? {display: "block"} : {display: "none"}}>
          <Button className="addEvent" bsStyle="danger" onClick={this.handleAddCalEventClick}>Add Calendar Event</Button>
        </div>
      </div>
    );
  }
}

F4CalendarSchedule.propTypes = {
  // props definition
  CalendarStore: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
}

F4CalendarSchedule.defaultProps = {
  // default props
}


export default F4CalendarSchedule;