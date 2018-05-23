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

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Recharts
 * Resources: http://recharts.org/#/en-US/api/AreaChart
 * For areas' props: http://recharts.org/#/en-US/api/Area
 */

var F4SimpleBarChart = function (_Component) {
  _inherits(F4SimpleBarChart, _Component);

  function F4SimpleBarChart(props) {
    _classCallCheck(this, F4SimpleBarChart);

    return _possibleConstructorReturn(this, (F4SimpleBarChart.__proto__ || Object.getPrototypeOf(F4SimpleBarChart)).call(this, props));
  }

  _createClass(F4SimpleBarChart, [{
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
          _extends({ width: '100%', height: '100%', aspect: width / height }, responsiveContainer),
          Content(this.props)
        );
      } else return Content(this.props);
    }
  }]);

  return F4SimpleBarChart;
}(_react.Component);

var Content = function Content(props) {
  var hasGrid = props.hasGrid,
      hasXAxis = props.hasXAxis,
      hasYAxis = props.hasYAxis,
      hasTooltip = props.hasTooltip,
      hasLegend = props.hasLegend,
      barData = props.barData,
      tooltip = props.tooltip,
      legend = props.legend,
      responsiveContainer = props.responsiveContainer,
      grid = props.grid,
      xAxisDataKey = props.xAxisDataKey,
      uvDataKey = props.uvDataKey,
      yLineCount = props.yLineCount,
      barColor = props.barColor,
      xLabelAngle = props.xLabelAngle,
      ticksInterval = props.ticksInterval,
      xtickLineSize = props.xtickLineSize,
      xAxisHeight = props.xAxisHeight,
      ticksStyle = props.ticksStyle,
      textAnchor = props.textAnchor;


  return _react2.default.createElement(
    _recharts.BarChart,
    _extends({ data: barData }, props),
    hasXAxis ? _react2.default.createElement(_recharts.XAxis, {
      dataKey: xAxisDataKey,
      tickSize: xtickLineSize,
      allowDataOverflow: true,
      interval: 0,
      textAnchor: textAnchor,
      height: xAxisHeight,
      angle: xLabelAngle,
      tick: ticksStyle

    }) : '',
    hasYAxis ? _react2.default.createElement(_recharts.YAxis, { ticks: ticksInterval, stroke: 'gray' }) : '',
    hasGrid ? _react2.default.createElement(_recharts.CartesianGrid, grid) : '',
    hasTooltip ? _react2.default.createElement(_recharts.Tooltip, tooltip) : '',
    _react2.default.createElement(_recharts.Bar, { dataKey: uvDataKey, fill: barColor, stackId: 'stack', barSize: 30 })
  );
};

F4SimpleBarChart.propTypes = {
  barData: _propTypes2.default.array.isRequired,
  ticksInterval: _propTypes2.default.array,
  xAxisDataKey: _propTypes2.default.string.isRequired,
  uvDataKey: _propTypes2.default.string,
  barColor: _propTypes2.default.string.isRequired,
  tooltip: _propTypes2.default.object,
  legend: _propTypes2.default.object,
  responsiveContainer: _propTypes2.default.object,
  grid: _propTypes2.default.object,

  //x-axis 
  xAxisHeight: _propTypes2.default.number,
  xLabelAngle: _propTypes2.default.number,
  xtickLineSize: _propTypes2.default.number,

  ticksStyle: _propTypes2.default.object,

  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  margin: _propTypes2.default.object,
  yLineCount: _propTypes2.default.string,
  //to test
  syncId: _propTypes2.default.string,
  layout: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  stackOffset: _propTypes2.default.oneOf(['expand', 'none', 'wiggle', 'silhouette']),
  baseValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['dataMin', 'dataMax', 'auto'])]),
  textAnchor: _propTypes2.default.oneOf(['start', 'end', 'middle']),

  onClick: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseMove: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,

  hasGrid: _propTypes2.default.bool,
  hasXAxis: _propTypes2.default.bool,
  hasYAxis: _propTypes2.default.bool,
  hasTooltip: _propTypes2.default.bool,
  hasLegend: _propTypes2.default.bool,
  isResponsive: _propTypes2.default.bool
};

F4SimpleBarChart.defaultProps = {
  width: 730,
  height: 800,
  xAxisHeight: 250,
  xtickLineSize: 0,
  ticksInterval: [0, 10, 20, 30, 40, 50, 60],
  margin: { top: 10, right: 30, left: 0, bottom: 30 },
  hasGrid: true,
  hasXAxis: true,
  hasYAxis: true,
  hasTooltip: true,
  hasLegend: true,
  isResponsive: true,
  xLabelAngle: -90
};

exports.default = F4SimpleBarChart;
module.exports = exports['default'];