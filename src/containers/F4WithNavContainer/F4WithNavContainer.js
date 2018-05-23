import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';

import {
 F4NavbarActionElement,
 F4Navbar,
 F4Drawer
} from '../../components';


@observer
export default class F4WithNavContainer extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { appContext, user, menuData, isFetching, logout, handleBurgerIconClick, isDrawerOpen, screenWidth, uiStore, homeUrl } = this.props;

    return (
      <div>
        <F4Navbar appContext={appContext} onBurgerIconClick={handleBurgerIconClick} uiStore={uiStore} homeUrl= {homeUrl}>
          <F4NavbarActionElement icon={"search"} text="Search" onClick={ ()=>{} }/>
          <F4NavbarActionElement icon={"th"} text="Quick Links" onClick={ ()=>{} }/>
          <F4NavbarActionElement icon={"envelope"} text="Messages" onClick={ ()=>{} }/>
          <F4NavbarActionElement icon={"bell"} text="Notifications" onClick={ ()=>{} }/>
          <F4NavbarActionElement icon={"sign-out"} text="Logout" onClick={logout}/>


        </F4Navbar>
        <div className="f4WithNavContainer">
          <F4Drawer logoutFunc={logout} menuData={menuData} isFetching={isFetching} user={user} overrideStyle={{
              left: (isDrawerOpen) ? 0 : -320,
              transition: 'all 0.3s ease'
            }}/>

          { uiStore && uiStore.breakpoints && !uiStore.breakpoints.xs &&
            <div className='f4Content pull-right' style={{
                width: (isDrawerOpen) ? (screenWidth-235) : screenWidth-10,
                transition: 'all 0.3s ease'
              }}>
              { this.props.children }
            </div>
          }
          { uiStore && uiStore.breakpoints && uiStore.breakpoints.xs &&
            <div className='f4Content pull-right'>
              { this.props.children }
            </div>
          }
        </div>
      </div>
    );
  }
}
