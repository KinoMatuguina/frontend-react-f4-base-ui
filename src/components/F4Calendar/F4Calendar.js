/**
* F4Calendar.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import { Tabs, Tab } from 'react-bootstrap';

import F4MonthlyView from './F4MonthlyView';
import F4WeeklyView from './F4WeekCalendar';
import F4CalendarSchedule from './F4CalendarSchedule';
import F4CalendarModal from './F4CalendarModal';


let button = {
  previous: <i style={{color: '#13304d', fontSize: "1.5em"}} className="fa fa-caret-left"></i>,
  next: <i style={{color: '#13304d', fontSize: "1.5em"}} className="fa fa-caret-right"></i>,
  allDay: 'all-day'
}

class F4Calendar extends Component {
  constructor(props) {
    super(props);
  }
  handleDayClick(day) {
    console.log("Entering 'handleDayClick'");
  }
  handleAddCalEventClick(event) {
    console.log("Entering 'handleAddCalEventClick'");
  }

  handleSettingsClick() {
    alert('Settings clicked');
  }
  handleViewClick() {
    alert('View clicked');
  }

  //START OF F4MONTHLYVIEW COMPONENT FUNCTIONS
  handleDayMouseEnter(day) {

  }
  handleDayMouseLeave(event) {
    
  }
  handleEventSchedClick(event) {
    
  }
  render() {

    const {onDayClick,onDayMouseEnter, onDayMouseLeave, CalendarStore, 
      onAddCalEventClick, onEventSchedClick,eventsList, onSelectSlot,
      showEventSched,canAddEventStatus,showDialog, 
      errorDescription, errorTime, showEditCalEvt,
      showCreate,showDelete,
      saveBackEnd, deleteBackEnd} = this.props;
return(
    <div>
      <Tabs bsStyle="pills" defaultActiveKey={1} animation={false} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Month">     
          <Row>
            <Col lg={4} md={5} sm={7} xs={12} >
            <div className='tab-top'></div>
            <div className="text-center" style={{marginTop: "10px"}}>
              <F4MonthlyView 
                onDayClick={this.handleDayClick}
                onDayMouseEnter={this.handleDayMouseEnter}
                onDayMouseLeave={this.handleDayMouseLeave}
                CalendarStore={CalendarStore}
              />
            </div>
            </Col>
            <Col lg={8} md={7} sm={5} xs={12} style={{marginTop: "10px"}}>
            <div className="schedule">
              <F4CalendarSchedule
                onAddCalEventClick={this.handleAddCalEventClick}
                onEventSchedClick={this.handleEventSchedClick}
                CalendarStore={CalendarStore} 
              />
              </div>
            </Col>
          </Row>

          <F4CalendarModal CalendarStore={CalendarStore} 
            showCreate={showCreate}
            showDelete={showDelete} 
            saveBackEnd={saveBackEnd}
            deleteBackEnd={deleteBackEnd}
          />
        </Tab>
        <Tab eventKey={2} title="Week">
          <div className='tab-top'></div>
          <div style={{marginTop: "10px", marginLeft: "0px"}}>
            <F4WeeklyView 
              contentFormat={
                {
                  dayFormat: 'ddd DD',
                  timeGutterFormat: 'ha',
                }    
              }
              stepNo={60}
              timeSlot={1}
              messagesContent={button}
              onAddCalEventClick={this.handleAddCalEventClick}
              showEventSched={showEventSched}
              calendarStore={CalendarStore}
              eventsList={eventsList}
              canAddEventStatus={canAddEventStatus}
              showDialog={showDialog}
              errorDescription={errorDescription}
              errorTime={errorTime}
              showEditCalEvt={showEditCalEvt}
            />
          </div>
        </Tab>
      </Tabs>
    </div>
);

  }
}

F4Calendar.propTypes = {
  onAddCalEventClick: PropTypes.func,
  onSelectSlot: PropTypes.func,
  CalendarStore: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  eventsList: PropTypes.object,
  onEventSchedClick: PropTypes.func,
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onDayMouseLeave: PropTypes.func,
  showEventSched: PropTypes.bool,
  canAddEventStatus: PropTypes.bool,
  showDialog: PropTypes.bool,
  errorTime: PropTypes.bool,
  errorDescription: PropTypes.bool,
  showEditCalEvt: PropTypes.bool,
  showCreate: PropTypes.bool,
  showDelete: PropTypes.bool,
  modifiers: PropTypes.any,
  modifiersStyles:  PropTypes.any
}

F4Calendar.defaultProps = {
  // default props
}


export default F4Calendar;