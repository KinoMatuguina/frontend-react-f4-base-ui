/**
* F4ProgressBar
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';


@observer
export default class F4ProgressBar extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    const { progress, color, height } = this.props;
    let barWidth = 0;

    if (progress < 0) {
      barWidth = 0;
    } else if (progress > 100) {
      barWidth = 100;
    } else {
      barWidth = progress;
    }
    let overrideStyle = {
      backgroundColor: color,
      height: height,
      width: barWidth + '%',
      borderRadius: '5px',
      transition: 'width 0.25s ease-in-out'
    }

    return (
      <div className="f4ProgressBar">
        <div className="f4ProgressBarContent" style={overrideStyle}>
        </div>
      </div>
    );
  }
}



F4ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  color: PropTypes.string,
  height: PropTypes.number
};

F4ProgressBar.defaultProps = {
  color: '#5082b3',
  height: 10
}
