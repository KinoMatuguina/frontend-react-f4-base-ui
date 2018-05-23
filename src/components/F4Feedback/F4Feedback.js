import React, {Component} from 'react';  import PropTypes from 'prop-types'; 
import Alert from 'react-bootstrap/lib/Alert';
import { Motion, spring } from 'react-motion';



export default class F4Feedback extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.any
  }
  render() {
    const { type } = this.props; // eslint-disable-line no-shadow
    return (
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(1) }}>
        {value =>
          <Alert bsStyle={type ? type : 'info'} style={{ opacity: value.x }}>
            {this.props.children}
          </Alert>
        }
      </Motion>
    );
  }
}
