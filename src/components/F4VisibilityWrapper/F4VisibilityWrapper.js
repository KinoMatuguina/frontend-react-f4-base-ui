import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';


@observer
export default class F4VisibilityWrapper extends Component {
  renderNone() {
    return (
      <span style={{ display: 'none' }}></span>
    )
  }
  render(){

    let isVisible = this.props.isVisible;
    if(typeof isVisible === 'undefined') {
      isVisible = true;
    }

    if (isVisible) {
      return (
        <span className="f4VisibilityWrapper">
          { this.props.children }
        </span>
      )
    } else {
      return this.renderNone();
    }
  }
}
