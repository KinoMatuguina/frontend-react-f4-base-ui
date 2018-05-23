/**
* F4LineChart.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line,
  ResponsiveContainer } from 'recharts';

class F4LineChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { 
      isResponsive,
      width, height,
      responsiveContainer} = this.props;
    
    if (isResponsive) {
      return (
        <ResponsiveContainer width='100%' aspect={width / height} {...responsiveContainer}>
          { Content(this.props) }
        </ResponsiveContainer>
      );
    } else return Content(this.props);
  }
}

const Content = (props) => {

  const { 
    // width, height, data, margin, 
    hasGrid, hasXAxis, hasYAxis, hasTooltip, hasLegend,
    lines, tooltip, legend, responsiveContainer, grid,
    xAxisDataKey,
    xAxis, yAxis} = props;

  return(
    <LineChart {...props}>
      { hasGrid ? <CartesianGrid strokeDasharray="3 3" {...grid}/> : ''}
      { hasXAxis ? <XAxis dataKey={xAxisDataKey} {...xAxis} /> : ''}
      { hasYAxis ? <YAxis {...yAxis}/> : ''}
      { hasTooltip ? <Tooltip {...tooltip}/> : '' }
      { hasLegend ? <Legend {...legend}/> : ''}
      {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      {lines.map(line => <Line key={line.dataKey} {...line}/>)}
    </LineChart>
  );
}

F4LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  lines: PropTypes.array.isRequired,
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

  syncId: PropTypes.string,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),

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
}


export default F4LineChart;