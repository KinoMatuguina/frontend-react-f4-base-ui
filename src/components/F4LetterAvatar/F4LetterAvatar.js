/**
* F4LetterAvatar
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 

export default class F4LetterAvatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { backgroundColor, width, height, textColor, text, fontSize } = this.props;

    let paddingLeft = `${width/5}px`;

    if (text.length === 1) {
      paddingLeft = `${width/3}px`;
    }

    return (
      <div
        className="f4LetterAvatar"
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          color: textColor,
          borderRadius: '50%',
          paddingTop: `${height/5}px`,
          paddingLeft: paddingLeft
        }}
      >
        <span style={{ fontSize: fontSize }}>{ text.toUpperCase() }</span>
      </div>
    );
  }
}

F4LetterAvatar.propTypes = {
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  textColor: PropTypes.string,
  fontSize: PropTypes.number
};

F4LetterAvatar.defaultProps = {
  backgroundColor: "#2d71b3",
  width: 60,
  height: 60,
  textColor: 'white',
  fontSize: 28
}
