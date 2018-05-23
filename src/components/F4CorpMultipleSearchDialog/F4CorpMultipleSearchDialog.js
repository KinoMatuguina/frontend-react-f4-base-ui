import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import _ from 'underscore';
import { Modal, Panel } from 'react-bootstrap';
import Bootstraptable from 'react-bootstrap-table-next';

import F4Button from '../F4Button/F4Button';
import F4InputCheckbox from '../F4InputCheckbox/F4InputCheckbox';
import F4InputField from '../F4InputField/F4InputField';
import F4InputSelect from '../F4InputSelect/F4InputSelect';
import F4MultipleSelect from '../F4MultipleSelect/F4MultipleSelect';

const columns =[
  {dataField: "code", text: "Corporate Code", sort: true},
  {dataField: "name", text: "Corporation Name", sort: true}
]
 
class F4CorpMultipleSearchDialog extends Component {
  constructor(props) {
    super(props);
    this.corpCodeOnChange = this.corpCodeOnChange.bind(this);
    this.corpNameOnChange = this.corpNameOnChange.bind(this);
    this.businessTypeSelectOnChange = this.businessTypeSelectOnChange.bind(this);
    this.businessNatureSelectOnChange = this.businessNatureSelectOnChange.bind(this);
    this.marketSegmentSelectOnChange = this.marketSegmentSelectOnChange.bind(this);
    this.workFlowCheckOnChange = this.workFlowCheckOnChange.bind(this);
    this.workFlowControlCheckOnChange = this.workFlowControlCheckOnChange.bind(this);
    this.servicesSelectOnChange = this.servicesSelectOnChange.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectedCorps = this.handleSelectedCorps.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onExited = this.onExited.bind(this);

    this.state = {
      open: false,
      filterText: 'Show More Filters',
      corpCode: '',
      corpName: '',
      businessTypeSelect: null,
      businessNatureSelect: null,
      marketSegmentSelect: null, 
      workFlowCheck: null,
      workFlowControlCheck: null,
      servicesSelect: null,
    };
  }
 
  corpCodeOnChange(event, value) {
    this.setState({ corpCode: value })
  }

  corpNameOnChange(event, value) {
    this.setState({ corpName: value })
  }

  businessTypeSelectOnChange(event, value) {
    this.setState({ businessTypeSelect: value })
  }

  businessNatureSelectOnChange(event, value) {
    this.setState({ businessNatureSelect: value })
  }

  marketSegmentSelectOnChange(event, value) {
    this.setState({ marketSegmentSelect: value })
  }

  workFlowCheckOnChange(value) {
    this.setState({ workFlowCheck: value })
  }

  workFlowControlCheckOnChange(value) {
    this.setState({ workFlowControlCheck: value })
  }

  servicesSelectOnChange(value) {
    this.setState({ servicesSelect: value })
  }

  handleSearch(event) {
    const { handleSearch } = this.props;
    handleSearch(event);
  }

  handleClose() {
    const { handleClose } = this.props;
    handleClose();
  }

  handleSelectedCorps(event) {
    const { handleSelectedCorps } = this.props;
    handleSelectedCorps(event);
  }

  getCorpCode(corpcode, event) {
    const { Store } = this.props;
    Store.selectedCorp = corpcode;
    this.handleClose();
  }

  onToggle(e) {
    this.setState({
      open: !this.state.open,
      filterText: 'Show Less Filters',
    })
  }

  onExited(e) {
    this.setState({
      filterText: 'Show More Filters',
    })
  }

