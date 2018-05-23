import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import { BaseComponents } from "frontend-react-f4-base-ui";
import _ from "underscore";
import { Modal, Panel } from "react-bootstrap";
import F4Button from "../F4Button/F4Button";
import F4InputCheckbox from "../F4InputCheckbox/F4InputCheckbox";
import F4InputField from "../F4InputField/F4InputField";
// import F4SingleSelect from '../F4SingleSelect/F4SingleSelect';
import F4MultipleSelect from "../F4MultipleSelect/F4MultipleSelect";
import { F4SingleSelect } from "../F4SingleSelect/F4SingleSelect";

class F4CorpSingleSearchDialog extends Component {
  constructor(props) {
    super(props);
    this.corpCodeOnChange = this.corpCodeOnChange.bind(this);
    this.corpNameOnChange = this.corpNameOnChange.bind(this);
    this.businessTypeSelectOnChange = this.businessTypeSelectOnChange.bind(
      this
    );
    this.businessNatureSelectOnChange = this.businessNatureSelectOnChange.bind(
      this
    );
    this.marketSegmentSelectOnChange = this.marketSegmentSelectOnChange.bind(
      this
    );
    this.workFlowCheckOnChange = this.workFlowCheckOnChange.bind(this);
    this.workFlowControlCheckOnChange = this.workFlowControlCheckOnChange.bind(
      this
    );
    this.servicesSelectOnChange = this.servicesSelectOnChange.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onExited = this.onExited.bind(this);

    this.state = {
      open: false,
      filterText: "Show More Filters",
      corpCode: "",
      corpName: "",
      businessTypeSelect: null,
      businessNatureSelect: null,
      marketSegmentSelect: null,
      workFlowCheck: null,
      workFlowControlCheck: null,
      servicesSelect: null
    };
  }

  corpCodeOnChange(event, value) {
    this.setState({ corpCode: value });
    console.log(value);
  }

  corpNameOnChange(event, value) {
    this.setState({ corpName: value });
    console.log(value);
  }

  businessTypeSelectOnChange(event, value) {
    this.setState({ businessTypeSelect: value });
    console.log(value);
  }

  businessNatureSelectOnChange(event, value) {
    this.setState({ businessNatureSelect: value });
    console.log(value);
  }

  marketSegmentSelectOnChange(event, value) {
    this.setState({ marketSegmentSelect: value });
    console.log(value);
  }

  workFlowCheckOnChange(value) {
    this.setState({ workFlowCheck: value });
    console.log(value);
  }

  workFlowControlCheckOnChange(value) {
    this.setState({ workFlowControlCheck: value });
    console.log(value);
  }

  servicesSelectOnChange(value) {
    this.setState({ servicesSelect: value });
    console.log(value);
  }

  handleClose() {
    const { handleClose } = this.props;
    handleClose();
  }

  handleSearch(event) {
    const { handleSearch } = this.props;
    handleSearch(event);
  }

  getCorpCode(corpcode, event) {
    const { Store } = this.props;
    Store.selectedCorpCode = corpcode;
    this.handleClose();
  }

  onToggle(e) {
    this.setState({
      open: !this.state.open,
      filterText: "Show Less Filters"
    });
  }

  onExited(e) {
    this.setState({
      filterText: "Show More Filters"
    });
  }

