/**
* F4InputDatePicker
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import Modal from 'react-bootstrap/lib/Modal';
import _ from 'underscore';
import Fontawesome from 'react-fontawesome';
import moment from 'moment';

import asF4FormElement from '../asF4FormElement/asF4FormElement';
import F4Button from '../F4Button/F4Button';

import DateTimeUtil from '../DateTimeUtil';
import scrollToElement from '../scrollToElement';
import F4Calendar from './F4Calendar';

class F4InputDatePicker extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleOnOkayClick = this.handleOnOkayClick.bind(this);
    this.handleCalendarChange = this.handleCalendarChange.bind(this);
    this.changeViewMonth = this.changeViewMonth.bind(this);
    this.handleSwitchDisplay = this.handleSwitchDisplay.bind(this);
    this.state = {
      showModal: false,
      date: this.props.value,
      viewDate: this.props.value
    }
  }
  componentWillMount() {

    const { value } = this.props;
    this.updateStateDate(value);
  }
  componentWillReceiveProps(props) {
    this.updateStateDate(props.value);
  }
  updateStateDate = (date) => {
   if (Object.prototype.toString.call(date) === '[object Date]') {
     this.setState({
       date
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
      date: newValue,
      viewDate: value
    };

    this.setState(state);

  }
  handleSwitchDisplay(display) {

    const { id } = this.props;
    this.setState({
      display
    });

    if (display !== 'months' && display !== 'monthList') {
      const year = this.state.date.getFullYear();

      setTimeout(() => {
        scrollToElement(`#${id}__f4InputDatePickerCalendarContainer`, `#${id}__yearListItem__${year}`);
      }, 300);
    }
  }
  handleOnClick(event) {
    event.preventDefault();

    const { disabled } = this.props;

    if (!disabled) {
      this.setState({
        showModal: true,
        display: 'months',
        date: this.props.value
      });
    }

  }
  closeModal() {
    this.setState({
      showModal: false
    })
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
  handleOnOkayClick() {

    const { onChange, name } = this.props;
    const { date } = this.state;

    if (onChange) {
      onChange(name, date);
    }

    this.setState({
      showModal: false
    })
  }
  render() {


    const { showModal, date, display, viewDate } = this.state;
    const { maxDate, minDate, format, value, id, disabled } = this.props;

    const displayDate = moment(value).format(format).toString();

    return (
      <span>
        <Modal className="f4InputDatePicker f4Modal" show={showModal} onHide={this.closeModal} bsSize="small">
          <Modal.Header className="f4ModalHeader">
            <Modal.Title className="f4ModalTitle">
              <div className="f4InputDatePicker header">
                <span className="f4InputDatePicker headerYear cursor-pointer" onClick={this.handleSwitchDisplay.bind(this, 'years')}>
                  { date.getFullYear() }
                </span>
                <h4 className="f4InputDatePicker headerDate cursor-pointer" onClick={this.handleSwitchDisplay.bind(this, 'months')} style={{ textAlign: 'center'}}>
                  { DateTimeUtil.getFullDayOfWeek(date.getDay()) }, { DateTimeUtil.getFullMonth(date) } { date.getDate() }
                </h4>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="f4InputDatePicker f4ModalBody">
            <F4Calendar
              id={id}
              display={display}
              maxDate={maxDate}
              minDate={minDate}
              onChange={this.handleCalendarChange}
              changeViewMonth={this.changeViewMonth}
              handleSwitchDisplay={this.handleSwitchDisplay}
              selectedDate={date}
              viewDate={viewDate}
            />
          </Modal.Body>
          <Modal.Footer className="f4ModalFooter">
            <div className="f4InputDatePickerButtons">
              <button
                className="default btn btn-default btn-sm btn-default pull-left"
                onClick={this.handleCalendarChange.bind(this, new Date(), true)}
                style={{ fontSize: '12px', padding: '9px' }}>
                TODAY
              </button>
              <button
                className="warning btn warning btn-sm warning btn-warning"
                onClick={this.closeModal}
                style={{ fontSize: '12px' }}>
                CANCEL
              </button>
              <button
                className="primary btn primary btn-sm primary btn-primary"
                onClick={this.handleOnOkayClick}
                style={{ fontSize: '12px' }}>
                OK
              </button>
            </div>
          </Modal.Footer>
        </Modal>
        <div>
          <input type="text" className="f4InputField form-control" readOnly style={{ cursor: disabled ? 'not-allowed' : 'pointer' }} onClick={this.handleOnClick} value={displayDate} onKeyPress={ (event)=>{ event.preventDefault() } }/>
        </div>
      </span>
    );
  }
}

F4InputDatePicker.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string,
  closeOnDayClick: PropTypes.bool,
  disabled: PropTypes.bool
}

F4InputDatePicker.defaultProps = {
  value: new Date(),
  format: "MM/DD/YYYY",
  closeOnDayClick: false,
  disabled: false
};

export default asF4FormElement(F4InputDatePicker);
