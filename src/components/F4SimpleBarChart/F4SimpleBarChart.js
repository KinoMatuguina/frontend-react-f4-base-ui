
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import { BarChart, Bar, ReferenceLine, XAxis,Label, LabelList, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer } from 'recharts';

/**
 * Recharts
 * Resources: http://recharts.org/#/en-US/api/AreaChart
 * For areas' props: http://recharts.org/#/en-US/api/Area
 */

class F4SimpleBarChart extends Component {
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
        <ResponsiveContainer width='100%' height= '100%' aspect={width / height} {...responsiveContainer}>
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
    xAxisDataKey, uvDataKey, yLineCount, barColor, 
    xLabelAngle, ticksInterval, xtickLineSize, xAxisHeight,
    ticksStyle, textAnchor} = props;

    return (
      <BarChart data={barData} {...props}>
        { hasXAxis ? <XAxis 
                      dataKey={xAxisDataKey} 
                      tickSize={xtickLineSize} 
                      allowDataOverflow={true} 
                      interval={0}
                      textAnchor={textAnchor}
                      height={xAxisHeight} 
                      angle={xLabelAngle}
                      tick={ticksStyle}
                      
                     >
                     </XAxis> : ''
        }
        { hasYAxis ? <YAxis ticks={ticksInterval} stroke="gray" /> : ''}
        { hasGrid ? <CartesianGrid {...grid}/> : ''}
        { hasTooltip ? <Tooltip {...tooltip}/> : '' }
        <Bar dataKey={uvDataKey} fill={barColor} stackId="stack" barSize={30} />
      </BarChart>
  );
}

F4SimpleBarChart.propTypes = {
  barData: PropTypes.array.isRequired,
  ticksInterval: PropTypes.array,
  xAxisDataKey: PropTypes.string.isRequired,
  uvDataKey: PropTypes.string,
  barColor: PropTypes.string.isRequired,
  tooltip: PropTypes.object,
  legend: PropTypes.object,
  responsiveContainer: PropTypes.object,
  grid: PropTypes.object,

  //x-axis 
  xAxisHeight: PropTypes.number,
  xLabelAngle: PropTypes.number,
  xtickLineSize: PropTypes.number,

  ticksStyle: PropTypes.object,

  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
  yLineCount: PropTypes.string,
  //to test
  syncId: PropTypes.string,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  stackOffset: PropTypes.oneOf(['expand', 'none', 'wiggle', 'silhouette']),
  baseValue: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['dataMin', 'dataMax', 'auto'])]),
  textAnchor: PropTypes.oneOf(['start', 'end', 'middle']),

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
  xLabelAngle:-90
}


export default F4SimpleBarChart;
