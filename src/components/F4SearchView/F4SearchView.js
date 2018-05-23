/**
* F4SearchView
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import _ from 'underscore';

import F4Card from '../F4Card/F4Card';
import F4Toolbar from '../F4Toolbar/F4Toolbar';
import F4ToolbarElement from '../F4ToolbarElement/F4ToolbarElement';
import F4Spinner from '../F4Spinner/F4Spinner';


class ResultView extends Component {
  render() {
    return (
      <F4Card>
        <F4Toolbar title={this.props.title} icon={this.props.icon}/>

        { !this.props.isLoading && this.props.children }
        { this.props.isLoading && <F4Spinner color={"#002242"}/> }

      </F4Card>
    );
  }
}

class FilterView extends Component {
  render() {
    return (
      <F4Card>
        <F4Toolbar smallTitle={this.props.title} icon={this.props.icon}/>
        { this.props.children }
      </F4Card>
    );
  }
}

@observer
class F4SearchView extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { isLoading, children } = this.props;

    let resultViewChildren = [];
    let filterViewChildren = [];

    React.Children.forEach(children, (child) => {
      if (child.type === ResultView) {
        resultViewChildren.push(child);
      } else if (child.type === FilterView) {
        filterViewChildren.push(child);
      }
    });


    return (
      <Row>
        <Col xs={6} md={8}>
          { resultViewChildren }
        </Col>
        <Col xs={6} md={4}>
          { filterViewChildren }
        </Col>
      </Row>
    );
  }
}

F4SearchView.ResultView = ResultView;
F4SearchView.FilterView = FilterView;

export default F4SearchView;
