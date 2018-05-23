  
  
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
class F4DoughnutPieChart extends Component {
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
     hasTooltip, hasLegend, tooltip, legend, responsiveContainer, grid,
     pieDataOuter,pieDataInner, colors, colorOuter, pieInnerRadius,
     pieOuterRadius, circleX, circleY, pieDataKey, pieStartAngle,
     pieEndAngle} = props;
  
      return (
        <PieChart {...props}>
          <Pie 
            data={pieDataInner} 
            cx={circleX} 
            cy={circleY} 
            outerRadius={pieInnerRadius} 
            
            stroke="none"
            dataKey="value"
            startAngle={90} endAngle={-270}
          >
          
            {pieDataInner.map((entry, index) => <Cell key={index} fill={colors[index % colors.length]}/>)}
          </Pie>
          <Pie 
            data={pieDataOuter} 
            cx={circleX} 
            cy={circleY} 
            innerRadius={pieInnerRadius}
            outerRadius={pieOuterRadius} 
            
            stroke="none"
            dataKey={pieDataKey}
            startAngle={90} 
            endAngle={-270}
          >
          
            {pieDataOuter.map((entry, index) => <Cell key={index} fill={colorOuter[index % colorOuter.length]}/>)}
          </Pie>
        </PieChart>
    );
  } 
  
  F4DoughnutPieChart.propTypes = {
    pieDataInner: PropTypes.array.isRequired,
    pieDataOuter: PropTypes.array.isRequired,
    pieDataKey: PropTypes.string.isRequired,
    pieInnerRadius: PropTypes.number,
    pieOuterRadius: PropTypes.number,
    colors: PropTypes.array.isRequired,
    colorOuter: PropTypes.array.isRequired,
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
  
  F4DoughnutPieChart.defaultProps = {
    // default props
    width: 500,
    height: 500,
    pieDataKey: "value",
    circleX: 200,
    circleY: 200,
    pieInnerRadius:80,
    pieOuterRadius:100,
    hasTooltip: true,
    hasLegend: true,
    isResponsive: true
  }
  
  
  export default F4DoughnutPieChart;