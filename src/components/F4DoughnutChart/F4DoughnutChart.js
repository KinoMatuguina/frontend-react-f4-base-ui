  
  
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import { PieChart, Pie, Sector, Cell, Tooltip, Legend,
  ResponsiveContainer } from 'recharts';

/**
 * Recharts
 * Resources: http://recharts.org/#/en-US/api/AreaChart
 * For areas' props: http://recharts.org/#/en-US/api/Area
 */
class F4DoughnutChart extends Component {
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
     hasTooltip, hasLegend, tooltip, legend, 
     responsiveContainer, grid, pieData, colors,
     circleX, circleY, pieDataKey, pieInnerRadius,
     pieOuterRadius} = props;
  
      return (
        <PieChart {...props}>
          <Pie 
            data={pieData} 
            cx={circleX} 
            cy={circleY} 
            innerRadius={pieInnerRadius}
            outerRadius={pieOuterRadius} 
            stroke="none"
            dataKey={pieDataKey}
          >
          
            {pieData.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)}
          </Pie>
        </PieChart>
    );
  } 
  
  F4DoughnutChart.propTypes = {
    pieData: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    pieInnerRadius: PropTypes.number.isRequired,
    pieOuterRadius: PropTypes.number.isRequired,
    pieDataKey: PropTypes.string,
    tooltip: PropTypes.object,
    legend: PropTypes.object,
    responsiveContainer: PropTypes.object,

    width: PropTypes.number,
    height: PropTypes.number,
    circleX: PropTypes.number,
    circleY: PropTypes.number,

    hasTooltip: PropTypes.bool,
    hasLegend: PropTypes.bool,
    isResponsive: PropTypes.bool,
    // props definition
  }
  
  F4DoughnutChart.defaultProps = {
    // default props
    width: 500,
    height: 500,
    circleX: 200,
    circleY: 200,
    pieDataKey: "value",
    hasTooltip: true,
    hasLegend: true,
    isResponsive: true
  }
  
  
  export default F4DoughnutChart;