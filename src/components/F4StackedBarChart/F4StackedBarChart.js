
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer } from 'recharts';

/**
 * Recharts
 * Resources: http://recharts.org/#/en-US/api/AreaChart
 * For areas' props: http://recharts.org/#/en-US/api/Area
 */
class F4StackedBarChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { 
      isResponsive, 
      width, height, 
      responsiveContainer } = this.props;

    if (isResponsive) {
      return (
        <ResponsiveContainer width='100%' aspect={width / height} {...responsiveContainer}>
          {Content(this.props)}
        </ResponsiveContainer>
      );
    } else return Content(this.props);
  }
}

const Content = (props) => {
  const { 
    // width, height, data, margin, 
    hasGrid, hasXAxis, hasYAxis, hasTooltip, hasLegend,
    barData, tooltip, legend, responsiveContainer, grid,
    xAxisDataKey, firstBarDataKey, secondBarDataKey,
    ticksInterval, firstColor, secondColor} = props;

    return (
      <BarChart data={barData} {...props}>
        { hasXAxis ? <XAxis dataKey={xAxisDataKey}/> : ''}
        { hasYAxis ? <YAxis ticks={ticksInterval}/> : ''}
        { hasGrid ? <CartesianGrid {...grid} vertical={false}/> : ''}
        { hasTooltip ? <Tooltip {...tooltip}/> : '' }
        { hasLegend ? <Legend {...legend}/> : ''}
        <Bar dataKey={firstBarDataKey} fill={firstColor} stackId="stack" />
        <Bar dataKey={secondBarDataKey} fill={secondColor} stackId="stack" />
      </BarChart>
  );
}

F4StackedBarChart.propTypes = {
  barData: PropTypes.array.isRequired,
  ticksInterval: PropTypes.array,
  xAxisDataKey: PropTypes.string.isRequired,
  firstBarDataKey: PropTypes.string,
  secondBarDataKey: PropTypes.string,
  firstColor: PropTypes.string,
  secondColor: PropTypes.string,
  tooltip: PropTypes.object,
  legend: PropTypes.object,
  responsiveContainer: PropTypes.object,
  grid: PropTypes.object,

  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,

  //to test
  syncId: PropTypes.string,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  stackOffset: PropTypes.oneOf(['expand', 'none', 'wiggle', 'silhouette']),
  baseValue: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['dataMin', 'dataMax', 'auto'])]),

  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseLeave: PropTypes.func,

  hasGrid: PropTypes.bool,
  hasXAxis: PropTypes.bool,
  hasYAxis: PropTypes.bool,
  hasTooltip: PropTypes.bool,
  hasLegend: PropTypes.bool,
  isResponsive: PropTypes.bool,
}

F4StackedBarChart.defaultProps = {
  width: 730,
  height: 450,
  ticksInterval: [0, 100, 200, 300],
  margin: { top: 10, right: 30, left: 0, bottom: 0 },
  hasGrid: true,
  hasXAxis: true,
  hasYAxis: true,
  hasTooltip: true,
  hasLegend: true,
  isResponsive: true
}


export default F4StackedBarChart;
