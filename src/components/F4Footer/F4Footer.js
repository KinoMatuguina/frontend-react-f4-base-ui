import React from 'react';

export default class F4Footer extends React.Component {
  render() {
    return (
      <div className="f4Footer">
        <div className="f4FooterLinks">
          <ul className="f4FooterUL nav nav-pills">
            <li role="presentation"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">About Us</a></li>
            <li role="presentation"><a href="#">Products</a></li>
            <li role="presentation"><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="f4Copyrights">
          <p>Solutions Exchange Inc. (c) 2016 All Rights Reserved</p>
        </div>
      </div>
    );
  }
}
