import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import F4Card from '../F4Card/F4Card';
import F4ErrorListFeedback from '../F4ErrorListFeedback/F4ErrorListFeedback';
import F4Feedback from '../F4Feedback/F4Feedback';
import F4Toolbar from '../F4Toolbar/F4Toolbar';
import F4ToolbarElement from '../F4ToolbarElement/F4ToolbarElement';

import _ from 'underscore';

@observer
export default class F4AddEditView extends Component {
  constructor(props) {
    super(props);

    this.handleClearClick = this.handleClearClick.bind(this);
  }
  handleClearClick() {

    const { onClearClick } = this.props;

    if (typeof onClearClick !== 'undefined') {
        onClearClick();
    }

  }
  render() {

    const { title, icon, errorMessages, successMessage, children, xs, md, onClearClick } = this.props;

    return (
      <Col xs={xs} md={md}>
        { (successMessage && successMessage !== "") && <F4Feedback type="success">{ successMessage }</F4Feedback> }
        <F4ErrorListFeedback errorArray={errorMessages} />
        <F4Card>
          <F4Toolbar title={title} textSize={15} icon={icon}>
            {
              (typeof onClearClick !== 'undefined') &&
              <F4ToolbarElement icon={"eraser"} text={"Clear"} onClick={this.handleClearClick} />
            }
          </F4Toolbar>

          { children }

        </F4Card>
      </Col>
    );
  }
}


F4AddEditView.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  errorMessages: PropTypes.any,
  isLoading: PropTypes.bool,
  xs: PropTypes.number,
  md: PropTypes.number,
  onClearClick: PropTypes.func
};

F4AddEditView.defaultProps = {
  icon: "cog",
  title: "NEW [CHANGE ME]",
  errorMessages: [],
  xs: 12,
  md: 12
};
