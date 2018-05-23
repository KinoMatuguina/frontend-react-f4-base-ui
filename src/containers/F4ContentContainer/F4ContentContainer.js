import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import Grid from 'react-bootstrap/lib/Grid';

export default class F4ContentContainer extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <Grid fluid>
        { this.props.children }
      </Grid>
    );
  }
}
