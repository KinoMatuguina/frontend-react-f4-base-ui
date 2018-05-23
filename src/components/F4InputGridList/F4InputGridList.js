/**
* F4InputGridList
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Fontawesome from 'react-fontawesome';

import asF4FormElement from '../asF4FormElement/asF4FormElement';
import F4Button from '../F4Button/F4Button';
import * as UUIDUtil from '../UUIDUtil';

@observer
class F4InputGridListElement extends Component {
  render() {

    const { tooltip, children, onClick } = this.props;

    return (
      <div className="f4InputGridListElement">
        <OverlayTrigger placement="right" overlay={tooltip}>
          <span className="f4InputGridListElementClose">
            <Button bsClass="f4InputList btn btn-danger" bsStyle="danger" style={{ borderRadius: '50%' }} onClick={onClick}>
              { `x` }
            </Button>
          </span>
        </OverlayTrigger>
        <div className="f4InputGridListElementContent">
          { this.props.children }
        </div>
      </div>
    );
  }
}

@observer
class F4InputGridList extends Component {
  constructor(props) {
    super(props);
    this.handleOnElementAdd = this.handleOnElementAdd.bind(this);
    this.handleOnElementRemove = this.handleOnElementRemove.bind(this);
    this.buildGrid = this.buildGrid.bind(this);
  }
  handleOnElementAdd() {

    const { fieldNames } = this.props;

    if ( fieldNames && fieldNames.length > 0) {

      const { value } = this.props;
      const self = this;
      let newObj = {};
      newObj.id = `gridEl-${UUIDUtil.get()}`
      console.log(`GridEl ID ${newObj.id}`);
      fieldNames.map((name) => {
        newObj[name] = "";
      });

      value.push(newObj);
    }
  }
  handleOnElementRemove(id) {
    if(id) {
      const { value } = this.props;
      if (value && value.length > 0) {
        let indexToDel = value.findIndex(obj => obj.id === id);

        if (typeof indexToDel !== 'undefined' && indexToDel != null) {
          if(value.length === 1) {
            value.pop();
          } else {
            value.splice(indexToDel, 1);
          }
        }
      }
    }
  }
  buildGrid() {

    const { children, value, singleInstanceName, deleteTooltipText } = this.props;

    if (value && value.map && value.length > 0 ) {

      return value.map((obj) => {

        let newProp = {};
        newProp[singleInstanceName] = obj;

        let cloned = React.cloneElement(children, newProp);

        const tooltip = (
          <Tooltip id={`f4GridList-remove-tooltip-${obj.id}`}>{ deleteTooltipText }</Tooltip>
        );

        return (
          <F4InputGridListElement key={`f4IGLE-${obj.id}`} onClick={this.handleOnElementRemove.bind(null, obj.id)} tooltip={tooltip}>
            { cloned}
          </F4InputGridListElement>
        );

      });

    }
  }
  render() {

    const { id, name, type, placeholder, disabled, value, addTooltipText } = this.props;

    const tooltip = (
      <Tooltip id="f4GridList-add-tooltip">{ addTooltipText }</Tooltip>
    );

    return (
      <div className="f4InputGridList">
        { value && value.length > 0 && this.buildGrid() }
        <div className="f4InputGridListElementAdd">
          <OverlayTrigger placement="right" overlay={tooltip}>
            <Button bsClass="f4InputList btn btn-primary" bsStyle="primary" style={{ borderRadius: '50%' }} onClick={this.handleOnElementAdd}>
              { `+` }
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}

F4InputGridList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  isVisible: PropTypes.bool,
  fieldLabel: PropTypes.string,
  fieldNames: PropTypes.array.isRequired,
  addTooltipText: PropTypes.string,
  deleteTooltipText: PropTypes.string
};

F4InputGridList.defaultProps = {
  disabled: false,
  isVisible: true,
  addTooltipText: "Add",
  deleteTooltipText: "Remove"
};


export default asF4FormElement(F4InputGridList);
