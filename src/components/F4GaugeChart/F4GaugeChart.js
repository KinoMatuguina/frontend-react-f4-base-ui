/**
* F4GaugeChart.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PieChart, Tooltip, Legend, Pie, Cell, Label, CartesianGrid,
  // PolarGrid,
  ResponsiveContainer, } from 'recharts';

class F4GaugeChart extends Component {
  constructor(props) {
    super(props);

    const { value, maxValue } = props;

    this.nameKey = "name";
    this.dataKey = "value";
    let data = {name: "value", value: value, maxValue};
    let emptyData = {name: "empty", value: maxValue - value, maxValue};
    this.data = [data, emptyData];
  }
  render() {

 
    const { 
      isResponsive,
      width, height,
      responsiveContainer} = this.props;
    
    if (isResponsive) {
      return (
        <ResponsiveContainer width='100%' aspect={width / height} {...responsiveContainer}>
          { <Content {... this.props}
              nameKey={this.nameKey} 
              dataKey={this.dataKey}
              data={this.data}
            /> }
        </ResponsiveContainer>
      );
    } else return <Content {... this.props} 
                    nameKey={this.nameKey} 
                    dataKey={this.dataKey}
                    data={this.data}
                  />;
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
    data, pie, cell, color, emptyColor} = props;

  return(
      <PieChart 
        width={width}
        height={height}
        margin={margin}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        { hasTooltip ? <Tooltip {...tooltip}/> : '' }
        { hasLegend ? <Legend {...legend}/> : ''}
        <Pie
          data={data}
          nameKey={nameKey}
          dataKey={dataKey}
          startAngle={180}
          endAngle={0}
          innerRadius="50%"
          outerRadius="75%"
          label={false}
          {...pie}
        >
          <Cell fill={color} {...cell} />
          <Cell fill={emptyColor} {...cell} />

          <Label value={data[0][dataKey]} position="center"/>
        </Pie>
        
      </PieChart>
  );
}

const tStyles = {
  container: {
    backgroundColor: "white",
    border: "2px solid #e8e4df",
    padding: "10px",
  }
}

const defaultTooltip = (props) => {
  const {active} = props;

  if (active) {
    const {payload, label} = props;

    let pl = payload[0].payload;
    return(
      <div style={tStyles.container}>
        {pl.name}: {pl.value} / {pl.payload.maxValue}
      </div>
    );
  }
  return null;
}

F4GaugeChart.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  color: PropTypes.string,
  emptyColor: PropTypes.string,
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

  hasTooltip: PropTypes.bool,
  // hasLegend: PropTypes.bool,
  isResponsive: PropTypes.bool,
}

F4GaugeChart.defaultProps = {
  color: '#ff7b07',
  emptyColor: '#ccc',
  width: 730,
  height: 250,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  hasTooltip: true,
  tooltip: {content: defaultTooltip},
  hasLegend: false,
  isResponsive: true,
}


export default F4GaugeChart;