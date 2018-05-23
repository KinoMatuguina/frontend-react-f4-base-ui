/**
* F4BranchLocator
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import FontAwesome from 'react-fontawesome';

const K_WIDTH = 40;
const K_HEIGHT = 40;

const innerWidth = 20;
const innerHeight = 20;


@observer
export default class F4LocationMarker extends Component {
  constructor(props) {
    super(props);

    this.renderMarker = this.renderMarker.bind(this);
  }
  renderMarker() {

    const { icon, isSelected, iconColor, iconColorActive } = this.props;

    if (typeof icon !== 'undefined' && icon && icon !== 'CURRENT') {

      let icColor = iconColor;

      if (isSelected) {
        icColor = iconColorActive;
      }

      return (
        <span>
          <div style={{
            backgroundColor: 'white',
            border: '2px solid ' + icColor,
            position: 'absolute',
            width: K_WIDTH,
            height: K_HEIGHT,
            left: 0,
            top: 0,
            borderRadius: K_HEIGHT,
            textAlign: 'center',
            display: 'inline-block'
          }}></div>
          <div style={{
            position: 'absolute',
            width: innerWidth,
            height: innerHeight,
            left: '8px',
            top: '9px'
          }}>
            <FontAwesome name={icon} style={{ color: iconColor}} size="lg"/>
          </div>
        </span>
      )
    } else {

      return (
        <span>
          <div style={{
            backgroundColor: '#00e0ff',
            position: 'absolute',
            width: K_WIDTH,
            height: K_HEIGHT,
            left: 0,
            top: 0,
            borderRadius: K_HEIGHT,
            opacity: 0.4
          }}></div>
          <div style={{
            backgroundColor: '#00b0ff',
            position: 'absolute',
            width: innerWidth,
            height: innerHeight,
            left: innerWidth/2,
            top: innerHeight/2,
            borderRadius: '50%',
            border: '2px solid white'
          }}>
          </div>
        </span>
      );
    }
  }
  render() {

    const { icon, isSelected, hintText } = this.props;
    const style = {
      position: 'absolute',
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,
      borderRadius: K_HEIGHT,
      backgroundColor: 'transparent',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
    };

    const hintStyle = {
      width: 80
    };

    if (this.props.$hover) {
      style.cursor = 'pointer'
    }

    if (isSelected) {
      hintStyle.visibility = "visible";
      hintStyle.opacity = 0.7;
    }

    return (
      <div style={style}>
        <div style={{
          position: 'relative',
          width: K_WIDTH,
          height: K_HEIGHT,
          top: 0,
          left: 0
        }} className="f4BankLocatorMarkerContainer">

          { this.renderMarker() }
          <span style={hintStyle} className="f4BranchLocatorHintText">
            { hintText}
          </span>
        </div>
      </div>
    );
  }
}

F4LocationMarker.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconColorActive: PropTypes.string,
  isSelected: PropTypes.bool,
  hintText: PropTypes.string
};

F4LocationMarker.defaultProps = {
  icon: "map-marker",
  iconColor: "#00b0ff",
  iconColorActive: "#13304d",
  isSelected: false,
  hintText: 'CHANGE ME'
}
