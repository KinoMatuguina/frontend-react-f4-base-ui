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
var F4DoughnutPieChart = function (_Component) {
  _inherits(F4DoughnutPieChart, _Component);

  function F4DoughnutPieChart(props) {
    _classCallCheck(this, F4DoughnutPieChart);

    return _possibleConstructorReturn(this, (F4DoughnutPieChart.__proto__ || Object.getPrototypeOf(F4DoughnutPieChart)).call(this, props));
  }

  _createClass(F4DoughnutPieChart, [{
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

  return F4DoughnutPieChart;
}(_react.Component);

var Content = function Content(props) {
  var hasTooltip = props.hasTooltip,
      hasLegend = props.hasLegend,
      tooltip = props.tooltip,
      legend = props.legend,
      responsiveContainer = props.responsiveContainer,
      grid = props.grid,
      pieDataOuter = props.pieDataOuter,
      pieDataInner = props.pieDataInner,
      colors = props.colors,
      colorOuter = props.colorOuter,
      pieInnerRadius = props.pieInnerRadius,
      pieOuterRadius = props.pieOuterRadius,
      circleX = props.circleX,
      circleY = props.circleY,
      pieDataKey = props.pieDataKey,
      pieStartAngle = props.pieStartAngle,
      pieEndAngle = props.pieEndAngle;


  return _react2.default.createElement(
    _recharts.PieChart,
    props,
    _react2.default.createElement(
      _recharts.Pie,
      {
        data: pieDataInner,
        cx: circleX,
        cy: circleY,
        outerRadius: pieInnerRadius,

        stroke: 'none',
        dataKey: 'value',
        startAngle: 90, endAngle: -270
      },
      pieDataInner.map(function (entry, index) {
        return _react2.default.createElement(_recharts.Cell, { key: index, fill: colors[index % colors.length] });
      })
    ),
    _react2.default.createElement(
      _recharts.Pie,
      {
        data: pieDataOuter,
        cx: circleX,
        cy: circleY,
        innerRadius: pieInnerRadius,
        outerRadius: pieOuterRadius,

        stroke: 'none',
        dataKey: pieDataKey,
        startAngle: 90,
        endAngle: -270
      },
      pieDataOuter.map(function (entry, index) {
        return _react2.default.createElement(_recharts.Cell, { key: index, fill: colorOuter[index % colorOuter.length] });
      })
    )
  );
};

F4DoughnutPieChart.propTypes = {
  pieDataInner: _propTypes2.default.array.isRequired,
  pieDataOuter: _propTypes2.default.array.isRequired,
  pieDataKey: _propTypes2.default.string.isRequired,
  pieInnerRadius: _propTypes2.default.number,
  pieOuterRadius: _propTypes2.default.number,
  colors: _propTypes2.default.array.isRequired,
  colorOuter: _propTypes2.default.array.isRequired,
  tooltip: _propTypes2.default.object,
  legend: _propTypes2.default.object,
  responsiveContainer: _propTypes2.default.object,

  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  circleX: _propTypes2.default.number,
  circleY: _propTypes2.default.number,

  hasTooltip: _propTypes2.default.bool,
  hasLegend: _propTypes2.default.bool,
  isResponsive: _propTypes2.default.bool
  // props definition
};

F4DoughnutPieChart.defaultProps = {
  // default props
  width: 500,
  height: 500,
  pieDataKey: "value",
  circleX: 200,
  circleY: 200,
  pieInnerRadius: 80,
  pieOuterRadius: 100,
  hasTooltip: true,
  hasLegend: true,
  isResponsive: true
};

exports.default = F4DoughnutPieChart;
module.exports = exports['default'];