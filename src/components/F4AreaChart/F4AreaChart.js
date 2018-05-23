/**
* F4AreaChart.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend,
  ResponsiveContainer } from 'recharts';

/**
 * Recharts
 * Resources: http://recharts.org/#/en-US/api/AreaChart
 * For areas' props: http://recharts.org/#/en-US/api/Area
 */
class F4AreaChart extends Component {
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
    areas, tooltip, legend, responsiveContainer, grid,
    xAxisDataKey,
    xAxis, yAxis} = props;

    return (
      <AreaChart {...props}>
        { hasXAxis ? <XAxis dataKey={xAxisDataKey} {...xAxis}/> : ''}
        { hasYAxis ? <YAxis {...yAxis}/> : ''}
        { hasGrid ? <CartesianGrid strokeDasharray="3 3" {...grid}/> : ''}
        { hasTooltip ? <Tooltip {...tooltip}/> : '' }
        { hasLegend ? <Legend {...legend}/> : ''}
        {areas.map(area => <Area key={area.dataKey} {...area}/>)}
      </AreaChart>
  );
}

F4AreaChart.propTypes = {
  data: PropTypes.array.isRequired,
  areas: PropTypes.array.isRequired,
  xAxisDataKey: PropTypes.string.isRequired,
  tooltip: PropTypes.object,
  legend: PropTypes.object,
  responsiveContainer: PropTypes.object,
  grid: PropTypes.object,

  xAxis: PropTypes.object,
  yAxis: PropTypes.object,

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

F4AreaChart.defaultProps = {
  width: 730,
  height: 250,
  // margin: { top: 10, right: 30, left: 0, bottom: 0 },
  hasGrid: true,
  hasXAxis: true,
  hasYAxis: true,
  hasTooltip: true,
  hasLegend: true,
  isResponsive: true
}


export default F4AreaChart;