import React, {Component} from 'react';  import PropTypes from 'prop-types'; 
import NavItem from 'react-bootstrap/lib/NavItem';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import FontAwesome from 'react-fontawesome';

import * as UUIDUtil from '../UUIDUtil';

export default class F4ToolbarElement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { icon, text, iconSize, onClick } = this.props;

    let tooltip = <Tooltip id={`tooltip-${UUIDUtil.get()}`}>{ text }</Tooltip>;

    const overrideStyle = {
      fontSize: `${iconSize}px !important`
    };

    return (
      <div className="f4ToolbarElementContainer">
        <span className="f4ToolbarElement">
          <OverlayTrigger
            overlay={ tooltip }
            placement="bottom"
          >
            <button style={overrideStyle} className="btn btn-link" onClick={onClick}>
              <FontAwesome name={icon}/>
            </button>
          </OverlayTrigger>
        </span>
      </div>
    );
  }
}


F4ToolbarElement.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconSize: PropTypes.number
};

F4ToolbarElement.defaultProps = {
  iconSize: 15
}
