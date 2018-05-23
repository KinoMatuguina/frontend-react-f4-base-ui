/**
 * F4CorpInfo.js
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import { BaseContext } from "frontend-react-f4-base-commons";
import { Panel, Label } from "react-bootstrap";

const { connect } = BaseContext;

class F4CorpInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-xs-5">
        <Panel className="corpInfo">
          <div className="col-xs-offset-1">
            <Panel.Body>
              <img src={this.props.corpImage} width="50%" height="50px" />

              <div>
                <h4>{this.props.corpName}</h4>
              </div>
              <div>
                <h4>
                  <i className="fa fa-map-marker">{this.props.corpLocation}</i>
                </h4>
              </div>
            </Panel.Body>
          </div>
        </Panel>
      </div>
    );
  }
}

F4CorpInfo.propTypes = {
  // props definition
  corpName: PropTypes.string.isRequired,
  corpLocation: PropTypes.string.isRequired,
  corpImage: PropTypes.string.isRequired
};

F4CorpInfo.defaultProps = {
  // default props
};

export default F4CorpInfo;
