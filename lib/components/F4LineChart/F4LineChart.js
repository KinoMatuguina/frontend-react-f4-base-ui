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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4LineChart.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4LineChart = function (_Component) {
  _inherits(F4LineChart, _Component);

  function F4LineChart(props) {
    _classCallCheck(this, F4LineChart);

    return _possibleConstructorReturn(this, (F4LineChart.__proto__ || Object.getPrototypeOf(F4LineChart)).call(this, props));
  }

  _createClass(F4LineChart, [{
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
          Content(this.props)
        );
      } else return Content(this.props);
    }
  }]);

  return F4LineChart;
}(_react.Component);

var Content = function Content(props) {
  var hasGrid = props.hasGrid,
      hasXAxis = props.hasXAxis,
      hasYAxis = props.hasYAxis,
      hasTooltip = props.hasTooltip,
      hasLegend = props.hasLegend,
      lines = props.lines,
      tooltip = props.tooltip,
      legend = props.legend,
      responsiveContainer = props.responsiveContainer,
      grid = props.grid,
      xAxisDataKey = props.xAxisDataKey,
      xAxis = props.xAxis,
      yAxis = props.yAxis;


  return _react2.default.createElement(
    _recharts.LineChart,
    props,
    hasGrid ? _react2.default.createElement(_recharts.CartesianGrid, _extends({ strokeDasharray: '3 3' }, grid)) : '',
    hasXAxis ? _react2.default.createElement(_recharts.XAxis, _extends({ dataKey: xAxisDataKey }, xAxis)) : '',
    hasYAxis ? _react2.default.createElement(_recharts.YAxis, yAxis) : '',
    hasTooltip ? _react2.default.createElement(_recharts.Tooltip, tooltip) : '',
    hasLegend ? _react2.default.createElement(_recharts.Legend, legend) : '',
    lines.map(function (line) {
      return _react2.default.createElement(_recharts.Line, _extends({ key: line.dataKey }, line));
    })
  );
};

F4LineChart.propTypes = {
  data: _propTypes2.default.array.isRequired,
  lines: _propTypes2.default.array.isRequired,
  xAxisDataKey: _propTypes2.default.string.isRequired,
  tooltip: _propTypes2.default.object,
  legend: _propTypes2.default.object,
  responsiveContainer: _propTypes2.default.object,
  grid: _propTypes2.default.object,

  xAxis: _propTypes2.default.object,
  yAxis: _propTypes2.default.object,

  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  margin: _propTypes2.default.object,

  syncId: _propTypes2.default.string,
  layout: _propTypes2.default.oneOf(['horizontal', 'vertical']),

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

F4LineChart.defaultProps = {
  width: 730,
  height: 250,
  // margin: { top: 10, right: 30, left: 0, bottom: 0 },
  hasGrid: true,
  hasXAxis: true,
  hasYAxis: true,
  hasTooltip: true,
  hasLegend: true,
  isResponsive: true
};

exports.default = F4LineChart;
module.exports = exports['default'];