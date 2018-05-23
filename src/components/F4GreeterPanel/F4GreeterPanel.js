/**
* F4GreeterPanel
*/


import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

export default class F4GreeterPanel extends Component {
  render() {
    let greeting = "";
    let icon;
    const now = new Date();
    const hours = now.getHours();

    if ( hours < 12) {
      greeting = "Good morning";
      icon = "horizon-alt";
    }
    if (hours > 12) {

      if (hours < 18) {
        greeting = "Good afternoon";
        icon = "day-cloudy";
      } else {
        greeting = "Good evening";
        icon = "night-clear";
      }
    }
    if (hours === 12) {
      greeting = "Now is a good time for lunch";
      icon = "day-sunny";
    }

    return (
      <div className="f4Card f4GreeterPanel">
        <div className="f4GreeterPanelIcon">
          <i className={`wi wi-${icon}`}></i>
        </div>
        <div className="f4GreeterPanelText">
          { `${greeting} ${this.props.name}!` }
        </div>
    </div>
    );
  }
}
