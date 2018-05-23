/**
* F4CalendarEvent.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import moment from 'moment';

import { Panel, ListGroup, ListGroupItem,Modal, OverlayTrigger, Popover, tooltip, Button, Jumbotron, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


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

class F4CalendarEvent extends Component {
  constructor(props) {
    super(props);
    this.handleAddCalEventClick = this.handleAddCalEventClick.bind(this);
    this.hrsSelect = this.hrsSelect.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmitCalEvent = this.handleSubmitCalEvent.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  handleAddCalEventClick(event) 
  {
    const { onAddCalEventClick, calendarStore } = this.props;
    calendarStore.updateShowDialog(true);
    onAddCalEventClick(event);
  }

  deleteEvent(){
    const { calendarStore } = this.props;
    let selectedDay = calendarStore.selectedDay;
    calendarStore.events.splice(calendarStore.eventIndex, 1);
    this.checkDay(selectedDay);
    this.handleClose();
  }
  checkDay(data) {
    const { calendarStore } = this.props;
    if(data != undefined) {
      let today = moment();
      if(data < today) {
        calendarStore.canAddCalEvent = false;
        calendarStore.showEditCalEvt = false;
      } else {
        calendarStore.canAddCalEvent = true;
        if(calendarStore.events.filter((data, index) => { return moment(calendarStore.selectedDay).format("MM, DD, YYYY") == moment(data.start).format("MM, DD, YYYY") }).length > 0){
          calendarStore.showEditCalEvt = true;
        } else {
          calendarStore.showEditCalEvt = false;
        }
      }
    } else {
      calendarStore.canAddCalEvent = false;
      calendarStore.showEditCalEvt = false;
    }
  }
  handleClose() {
    const { calendarStore } = this.props;
    calendarStore.updateShowDialog(false);
    calendarStore.errorTime = false;
    calendarStore.errorDescription = false;
    calendarStore.showAddCalEvent = false;
    calendarStore.showEditCalEvt = false;
  }

  handleSubmitCalEvent(event) {
    const { calendarStore, errorTime, errorDescription } = this.props;
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
    
    if(errorTime != true && errorDescription != true){
      
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
    console.log("start time" + startDay);
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
    const { calendarStore, removeStartTime, removeTitle,showEditCalEvt, showDialog,errorTime, errorDescription } = this.props;
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
      <div>
        <Modal show={showDialog} >
            <Modal.Header>
              <Modal.Title className="modal-title">Add Calendar Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <br />
              <Row>
                <Form inline onChange={this.handleCalSchedChange}>
                  <div className="text-center" >
                    <Col sm={8}>
                      <Row>
                        <Col sm={5} className="modalResponsive">
                          <h4 className="modal-title">{dispSelectedDay}</h4>
                        </Col>
                        <Col sm={6} className="modalResponsive">
                          <FormControl id="startHr" defaultValue={parseInt(defaultStartHour)}  bsSize="sm" componentClass="select" placeholder="select" style={{width: "45px", display: "inline"}}>
                            {this.hrsSelect()}
                          </FormControl>{" : "}
                          <FormControl id="startMin" bsSize="sm" componentClass="select" placeholder="select" style={{width: "45px", display: "inline"}}>
                            <option value="00" >00</option>
                            <option value="30">30</option>
                          </FormControl>{"  "}
                          <FormControl id="startGMT" bsSize="sm" componentClass="select" placeholder="select" style={{width: "45px",fontSize: "10px", paddingRight: "-5px", display: "inline"}}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </FormControl>
                        </Col>
                        <Col sm={1} className="modalResponsive">
                          to
                        </Col>
                      </Row>
                    </Col>                       
                    <Col sm={4} className="modalResponsive">
                      <Row>                      
                        <FormControl id="endHr" bsSize="sm" defaultValue={parseInt(defaultEndHour)} componentClass="select" placeholder="select" style={{width: "45px", display: "inline"}}>
                          {this.hrsSelect()}
                        </FormControl>{" : "}
                        <FormControl id="endMin" bsSize="sm" componentClass="select" placeholder="select" style={{width: "45px", display: "inline"}}>
                          <option value="00" >00</option>
                          <option value="30">30</option>
                        </FormControl>{"  "}
                        <FormControl id="endGMT" bsSize="sm" componentClass="select" placeholder="select" style={{width: "45px", display: "inline"}}>
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </FormControl>
                      </Row>
                    </Col>
                  </div>
                </Form>
              </Row>
              <Row>
                <Form>
                  <FormGroup controlId="addCalEvtDesc">
                    <Col xs={3} className="desc eventLabel"componentClass={ControlLabel}>
                      Description
                    </Col>
                    <Col xs={9}>
                      <FormControl type="text" className="eventText"/>
                    </Col>
                  </FormGroup>

                </Form>
              </Row>
            <Row>
                <Col xs={3}>
                </Col>
                <Col xs={9}>
                  {errorDescription === true ? 
                    <h5 className="desc"><i style={iconErrorDescStyles} className="fa fa-thumb-tack icon-pin"></i>&nbsp; Description is required.</h5>
                    : <h5></h5>
                  }
                  {errorTime === true ? 
                    <h5 className="desc"><i style={iconErrorDescStyles} className="fa fa-thumb-tack icon-pin"></i>&nbsp; End Time must be later than Start Time.</h5>
                    : <h5></h5>

                  }
                  </Col>
              </Row>

          </Modal.Body>
            <Modal.Footer>
              <Button className="cancelEvent" onClick={this.handleClose}>Cancel</Button>
              <Button className="submitEvent" bsStyle="primary" onClick={this.handleSubmitCalEvent}>Submit</Button>
            </Modal.Footer>
          </Modal>
          <div className="event-schedule">
          <Modal show={showEditCalEvt}>
            <Modal.Header>
              <Modal.Title className="modal-title">Calendar Event Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4 className="modal-title">{moment(calendarStore.addCalEvtDay).format("MMMM DD, YYYY").toUpperCase()}</h4>
              <br />
              <ListGroup>
                <ListGroupItem header={removeStartTime}>Start Time</ListGroupItem>
                <ListGroupItem header={removeTitle}>Description</ListGroupItem>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button className="cancelEvent" onClick={this.handleClose}>Cancel</Button>
              <Button className="submitEvent" bsStyle="danger" onClick={this.deleteEvent}>Delete</Button>
              {/* {/ <Button bsStyle="primary">Submit</Button> /} */}
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

F4CalendarEvent.propTypes = {
  calendarStore: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  removeStartTime: PropTypes.string,
  removeTitle: PropTypes.string,
  showDialog: PropTypes.bool,
  showEditCalEvt: PropTypes.bool,
  errorTime: PropTypes.bool,
  errorDescription: PropTypes.bool
}

F4CalendarEvent.defaultProps = {
  // default props
}


export default F4CalendarEvent;