/**
* F4Bookmark.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import FontIcon from 'react-fontawesome';

class F4Bookmark extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    const { _onChange, bookmarkStore } = this.props;
    bookmarkStore.isChecked(!bookmarkStore.checkStatus);
    _onChange();
  }

  render() {
    const { 
      AddBookmark, 
      RemoveBookmark, 
      iconFill, 
      iconOutline, 
      iconFillColor, 
      iconOutlineColor, 
      status 
    } = this.props;

    console.log(status);

    if (status === false) {
      return (
        <Col lg={12} md={12} sm={12} xs={12} style = {{ marginTop: '30px' }}>
        <div className = "changeIcon">
          <FontIcon
            style = {iconFillColor}
            className = "iconStyle iconStar"
            name = {iconFill} 
            onClick={this.onClick} />
          <FontIcon
            style = {iconOutlineColor}
            className = "iconStyle iconStarO"
            name = {iconOutline} 
            onClick={this.onClick} />
          <label className = "bookmarkLabel" >
            <input type = "checkbox" className = "customCheckBox"
              onClick={this.onClick}>
            </input>
            { status == true ? (RemoveBookmark) : (AddBookmark) }
          </label>
        </div>
      </Col>
      );
    }
    
    else {
      return(
        <Col lg={12} md={12} sm={12} xs={12} style = {{ marginTop: '30px' }}>
        <div className = {"changeIcon " + status == true ? (iconFill) : 
          (iconOutline) }>
          <FontIcon
            style = {iconFillColor}
            className = {"iconStyle"}
            name = {iconFill} 
            onClick={this.onClick} />
          <label className = "bookmarkLabel" >
            <input type = "checkbox" className = "customCheckBox" onClick = {this.onClick}></input>
            { status == true ? (RemoveBookmark) : (AddBookmark) }
          </label>
        </div>
      </Col>
      );
    }
  }
}

F4Bookmark.propTypes = {
  _onChange: PropTypes.func,
  iconStyle: PropTypes.object,
  AddBookmark: PropTypes.string,
  RemoveBookmark: PropTypes.string,
  iconFill: PropTypes.string,
  iconOutline: PropTypes.string,
  iconFillColor: PropTypes.object,
  iconOutlineColor: PropTypes.object,
  status: PropTypes.bool.isRequired,
  bookmarkStore: PropTypes.oneOfType([PropTypes.func,PropTypes.object]).isRequired,
}

F4Bookmark.defaultProps = {
  AddBookmark: "Add Account Enrollment from Bookmarks",
  RemoveBookmark: "Remove Account Enrollment from Bookmarks",
  iconFill: "star",
  iconFillColor: {color: "#CE9732"},
  iconOutline: "star-o",
  iconOutlineColor: {color:"#000000"},
  status: false,
}

export default F4Bookmark;