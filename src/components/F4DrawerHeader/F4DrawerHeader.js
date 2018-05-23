/**
* F4DrawerHeader
*/

import React, {Component} from 'react';  import PropTypes from 'prop-types'; 
import Image from 'react-bootstrap/lib/Image';
import moment from 'moment';

import StringUtils from '../StringUtils';
import F4LetterAvatar from '../F4LetterAvatar/F4LetterAvatar';

export default class F4DrawerHeader extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const { user } = this.props;

    let displayName = "";
    let avatarImgSrc = "";

    if (typeof user !== 'undefined' && user) {
      if (typeof user.name !== 'undefind' && user.name) {
        displayName = user.name;
      } else if (typeof user.username !== 'undefined' && user.username) {
        displayName = user.username;
      }

      if (typeof user.avatarImgUrl !== 'undefined' && user.avatarImgUrl) {
        avatarImgSrc = user.avatarImgUrl;
      }
    }

    let letters = StringUtils.getLettersForAvatar(displayName);
    let avatar = (
      <F4LetterAvatar width={60} height={60} fontSize={32} text={letters}/>
    );

    if (avatarImgSrc !== "") {
      avatar = (
        <Image src={avatarImgSrc} circle/>
      )
    }


    return (
      <div className="f4DrawerHeader">
        <div className="f4DrawerHeaderAvatarContainer">
          <div className="f4DrawerHeaderAvatar">
            { avatar }
          </div>
          <div className="f4DrawerHeaderText">
            <strong>Hello</strong><br/>{ displayName }
          </div>
        </div>
        <br/>
        <div>
          <div className="f4DrawerHeaderLoginInfo">
            <div>Your last login was on <br/>
              <span>{ user && moment(user.lastLoginDate).format("MMMM DD, YYYY, hh:mm A") }</span>
            </div>
            <br/>
            <div><span className="text-info">You have { user && user.invalidLogins } unsuccessful logins.</span></div>
          </div>
        </div>
      </div>
    );
  }
}

F4DrawerHeader.propTypes = {
  user: PropTypes.object
}
