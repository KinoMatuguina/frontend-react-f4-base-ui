"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Col = require("react-bootstrap/lib/Col");

var _Col2 = _interopRequireDefault(_Col);

var _Row = require("react-bootstrap/lib/Row");

var _Row2 = _interopRequireDefault(_Row);

var _frontendReactF4BaseUi = require("frontend-react-f4-base-ui");

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _reactBootstrap = require("react-bootstrap");

var _F4Button = require("../F4Button/F4Button");

var _F4Button2 = _interopRequireDefault(_F4Button);

var _F4InputCheckbox = require("../F4InputCheckbox/F4InputCheckbox");

var _F4InputCheckbox2 = _interopRequireDefault(_F4InputCheckbox);

var _F4InputField = require("../F4InputField/F4InputField");

var _F4InputField2 = _interopRequireDefault(_F4InputField);

var _F4MultipleSelect = require("../F4MultipleSelect/F4MultipleSelect");

var _F4MultipleSelect2 = _interopRequireDefault(_F4MultipleSelect);

var _F4SingleSelect = require("../F4SingleSelect/F4SingleSelect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import F4SingleSelect from '../F4SingleSelect/F4SingleSelect';


var F4CorpSingleSearchDialog = function (_Component) {
  _inherits(F4CorpSingleSearchDialog, _Component);

  function F4CorpSingleSearchDialog(props) {
    _classCallCheck(this, F4CorpSingleSearchDialog);

    var _this = _possibleConstructorReturn(this, (F4CorpSingleSearchDialog.__proto__ || Object.getPrototypeOf(F4CorpSingleSearchDialog)).call(this, props));

    _this.corpCodeOnChange = _this.corpCodeOnChange.bind(_this);
    _this.corpNameOnChange = _this.corpNameOnChange.bind(_this);
    _this.businessTypeSelectOnChange = _this.businessTypeSelectOnChange.bind(_this);
    _this.businessNatureSelectOnChange = _this.businessNatureSelectOnChange.bind(_this);
    _this.marketSegmentSelectOnChange = _this.marketSegmentSelectOnChange.bind(_this);
    _this.workFlowCheckOnChange = _this.workFlowCheckOnChange.bind(_this);
    _this.workFlowControlCheckOnChange = _this.workFlowControlCheckOnChange.bind(_this);
    _this.servicesSelectOnChange = _this.servicesSelectOnChange.bind(_this);

    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.onToggle = _this.onToggle.bind(_this);
    _this.onExited = _this.onExited.bind(_this);

    _this.state = {
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
    return _this;
  }

  _createClass(F4CorpSingleSearchDialog, [{
    key: "corpCodeOnChange",
    value: function corpCodeOnChange(event, value) {
      this.setState({ corpCode: value });
      console.log(value);
    }
  }, {
    key: "corpNameOnChange",
    value: function corpNameOnChange(event, value) {
      this.setState({ corpName: value });
      console.log(value);
    }
  }, {
    key: "businessTypeSelectOnChange",
    value: function businessTypeSelectOnChange(event, value) {
      this.setState({ businessTypeSelect: value });
      console.log(value);
    }
  }, {
    key: "businessNatureSelectOnChange",
    value: function businessNatureSelectOnChange(event, value) {
      this.setState({ businessNatureSelect: value });
      console.log(value);
    }
  }, {
    key: "marketSegmentSelectOnChange",
    value: function marketSegmentSelectOnChange(event, value) {
      this.setState({ marketSegmentSelect: value });
      console.log(value);
    }
  }, {
    key: "workFlowCheckOnChange",
    value: function workFlowCheckOnChange(value) {
      this.setState({ workFlowCheck: value });
      console.log(value);
    }
  }, {
    key: "workFlowControlCheckOnChange",
    value: function workFlowControlCheckOnChange(value) {
      this.setState({ workFlowControlCheck: value });
      console.log(value);
    }
  }, {
    key: "servicesSelectOnChange",
    value: function servicesSelectOnChange(value) {
      this.setState({ servicesSelect: value });
      console.log(value);
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      var handleClose = this.props.handleClose;

      handleClose();
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(event) {
      var handleSearch = this.props.handleSearch;

      handleSearch(event);
    }
  }, {
    key: "getCorpCode",
    value: function getCorpCode(corpcode, event) {
      var Store = this.props.Store;

      Store.selectedCorpCode = corpcode;
      this.handleClose();
    }
  }, {
    key: "onToggle",
    value: function onToggle(e) {
      this.setState({
        open: !this.state.open,
        filterText: "Show Less Filters"
      });
    }
  }, {
    key: "onExited",
    value: function onExited(e) {
      this.setState({
        filterText: "Show More Filters"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      var _props = this.props,
          corpCodeLabel = _props.corpCodeLabel,
          corpNameLabel = _props.corpNameLabel,
          corpCodeName = _props.corpCodeName,
          corpNameName = _props.corpNameName,
          businessTypeLabel = _props.businessTypeLabel,
          businessTypeOptions = _props.businessTypeOptions,
          businessTypeName = _props.businessTypeName,
          businessNatureName = _props.businessNatureName,
          businessNatureLabel = _props.businessNatureLabel,
          businessNatureOptions = _props.businessNatureOptions,
          marketSegmentLabel = _props.marketSegmentLabel,
          marketSegmentName = _props.marketSegmentName,
          marketSegmentOptions = _props.marketSegmentOptions,
          placeholder = _props.placeholder,
          servicesPlaceholder = _props.servicesPlaceholder,
          servicesOptions = _props.servicesOptions,
          workFlowOptions = _props.workFlowOptions,
          workFlowControlOptions = _props.workFlowControlOptions,
          workFlowControlCheck = _props.workFlowControlCheck,
          corporations = _props.corporations,
          Store = _props.Store,
          servicesLabel = _props.servicesLabel,
          show = _props.show,
          onHide = _props.onHide,
          bsSize = _props.bsSize,
          title = _props.title,
          showTable = _props.showTable,
          businessTypeValueKey = _props.businessTypeValueKey,
          businessNatureValueKey = _props.businessNatureValueKey,
          marketSegmentValueKey = _props.marketSegmentValueKey;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: show, bsSize: bsSize, onHide: onHide },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              null,
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                title
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              _react2.default.createElement(
                _Row2.default,
                null,
                _react2.default.createElement(
                  _Col2.default,
                  { md: 12 },
                  _react2.default.createElement(_F4InputField2.default, {
                    onChange: this.corpCodeOnChange,
                    name: corpCodeName,
                    type: "text",
                    value: this.state.corpCode,
                    fieldLabel: corpCodeLabel
                  })
                )
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                _Row2.default,
                null,
                _react2.default.createElement(
                  _Col2.default,
                  { md: 12 },
                  _react2.default.createElement(_F4InputField2.default, {
                    name: corpNameName,
                    type: "text",
                    value: this.state.corpName,
                    onChange: this.corpNameOnChange,
                    fieldLabel: corpNameLabel
                  })
                )
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                _reactBootstrap.Panel,
                { expanded: this.state.open, onToggle: this.onToggle },
                _react2.default.createElement(
                  _reactBootstrap.Panel.Collapse,
                  { onExiting: this.onExited },
                  _react2.default.createElement(
                    _reactBootstrap.Panel.Body,
                    null,
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(_F4SingleSelect.F4SingleSelect, {
                          onChange: this.businessTypeSelectOnChange,
                          options: businessTypeOptions,
                          value: this.state.businessTypeSelect,
                          name: businessTypeName,
                          placeholder: placeholder,
                          fieldLabel: businessTypeLabel,
                          valueKey: businessTypeValueKey,
                          labelKey: businessTypeLabelKey,
                          searchable: true
                        })
                      )
                    ),
                    _react2.default.createElement("br", null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(_F4SingleSelect.F4SingleSelect, {
                          onChange: this.businessNatureSelectOnChange,
                          options: businessNatureOptions,
                          value: this.state.businessNatureSelect,
                          name: businessNatureName,
                          placeholder: placeholder,
                          fieldLabel: businessNatureLabel,
                          valueKey: businessNatureValueKey,
                          labelKey: businessNatureLabelKey,
                          searchable: true
                        })
                      )
                    ),
                    _react2.default.createElement("br", null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(_F4SingleSelect.F4SingleSelect, {
                          onChange: this.marketSegmentSelectOnChange,
                          options: marketSegmentOptions,
                          value: this.state.marketSegmentSelect,
                          name: marketSegmentName,
                          placeholder: placeholder,
                          fieldLabel: marketSegmentLabel,
                          valueKey: marketSegmentValueKey,
                          labelKey: marketSegmentLabelKey,
                          searchable: true
                        })
                      )
                    ),
                    _react2.default.createElement("br", null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(
                          "label",
                          { className: "f4FormFieldLabel col-md-2 col-md-offset-0 col-sm-0 control-label" },
                          " ",
                          "Work Flow Model"
                        ),
                        _underscore2.default.map(workFlowOptions, function (data, index) {
                          return _react2.default.createElement(
                            _Col2.default,
                            { md: 3, key: index },
                            _react2.default.createElement(_F4InputCheckbox2.default, {
                              text: data.text,
                              onChange: _this2.workFlowCheckOnChange,
                              value: _this2.state.workFlowCheck,
                              name: data.name
                            })
                          );
                        })
                      )
                    ),
                    _react2.default.createElement("br", null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(
                          "label",
                          { className: "f4FormFieldLabel col-md-2 col-md-offset-0 col-sm-0 control-label" },
                          " ",
                          "Work Flow Profile Control"
                        ),
                        _underscore2.default.map(workFlowControlOptions, function (data, index) {
                          return _react2.default.createElement(
                            _Col2.default,
                            { md: 3, key: index },
                            _react2.default.createElement(_F4InputCheckbox2.default, {
                              text: data.text,
                              onChange: _this2.workFlowControlCheckOnChange,
                              value: _this2.state.workFlowControlCheck,
                              name: data.name
                            })
                          );
                        })
                      )
                    ),
                    _react2.default.createElement("br", null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(_F4MultipleSelect2.default, {
                          options: servicesOptions,
                          value: this.state.servicesSelect,
                          onChange: this.servicesSelectOnChange,
                          placeholder: servicesPlaceholder,
                          fieldLabel: servicesLabel,
                          valueKey: "value",
                          labelKey: "label"
                        })
                      ),
                      _react2.default.createElement(
                        "label",
                        { className: "f4FormFieldLabel labelTag col-md-3 col-md-offset-2 col-sm-0 control-label" },
                        "Multiple Services can be chosen.",
                        " "
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "button",
                  {
                    className: "Collapsible__trigger",
                    onClick: this.onToggle
                  },
                  " ",
                  this.state.filterText,
                  " "
                )
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                _F4Button2.default,
                { onClick: this.handleSearch },
                " Search "
              ),
              _react2.default.createElement("br", null),
              _react2.default.createElement("br", null),
              _react2.default.createElement(
                "div",
                {
                  style: showTable === true ? { display: "block" } : { display: "none" }
                },
                _react2.default.createElement(
                  "table",
                  { className: "f4CorpDataTable" },
                  _react2.default.createElement(
                    "thead",
                    null,
                    _react2.default.createElement(
                      "tr",
                      null,
                      _react2.default.createElement(
                        "th",
                        { className: "f4CorpDataTableTh" },
                        "Corporate Code"
                      ),
                      _react2.default.createElement(
                        "th",
                        { className: "f4CorpDataTableTh" },
                        "Corporation Name"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "tbody",
                    null,
                    _underscore2.default.map(corporations, function (data, index) {
                      return _react2.default.createElement(
                        "tr",
                        { key: index },
                        _react2.default.createElement(
                          "td",
                          {
                            className: "f4CorpDataTableTdCode f4DataTableTdleft f4CorpDataTableTd"
                            // binding using arrow function and assign this to self
                            , onClick: function onClick() {
                              self.getCorpCode(data.code);
                            }
                          },
                          data.code
                        ),
                        _react2.default.createElement(
                          "td",
                          { className: "f4CorpDataTableTd f4DataTableTdleft" },
                          data.name
                        )
                      );
                    })
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _F4Button2.default,
                { onClick: this.handleClose },
                "Cancel"
              )
            )
          )
        )
      );
    }
  }]);

  return F4CorpSingleSearchDialog;
}(_react.Component);

F4CorpSingleSearchDialog.propTypes = {
  // props definition
  businessTypeOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  businessNatureOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  marketSegmentOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  servicesOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  workFlowOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  workFlowControlOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,

  businessTypeValueKey: _propTypes2.default.string,
  businessTypeLabelKey: _propTypes2.default.string,

  businessNatureValueKey: _propTypes2.default.string,
  businessNatureLabelKey: _propTypes2.default.string,

  marketSegmentValueKey: _propTypes2.default.string,
  marketSegmentLabelKey: _propTypes2.default.string,

  handleSearch: _propTypes2.default.func,
  handleClose: _propTypes2.default.func,
  Store: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
  corporations: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  bsSize: _propTypes2.default.string,
  show: _propTypes2.default.bool,
  onHide: _propTypes2.default.func,
  title: _propTypes2.default.string,
  showTable: _propTypes2.default.bool
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

exports.default = F4CorpSingleSearchDialog;
module.exports = exports["default"];