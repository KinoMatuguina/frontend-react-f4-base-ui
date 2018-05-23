import React, {Component} from 'react';  import PropTypes from 'prop-types'; 

import F4Toolbar from '../F4Toolbar/F4Toolbar';
import _u from 'underscore';

export default class F4Card extends Component {
  static propTypes = {
    children: PropTypes.any
  }
  render() {
    const { children } = this.props; // eslint-disable-line no-shadow

    const headerChildren = [];
    const contentChildren = [];
    const footerChildren = [];

    if (children && children.length > 1) {
      _u.each(children, (child) => {
        if (child.type === F4Toolbar) {
          headerChildren.push(child);
        } else {
          contentChildren.push(child);
        }
      });
    } else if (children && !(children instanceof Array)) {
      if (children.type === F4Toolbar) {
        headerChildren.push(children);
      } else {
        contentChildren.push(children);
      }
    }

    return (
      <div className='f4Card panel'>
        <div className='f4CardHeading panel-heading'>
          { headerChildren }
        </div>
        <div className='f4CardBody panel-body'>
          { contentChildren }
        </div>
        {/* <div className={styles.f4CardFooter + ' panel-footer'}>
          { footerChildren }
        </div>
        */}
      </div>
    );
  }
}
