/**
* F4BaseContainer
*/

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
    const { appContext, uiStore, children } = this.props;

    return (
      <div>
        <F4Navbar hasBurgerIcon={false} appContext={appContext} uiStore={uiStore}/>
        <div className="f4BaseContainer">
          { children }
        </div>
      </div>
    );
  }
}
