/**
* CheckBox.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FontIcon from 'react-fontawesome';

import moment, { calendarFormat } from 'moment';
import BigCalendar from 'react-big-calendar';
import F4CalendarEvent from './F4CalendarEvent';
import { Panel, ListGroup, ListGroupItem,Modal, OverlayTrigger, Popover, tooltip, Button, Jumbotron, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
//import {Calendar, CalendarControls} from 'react-yearly-calendar';
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let currentStartHour = "";
let countEvent = 0;
let counter = 1;
let removecounter = 1;
let currentId = 0;
let removeTitle = "";
let removeStartTime = "";
let color = false;
let button = {
  previous: <i style={{color: '#13304d', fontSize: "1.5em"}} className="fa fa-caret-left"></i>,
  next: <i style={{color: '#13304d', fontSize: "1.5em"}} className="fa fa-caret-right"></i>,
  allDay: 'all-day'
}

class F4WeekCalendar extends Component {
  constructor(props) {
    super(props);
    this.handleAddCalEventClick = this.handleAddCalEventClick.bind(this);
    this.hrsSelect = this.hrsSelect.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmitCalEvent = this.handleSubmitCalEvent.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }
  eventStyleGetter () {
    let style = {
        backgroundColor: "#CB9822",
    };
      return {
          style: style
      };
  }
  selectSlot(slotInfo){
    const {calendarStore } = this.props;
    calendarStore.updateSelectedDay(slotInfo.start)
    calendarStore.checkWeekDay(moment(slotInfo.start).format("MM DD YYYY"));
    calendarStore.updateEndSelectedDay(slotInfo.end)
    console.log(calendarStore.canAddCalEvent);
    console.log(calendarStore.selectedDay);
    calendarStore.selectSlotStatus = true;
    console.log(calendarStore.selectSlotStatus);
    calendarStore.checkEvent(moment(slotInfo.start).format("MM DD YYYY"));
    color=true;
    this.checkDay(calendarStore.selectedDay);
    
  }
  selectEvent(event){
    const {calendarStore } = this.props;
    calendarStore.updateEventClickStatus(true);
    calendarStore.selectEventDay = event.start;
    calendarStore.updateSaveTime(moment(event.start).format("hh:mm a"));
    calendarStore.dateEvent = moment(event.start).format("MM DD YYYY");
    calendarStore.updateSaveTitle(event.title);
    calendarStore.checkWeekDay(event.start);
  }
  handleAddCalEventClick(event) {
    const { onAddCalEventClick, calendarStore } = this.props;
    calendarStore.updateShowDialog(true);
    onAddCalEventClick(event);
  }

  removeEvent(data, event){
    const { calendarStore } = this.props;
    // calendarStore.events.splice(value,1);
    console.log(calendarStore.events[data].start)
    calendarStore.showEditCalEvt = true;
    calendarStore.eventIndex = data;
    calendarStore.dispEventStartTime = moment(calendarStore.events[data].start).format("hh:mm a");
    calendarStore.dispEventDescription = calendarStore.events[data].title;
  }
  deleteEvent(value){
    const { calendarStore } = this.props;
    let lastIndex = calendarStore.events.length
    console.log(value)
    if(value === calendarStore.events[0].id){
      calendarStore.events.splice(value - value, 1)
      calendarStore.showEditCalEvt = false;
      counter=counter + 1;
      
    }
    else if(value === calendarStore.events[lastIndex - 1].id){
      calendarStore.events.splice(calendarStore.events.length - 1, 1)
      calendarStore.showEditCalEvt = false;
      counter = counter;
    }

    else{
      console.log("minus" + counter)
      calendarStore.events.splice(value - counter, 1)
      calendarStore.showEditCalEvt = false;
      counter=counter + 1;
    }

    if(lastIndex === 0){
      calendarStore.updateEventClickStatus(false);
    }
    console.log("delete " +counter)
  }
  handleClose() {
    const { calendarStore } = this.props;
    calendarStore.updateShowDialog(false);
    calendarStore.showAddCalEvt = false;
    calendarStore.showCalEvtDetails = false;
  }
  handleSubmitCalEvent(event) {
    
    const { calendarStore } = this.props;

    let year = moment(calendarStore.selectedDay).format("YYYY");
    let month = moment(calendarStore.selectedDay).format("M");
    let day = moment(calendarStore.selectedDay).format("D");
    let hour = "";
    let min = $('#startMin').val();
    let startAmPm = $('#startGMT').val();
    let endHour = "";
    let endMin = $('#endMin').val();
    let endAmPm = $('#endGMT').val();
    let title = $('#addCalEvtDesc').val();


    if(startAmPm == "PM"){
      hour = parseInt($('#startHr').val()) + 12;
    }
    else{
      hour = parseInt($('#startHr').val());
      if(hour == 12){
        hour = 0;
      }
    }
    if(endAmPm == "PM"){
      endHour = parseInt($('#endHr').val()) + 12;
    }
    else{
      endHour = parseInt($('#endHr').val());
      if(endHour == 12){
        endHour = 0;
      }
    }
    if(hour > endHour){
      calendarStore.errorTime = true;
    }
    if(title === ""){
      calendarStore.errorDescription = true;
    }
    if(hour <= endHour){
      calendarStore.errorTime = false;
    }
    if(title !== ""){
      calendarStore.errorDescription = false;
    }
    // console.log(calendarStore.errorTime)
    let val = endHour - hour;
    let startDay = new Date(parseInt(year),parseInt(month) - 1, parseInt(day), hour, min, 0 )
    let endDay;
    if(val > 1 ){
      endDay = new Date(parseInt(year),parseInt(month) - 1, parseInt(day), hour + 1, endMin, 0 )
    }
    else{
      endDay = new Date(parseInt(year),parseInt(month) - 1, parseInt(day), endHour, endMin, 0 )
    }
    
    let increment = calendarStore.countEvent + 1;
    calendarStore.countEvent = increment;
    
    if(calendarStore.errorTime != true && calendarStore.errorDescription != true){
      
      if($('#startHr').val() != "" ){
        calendarStore.events.push( 
          { 
            id: calendarStore.countEvent, 
            title: $('#addCalEvtDesc').val(), 
            start: startDay, 
            end: endDay,
          } 
        );
      }
      else{
        calendarStore.events.push( 
          { 
            id: calendarStore.countEvent, 
            title: $('#addCalEvtDesc').val(), 
            start: calendarStore.selectedDay, 
            end: calendarStore.endSelectedDay,
          } 
        );
      }
      
      calendarStore.updateShowDialog(false);
      calendarStore.errorTime = false;
      calendarStore.errorDescription = false;
      calendarStore.showEditCalEvt = false;
    }
    // calendarStore.updateSaveTitle($('#addCalEvtDesc').val());
    // console.log($('#addCalEvtDesc').val())
    // calendarStore.events[14].title = $('#addCalEvtDesc').val();
    // console.log(calendarStore.events[14])    
    
    
    console.log("start time" + startDay);
    // calendarStore.updateAddCalEvtStartTime(addCalEvtStartTime);
    // calendarStore.updateAddCalEvtDesc($('#addCalEvtDesc').val());

  }
  checkDay(data) {
    const { calendarStore } = this.props;
    if(data != undefined) {
      let today = moment().format("MM DD YYYY");
      if(data < today) {
        calendarStore.canAddCalEvent = false;
        calendarStore.showEventSched = false;
      } else {
        calendarStore.canAddCalEvent = true;
        if(calendarStore.events.filter((data, index) => { return moment(calendarStore.selectedDay).format("MM, DD, YYYY") == moment(data.start).format("MM, DD, YYYY") }).length > 0){
          calendarStore.showEventSched = true;
        } else {
          calendarStore.showEventSched = false;
        }
      }
    } else {
      calendarStore.canAddCalEvent = false;
      calendarStore.showEventSched = false;
    }
  }
  hrsSelect() {
    let hrs = [];
    const { calendarStore } = this.props;
    let defaultHour = moment(calendarStore.selectedDay).format("hh");
    
      for(let i = 1; i <= 12; i++) {
        if(i < 10) {
          hrs.push(<option key={i} value={0+i}>{'0'+i}</option>)
        }
        else {
          hrs.push(<option key={i} value={i}>{i}</option>)
        }
      }
    return hrs;
    console.log(hrs);
  }
  onChangeTime(value){
    currentStartHour = value;
    console.log(currentStartHour);
  }
  render() {
    const { className, divStyle, defaultView, calendarViews,
      contentFormat,isToolbar, isSelectable, stepNo,
      eventPropGetter, onSelectEvent, onSelectSlot,
      messagesContent, addEventClick, isCustomEventClick,
      eventsList,defaultDate, timeSlot, weekCustomEvent,
      calendarStore,
      iconIndicatorStyles,
      iconDeleteStyles,
      iconErrorDescStyles,
      showEventSched,
      canAddEventStatus,
      errorDescription,
      errorTime,
      showDialog,
      showEditCalEvt
    } = this.props;
  
    let dispSelectedDay = moment(calendarStore.selectedDay).format("MMMM DD, YYYY").toUpperCase();
    let defaultStartHour = moment(calendarStore.selectedDay).format("h");
    let defaultEndHour = moment(calendarStore.endSelectedDay).format("h");
    const mins = (
      <FormControl bsSize="sm" className="modal-picker" componentClass="select" placeholder="select">
        <option value="00" >00</option>
        <option value="30">30</option>
      </FormControl>
    );
    const GMT = (
      <FormControl bsSize="sm" className="modal-picker"  componentClass="select" placeholder="select">
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </FormControl>
    );
    
    return (
      <div style={{padding: "0px"}}>
        <Col lg={4} md={5} sm={7} xs={12}>
          <div className={className} style={divStyle}>
           
              <BigCalendar 
                events={eventsList}
                defaultView={defaultView}
                views={calendarViews}
                formats={contentFormat}
                toolbar={isToolbar}
                selectable={isSelectable}
                defaultDate={defaultDate}
                timeslots={timeSlot}
                step={stepNo}
                eventPropGetter={this.eventStyleGetter}
                messages={messagesContent}
                eventPropGetter={this.eventStyleGetter}
                onSelectEvent={event => this.selectEvent(event)}
                onSelectSlot={
                  slotInfo => this.selectSlot(slotInfo)
                }
                components={
                  {
                    // dayWrapper: CustomDay, 
                    week: {
                      event:CustomEvent
                    }
                  }
                }
              />
        
            </div>
          </Col>
         
          
            <Col lg={8} md={7} sm={5} xs={12} className="bigMargin">
            <div style={(showEventSched === true) ? {display: "block"} : {display: "none"}}>
              <Panel>
                <Panel.Heading className="modal-title">Calendar Event for {moment(calendarStore.selectedDay).format("dddd, MMMM DD, YYYY")}</Panel.Heading>
                    <ListGroup>
              {calendarStore.events.map((data, index) => {
                
                return moment(data.start).format("MM DD YYYY") == moment(calendarStore.selectedDay).format("MM DD YYYY") ? (
                  <ListGroupItem key={index}>
                    <i style={iconIndicatorStyles} className="fa fa-circle"></i>&nbsp;
                    <label className="eventText">{moment(data.start).format("hh:mm a").toUpperCase()}&nbsp;</label>
                    <label className="eventText">{data.title}</label>
                    <i style={iconDeleteStyles} onClick={() => this.removeEvent(index)} className="fa fa-trash"></i>
                  </ListGroupItem>
                ) :
                (
                  <div key={index}></div>
                )
              })
              }
              </ListGroup>
              </Panel>
            </div>
            <div className="text-center" style={(canAddEventStatus === true) ? {display: "block"} : {display: "none"}}>
              <Button className="addEvent" bsStyle="primary" onClick={this.handleAddCalEventClick}>Add Calendar Events</Button>
            </div>
          </Col>
          <F4CalendarEvent 
            calendarStore={calendarStore} 
            showDialog={showDialog} 
            removeStartTime={calendarStore.dispEventStartTime} 
            removeTitle={calendarStore.dispEventDescription}
            errorTime={errorTime}
            errorDescription={errorDescription}
            showEditCalEvt={showEditCalEvt}
          />
      </div>
    );
  }
}

class CustomEvent extends React.Component {
  constructor(props){
      super(props)
  }
  render(){
    console.log(this.props);
    console.log(this.props.event.length)
    let popoverClickRootClose = (
      <Popover id="popover-trigger-click-root-close" title="Calendar Events">
        <strong> {moment(this.props.event.start).format("MMM DD, YYYY")}</strong><br />
        {this.props.event.title}
        
      </Popover>
    );
      return (
        <div >
          <OverlayTrigger id="help" trigger={['hover', 'focus']} rootClose placement="right" overlay={popoverClickRootClose}>
            
              <div>
                {this.props.event.title}
              </div>
          </OverlayTrigger>
        </div>
      );
  }
}
F4WeekCalendar.propTypes = {
  calendarStore: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  className: PropTypes.string,
  eventsList: PropTypes.object,
  divStyle: PropTypes.object,
  timeSlot: PropTypes.number,
  weekCustomEvent: PropTypes.object,
  eventPropGetter: PropTypes.func, 
  defaultDate: PropTypes.instanceOf(Date),
  defaultView: PropTypes.string.isRequired,
  calendarViews: PropTypes.array,
  contentFormat: PropTypes.object,
  isToolbar: PropTypes.bool,
  isCustomEventClick: PropTypes.bool,
  isSelectable: PropTypes.bool,
  stepNo: PropTypes.number,
  messagesContent: PropTypes.object,
  //function
  onSelectEvent: PropTypes.func,
  onSelectSlot: PropTypes.func,
  addEventClick: PropTypes.func,
  handleClose: PropTypes.func,

  //styles
  iconIndicatorStyles: PropTypes.object,
  iconDeleteStyles: PropTypes.object,
  iconErrorDescStyles: PropTypes.object,

  showEventSched: PropTypes.bool,
  canAddEventStatus: PropTypes.bool,
  showDialog: PropTypes.bool,
  errorTime: PropTypes.bool,
  errorDescription: PropTypes.bool,
  showEditCalEvt: PropTypes.bool
}

F4WeekCalendar.defaultProps = {
  className: "big-calendar",
  defaultView: "week",
  isCustomEventClick: false,
  calendarViews: ['week'],
  isToolbar: true,
  isSelectable: true,
  stepNo: 60,
  timeSlot: 1,
  defaultDate: new Date(2018, 2, 4),
  iconIndicatorStyles: {color: '#cc9900', fontSize: "10px"},
  iconDeleteStyles: {color: '#13304d', fontSize: "18px", float: "right"},
  iconErrorDescStyles: {color: '#13304d', fontSize: "14px"},
}


export default F4WeekCalendar;
