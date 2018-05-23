/**
* F4Drawer
*/

import React, {Component} from 'react';  import PropTypes from 'prop-types'; 

import { Scrollbars } from 'react-custom-scrollbars';

import F4DrawerHeader from '../F4DrawerHeader/F4DrawerHeader';
// import F4AccordionMenu from '../F4AccordionMenu/F4AccordionMenu';
import F4Menu from '../F4Menu/F4Menu';

export default class F4Drawer extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { user, isFetching, menuData, logoutFunc, overrideStyle } = this.props;

    return (
      <div className='f4Drawer' style={overrideStyle}>
        <Scrollbars style={{ width: 220, height: '100vh'}}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          universal={true}
        >
        <div style={{ width: 220, marginBottom: '100px'}}>
          <F4DrawerHeader user={user} />
          {/* <F4AccordionMenu isFetching={isFetching} menuData={menuData}/> */}
	       <F4Menu menuData={menuData}/>        
	</div>
      </Scrollbars>
      </div>
    );
  }
}

F4Drawer.propTypes = {
  user: PropTypes.object,
  isFetching: PropTypes.bool,
  logoutFunc: PropTypes.func,
  overrideStyle: PropTypes.object
};

F4Drawer.defaultProps = {
  overrideStyle: {}
};
