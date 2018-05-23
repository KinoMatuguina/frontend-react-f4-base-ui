/**
* F4SingleSelect.js
*/
 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import asF4FormElement from '../asF4FormElement/asF4FormElement';

import { observer } from 'mobx-react';
import { classNames } from 'classnames';

@observer
class F4SingleSelect extends Component {
  constructor(props) {
    super(props);
  }
 
  renderNone() {
    return(
      <span style={{ display: 'none'}}></span>
    )
  }

  render() {  
    const {
      style, onChange, options, 
      valueComponent, optionComponent, 
      value, placeholder, selectedValue, 
      disabled, className, labelKey, 
      valueKey, imageKey, subLabelKey,
      hasImage, noImagePaddingLeft, isVisible, searchable, clearable,
    name} = this.props;

    if(isVisible){
      return (
        <div style={style}>
          <Select
            closeOnSelect
            name={name}    
            value={value}
            options={options} 
            onChange={onChange} 
            valueKey={valueKey}
            labelKey={labelKey}
            searchable={searchable}
            placeholder={placeholder}
            clearable={clearable}
            valueComponent={valueComponent} 
            optionComponent={optionComponent}
            valueComponent={props => valueComponent({...props, labelKey, imageKey, subLabelKey, hasImage})} 
            optionComponent={props => optionComponent({...props, labelKey, imageKey, subLabelKey, hasImage, noImagePaddingLeft})}           
          />         
        </div>
      );
    }
    return this.renderNone();
  }
}

class OptionImage extends Component {
  constructor(props) {
    super(props);

    this._handleMouseDown   = this._handleMouseDown.bind(this);
    this._handleMouseEnter  = this._handleMouseEnter.bind(this);
    this._handleMouseMove   = this._handleMouseMove.bind(this);
  }

  _handleMouseDown (event) {
		event.preventDefault();
    event.stopPropagation();
   
		this.props.onSelect(this.props.option, event);
  }
  
	_handleMouseEnter (event) {
    
		this.props.onFocus(this.props.option, event);
	}
	_handleMouseMove (event) {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, event);
  }

  render() {  
    const { labelKey, imageKey, subLabelKey, hasImage,noImagePaddingLeft} = this.props;
    return (
      <div className={this.props.className} style={{wordBreak: 'break-all'}}
      onMouseDown={this._handleMouseDown}
      onMouseEnter={this._handleMouseEnter}
      onMouseMove={this._handleMouseMove}
    >
    {
      (hasImage) ? 
      <div>
        {
          (this.props.option[imageKey] === undefined || this.props.option[imageKey] === null || this.props.option[imageKey] === '') ?
            <div style={{paddingLeft:noImagePaddingLeft}}>
              <div className="multi-option-label"><strong>{this.props.option[labelKey]}</strong></div>
              <div className="multi-option-subLabel">{this.props.option[subLabelKey]}</div>
            </div>
            :
            <div>            
              {
                (this.props.option[subLabelKey] === undefined || this.props.option[subLabelKey] === null || this.props.option[subLabelKey] === '')  ?
                <div style={{display: 'table-row'}}>
                  <div style={{display: 'table-cell'}}><img className="multi-option-image" width="40px" src={this.props.option[imageKey]} style={{marginRight: '10px'}}/></div>
                  <div className="multi-option-label" style={{display: 'table-cell', verticalAlign:'middle'}}><strong>{this.props.option[labelKey]}</strong></div>             
                </div>
                  :
                <div style={{display: 'table-row'}}>
                  <div style={{display: 'table-cell'}}><img className="multi-option-image" width="40px" src={this.props.option[imageKey]} style={{marginRight: '10px'}}/></div>
                  <div style={{display: 'table-cell', verticalAlign:'middle'}}>
                    <div className="multi-option-label"><strong>{this.props.option[labelKey]}</strong></div>
                    <div className="multi-option-subLabel">{this.props.option[subLabelKey]}</div>
                  </div>
                </div>
              }               
            </div>
          }
      </div> 
      : // Else (!hasImage)
      <div>
        <div className="multi-option-label"><strong>{this.props.option[labelKey]}</strong></div>
        <div className="multi-option-subLabel">{this.props.option[subLabelKey]}</div>
      </div>
    }
      {/* {this.props.children} */}
    </div>
    )
  }
}

