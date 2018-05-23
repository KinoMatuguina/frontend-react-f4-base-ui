import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import _ from 'underscore';

import F4Footer from '../../components/F4Footer/F4Footer';

export default class F4AbsoluteCenterContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let footer = [];
    let otherChildren = [];

    const { children } = this.props;

    if (typeof children !== 'undefined' && children) {
      if (children.map && children.length > 0) {
        _.map(this.props.children, (child) => {
          if(child.type === F4Footer) {
            footer.push(child);
          } else {
            otherChildren.push(child);
          }
        });
      } else {
        if(children.type === F4Footer) {
          footer.push(children);
        } else {
          otherChildren.push(children);
        }
      }
    }

    return (
      <span>
        <div className="container">
          <div className="f4AbsoluteCenter">
            { otherChildren }
          </div>
          <div id="push"></div>
        </div>
        { footer }
      </span>
    );
  }
}
