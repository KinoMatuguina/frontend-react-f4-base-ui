/**
* F4InputMonthYearPicker
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Modal from 'react-bootstrap/lib/Modal';
import moment from 'moment';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

import DateTimeUtil from '../DateTimeUtil';
import scrollToElement from '../scrollToElement';

import F4CalendarYear from '../F4InputDatePicker/F4CalendarYear';
import F4CalendarMonthList from '../F4InputDatePicker/F4CalendarMonthList';

@observer
class F4InputMonthYearPicker extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnOkayClick = this.handleOnOkayClick.bind(this);
    this.handleOnTodayClick = this.handleOnTodayClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderMonthList = this.renderMonthList.bind(this);
    this.renderYears = this.renderYears.bind(this);
    this.handleYearClick = this.handleYearClick.bind(this);
    this.handleMonthClick = this.handleMonthClick.bind(this);
    this.handleSwitchDisplay = this.handleSwitchDisplay.bind(this);

    this.state = {
      showModal: false,
      display: 'monthList',
      date: this.props.value
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
       date: DateTimeUtil.getFirstDayOfMonth(date)
     });
   }
  }

  handleSwitchDisplay(display) {

    const { id } = this.props;
    this.setState({
      display
    });

    if (display === 'years') {
      const year = this.state.date.getFullYear();

      setTimeout(() => {
        scrollToElement(`#${id}__f4InputMonthYearContainer`, `#${id}__yearListItem__${year}`);
      }, 300);
    }
  }
  handleOnTodayClick() {

    const { date } = this.state;
    const newDate = DateTimeUtil.getFirstDayOfMonth(new Date());

    this.setState({
      date: newDate
    })

  }
  handleMonthClick(month) {

    const { date } = this.state;
    const newDate = DateTimeUtil.setMonth(date, month);

    this.setState({
      date: newDate
    })

  }
  handleYearClick(year) {

    const { date } = this.props;
    const newDate = DateTimeUtil.setYear(date, year);

    this.setState({
      date: newDate,
      display: 'monthList'
    });

  }
  handleOnClick(event) {
    event.preventDefault();

    const { disabled } = this.props;

    if (!disabled) {
      this.setState({
        showModal: true,
        display: 'monthList',
        date: this.props.value
      });
    }


  }
  handleOnOkayClick() {

    const { onChange, name } = this.props;
    const { date } = this.state;

    if (onChange && typeof onChange !== 'undefined') {
      onChange(name, date);
    }

    this.setState({
      showModal: false
    })
  }
  closeModal() {
    this.setState({
      showModal: false
    })
  }
  renderMonthList() {
    const { maxDate, minDate } = this.props;
    const { date } = this.state;

    return (
      <F4CalendarMonthList
        minDate={minDate}
        maxDate={maxDate}
        selectedDate={date}
        handleMonthClick={this.handleMonthClick}
      />
    );
  }
  renderYears() {
    const { id, minDate, maxDate } = this.props;
    const { date } = this.state;
    return (
      <F4CalendarYear
        id={id}
        selectedDate={date}
        minDate={minDate}
        maxDate={maxDate}
        handleYearClick={this.handleYearClick}
      />
    );
  }
  render() {


    const { date, display, showModal } = this.state;
    const { id, value, format, disabled } = this.props;

    console.log("DATE");
    console.log(date);

    const displayDate = moment(value).format(format);

    let overrideStyle = {
      display: 'block',
      minHeight: '280px',
      maxHeight: '280px'
    };

    if (display === 'years') {
      overrideStyle.overflowY = 'scroll';
      overrideStyle.overflowX = 'hidden';
    }

    return (
      <span>
        <Modal className="f4InputDatePicker f4Modal" show={showModal} onHide={this.closeModal} bsSize="small">
          <Modal.Header className="f4ModalHeader">
            <Modal.Title className="f4ModalTitle">
              <div className="f4InputDatePicker header">
                <h4 style={{ textAlign: 'center'}}>
                  <span className="f4InputDatePicker headerDate cursor-pointer"  style={{ marginRight: '15px' }} onClick={this.handleSwitchDisplay.bind(this, 'monthList')}>
                    { DateTimeUtil.getFullMonth(date, true) }
                  </span>
                  <span className="f4InputDatePicker headerDate cursor-pointer" onClick={this.handleSwitchDisplay.bind(this, 'years')}>
                    { date.getFullYear() }
                  </span>
                </h4>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="f4InputDatePicker f4ModalBody">
            <div>
              <div id={`${id}__f4InputMonthYearContainer`} style={overrideStyle}>
                { display === 'years' ? this.renderYears() : this.renderMonthList() }
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="f4ModalFooter">
            <div className="f4InputDatePickerButtons">
              <button
                className="default btn btn-default btn-sm btn-default pull-left"
                onClick={this.handleOnTodayClick}
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

F4InputMonthYearPicker.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object,
  disabled: PropTypes.bool,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  format: PropTypes.string
};

F4InputMonthYearPicker.defaultProps = {
  disabled: false,
  value: DateTimeUtil.getFirstDayOfMonth(new Date()),
  format: "MMMM YYYY"
};


export default asF4FormElement(F4InputMonthYearPicker);
