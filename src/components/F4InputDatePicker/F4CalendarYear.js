import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { Motion, spring } from 'react-motion';
import DateTimeUtil from '../DateTimeUtil';


export default class F4CalendarYear extends Component {
  constructor(props) {
    super(props);

    this.renderYear = this.renderYear.bind(this);
  }
  renderYear(year) {

    const { selectedDate, id, minDate, maxDate, handleYearClick } = this.props;

    let className="yearListItem";
    let disabled = DateTimeUtil.isYearDisabled(minDate, maxDate, year, 'both');


    if (selectedDate.getFullYear() === year) {
      className += "Selected";
    }

    if (disabled) {
      className += "Disabled";
    }

    return (
      <li
        id={`${id}__yearListItem__${year}`}
        key={year} className={className}
        style={{ cursor: 'pointer', padding: '5px 10px 5px 10px' }}
        onClick={disabled ? null : handleYearClick.bind(null, year)}
        >
        { year }
      </li>
    );
  }
  render() {
    const self = this;
    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1, { stiffness: 300 }) }}>
        { value =>
          <ul className="f4InputDatePicker yearsList" style={{ opacity: value.x }}>
            {
               _.range(1900, 2100).map((i) => {
                 return self.renderYear(i);
               })
            }
          </ul>
        }
      </Motion>
    );
  }
}


F4CalendarYear.propTypes = {
  id: PropTypes.string,
  handleYearClick: PropTypes.func,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  selectedDate: PropTypes.object
}
