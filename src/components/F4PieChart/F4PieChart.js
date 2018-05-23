/**
* F4PieChart.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PieChart, Tooltip, Legend, Pie, Cell,
  // PolarGrid,
  ResponsiveContainer, } from 'recharts';

class F4PieChart extends Component {
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
    nameKey, dataKey,
    width, height, margin,
    onClick, onMouseEnter, onMouseLeave,
    responsiveContainer,

    //child
    hasGrid, hasTooltip, hasLegend,
    tooltip, legend, 

    //pie
    data, pie, colors, cell} = props;

  return(
    <PieChart 
      width={width}
      height={height}
      margin={margin}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* { hasGrid ? <PolarGrid /> : ''} */}
      { hasTooltip ? <Tooltip {...tooltip}/> : '' }
      { hasLegend ? <Legend {...legend}/> : ''}
      <Pie
        data={data}
        nameKey={nameKey}
        dataKey={dataKey}
        {...pie}
      >
        {data.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]} {...cell}/>)}
      </Pie>
      
    </PieChart>
  );
}

F4PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  nameKey: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  pie: PropTypes.object,
  cell: PropTypes.object,
  tooltip: PropTypes.object,
  legend: PropTypes.object,
  responsiveContainer: PropTypes.object,

  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,

  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,

  // hasGrid: PropTypes.bool,
  hasTooltip: PropTypes.bool,
  hasLegend: PropTypes.bool,
  isResponsive: PropTypes.bool,
}

F4PieChart.defaultProps = {
  width: 730,
  height: 250,
  // margin: { top: 0, right: 0, left: 0, bottom: 0 },
  // hasGrid: true,
  hasTooltip: true,
  hasLegend: true,
  isResponsive: true,

  pie: {startAngle: 450, endAngle:90},
  // legend: {align: 'right', verticalAlign: 'middle', layout: 'vertical'}

  // legend: {
  //   layout: 'vertical',
  //   align: 'right',
  //   verticalAlign: 'middle'
  // }
}


export default F4PieChart;