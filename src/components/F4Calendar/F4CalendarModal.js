/**
* F4CalendarModal.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import { Button, Form, FormGroup, ListGroup, ListGroupItem, ControlLabel } from 'react-bootstrap';

import F4InputField from '../F4InputField/F4InputField';
import F4InputSelect from '../F4InputSelect/F4InputSelect';
import F4Button from '../F4Button/F4Button';
import F4Modal from '../F4Modal/F4Modal';

let moment = require('moment');


class F4CalendarModal extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmitCalEventClick = this.handleSubmitCalEventClick.bind(this);
    this.handleDelEventSchedClick = this.handleDelEventSchedClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // GET DATA FROM FIELDS
  handleFieldChange(event, value) {
    const { CalendarStore } = this.props;
    if(event == "startHr") {
      CalendarStore.startHr = value;
    } else if(event == "startMin") {
      CalendarStore.startMin = value;
    } else if(event == "startGMT") {
      CalendarStore.startGMT = value;
    } else if(event == "endHr") {
      CalendarStore.endHr = value;
    } else if(event == "endMin") {
      CalendarStore.endMin = value;
    } else if(event == "endGMT") {
      CalendarStore.endGMT = value;
    } else if(event == "description") {
      CalendarStore.description = value;
    }
  }

  handleClose() {
    const { CalendarStore } = this.props;
    CalendarStore.showAddCalEvt = false;
    CalendarStore.showCalEvtDetails = false;
  }

  //START OF ADD CALENDAR EVENT METHOD
  handleSubmitCalEventClick(event) {
    const { CalendarStore, saveBackEnd } = this.props;

    // BACKEND
    let startTime = CalendarStore.startHr + ":" + CalendarStore.startMin + CalendarStore.startGMT;
    let endTime = CalendarStore.endHr + ":" + CalendarStore.endMin + CalendarStore.endGMT;
    let selectedDay = CalendarStore.selectedDay.toString();
    // saveBackEnd(startTime, endTime, selectedDay);

    let year = moment(CalendarStore.selectedDay).format("YYYY");
    let month = moment(CalendarStore.selectedDay).format("M");
    let day = moment(CalendarStore.selectedDay).format("D");

    if(CalendarStore.startGMT == "PM") {
      CalendarStore.startHr = parseInt(CalendarStore.startHr) + 12;
    } else {
      CalendarStore.startHr = parseInt(CalendarStore.startHr);
      if(CalendarStore.startHr == 12) {
        CalendarStore.startHr = 0;
      }
    }
    if(CalendarStore.endGMT == "PM"){
      CalendarStore.endHr = parseInt(CalendarStore.endHr) + 12;
    } else{
      CalendarStore.endHr = parseInt(CalendarStore.endHr);
      if(CalendarStore.endHr == 12){
        CalendarStore.endHr = 0;
      }
    }

    let startDay = new Date(parseInt(year),parseInt(month) - 1, parseInt(day), CalendarStore.startHr, CalendarStore.startMin, 0)
    let endDay = new Date(parseInt(year),parseInt(month) - 1, parseInt(day), CalendarStore.endHr, CalendarStore.endMin, 0)
    let countEvent = CalendarStore.countEvent + 1;
    CalendarStore.countEvent = countEvent;
    CalendarStore.events.push( 
      { 
        id: CalendarStore.countEvent, 
        title: CalendarStore.description, 
        start: startDay, 
        end: endDay,
      } 
    );

    saveBackEnd( 
      { 
        id: CalendarStore.countEvent, 
        title: CalendarStore.description, 
        start: startDay, 
        end: endDay,
      } 
    );

    CalendarStore.showEventSched = true;
    // console.log(CalendarStore.events.slice());

    this.handleClose();
  }
  //END OF ADD CALENDAR EVENT METHOD

  //START OF VIEW OR DELETE EVENT SCHEDULE
  handleDelEventSchedClick() {
    const { CalendarStore, deleteBackEnd } = this.props;

    // BACKEND
    deleteBackEnd();

    let selectedDay = CalendarStore.selectedDay;
    CalendarStore.events.splice(CalendarStore.eventIndex, 1);
    this.checkDay(selectedDay);
    this.handleClose();
  }

  checkDay(data) {
    const { CalendarStore } = this.props;
    if(data != undefined) {
      let today = moment();
      if(data < today) {
        CalendarStore.canAddCalEvent = false;
        CalendarStore.showEventSched = false;
      } else {
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
  //END OF VIEW OR DELETE EVENT SCHEDULE

  //ADD CALENDAR EVENT HRS SELECT BUTTON
  hrsSelect() {
    let hrs = [];
      for(let i = 1; i <= 12; i++) {
        if(i < 10) {
          hrs.push({ value: '0'+i, label: '0'+i })
        } else {
          hrs.push({ value: ''+i, label: ''+i })
        }
      }
    return hrs;
  }

  render() {
    const { CalendarStore,
      showCreate, showDelete } = this.props;
    let dispSelectedDay = moment(CalendarStore.selectedDay).format("MMMM DD, YYYY").toUpperCase();
    let defaultStartHour = moment(CalendarStore.selectedDay).format("h");
    let defaultEndHour = moment(CalendarStore.endSelectedDay).format("h");
    const min = [ { value: '00', label: '00' }, { value: '30', label: '30' }  ];
    const GMT = [ { value: 'AM', label: 'AM' }, { value: 'PM', label: 'PM' }  ];

    return (
      <div>
        <div>
          {/* CREATE NEW CALENDAR EVENT */}
          <F4Modal 
            show={showCreate} 
            title="Add Calendar Event" 
            size="md"
            onHide={this.handleClose}
            onCancel={this.handleClose}
            onProceed={this.handleSubmitCalEventClick}
            cancelText="Cancel"
            proceedText="Submit"
          >
            <br />
            <Row>
              <Form inline>
                <div className="text-center" >
                  <Col sm={8}>
                    <Row>
                      <Col sm={5} className="modalResponsive" style={{paddingRight: "0px", paddingLeft: "0px"}}>
                        <h4 className="modal-title">{dispSelectedDay}</h4>
                      </Col>
                      <Col sm={6} className="modalResponsive" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                        <F4InputSelect
                          name="startHr"
                          onChange={this.handleFieldChange}
                          searchable={false}
                          clearable={false}
                          value={CalendarStore.startHr}
                          options={this.hrsSelect()}
                        />{' : '}
                        <F4InputSelect
                          name="startMin"
                          onChange={this.handleFieldChange}
                          searchable={false}
                          clearable={false}
                          value={CalendarStore.startMin}
                          options={min}
                        />{'  '}
                        <F4InputSelect
                          name="startGMT"
                          onChange={this.handleFieldChange}
                          searchable={false}
                          clearable={false}
                          value={CalendarStore.startGMT}
                          options={GMT}
                        />
                      </Col>
                      <Col sm={1} className="modalResponsive"  style={{paddingLeft: "0px", paddingRight: "0px"}}>
                        to
                      </Col>
                    </Row>
                  </Col>
                  <Col sm={4} className="modalResponsive">
                    <Row>
                      <F4InputSelect
                        name="endHr"
                        onChange={this.handleFieldChange}
                        searchable={false}
                        clearable={false}
                        value={CalendarStore.endHr}
                        options={this.hrsSelect()}
                      />{' : '}
                      <F4InputSelect
                        name="endMin"
                        onChange={this.handleFieldChange}
                        searchable={false}
                        clearable={false}
                        value={CalendarStore.endMin}
                        options={min}
                      />{'  '}
                      <F4InputSelect
                        name="endGMT"
                        onChange={this.handleFieldChange}
                        searchable={false}
                        clearable={false}
                        value={CalendarStore.endGMT}
                        options={GMT}
                      />
                    </Row>
                  </Col>
                </div>
              </Form>
            </Row>
            <Row>
              <Form>
                <FormGroup controlId="addCalEvtDesc">
                  <Col xs={3} className="desc" style={{textAlign: 'right', marginTop: '10px'}} componentClass={ControlLabel}>
                    Description
                  </Col>
                  <Col xs={9}>
                    <F4InputField 
                      id="addCalEvtDesc"
                      name="description"
                      onChange={this.handleFieldChange}
                      placeholder="e.g. Meeting, Appointment"
                    />
                  </Col>
                </FormGroup>
              </Form>
            </Row>
            <br />
          </F4Modal>
        </div>
        {/* VIEW AND DELETE EVENT SCHEDULE */}
        <div className="event-schedule">
          <F4Modal
            show={showDelete}
            title="Calendar Event Details" 
            size="lg"
            onHide={this.handleClose}
            onCancel={this.handleClose}
            onProceed={this.handleDelEventSchedClick}
            cancelText="Cancel"
            proceedText="Delete"
          >
            <h4 className="modal-title">{dispSelectedDay}</h4>
            <br />
            <ListGroup>
              <ListGroupItem header={CalendarStore.dispEventStartTime}>Start Time</ListGroupItem>
              <ListGroupItem header={CalendarStore.dispEventDescription}>Description</ListGroupItem>
            </ListGroup>
          </F4Modal>
        </div>
      </div>
    );
  }
}

F4CalendarModal.propTypes = {
  // props definition
  CalendarStore: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  showCreate: PropTypes.bool.isRequired,
  showDelete: PropTypes.bool.isRequired
}

F4CalendarModal.defaultProps = {
  // default props
}


export default F4CalendarModal;