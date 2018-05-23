import React, {Component} from 'react';  import PropTypes from 'prop-types'; 
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import NavItem from 'react-bootstrap/lib/NavItem';

import FontAwesome from 'react-fontawesome';

export default class F4NavbarActionElement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { icon, onClick } = this.props;
    return (
      <NavItem onSelect={onClick}>
        <FontAwesome name={icon} />
      </NavItem>
    );
  }
}


F4NavbarActionElement.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  text: PropTypes.string
}