class ValueImage extends Component {
  render() { 
    const { disabled, value, onRemove, labelKey, imageKey, subLabelKey, valueKey, hasImage} = this.props 
    return (
      <div id="single-select-value" className='Select-value'>
        <span id="single-value-label" className="Select-value-label" >         
          {
            (hasImage) ?
            <span>
                {
                (this.props.value[imageKey] === undefined || this.props.value[imageKey] === null || this.props.value[imageKey] === '') ?    
                  <span><strong>{this.props.value[labelKey]}</strong></span>
                  :
                  <span>
                    <img className="single-value-image" width="20px" src={this.props.value[imageKey]} style={{marginRight: '5px'}}/>
                    <strong>{this.props.value[labelKey]}</strong>
                  </span>     
              }
            </span>
            :
            <strong>{this.props.value[labelKey]}</strong>
          }         
          {
            (this.props.value[subLabelKey] === undefined || this.props.value[subLabelKey] === null || this.props.value[subLabelKey] === '') ? '' :
            <span className="single-value-subLabel"> - {this.props.value[subLabelKey]} </span>
          }  
				</span>
      </div>
    )
  }
}

F4SingleSelect.propTypes = {
  name                : PropTypes.name,
  onChange            : PropTypes.func,
  closeOnSelect       : PropTypes.bool,
  options             : PropTypes.array.isRequired,
  valueKey            : PropTypes.string,
  labelKey            : PropTypes.string,
  value               : PropTypes.string,
  placeholder         : PropTypes.string,
  className           : PropTypes.string,
  hasImage            : PropTypes.bool,
  noImagePaddingLeft  : PropTypes.string,
  label               : PropTypes.string,
  isVisible           : PropTypes.bool,
  withLabel           : PropTypes.bool,
  fieldLabel          : PropTypes.string,
  disabled            : PropTypes.bool,
  searchable          : PropTypes.bool,
  clearable           : PropTypes.bool,
}

F4SingleSelect.defaultProps = {
  style :{
    width         : '100%',
    height        : 'auto',
  },
  valueComponent  : props => <ValueImage  {...props} />,
  optionComponent : props => <OptionImage {...props} />,
  placeholder     : 'Select',
  disabled        : false,
  isVisible       : true,
  withLabel       : true,
  searchable      : true,
  clearable       : true,
}

export default asF4FormElement(F4SingleSelect);


// OptionImage.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
//   isDisabled: PropTypes.bool,
//   isFocused: PropTypes.bool,
//   isSelected: PropTypes.bool,
//   onFocus: PropTypes.func,
//   onSelect: PropTypes.func,
// option: PropTypes.object.isRequired,
// }


 {/* {
            (this.props.option[subLabelKey] === undefined || this.props.option[subLabelKey] === null || this.props.option[subLabelKey] === '') ?  
              <div>
                {
                  (this.props.option[imageKey] === undefined || this.props.option[imageKey] === null || this.props.option[imageKey] === '') ?
                     <div style={{wordWrap: 'break-word'}}><strong>{this.props.option[labelKey]}</strong><br/></div>
                    :
                    <div  style={{display: 'table-row'}}>
                      <div style={{display: 'table-cell'}}><img width="40px" src={this.props.option[imageKey]} style={{marginRight: '10px'}}/></div>
                      <div style={{wordWrap: 'break-word', display: 'table-cell'}}><strong>{this.props.option[labelKey]}</strong></div>             
                    </div>
                }            
              </div>             
              :
              <div>
                {
                  (this.props.option[imageKey] === undefined || this.props.option[imageKey] === null || this.props.option[imageKey] === '') ?
                  <div>
                    <div style={{wordWrap: 'break-word'}}><strong>{this.props.option[labelKey]}</strong></div>
                    <div style={{marginLeft: '5px',wordWrap: 'break-word'}}>{this.props.option[subLabelKey]}</div>
                  </div>
                  :
                  <div>
                    <img width="40px" src={this.props.option[imageKey]} style={{marginRight: '10px', float:'left'}}/>
                    <div style={{marginLeft: '50px' , wordWrap: 'break-word'}}><strong>{this.props.option[labelKey]}</strong></div>
                    <div style={{marginLeft: '55px' , wordWrap: 'break-word'}}>{this.props.option[subLabelKey]}</div>
                  </div>
                }              
              </div>
          }      */}