  render() {
    const { 
      corpCodeLabel, corpNameLabel, corpCodeName, corpNameName, businessTypeLabel, businessTypeOptions, businessTypeName, businessNatureName, businessNatureLabel, businessNatureOptions,
      marketSegmentLabel, marketSegmentName, marketSegmentOptions, placeholder, servicesPlaceholder, servicesOptions, workFlowOptions, workFlowControlOptions,
      corporations, handleSubmit, Store, servicesLabel, show, bsSize, onHide, title, showTable,
      tempSelectedCorp, showSelectedCorps,} = this.props;

    return (
      <div>
        <div>
          <Modal show={show} bsSize={bsSize} onHide={onHide}>
          <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
              <Modal.Body>
              <Row>
                <Col md={12}>
                <F4InputField
                    onChange={this.corpCodeOnChange}
                    name={corpCodeName}
                    type={"text"}
                    value={this.state.corpCode}
                    fieldLabel={corpCodeLabel}/>
                </Col>
              </Row>
                <br/>
              <Row>  
                <Col md={12}>
                  <F4InputField
                    name={corpNameName}
                    type={"text"}
                    value={this.state.corpName}
                    onChange={this.corpNameOnChange}
                    fieldLabel={corpNameLabel}/>
                </Col>
              </Row>  
                <br/>

            <Panel expanded={this.state.open} onToggle={this.onToggle}>
              <Panel.Collapse onExiting={this.onExited}>
                <Panel.Body>
              <Row>  
                <Col md={12}>
                    <F4InputSelect
                      onChange={this.businessTypeSelectOnChange}
                      options={businessTypeOptions}
                      value={this.state.businessTypeSelect}
                      name={businessTypeName}
                      placeholder={placeholder}
                      fieldLabel={businessTypeLabel}
                      />
                </Col>
              </Row>
                <br/>  
              <Row>
                <Col md={12}>
                    <F4InputSelect
                      onChange={this.businessNatureSelectOnChange}
                      options={businessNatureOptions}
                      value={this.state.businessNatureSelect}
                      name={businessNatureName}
                      placeholder={placeholder}
                      fieldLabel={businessNatureLabel}
                      />  
                </Col>
              </Row>
              <br/>
              <Row>
                <Col md={12}>
                    <F4InputSelect
                      onChange={this.marketSegmentSelectOnChange}
                      options={marketSegmentOptions}
                      value={this.state.marketSegmentSelect}
                      name={marketSegmentName}
                      placeholder={placeholder}
                      fieldLabel={marketSegmentLabel}
                      />  
                </Col>
              </Row>
              <br/>
              <Row>
                <Col md={12}>
                <label className="f4FormFieldLabel col-md-2 col-md-offset-0 col-sm-0 control-label"> Work Flow Model</label>
                  {
                    _.map(workFlowOptions, (data,index) => {
                      return(
                        <Col md={3} key={index}>
                          <F4InputCheckbox
                            text={data.text}
                            onChange={this.workFlowCheckOnChange}
                            value={this.state.workFlowCheck}
                            name={data.name}
                            />
                        </Col>
                      )
                    })
                  }
                  </Col>
              </Row>
              <br/>
              <Row>
                <Col md={12}>
                <label className="f4FormFieldLabel col-md-2 col-md-offset-0 col-sm-0 control-label"> Work Flow Profile Control</label>
                  {
                    _.map(workFlowControlOptions, (data,index) => {
                      return(
                        <Col md={3} key={index}>
                          <F4InputCheckbox
                            text={data.text}
                            onChange={this.workFlowControlCheckOnChange}
                            value={this.state.workFlowControlCheck}
                            name={data.name}
                            />
                        </Col>
                      )
                    })
                  }
                  </Col>
              </Row>
              <br/>
              <Row>
                <Col md={12}>
                <F4MultipleSelect
                  options={servicesOptions}
                  value={this.state.servicesSelect}
                  onChange={this.servicesSelectOnChange}
                  placeholder={servicesPlaceholder}
                  fieldLabel={servicesLabel}
                  valueKey="value"
                  labelKey="label"
                  />
                </Col>
                <label className="f4FormFieldLabel labelTag col-md-3 col-md-offset-2 col-sm-0 control-label">Multiple Services can be chosen. </label>
                </Row>
              </Panel.Body>
            </Panel.Collapse>
              <button className="Collapsible__trigger" onClick={this.onToggle}> {this.state.filterText} </button>
           </Panel>
          <br/>

          <F4Button onClick={this.handleSearch}> Search </F4Button>

          <br/>
          <br/>  
          
          <div style={(showTable === true) ? {display: "block"} : {display: "none"}}>
            <Bootstraptable data={corporations} columns={columns} keyField='name' 
              selectRow={{
                mode: 'checkbox',
                clickToSelect: true, 
                onSelect: (row, isSelect, rowIndex) => { 
                  if(isSelect){
                    Store.tempSelectedCorp.push(row);
                  }else{
                    Store.tempSelectedCorp = _.reject(Store.tempSelectedCorp, function(d){ return d.id === row.id; });
                  }
                } 
              }} />

            <F4Button
              onClick={
                (e) => {
                  for (let i = 0; i < Store.tempSelectedCorp.length; i++) {
                    let row = Store.tempSelectedCorp[i];

                    let exists = _.findWhere(Store.selectedCorp, {id: row.id});
                    if (!exists) {
                      Store.selectedCorp.push(row);
                      this.handleSelectedCorps();
                    }
                  }
                }
              }>Add Selected</F4Button>

              <br/>
              <br/>

            {Store.selectedCorp.length > 0  && Store.showSelectedCorps === true ? 
            <div>
              <label className="selectedCorpLabel"> Selected Corporations </label>
                <Bootstraptable data={Store.selectedCorp} 
                  columns={
                    [
                      {dataField: "code", text: "Corporate Code", sort: true},
                      {dataField: "name", text: "Corporate Name", sort: true},
                      {dataField: "action", text: "", sort: false, 
                        formatter: (cell, row, index, formatExtraData) => <button className="buttonX" onClick={e => {
                          Store.selectedCorp = _.reject(Store.selectedCorp, function(d){ return d.id === row.id; });
                        }}>X</button>
                      }
                    ]
                  } keyField='name' /> 
              </div>
              : ''
            }
          </div>

        </Modal.Body>
        <Modal.Footer>
          <F4Button onClick={this.handleClose}>Cancel</F4Button>
          <F4Button onClick={() => {this.props.handleSubmit()} }> Submit </F4Button>
        </Modal.Footer>
        </Modal>
      </div>
      </div>
    );
  }
}


F4CorpMultipleSearchDialog.propTypes = {
  // props definition
  businessTypeOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  businessNatureOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  marketSegmentOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  servicesOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  workFlowOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  workFlowControlOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  handleSearch: PropTypes.func,
  handleClose: PropTypes.func,
  handleSelectedCorps: PropTypes.func,
  Store: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  corporations: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleSubmit: PropTypes.func,
  bsSize: PropTypes.string, 
  show: PropTypes.bool,
  onHide: PropTypes.func, 
  title: PropTypes.string,
  showTable: PropTypes.bool,
  tempSelectedCorp: PropTypes.any,
  showSelectedCorps: PropTypes.any, 
}

F4CorpMultipleSearchDialog.defaultProps = {
  // default props
  placeholder: 'Choose One',
  corpCodeLabel: 'Corporate Code',
  corpNameLabel: 'Corporation Name',
  businessTypeLabel: 'Business Type',
  businessNatureLabel: 'Nature of Business',
  marketSegmentLabel: 'Market Segment',
  servicesLabel: 'Services',
  corpCodeName: 'corp-code',
  corpNameName: 'corp-name',
  businessTypeName: 'business-type',
  businessNatureName: 'business-nature',
  marketSegmentName: 'market-segment',
  servicesPlaceholder: 'Select All Applicable',
  bsSize: 'large',
  title: 'Search Corporations',
  showTable: false,
}

export default F4CorpMultipleSearchDialog;