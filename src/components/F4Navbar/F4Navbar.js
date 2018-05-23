/**
* F4Navbar
*/

import React, {Component} from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import { IndexLink } from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Image from 'react-bootstrap/lib/Image';
import FontAwesome from 'react-fontawesome';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import F4NavbarActionElement from '../F4NavbarActionElement/F4NavbarActionElement';

@observer
export default class F4Navbar extends Component {
  constructor(props) {
    super(props);
    this.buildMenus = this.buildMenus.bind(this);
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
    const { children, appContext, onBurgerIconClick, uiStore, hasBurgerIcon } = this.props; // eslint-disable-line no-shadow

    let actionChildren;
    let navActions = null;

    if (uiStore && uiStore.breakpoints && uiStore.breakpoints.xs) {

      navActions = (
        <div className="f4NavbarActionsMore">
          <div>
            <Dropdown className="f4ToolbarActionsMore" bsStyle="default" id="dropdown-navbar-no-caret" pullRight>
              <Dropdown.Toggle noCaret>
                <FontAwesome name="ellipsis-v"/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                { this.buildMenus() }
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      );

    } else {
      if (typeof children !== 'undefined') {
        if (children && children.map) {F4Navbar
          actionChildren = children.map((child) => {
            if (child.type && child.type === F4NavbarActionElement) {
              return child;
            }
          });
        } else {
          if (children.type && children.type === F4NavbarActionElement) {
            navActions = (
              <Nav className="f4NavbarActions" pullRight>
                {children}
              </Nav>
            );
          }
        }

        if (actionChildren && actionChildren.length > 1) {
          navActions = (
            <Nav className="f4NavbarActions" pullRight>
              {actionChildren}
            </Nav>
          );
        }
      }

    }

    return (
      <Navbar className="f4Navbar" fixedTop fluid>
        <Navbar.Header className="f4NavbarHeader">
          <Navbar.Brand className="f4NavbarBrand">
            { hasBurgerIcon &&
              <span onClick={onBurgerIconClick}>
                <FontAwesome
                  name='bars'
                  style={{color: 'white', marginLeft: '20px', cursor: 'pointer'}}
                />
              </span>
            }
            <IndexLink to={this.props.homeUrl} style={{ marginLeft: '20px' }}>
              <Image className="f4NavbarLogo" src={"/" + appContext + "/images/base_logo.png"}/>
            </IndexLink>
          </Navbar.Brand>
        </Navbar.Header>
          { navActions }
      </Navbar>
    );
  }
}

F4Navbar.propTypes = {
  appContext: PropTypes.string.isRequired,
  onBurgerIconClick: PropTypes.func,
  uiStore: PropTypes.any.isRequired,
  hasBurgerIcon: PropTypes.bool,
  homeUrl: PropTypes.string
  
}

F4Navbar.defaultProps = {
  hasBurgerIcon: true,
  homeUrl: '/'
}
