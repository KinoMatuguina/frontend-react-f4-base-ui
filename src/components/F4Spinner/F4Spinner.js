import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { Motion, spring } from 'react-motion';

export default class F4Spinner extends Component {
  render() {

    const { color } = this.props;

    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1, {stiffness: 200}) }}>
        {value =>
          <div className="f4Spinner" style={{ opacity: value.x }}>
            <div className="f4DoubleBounce1" style={{ backgroundColor: color }}></div>
            <div className="f4DoubleBounce2" style={{ backgroundColor: color }}></div>
          </div>
        }
      </Motion>
    )
  }
}

F4Spinner.propTypes = {
  color: PropTypes.string
};

F4Spinner.defaultProps = {
  color: '#ffffff'
}
