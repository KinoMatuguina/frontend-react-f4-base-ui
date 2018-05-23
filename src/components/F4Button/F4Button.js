import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import Button from 'react-bootstrap/lib/Button';
import FontAwesome from 'react-fontawesome';

export default class F4Button extends Component {
  render() {

    const {
      pullRight,
      pullLeft,
      onClick,
      size,
      block,
      halfBlock,
      disabled,
      style,
      isLoading,
      children,
      loadingText,
      type
    } = this.props;

    let floatStyle = {};
    let overrideStyle = {};
    if(pullRight) {
      floatStyle = {
        float: 'right !important'
      }
    } else

    if( !pullRight && pullLeft) {
      floatStyle = {
        float: 'left !important'
      }
    }

    if (halfBlock) {
      overrideStyle.width = '50%';
    }

    if (block) {
      overrideStyle.width = '100%';
    }


    return (
      <Button
        onClick={onClick}
        bsSize={size}
        bsClass={`f4Button ${style} btn`}
        bsStyle={style}
        disabled={disabled || isLoading}
        type={type}
        style={{...floatStyle, ...overrideStyle}}>
        {
          isLoading &&
          <span>
            <span style={{ marginRight: '15px' }}>
              <FontAwesome name="spinner" style={{ color: 'white' }} spin />
            </span>
            { loadingText }
          </span>
        }
        { !isLoading && children }
      </Button>
    );
  }
}

F4Button.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
  type: PropTypes.string,
  block: PropTypes.bool,
  halfBlock: PropTypes.bool,
  onClick: PropTypes.func,
  pullRight: PropTypes.bool,
  pullLeft: PropTypes.bool,
  disabled: PropTypes.bool,
  overrideStyle: PropTypes.any,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string
};
F4Button.defaultProps = {
  size: "sm",
  style: "default",
  block: false,
  halfBlock: false,
  pullRight: false,
  pullLeft: false,
  overrideStyle: {},
  isLoading: false,
  loadingText: "PLEASE WAIT..."
}
