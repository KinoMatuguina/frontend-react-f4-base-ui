import React, {Component} from 'react';  import PropTypes from 'prop-types'; 
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import _u from 'underscore';

import F4Spinner from '../F4Spinner/F4Spinner';

export default class F4StackMenu extends Component {
  constructor(props) {
    super(props);
    this.buildMenu = this.buildMenu.bind(this);
    this.buildSubmenuParent = this.buildSubmenuParent.bind(this);
    this.buildSubmenuChildren = this.buildSubmenuChildren.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }
  handleSelect(info) {
    if (info.key.startsWith("Logout")) {
      this.props.logoutFunc();
      return;
    }

    const menuUrl = info.key.substr(info.key.indexOf(':') + 1);
    if(menuUrl) {
      window.location.href = menuUrl;
    }
  }
  buildMenu() {
    const { menuData, isFetching } = this.props;

    if (menuData && menuData.length > 0) {
      const ret = _u.map(menuData, (menu, index) => {
        if (menu.children && menu.children.length > 0) {
          return this.buildSubmenuParent(index, menu);
        }

        let className = '';

        if (menu.isActive) {
          className = 'rc-menu-item-selected';
        }

        return (
          <MenuItem className={className} key={menu.name + ':' + menu.url}>{menu.name}</MenuItem>
        );
      });

      return ret;
    }

    return null;
  }
  buildSubmenuParent(parentKey, parent) {
    const title = this.buildTitle(parent.name);
    return (
      <SubMenu title={title} key={parentKey}>
        { this.buildSubmenuChildren(parentKey, parent.children) }
      </SubMenu>
    );
  }
  buildSubmenuChildren(parentKey, children) {
    const ret = _u.map(children, (child, index) => {
      if (child.children && child.children.length > 0) {
        return this.buildSubmenuParent(index, child);
      }
      return (
        <MenuItem key={child.name + ':' + child.url}>{child.name}</MenuItem>
      );
    });
    return ret;
  }
  buildTitle(name) {
    return (
      <span>{name}<i className="fa fa-caret-right fa-lg pull-right"></i></span>
    );
  }
  renderMenu() {
    return (
      <Menu
        onSelect={this.handleSelect}
        className="col-xs-6 col-sm-3"
        multiple
      >
        { this.buildMenu() }
      </Menu>
    );
  }
  renderSpinner() {
    return (
      <F4Spinner />
    );
  }
  render() {
    const { isFetching } = this.props;

    return (
      <span>
        { isFetching ?
          this.renderSpinner() :
          this.renderMenu()
        }
      </span>
    );
  }
}
