/**
* F4RadialPicker
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { Motion, spring } from 'react-motion';
import { observer } from 'mobx-react';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

@observer
class ChildOption extends Component {
  render() {

    const { title, onClick, overrideStyle } = this.props;

    return (
      <span onClick={onClick} className="f4RadialPickerButton child f4RadialOption" title={title} style={overrideStyle}>
        { title }
      </span>
    )
  }
}

@observer
class F4RadialPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "",
        isOpen: false
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.closePicker = this.closePicker.bind(this);
    this.handleOnOptionClick = this.handleOnOptionClick.bind(this);
  }
  componentWillReceiveProps(props) {

    if (props && props.value && props.options && props.options.map && props.options.length > 0) {

      let label = "";
      props.options.forEach((option) => {
        if (option.value === props.value) {
          label = option.label;
          return;
        }
      });

      this.setState({
        selected: label
      });
    }
  }
  handleOnOptionClick(value, label) {

    const { onChange, disabled, name } = this.props;

    if (!disabled && typeof onChange !== 'undefined') {
      console.log(`VALUE ${value}`);
      onChange(name, value);
    }

    this.setState({
      selected: label,
      isOpen: false
    });
  }
  handleOnClick(event) {

    event.preventDefault();
    let currIsOpen = this.state.isOpen;
    currIsOpen = !currIsOpen;

    this.setState({
      isOpen: currIsOpen
    });

  }
  closePicker() {

    this.setState({
      isOpen: false
    });
  }
  render() {

    const { isOpen, selected } = this.state;
    const { placeholder, options } = this.props;

    let parentContent = (
      <span className="fa fa-bars f4RadialTrigger" style={{ color: 'white' }}></span>
    );

    if (typeof placeholder !== 'undefined' && placeholder != "") {
      parentContent = placeholder;
    }

    if (typeof selected !== 'undefined' && selected !== "") {
      parentContent = selected;
    }

    let l = options.length;
    let optionNodes = options.map((option, i) => {
      let style = {
        left: (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%",
        top: (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%"
      }

      return (
        <ChildOption title={option.label} onClick={this.handleOnOptionClick.bind(null, option.value, option.label)} key={`radial-${option.label}`} overrideStyle={style} />
      );
    })

    return (
      <div className="f4RadialPicker">
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(isOpen ? 1 : 0, { stiffness: 300 }) }}>
          { value =>
            <div className="f4RadialPickerContent" style={{ opacity: value.x, transform: `scale(${value.x}) rotateZ(${value.x*360}deg)` }}>
              { optionNodes }
            </div>
          }
        </Motion>
        <span onClick={this.handleOnClick} className="f4RadialPickerButton parent f4RadialTrigger">{ parentContent }</span>
      </div>
    );
  }
}

F4RadialPicker.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

F4RadialPicker.defaultProps = {
  disabled: false
};


export default asF4FormElement(F4RadialPicker);
