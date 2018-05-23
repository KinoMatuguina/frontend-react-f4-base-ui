'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4GaugeChart.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4GaugeChart = function (_Component) {
  _inherits(F4GaugeChart, _Component);

  function F4GaugeChart(props) {
    _classCallCheck(this, F4GaugeChart);

    var _this = _possibleConstructorReturn(this, (F4GaugeChart.__proto__ || Object.getPrototypeOf(F4GaugeChart)).call(this, props));

    var value = props.value,
        maxValue = props.maxValue;


    _this.nameKey = "name";
    _this.dataKey = "value";
    var data = { name: "value", value: value, maxValue: maxValue };
    var emptyData = { name: "empty", value: maxValue - value, maxValue: maxValue };
    _this.data = [data, emptyData];
    return _this;
  }

  _createClass(F4GaugeChart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isResponsive = _props.isResponsive,
          width = _props.width,
          height = _props.height,
          responsiveContainer = _props.responsiveContainer;


      if (isResponsive) {
        return _react2.default.createElement(
          _recharts.ResponsiveContainer,
          _extends({ width: '100%', aspect: width / height }, responsiveContainer),
          _react2.default.createElement(Content, _extends({}, this.props, {
            nameKey: this.nameKey,
            dataKey: this.dataKey,
            data: this.data
          }))
        );
      } else return _react2.default.createElement(Content, _extends({}, this.props, {
        nameKey: this.nameKey,
        dataKey: this.dataKey,
        data: this.data
      }));
    }
  }]);

  return F4GaugeChart;
}(_react.Component);

var Content = function Content(props) {
  var nameKey = props.nameKey,
      dataKey = props.dataKey,
      width = props.width,
      height = props.height,
      margin = props.margin,
      onClick = props.onClick,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      responsiveContainer = props.responsiveContainer,
      hasGrid = props.hasGrid,
      hasTooltip = props.hasTooltip,
      hasLegend = props.hasLegend,
      tooltip = props.tooltip,
      legend = props.legend,
      data = props.data,
      pie = props.pie,
      cell = props.cell,
      color = props.color,
      emptyColor = props.emptyColor;


  return _react2.default.createElement(
    _recharts.PieChart,
    {
      width: width,
      height: height,
      margin: margin,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    },
    hasTooltip ? _react2.default.createElement(_recharts.Tooltip, tooltip) : '',
    hasLegend ? _react2.default.createElement(_recharts.Legend, legend) : '',
    _react2.default.createElement(
      _recharts.Pie,
      _extends({
        data: data,
        nameKey: nameKey,
        dataKey: dataKey,
        startAngle: 180,
        endAngle: 0,
        innerRadius: '50%',
        outerRadius: '75%',
        label: false
      }, pie),
      _react2.default.createElement(_recharts.Cell, _extends({ fill: color }, cell)),
      _react2.default.createElement(_recharts.Cell, _extends({ fill: emptyColor }, cell)),
      _react2.default.createElement(_recharts.Label, { value: data[0][dataKey], position: 'center' })
    )
  );
};

var tStyles = {
  container: {
    backgroundColor: "white",
    border: "2px solid #e8e4df",
    padding: "10px"
  }
};

var defaultTooltip = function defaultTooltip(props) {
  var active = props.active;


  if (active) {
    var payload = props.payload,
        label = props.label;


    var pl = payload[0].payload;
    return _react2.default.createElement(
      'div',
      { style: tStyles.container },
      pl.name,
      ': ',
      pl.value,
      ' / ',
      pl.payload.maxValue
    );
  }
  return null;
};

F4GaugeChart.propTypes = {
  value: _propTypes2.default.number.isRequired,
  maxValue: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string,
  emptyColor: _propTypes2.default.string,
  pie: _propTypes2.default.object,
  cell: _propTypes2.default.object,
  tooltip: _propTypes2.default.object,
  legend: _propTypes2.default.object,
  responsiveContainer: _propTypes2.default.object,

  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  margin: _propTypes2.default.object,

  onClick: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,

  hasTooltip: _propTypes2.default.bool,
  // hasLegend: PropTypes.bool,
  isResponsive: _propTypes2.default.bool
};

F4GaugeChart.defaultProps = {
  color: '#ff7b07',
  emptyColor: '#ccc',
  width: 730,
  height: 250,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  hasTooltip: true,
  tooltip: { content: defaultTooltip },
  hasLegend: false,
  isResponsive: true
};

exports.default = F4GaugeChart;
module.exports = exports['default'];