/**
* F4AccordionMenu
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import Collapse from 'react-collapse';
import FontAwesome from 'react-fontawesome';

import * as UUIDUtil from '../UUIDUtil';
import F4Spinner from '../F4Spinner/F4Spinner';

class F4Accordion extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    let icon = "info-circle";
    let caretIcon = "chevron-right";

    if (typeof this.props.icon !== 'undefined' && this.props.icon && this.props.icon !== "") {
      icon = this.props.icon
    }

    if(this.props.isOpen) {
      caretIcon = "chevron-down";
    }

    return (
      <div className="f4AccordionItem">
          <div onClick={this.props.onClick} className="f4AccordionToggle">
            <div className="f4AccordionToggleContent">
              <div className="f4AccordionToggleContentIcon">
                <FontAwesome name={icon} size="lg"/>
              </div>
              <div className="f4AccordionToggleContentText">
                { this.props.title }
              </div>
              { this.props.hasChildren &&
                <div className="f4AccordionToggleContentCaret">
                  <FontAwesome name={caretIcon}/>
                </div>
              }
            </div>
          </div>
          { this.props.hasChildren &&
            <Collapse isOpened={this.props.isOpen} springConfig={{ stiffness: 170, damping: 26 }}>
              { this.props.children }
            </Collapse>
          }
      </div>
    )
  }
}

@observer
export default class F4AccordionMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: []
    }

    this.handleOnOpenClick = this.handleOnOpenClick.bind(this);
    this.buildMenu = this.buildMenu.bind(this);
    this.handleUrlClick = this.handleUrlClick.bind(this);
  }
  handleOnOpenClick(i) {

    console.log(this.state.open);

    let newOpen = this.state.open.slice();
    let index = newOpen.indexOf(i);

    if (index > -1) {

      if (newOpen.length === 1) {
        newOpen = [];
      } else {
        newOpen.splice(index, 1);
      }
    } else {
      newOpen = [i];
    }


    this.setState({
      open: newOpen
    });

  }
  handleUrlClick(url) {

    if (typeof url !== 'undefined' && url && url !== "") {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }
  buildMenu() {

    const { menuData } = this.props;
    const { open } = this.state;

    if (menuData && menuData.map && menuData.length > 0) {
      return menuData.map((menu) => {

        let onClick = this.handleOnOpenClick.bind(null, menu.id);
        let hasChildren = true;
        if (typeof menu.children === 'undefined' || !menu.children || menu.children.length === 0) {
          onClick = () => { window.location.href = menu.url}
          hasChildren = false;
        }

        return (
          <F4Accordion key={menu.id} title={menu.name} icon={menu.icon} isOpen={open.indexOf(menu.id) > -1} onClick={onClick} hasChildren={hasChildren}>
            { menu.children && menu.children.length > 0 &&
              <div onClick={this.handleUrlClick.bind(null, menu.children[0].url)}style={{ padding: '15px 35px 15px'}} className="f4AccordionMenuChild">
                  {`${menu.children[0].name}`}
              </div>
            }
          </F4Accordion>
        )
      })

    } else {
      return [];
    }

  }
  renderLoader() {
    return (
      <div style={{ padding: '15px'}}>
        <F4Spinner color="white" />
      </div>
    );
  }
  render() {

    const { items, open } = this.state;
    const { menuData, isFetching } = this.props;

    return (
      <div className="f4AccordionMenu">
        {
          (isFetching) ? this.renderLoader() : this.buildMenu()
        }
      </div>
    );
  }
}
