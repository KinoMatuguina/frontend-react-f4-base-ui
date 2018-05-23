'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _reactBootstrap = require('react-bootstrap');

var _reactBootstrapTableNext = require('react-bootstrap-table-next');

var _reactBootstrapTableNext2 = _interopRequireDefault(_reactBootstrapTableNext);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

var _F4InputCheckbox = require('../F4InputCheckbox/F4InputCheckbox');

var _F4InputCheckbox2 = _interopRequireDefault(_F4InputCheckbox);

var _F4InputField = require('../F4InputField/F4InputField');

var _F4InputField2 = _interopRequireDefault(_F4InputField);

var _F4InputSelect = require('../F4InputSelect/F4InputSelect');

var _F4InputSelect2 = _interopRequireDefault(_F4InputSelect);

var _F4MultipleSelect = require('../F4MultipleSelect/F4MultipleSelect');

var _F4MultipleSelect2 = _interopRequireDefault(_F4MultipleSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var columns = [{ dataField: "code", text: "Corporate Code", sort: true }, { dataField: "name", text: "Corporation Name", sort: true }];

var F4CorpMultipleSearchDialog = function (_Component) {
  _inherits(F4CorpMultipleSearchDialog, _Component);

  function F4CorpMultipleSearchDialog(props) {
    _classCallCheck(this, F4CorpMultipleSearchDialog);

    var _this = _possibleConstructorReturn(this, (F4CorpMultipleSearchDialog.__proto__ || Object.getPrototypeOf(F4CorpMultipleSearchDialog)).call(this, props));

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
    _this.handleSelectedCorps = _this.handleSelectedCorps.bind(_this);
    _this.onToggle = _this.onToggle.bind(_this);
    _this.onExited = _this.onExited.bind(_this);

    _this.state = {
      open: false,
      filterText: 'Show More Filters',
      corpCode: '',
      corpName: '',
      businessTypeSelect: null,
      businessNatureSelect: null,
      marketSegmentSelect: null,
      workFlowCheck: null,
      workFlowControlCheck: null,
      servicesSelect: null
    };
    return _this;
  }

  _createClass(F4CorpMultipleSearchDialog, [{
    key: 'corpCodeOnChange',
    value: function corpCodeOnChange(event, value) {
      this.setState({ corpCode: value });
    }
  }, {
    key: 'corpNameOnChange',
    value: function corpNameOnChange(event, value) {
      this.setState({ corpName: value });
    }
  }, {
    key: 'businessTypeSelectOnChange',
    value: function businessTypeSelectOnChange(event, value) {
      this.setState({ businessTypeSelect: value });
    }
  }, {
    key: 'businessNatureSelectOnChange',
    value: function businessNatureSelectOnChange(event, value) {
      this.setState({ businessNatureSelect: value });
    }
  }, {
    key: 'marketSegmentSelectOnChange',
    value: function marketSegmentSelectOnChange(event, value) {
      this.setState({ marketSegmentSelect: value });
    }
  }, {
    key: 'workFlowCheckOnChange',
    value: function workFlowCheckOnChange(value) {
      this.setState({ workFlowCheck: value });
    }
  }, {
    key: 'workFlowControlCheckOnChange',
    value: function workFlowControlCheckOnChange(value) {
      this.setState({ workFlowControlCheck: value });
    }
  }, {
    key: 'servicesSelectOnChange',
    value: function servicesSelectOnChange(value) {
      this.setState({ servicesSelect: value });
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(event) {
      var handleSearch = this.props.handleSearch;

      handleSearch(event);
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      var handleClose = this.props.handleClose;

      handleClose();
    }
  }, {
    key: 'handleSelectedCorps',
    value: function handleSelectedCorps(event) {
      var handleSelectedCorps = this.props.handleSelectedCorps;

      handleSelectedCorps(event);
    }
  }, {
    key: 'getCorpCode',
    value: function getCorpCode(corpcode, event) {
      var Store = this.props.Store;

      Store.selectedCorp = corpcode;
      this.handleClose();
    }
  }, {
    key: 'onToggle',
    value: function onToggle(e) {
      this.setState({
        open: !this.state.open,
        filterText: 'Show Less Filters'
      });
    }
  }, {
    key: 'onExited',
    value: function onExited(e) {
      this.setState({
        filterText: 'Show More Filters'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
          corporations = _props.corporations,
          handleSubmit = _props.handleSubmit,
          Store = _props.Store,
          servicesLabel = _props.servicesLabel,
          show = _props.show,
          bsSize = _props.bsSize,
          onHide = _props.onHide,
          title = _props.title,
          showTable = _props.showTable,
          tempSelectedCorp = _props.tempSelectedCorp,
          showSelectedCorps = _props.showSelectedCorps;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
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
                    fieldLabel: corpCodeLabel })
                )
              ),
              _react2.default.createElement('br', null),
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
                    fieldLabel: corpNameLabel })
                )
              ),
              _react2.default.createElement('br', null),
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
                        _react2.default.createElement(_F4InputSelect2.default, {
                          onChange: this.businessTypeSelectOnChange,
                          options: businessTypeOptions,
                          value: this.state.businessTypeSelect,
                          name: businessTypeName,
                          placeholder: placeholder,
                          fieldLabel: businessTypeLabel
                        })
                      )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(_F4InputSelect2.default, {
                          onChange: this.businessNatureSelectOnChange,
                          options: businessNatureOptions,
                          value: this.state.businessNatureSelect,
                          name: businessNatureName,
                          placeholder: placeholder,
                          fieldLabel: businessNatureLabel
                        })
                      )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(_F4InputSelect2.default, {
                          onChange: this.marketSegmentSelectOnChange,
                          options: marketSegmentOptions,
                          value: this.state.marketSegmentSelect,
                          name: marketSegmentName,
                          placeholder: placeholder,
                          fieldLabel: marketSegmentLabel
                        })
                      )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(
                          'label',
                          { className: 'f4FormFieldLabel col-md-2 col-md-offset-0 col-sm-0 control-label' },
                          ' Work Flow Model'
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
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      _Row2.default,
                      null,
                      _react2.default.createElement(
                        _Col2.default,
                        { md: 12 },
                        _react2.default.createElement(
                          'label',
                          { className: 'f4FormFieldLabel col-md-2 col-md-offset-0 col-sm-0 control-label' },
                          ' Work Flow Profile Control'
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
                    _react2.default.createElement('br', null),
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
                          valueKey: 'value',
                          labelKey: 'label'
                        })
                      ),
                      _react2.default.createElement(
                        'label',
                        { className: 'f4FormFieldLabel labelTag col-md-3 col-md-offset-2 col-sm-0 control-label' },
                        'Multiple Services can be chosen. '
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'button',
                  { className: 'Collapsible__trigger', onClick: this.onToggle },
                  ' ',
                  this.state.filterText,
                  ' '
                )
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _F4Button2.default,
                { onClick: this.handleSearch },
                ' Search '
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { style: showTable === true ? { display: "block" } : { display: "none" } },
                _react2.default.createElement(_reactBootstrapTableNext2.default, { data: corporations, columns: columns, keyField: 'name',
                  selectRow: {
                    mode: 'checkbox',
                    clickToSelect: true,
                    onSelect: function onSelect(row, isSelect, rowIndex) {
                      if (isSelect) {
                        Store.tempSelectedCorp.push(row);
                      } else {
                        Store.tempSelectedCorp = _underscore2.default.reject(Store.tempSelectedCorp, function (d) {
                          return d.id === row.id;
                        });
                      }
                    }
                  } }),
                _react2.default.createElement(
                  _F4Button2.default,
                  {
                    onClick: function onClick(e) {
                      for (var i = 0; i < Store.tempSelectedCorp.length; i++) {
                        var row = Store.tempSelectedCorp[i];

                        var exists = _underscore2.default.findWhere(Store.selectedCorp, { id: row.id });
                        if (!exists) {
                          Store.selectedCorp.push(row);
                          _this2.handleSelectedCorps();
                        }
                      }
                    } },
                  'Add Selected'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                Store.selectedCorp.length > 0 && Store.showSelectedCorps === true ? _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'label',
                    { className: 'selectedCorpLabel' },
                    ' Selected Corporations '
                  ),
                  _react2.default.createElement(_reactBootstrapTableNext2.default, { data: Store.selectedCorp,
                    columns: [{ dataField: "code", text: "Corporate Code", sort: true }, { dataField: "name", text: "Corporate Name", sort: true }, { dataField: "action", text: "", sort: false,
                      formatter: function formatter(cell, row, index, formatExtraData) {
                        return _react2.default.createElement(
                          'button',
                          { className: 'buttonX', onClick: function onClick(e) {
                              Store.selectedCorp = _underscore2.default.reject(Store.selectedCorp, function (d) {
                                return d.id === row.id;
                              });
                            } },
                          'X'
                        );
                      }
                    }], keyField: 'name' })
                ) : ''
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _F4Button2.default,
                { onClick: this.handleClose },
                'Cancel'
              ),
              _react2.default.createElement(
                _F4Button2.default,
                { onClick: function onClick() {
                    _this2.props.handleSubmit();
                  } },
                ' Submit '
              )
            )
          )
        )
      );
    }
  }]);

  return F4CorpMultipleSearchDialog;
}(_react.Component);

F4CorpMultipleSearchDialog.propTypes = {
  // props definition
  businessTypeOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  businessNatureOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  marketSegmentOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  servicesOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  workFlowOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  workFlowControlOptions: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]).isRequired,
  handleSearch: _propTypes2.default.func,
  handleClose: _propTypes2.default.func,
  handleSelectedCorps: _propTypes2.default.func,
  Store: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
  corporations: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  handleSubmit: _propTypes2.default.func,
  bsSize: _propTypes2.default.string,
  show: _propTypes2.default.bool,
  onHide: _propTypes2.default.func,
  title: _propTypes2.default.string,
  showTable: _propTypes2.default.bool,
  tempSelectedCorp: _propTypes2.default.any,
  showSelectedCorps: _propTypes2.default.any
};

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
  showTable: false
};

exports.default = F4CorpMultipleSearchDialog;
module.exports = exports['default'];