  render() {
    let self = this;
    const {
      corpCodeLabel,
      corpNameLabel,
      corpCodeName,
      corpNameName,
      businessTypeLabel,
      businessTypeOptions,
      businessTypeName,
      businessNatureName,
      businessNatureLabel,
      businessNatureOptions,
      marketSegmentLabel,
      marketSegmentName,
      marketSegmentOptions,
      placeholder,
      servicesPlaceholder,
      servicesOptions,
      workFlowOptions,
      workFlowControlOptions,
      workFlowControlCheck,
      corporations,
      Store,
      servicesLabel,
      show,
      onHide,
      bsSize,
      title,
      showTable,
      businessTypeValueKey,
      // businessTypeLabelKey,
      businessNatureValueKey,
      // businessNatureLabelKey,
      marketSegmentValueKey
      // marketSegmentLabelKey
    } = this.props;

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
                    fieldLabel={corpCodeLabel}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={12}>
                  <F4InputField
                    name={corpNameName}
                    type={"text"}
                    value={this.state.corpName}
                    onChange={this.corpNameOnChange}
                    fieldLabel={corpNameLabel}
                  />
                </Col>
              </Row>
              <br />

              <Panel expanded={this.state.open} onToggle={this.onToggle}>
                <Panel.Collapse onExiting={this.onExited}>
                  <Panel.Body>
                    <Row>
                      <Col md={12}>
                        <F4SingleSelect
                          onChange={this.businessTypeSelectOnChange}
                          options={businessTypeOptions}
                          value={this.state.businessTypeSelect}
                          name={businessTypeName}
                          placeholder={placeholder}
                          fieldLabel={businessTypeLabel}
                          valueKey={businessTypeValueKey}
                          labelKey={businessTypeLabelKey}
                          searchable={true}
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md={12}>
                        <F4SingleSelect
                          onChange={this.businessNatureSelectOnChange}
                          options={businessNatureOptions}
                          value={this.state.businessNatureSelect}
                          name={businessNatureName}
                          placeholder={placeholder}
                          fieldLabel={businessNatureLabel}
                          valueKey={businessNatureValueKey}
                          labelKey={businessNatureLabelKey}
                          searchable={true}
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md={12}>
                        <F4SingleSelect
                          onChange={this.marketSegmentSelectOnChange}
                          options={marketSegmentOptions}
                          value={this.state.marketSegmentSelect}
                          name={marketSegmentName}
                          placeholder={placeholder}
                          fieldLabel={marketSegmentLabel}
                          valueKey={marketSegmentValueKey}
                          labelKey={marketSegmentLabelKey}
                          searchable={true}
                        />
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md={12}>
                        <label className="f4FormFieldLabel col-md-2 col-md-offset-0 col-sm-0 control-label">
                          {" "}
                          Work Flow Model
                        </label>
                        {_.map(workFlowOptions, (data, index) => {
                          return (
                            <Col md={3} key={index}>
                              <F4InputCheckbox
                                text={data.text}
                                onChange={this.workFlowCheckOnChange}
                                value={this.state.workFlowCheck}
                                name={data.name}
                              />
                            </Col>
                          );
                        })}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md={12}>
                        <label className="f4FormFieldLabel col-md-2 col-md-offset-0 col-sm-0 control-label">
                          {" "}
                          Work Flow Profile Control
                        </label>
                        {_.map(workFlowControlOptions, (data, index) => {
                          return (
                            <Col md={3} key={index}>
                              <F4InputCheckbox
                                text={data.text}
                                onChange={this.workFlowControlCheckOnChange}
                                value={this.state.workFlowControlCheck}
                                name={data.name}
                              />
                            </Col>
                          );
                        })}
                      </Col>
                    </Row>
                    <br />
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
                      <label className="f4FormFieldLabel labelTag col-md-3 col-md-offset-2 col-sm-0 control-label">
                        Multiple Services can be chosen.{" "}
                      </label>
                    </Row>
                  </Panel.Body>
                </Panel.Collapse>

                <button
                  className="Collapsible__trigger"
                  onClick={this.onToggle}
                >
                  {" "}
                  {this.state.filterText}{" "}
                </button>
              </Panel>
              <br />

              <F4Button onClick={this.handleSearch}> Search </F4Button>
              <br />
              <br />

              <div
                style={
                  showTable === true
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <table className="f4CorpDataTable">
                  <thead>
                    <tr>
                      <th className="f4CorpDataTableTh">Corporate Code</th>
                      <th className="f4CorpDataTableTh">Corporation Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {_.map(corporations, function(data, index) {
                      return (
                        <tr key={index}>
                          <td
                            className="f4CorpDataTableTdCode f4DataTableTdleft f4CorpDataTableTd"
                            // binding using arrow function and assign this to self
                            onClick={() => {
                              self.getCorpCode(data.code);
                            }}
                          >
                            {data.code}
                          </td>

                          <td className="f4CorpDataTableTd f4DataTableTdleft">
                            {data.name}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <F4Button onClick={this.handleClose}>Cancel</F4Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

F4CorpSingleSearchDialog.propTypes = {
  // props definition
  businessTypeOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  businessNatureOptions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  marketSegmentOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  servicesOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  workFlowOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    .isRequired,
  workFlowControlOptions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,

  businessTypeValueKey: PropTypes.string,
  businessTypeLabelKey: PropTypes.string,

  businessNatureValueKey: PropTypes.string,
  businessNatureLabelKey: PropTypes.string,

  marketSegmentValueKey: PropTypes.string,
  marketSegmentLabelKey: PropTypes.string,

  handleSearch: PropTypes.func,
  handleClose: PropTypes.func,
  Store: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  corporations: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  bsSize: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  title: PropTypes.string,
  showTable: PropTypes.bool
};

F4CorpSingleSearchDialog.defaultProps = {
  // default props
  placeholder: "Choose One",
  corpCodeLabel: "Corporate Code",
  corpNameLabel: "Corporate Name",
  businessTypeLabel: "Business Type",
  businessNatureLabel: "Nature of Business",
  marketSegmentLabel: "Market Segment",
  servicesLabel: "Services",
  corpCodeName: "corp-code",
  corpNameName: "corp-name",
  businessTypeName: "business-type",
  businessNatureName: "business-nature",
  marketSegmentName: "market-segment",
  servicesPlaceholder: "Select All Applicable",
  bsSize: "large",
  title: "Search Corporations",
  showTable: false
};

export default F4CorpSingleSearchDialog;
