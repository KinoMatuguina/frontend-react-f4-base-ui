/**
* F4InputList
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import _l from 'lodash';
import _ from 'underscore';

import asF4FormElement from '../asF4FormElement/asF4FormElement';
import F4Button from '../F4Button/F4Button';
import * as UUIDUtil from '../UUIDUtil';

@observer
class F4InputList extends Component {
  constructor(props) {
    super(props);

    this.handleOnRowAdd = this.handleOnRowAdd.bind(this);
    this.handleOnRowRemove = this.handleOnRowRemove.bind(this);
    this.buildRows = this.buildRows.bind(this);
  }
  handleOnRowAdd() {

    const { fieldNames } = this.props;

    if ( fieldNames && fieldNames.length > 0) {

      const { value } = this.props;
      const self = this;
      let newObj = {};
      newObj.id = 'row-' + UUIDUtil.get();//_l.uniqueId('row-');
      console.log(`ROW ID ${newObj.id}`);
      fieldNames.map((name) => {
        newObj[name] = "";
      });

      value.push(newObj);
    }
  }

  handleOnRowRemove(id) {
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
  buildRows() {

    const { children, value, singleInstanceName, deleteTooltipText } = this.props;

    if (value && value.length > 0) {

      return value.map((obj) => {
        let newProp = {};
        newProp[singleInstanceName] = obj;
        newProp.key = _l.uniqueId('f4InputListRow-');

        const tooltip = (
          <Tooltip id="f4InputList-remove-tooltip">{ deleteTooltipText }</Tooltip>
        );

        let buttonChild = (
          <div className="f4DivTableCell">
            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button bsClass="f4InputList btn btn-danger" bsStyle="danger" style={{ borderRadius: '50%' }} onClick={this.handleOnRowRemove.bind(this, obj.id)}>
                { `x` }
              </Button>
            </OverlayTrigger>
          </div>
        );
        let modifiedFormParentChild = React.cloneElement(children, newProp, buttonChild);
        return modifiedFormParentChild;
      });
    }

  }
  render() {
    const { id, name, type, placeholder, disabled, value, headerNames, addTooltipText } = this.props;

    const tooltip = (
      <Tooltip id="f4InputList-add-tooltip">{ addTooltipText }</Tooltip>
    );

    return (
      <span>
        <div className="f4DivTable">
          <div className="f4DivTableHead">
            {
              value && value.length > 0 && headerNames && headerNames.map((headerName) => {
                return (
                  <div key={`f4ILHead-${headerName}`} className="f4DivTableCell">{ headerName.toUpperCase() }</div>
                )
              })
            }
          </div>
          { value && value.length > 0 && this.buildRows() }
        </div>
        <OverlayTrigger placement="right" overlay={tooltip}>
          <Button bsClass="f4InputList btn btn-primary" bsStyle="primary" style={{ borderRadius: '50%' }} onClick={this.handleOnRowAdd}>
            { `+` }
          </Button>
        </OverlayTrigger>
      </span>
    );
  }
}

F4InputList.propTypes = {
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

F4InputList.defaultProps = {
  disabled: false,
  isVisible: true,
  addTooltipText: "Add",
  deleteTooltipText: "Remove"
};


export default asF4FormElement(F4InputList);
