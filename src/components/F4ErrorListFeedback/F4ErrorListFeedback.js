import React, {Component} from 'react';  import PropTypes from 'prop-types'; 
import Alert from 'react-bootstrap/lib/Alert';
import _ from 'underscore';
import _l from 'lodash';

import { Motion, spring } from 'react-motion';


const ErrorMessageNode = (props) => (
  <li>{ props.message }</li>
)

export default class F4ErrorListFeedback extends Component {
  static propTypes = {
    errorArray: PropTypes.any
  }
  static defaultProps = {
    errorArray: []
  }
  constructor(props) {
    super(props);

    this.renderMessages = this.renderMessages.bind(this);
    this.renderNone = this.renderNone.bind(this);
  }

  renderMessages() {
    const { errorArray } = this.props;

    const messageNodes = _.map(errorArray, (msg, index) => {
      return (
        <ErrorMessageNode key={_l.uniqueId('f4ErrorListERM-')} message={msg}/>
      );
    });

    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1) }}>
      {value =>
        <Alert bsStyle={'danger'} style={{ opacity: value.x }}>
          <ul key={_l.uniqueId('f4ErrorList-')} style={{ padding: '0px', paddingLeft: '15px' }}>
          { messageNodes }
          </ul>
        </Alert>
      }
      </Motion>
    );
  }
  renderNone() {
    return (
      <span style={{ display: 'none' }}></span>
    )
  }
  render() {
    const { errorArray } = this.props;

    if (errorArray && errorArray.length > 0) {
      return this.renderMessages();
    }

    return this.renderNone();
  }
}
