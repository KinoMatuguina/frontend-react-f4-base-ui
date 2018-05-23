import React, {Component} from 'react';  import PropTypes from 'prop-types'; 

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import FontAwesome from 'react-fontawesome';

class F4Toolbar extends Component {
  constructor(props) {
    super(props);

    this.buildMenus = this.buildMenus.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      scrollClassName: ""
    }
  }
  handleScroll(event) {

    const { withScrollEffect, scrollEffectClassName, scrollLimit } = this.props;

    if (withScrollEffect) {
      let scrollTop = event.target.scrollTop;

      if (scrollTop > scrollLimit) {

        if (this.state.scrollClassName !== scrollEffectClassName) {
          this.setState({
            scrollClassName: scrollEffectClassName
          });
        }
      } else {
        if (this.state.scrollClassName !== "") {
          this.setState({
            scrollClassName: ""
          });
        }
      }
    }

  }
  componentDidMount() {
    const { withScrollEffect } = this.props;

    if (withScrollEffect) {
      document.querySelector('#root').addEventListener('scroll', this.handleScroll);
    }

  }

  componentWillUnmount() {
    const { withScrollEffect } = this.props;

    if (withScrollEffect) {
      document.querySelector('#root').removeEventListener('scroll', this.handleScroll);
    }
  }
  buildMenus() {

    let menus = [];
    const { children } = this.props;

    if (children && children.map && children.length > 1) {
      menus = children.map((child) => {
        return (
          <MenuItem key={child.props.text} onClick={child.props.onClick}>
            { child.props.text }
          </MenuItem>
        );
      });
    } else if(children && typeof children !== 'undefined') {
      menus = (
        <MenuItem onClick={children.props.onClick}>
          { children.props.text }
        </MenuItem>
      )
    }

    return menus;
  }
  render() {
    const { children, title, textSize, icon, iconColor, maxActionsNum, infoText } = this.props; // eslint-disable-line no-shadow

    const titleStyle = {
      fontSize: `${textSize}px`
    };

    let hideWithIcons = false;
    let renderChildren = [];
    let tooltip = <Tooltip id={title}>{ title }</Tooltip>;

    if (children && children.map) {

      renderChildren = children.slice();
      renderChildren.reverse();
      if (children.length > maxActionsNum) {
        hideWithIcons =true;
      }

    } else {
      renderChildren = children;
    }

    return (
      <Row>
        {/* Title */}
        <Col xs={10} sm={10} md={10} lg={10}>
          <div className={`f4ToolbarTitle f4ToolbarFixedHeight ${this.state.scrollClassName}`}>
            { icon && <FontAwesome name={icon}/> }
            <span className="f4ToolbarTitleText" style={titleStyle}>{ title }</span>
          </div>
        </Col>
        {/* Icons with text */}
        <Col xsHidden smHidden md={2} lg={2} mdHidden={hideWithIcons}>
          <div className="f4ToolbarActions f4ToolbarFixedHeight">
            { renderChildren }
          </div>
        </Col>
        {/* show more icon */}
        <Col xs={2} sm={2} md={2} mdHidden={!hideWithIcons} lgHidden>
          <div className="f4ToolbarActions f4ToolbarFixedHeight">
            <Dropdown className="f4ToolbarActionsMore" bsStyle="default" id="dropdown-no-caret" pullRight>
              <Dropdown.Toggle noCaret>
                <FontAwesome name="ellipsis-v"/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                { this.buildMenus() }
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        {
          infoText &&
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="f4ToolbarActionsInfoText">
              <p>{ infoText }</p>
            </div>
          </Col>
        }
      </Row>
    )
  }
}

F4Toolbar.propTypes = {
  title: PropTypes.string,
  textSize: PropTypes.number,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  maxActionsNum: PropTypes.number,
  infoText: PropTypes.string,
  withScrollEffect: PropTypes.bool,
  scrollEffectClassName: PropTypes.string,
  scrollLimit: PropTypes.number
};

F4Toolbar.defaultProps = {
  textSize: 18,
  maxActionsNum: 3,
  withScrollEffect: false,
  scrollLimit: 132
}

export default F4Toolbar;
