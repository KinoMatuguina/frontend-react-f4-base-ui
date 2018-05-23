'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var fullDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var shortDaysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var DateTimeUtil = function () {
  function DateTimeUtil() {
    _classCallCheck(this, DateTimeUtil);
  }

  _createClass(DateTimeUtil, null, [{
    key: 'getFullMonthList',
    value: function getFullMonthList() {
      return fullMonths;
    }
  }, {
    key: 'getShortMonthList',
    value: function getShortMonthList() {
      return shortMonths;
    }
  }, {
    key: 'getDaysInMonth',
    value: function getDaysInMonth(date) {
      var num = (0, _moment2.default)(date).daysInMonth();
      return num;
    }
  }, {
    key: 'getFirstDayOfMonth',
    value: function getFirstDayOfMonth(date) {
      var newDate = (0, _moment2.default)(date).startOf('month');
      return newDate.toDate();
    }
  }, {
    key: 'getEndOfMonth',
    value: function getEndOfMonth(date) {
      var newDate = (0, _moment2.default)(date).endOf('month');
      return newDate.toDate();
    }
  }, {
    key: 'getLastDateOfMonth',
    value: function getLastDateOfMonth(date) {
      var newDate = this.getEndOfMonth(date);
      return newDate.getDate();
    }
  }, {
    key: 'getFirstDayOfWeek',
    value: function getFirstDayOfWeek(date) {

      var firstWeekDay = (0, _moment2.default)(this.getFirstDayOfMonth(date)).day();
      return firstWeekDay;
    }
  }, {
    key: 'getFullMonth',
    value: function getFullMonth(date) {
      var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var zeroIndexed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


      if (typeof date === 'undefined' || date === null || date === "") {
        return "";
      } else {

        var month = (0, _moment2.default)(date).month();
        return uppercase ? fullMonths[month].toUpperCase() : fullMonths[month];
      }
    }
  }, {
    key: 'getShortMonth',
    value: function getShortMonth(date) {
      var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var zeroIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


      if (typeof date === 'undefined' || date === null || date === "") {
        return "";
      } else {
        var month = (0, _moment2.default)(date).month();
        return uppercase ? shortMonths[month].toUpperCase() : shortMonths[month];
      }
    }
  }, {
    key: 'getFullMonthByNum',
    value: function getFullMonthByNum(month) {
      var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var zeroIndexed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


      if (typeof month === 'undefined' || month === null || month === "") {
        return "";
      } else {

        if (!zeroIndexed) {
          month--;
        }
        return uppercase ? fullMonths[month].toUpperCase() : fullMonths[month];
      }
    }
  }, {
    key: 'getShortMonthByNum',
    value: function getShortMonthByNum(month) {
      var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var zeroIndexed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


      if (typeof month === 'undefined' || month === null || month === "") {
        return "";
      } else {

        if (!zeroIndexed) {
          month--;
        }

        return uppercase ? shortMonths[month].toUpperCase() : shortMonths[month];
      }
    }
  }, {
    key: 'getFullDayOfWeek',
    value: function getFullDayOfWeek(day) {
      var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var zeroIndexed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


      if (typeof day === 'undefined' || day === null || day === "") {
        return "";
      } else {

        if (!zeroIndexed) {
          day--;
        }

        return uppercase ? fullDaysOfWeek[day].toUpperCase() : fullDaysOfWeek[day];
      }
    }
  }, {
    key: 'getShortDayOfWeek',
    value: function getShortDayOfWeek(day) {
      var uppercase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var zeroIndexed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


      if (typeof day === 'undefined' || day === null || day === "") {
        return "";
      } else {

        if (!zeroIndexed) {
          day--;
        }

        return uppercase ? shortDaysOfWeek[day].toUpperCase() : shortDaysOfWeek[day];
      }
    }
  }, {
    key: 'cloneDate',
    value: function cloneDate(date) {
      return new Date(date.getTime());
    }
  }, {
    key: 'cloneAsDate',
    value: function cloneAsDate(date) {
      var cloned = this.cloneDate(date);
      cloned.setHours(0, 0, 0, 0);
      return cloned;
    }

    //=========================================================
    // DATE MANIPULATIONS
    //=========================================================

  }, {
    key: 'addDays',
    value: function addDays(date, days) {
      var newDate = (0, _moment2.default)(date).add(days, 'days');
      return newDate.toDate();
    }
  }, {
    key: 'addWeeks',
    value: function addWeeks(date, weeks) {
      var newDate = (0, _moment2.default)(date).add(weeks, 'weeks');
    }
  }, {
    key: 'addMonths',
    value: function addMonths(date, months) {
      var newDate = (0, _moment2.default)(date).add(months, 'months');
      return newDate.toDate();
    }
  }, {
    key: 'addYears',
    value: function addYears(date, years) {
      var newDate = (0, _moment2.default)(date).add(years, 'years');
      return newDate.toDate();
    }
  }, {
    key: 'substractDays',
    value: function substractDays(date, days) {
      var newDate = (0, _moment2.default)(date).substract(days, 'days');
      return newDate.toDate();
    }
  }, {
    key: 'substractWeeks',
    value: function substractWeeks(date, weeks) {
      var newDate = (0, _moment2.default)(date).substract(weeks, 'weeks');
    }
  }, {
    key: 'substractMonths',
    value: function substractMonths(date, months) {
      var newDate = (0, _moment2.default)(date).substract(months, 'months');
      return newDate.toDate();
    }
  }, {
    key: 'substractYears',
    value: function substractYears(date, years) {
      var newDate = (0, _moment2.default)(date).substract(years, 'years');
      return newDate.toDate();
    }

    //=========================================================
    // SETTERS
    //=========================================================

  }, {
    key: 'setHours',
    value: function setHours(date, hour) {
      var newDate = (0, _moment2.default)(date).hour(hour);
      return newDate.toDate();
    }
  }, {
    key: 'setMinutes',
    value: function setMinutes(date, minute) {
      var newDate = (0, _moment2.default)(date).minute(minute);
      return newDate.toDate();
    }
  }, {
    key: 'setDay',
    value: function setDay(date, day) {
      var newDate = (0, _moment2.default)(date).date(day);
      return newDate.toDate();
    }
  }, {
    key: 'setMonth',
    value: function setMonth(date, month) {
      var newDate = (0, _moment2.default)(date).month(month);
      return newDate.toDate();
    }
  }, {
    key: 'setYear',
    value: function setYear(date, year) {
      var newDate = (0, _moment2.default)(date).year(year);
      return newDate.toDate();
    }

    //=========================================================
    // VALIDATIONS
    //=========================================================

  }, {
    key: 'isDateDisabled',
    value: function isDateDisabled(minDate, maxDate, date) {
      var inc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'both';


      var disabled = false;

      var inclusion = '[]';

      if (inc === 'min') {
        inclusion = '[)';
      } else if (inc === 'max') {
        inclusion = '(]';
      } else if (inc === 'none') {
        inclusion = '()';
      }

      if (minDate && typeof minDate !== 'undefined' && (0, _moment2.default)(minDate).isValid() && maxDate && typeof maxDate !== 'undefined' && (0, _moment2.default)(maxDate).isValid()) {

        disabled = !(0, _moment2.default)(date).isBetween(minDate, maxDate, null, inclusion);
      } else if (minDate && typeof minDate !== 'undefined' && (0, _moment2.default)(minDate).isValid()) {
        if (inc === 'min' || inc === 'both') {
          disabled = (0, _moment2.default)(date).isBefore(minDate);
        } else {
          disabled = (0, _moment2.default)(date).isSameOrBefore(minDate);
        }
      } else if (maxDate && typeof maxDate !== 'undefined' && (0, _moment2.default)(maxDate).isValid()) {

        if (inc === 'max' || inc === 'both') {
          disabled = (0, _moment2.default)(date).isAfter(minDate);
        } else {
          disabled = (0, _moment2.default)(date).isSameOrAfter(minDate);
        }
      }

      return disabled;
    }
  }, {
    key: 'isYearDisabled',
    value: function isYearDisabled(minDate, maxDate, year) {
      var inc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'both';

      var disabled = false;

      if (minDate && typeof minDate !== 'undefined' && (0, _moment2.default)(minDate).isValid() && maxDate && typeof maxDate !== 'undefined' && (0, _moment2.default)(maxDate).isValid()) {

        if (inc === 'min') {
          disabled = !(year >= minDate.getFullYear() && year < maxDate.getFullYear());
        } else if (inc === 'max') {
          disabled = !(year > minDate.getFullYear() && year <= maxDate.getFullYear());
        } else if (inc === 'none') {
          disabled = !(year > minDate.getFullYear() && year < maxDate.getFullYear());
        } else {
          disabled = !(year >= minDate.getFullYear() && year <= maxDate.getFullYear());
        }
      } else if (minDate && typeof minDate !== 'undefined' && (0, _moment2.default)(minDate).isValid()) {

        if (inc === 'min' || inc === 'both') {
          disabled = year < minDate.getFullYear();
        } else {
          disabled = year <= minDate.getFullYear();
        }
      } else if (maxDate && typeof maxDate !== 'undefined' && (0, _moment2.default)(maxDate).isValid()) {

        if (inc === 'max' || inc === 'both') {
          disabled = year > minDate.getFullYear();
        } else {
          disabled = year >= minDate.getFullYear();
        }
      }

      return disabled;
    }
  }, {
    key: 'isValidDate',
    value: function isValidDate(date) {

      return (0, _moment2.default)(date).isValid();
    }
  }]);

  return DateTimeUtil;
}();

exports.default = DateTimeUtil;
module.exports = exports['default'];