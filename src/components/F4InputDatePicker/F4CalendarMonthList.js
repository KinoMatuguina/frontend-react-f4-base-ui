import React, { Component } from 'react';  import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import DateTimeUtil from '../DateTimeUtil';


export default class F4CalendarMonthList extends Component {
  constructor(props) {
    super(props);

    this.renderMonth = this.renderMonth.bind(this);
  }
  renderMonth(month, index) {

    const { selectedDate, minDate, maxDate, handleMonthClick } = this.props;

    let className="f4InputDatePicker monthListItem";

    if (selectedDate.getMonth() === index) {
      className += "Selected";
    }

    return (
      <li
        key={month} className={`${className} cursor-pointer`}
        onClick={ handleMonthClick.bind(null, index) }
        style={{ display: 'block', width: '120px', padding: '10px', height: '40px', float: 'left' }}
        >
        <div style={{ margin: '0 auto'}}>
        { month }
        </div>
      </li>
    );
  }
  render() {
    const self = this;
    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1, { stiffness: 300 }) }}>
        { value =>
          <ul className="f4InputDatePicker monthsList" style={{ opacity: value.x, display: 'inline-block', paddingTop: '15px', listStyle: 'none' }}>
            {
               DateTimeUtil.getFullMonthList().map((month, index) => {
                 return self.renderMonth(month, index);
               })
            }
          </ul>
        }
      </Motion>
    );
  }
}


F4CalendarMonthList.propTypes = {
  handleMonthClick: PropTypes.func,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  selectedDate: PropTypes.object
}
