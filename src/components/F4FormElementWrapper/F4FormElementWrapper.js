/**
* F4FormElementWrapper
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class F4FormElementWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <span>
        { children }
      </span>
    );
  }
}


export default asF4FormElement(F4FormElementWrapper);
