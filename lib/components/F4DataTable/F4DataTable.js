/*
DATA TABLE
AUTHOR: KINO MATUGUINA
*/

// | -- LIBRARY -- | -- VERSION -- | -- LINK -- |

// | fixed-data-table-2 | 0.8.9 | http://schrodinger.github.io/fixed-data-table-2/
// | font-awesome | 4.7.0 |  http://schrodinger.github.io/fixed-data-table-2/
// | json2csv | 3.11.5 |  https://github.com/zemirco/json2csv
// | react-clipboard.js | 1.1.3 |  https://github.com/nihey/react-clipboard.js/
// | react-dimensions | 1.3.1 |  https://github.com/digidem/react-dimensions
// | react-js-pagination | 3.0.1 |  https://github.com/vayser/react-js-pagination
// | react-tooltip | 3.4.0 |  https://www.npmjs.com/package/react-tooltip
// | sortby | 0.0.2 |  https://www.npmjs.com/package/sortby

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DataTable = require('../DataTable/DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

var _fixedDataTable = require('fixed-data-table-2');

var _DataTableCell = require('../DataTableCell/DataTableCell');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _reactClipboard = require('react-clipboard.js');

var _reactClipboard2 = _interopRequireDefault(_reactClipboard);

var _sortby = require('sortby');

var _sortby2 = _interopRequireDefault(_sortby);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _reactJsPagination = require('react-js-pagination');

var _reactJsPagination2 = _interopRequireDefault(_reactJsPagination);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import FieldDirection from './DataTableCell/FieldDirection';


var json2csv = require('json2csv');
var Dimensions = require('react-dimensions');

var expandStyles = {
  'background-color': 'white',
  border: '1px solid #d3d3d3',
  'box-sizing': 'border-box',
  padding: '20px',
  overflow: 'hidden',
  width: '100%',
  height: '100%'
};

var F4DataTable = function (_Component) {
  _inherits(F4DataTable, _Component);

  function F4DataTable(props) {
    var _this$state;

    _classCallCheck(this, F4DataTable);

    var _this = _possibleConstructorReturn(this, (F4DataTable.__proto__ || Object.getPrototypeOf(F4DataTable)).call(this, props));

    _this.state = (_this$state = {
      collapsedRows: new Set(),
      columnOrder: _this.props.options,
      copyOfColumnOrder: _this.props.cloneOptions,
      columnWidth: {
        "balance": 300,
        "picture": 300,
        "age": 300,
        "eyeColor": 300,
        "name": 300,
        "gender": 300,
        "company": 300,
        "email": 300,
        "phone": 300,
        "address": 300,
        "about": 300,
        "registered": 300,
        "latitude": 300,
        "longitude": 300
      },
      data: _this.props.data,
      copyOfData: _this.props.data,
      reRender: false,
      sortData: {},
      serverSideSortData: [],
      isVisible: false,
      sortingIsActive: false,
      itemsPerPage: _this.props.itemsPerPage
    }, _defineProperty(_this$state, 'sortingIsActive', false), _defineProperty(_this$state, 'listOfData', []), _defineProperty(_this$state, 'activePage', 1), _defineProperty(_this$state, 'clickData', {}), _defineProperty(_this$state, 'currentProps', null), _defineProperty(_this$state, 'allSelected', false), _defineProperty(_this$state, 'copyToClipBoardData', ""), _defineProperty(_this$state, 'filter', ""), _this$state);

    _this._renderFilterService = _this._renderFilterService.bind(_this);
    _this._filterResult = _this._filterResult.bind(_this);
    _this._onColumnReorderEndCallback = _this._onColumnReorderEndCallback.bind(_this);
    _this._rowExpandedGetter = _this._rowExpandedGetter.bind(_this);
    _this._handleCollapseClick = _this._handleCollapseClick.bind(_this);
    _this._subRowHeightGetter = _this._subRowHeightGetter.bind(_this);
    _this._paginationNext = _this._paginationNext.bind(_this);
    _this._paginationBack = _this._paginationBack.bind(_this);
    _this._paginationGoto = _this._paginationGoto.bind(_this);
    _this._changeMaxRow = _this._changeMaxRow.bind(_this);
    _this._onColumnResizeEndCallback = _this._onColumnResizeEndCallback.bind(_this);
    _this._changeDataOrder = _this._changeDataOrder.bind(_this);
    _this._handleFieldsDirection = _this._handleFieldsDirection.bind(_this);
    _this._keyDown = _this._keyDown.bind(_this);
    _this._keyUp = _this._keyUp.bind(_this);
    _this._handlePagination = _this._handlePagination.bind(_this);
    _this._handleInputPagination = _this._handleInputPagination.bind(_this);
    _this._handleRowCount = _this._handleRowCount.bind(_this);
    _this._selectAll = _this._selectAll.bind(_this);
    _this._selectColumn = _this._selectColumn.bind(_this);
    _this._copyToClipBoard = _this._copyToClipBoard.bind(_this);
    _this._filterInputResult = _this._filterInputResult.bind(_this);
    // this._clickAbstractCell = this._clickAbstractCell.bind(this);
    return _this;
  }

  _createClass(F4DataTable, [{
    key: '_rowExpandedGetter',
    value: function _rowExpandedGetter(_ref) {
      var rowIndex = _ref.rowIndex,
          width = _ref.width,
          height = _ref.height;

      if (!this.state.collapsedRows.has(rowIndex)) {
        return null;
      }

      var style = {
        height: height,
        width: width - 2
      };

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'div',
          { className: expandStyles },
          'expanded content'
        )
      );

      console.log("_rowExpandedGetter");
      console.log(rowIndex);
      console.log(width);
      console.log(height);
    }
  }, {
    key: '_handleCollapseClick',
    value: function _handleCollapseClick(rowIndex, data) {
      console.log("_handleCollapseClick");
      console.log(rowIndex);
      console.log(data);

      var collapsedRows = this.state.collapsedRows;

      var shallowCopyOfCollapsedRows = new Set([].concat(_toConsumableArray(collapsedRows)));
      var scrollToRow = rowIndex;
      if (shallowCopyOfCollapsedRows.has(rowIndex)) {
        shallowCopyOfCollapsedRows.delete(rowIndex);
        scrollToRow = null;
      } else {
        shallowCopyOfCollapsedRows.add(rowIndex);
      }

      this.setState({
        collapsedRows: shallowCopyOfCollapsedRows
      }, function () {
        console.log(this.state.collapsedRows);
      });
    }
  }, {
    key: '_subRowHeightGetter',
    value: function _subRowHeightGetter(index) {
      return this.state.collapsedRows.has(index) ? 80 : 0;
    }

    // method for reordering columns need to customize more for more usability.
    // this method will work on for a simple table.
    // need to improve more.

  }, {
    key: '_onColumnReorderEndCallback',
    value: function _onColumnReorderEndCallback(event) {
      var columnOrder = this.state.columnOrder;

      var currentColIndex = _underscore2.default.findIndex(columnOrder, function (data) {
        return data.name == event.reorderColumn;
      });
      var nextColIndex = _underscore2.default.findIndex(columnOrder, function (data) {
        return data.name == event.columnAfter;
      });
      var reorderedData = columnOrder[currentColIndex];
      // getting position of the colums need to reorder 
      // let currentColIndex = columnOrder.indexOf(event.reorderColumn);
      // let nextColIndex = columnOrder.indexOf(event.columnAfter);

      console.log("OLD COLUMN ORDER : " + columnOrder);
      // removing the reorder column
      columnOrder.splice(currentColIndex, 1);
      // move the reorder column
      columnOrder.splice(nextColIndex, 0, reorderedData);

      console.log("NEW COLUMN ORDER : " + columnOrder);

      console.log(currentColIndex);
      console.log(nextColIndex);

      // setting sample data state.
      this.setState({
        columnOrder: columnOrder
      }, function () {
        console.log('DONE');
      });

      return columnOrder;
    }
  }, {
    key: '_handleShowHide',
    value: function _handleShowHide(data, event) {
      var value = event.target.checked;
      console.log("showHideDATA");
      console.log(data);
      if (value) {
        this._showColumn(data);
      } else {
        this._hideColumn(data);
      }

      return value;
    }
  }, {
    key: '_showColumn',
    value: function _showColumn(columnKey, event) {
      console.log(columnKey);
      var indexOfColumnKey = _underscore2.default.findIndex(this.state.copyOfColumnOrder, function (data) {
        return data.name == columnKey;
      });
      var normalIndex = _underscore2.default.findIndex(this.state.columnOrder, function (data) {
        return data.name == columnKey;
      });

      var newData = this.state.copyOfColumnOrder[indexOfColumnKey];
      var shallowCopyOfColumnOrder = this.state.columnOrder;
      console.log(newData);
      console.log(indexOfColumnKey);
      if (normalIndex === -1) {
        shallowCopyOfColumnOrder.splice(indexOfColumnKey, 0, newData);
        console.log(shallowCopyOfColumnOrder);
      }

      this.setState({
        columnOrder: shallowCopyOfColumnOrder
      });
    }
  }, {
    key: '_hideColumn',
    value: function _hideColumn(columnKey, event) {
      console.log(columnKey);
      var shallowCopyOfColumnOrder = this.state.columnOrder;
      var columnIndex = _underscore2.default.findIndex(shallowCopyOfColumnOrder, function (data) {
        return data.name == columnKey;
      });
      console.log(this.props.cloneOptions);
      console.log(this.props.options);

      if (columnIndex !== -1) {
        shallowCopyOfColumnOrder.splice(columnIndex, 1);
      }

      this.setState({
        columnOrder: shallowCopyOfColumnOrder
      });
    }
  }, {
    key: '_filterResult',
    value: function _filterResult(data) {

      this.setState({ reRender: true, filter: data.value });
    }
  }, {
    key: '_filterInputResult',
    value: function _filterInputResult() {
      var _this2 = this;

      var selectedFilter = this.state.filter;

      this.state.data = this.state.copyOfData; // reset original data

      if (this.refs.filterKey.value.length > 0) {
        this.state.data = this.state.data.filter(function (item, index) {

          var itemValue = item[selectedFilter] + '';
          var textBoxValue = _this2.refs.filterKey.value + '';

          return itemValue.toUpperCase() === textBoxValue.toUpperCase();
        });
      }
      this.setState({ reRender: true });
    }
  }, {
    key: '_renderFilterService',
    value: function _renderFilterService() {
      var _this3 = this;

      var arr = [];
      return _react2.default.createElement(
        'div',
        null,
        this.state.columnOrder.map(function (columnKey, index) {

          if (columnKey.name !== "") {
            arr.push({
              value: columnKey.name,
              label: columnKey.name
            });
          }
        }),
        _react2.default.createElement(
          _Col2.default,
          { md: 6 },
          _react2.default.createElement('input', { className: 'f4InputField form-control', style: { width: "100%" }, ref: 'filterKey', type: 'text', onChange: this._filterInputResult })
        ),
        _react2.default.createElement(
          _Col2.default,
          { md: 6 },
          _react2.default.createElement(_reactSelect2.default, { options: arr, onChange: function onChange(data) {
              return _this3._filterResult(data);
            }, value: this.state.filter })
        )
      );
    }
  }, {
    key: '_paginationNext',
    value: function _paginationNext() {}
  }, {
    key: '_paginationBack',
    value: function _paginationBack() {}
  }, {
    key: '_paginationGoto',
    value: function _paginationGoto() {}
  }, {
    key: '_changeMaxRow',
    value: function _changeMaxRow() {}
  }, {
    key: '_onColumnResizeEndCallback',
    value: function _onColumnResizeEndCallback(newColumnWidth, columnKey) {
      console.log(newColumnWidth);
      console.log(columnKey);
      var normalIndex = _underscore2.default.findIndex(this.state.columnOrder, function (data) {
        return data.name == columnKey;
      });
      var cloneData = this.state.columnOrder;

      cloneData[normalIndex].width = newColumnWidth;
      this.setState({
        columnOrder: cloneData
      });
      console.log(cloneData);
      console.log(this.state.columnOrder[normalIndex]);
      console.log(normalIndex);
    }
  }, {
    key: '_keyDown',
    value: function _keyDown(e) {
      if (e.keyCode === 16) {
        this.setState({
          sortingIsActive: true
        }, function () {
          console.log(this.state.sortingIsActive);
        });
      }
    }
  }, {
    key: '_keyUp',
    value: function _keyUp(e) {
      if (e.keyCode === 16) {
        this.setState({
          sortingIsActive: false
        }, function () {
          console.log(this.state.sortingIsActive);
        });
      }
    }
  }, {
    key: 'getFieldsAndDirection',
    value: function getFieldsAndDirection() {
      var sortedData = this.state.copyOfData.sort((0, _sortby2.default)(this.state.sortData));
      return sortedData;
    }
  }, {
    key: '_handleFieldsDirection',
    value: function _handleFieldsDirection(col) {
      var dir = this.state.sortData;
      var dirIsVisible = this.state.isVisible;

      if (dirIsVisible !== false) {
        if (dir[col] !== undefined) {
          if (dir[col] === 1) {
            return _react2.default.createElement(_reactFontawesome2.default, { style: { "fontSize": "1.5em", "marginLeft": "20px" }, name: 'sort-up' });
          } else {
            return _react2.default.createElement(_reactFontawesome2.default, { style: { "fontSize": "1.5em", "marginLeft": "20px" }, name: 'sort-down' });
          }
        } else {
          return null;
        }
      }
    }
  }, {
    key: '_changeDataOrder',
    value: function _changeDataOrder(columnkey) {
      var _props = this.props,
          onSortCallback = _props.onSortCallback,
          isServerSideSort = _props.isServerSideSort;

      // function createServerSideSort() {
      //   if (isServerSideSort) {
      //     if (typeof onSortCallback === "function") {
      //       onSortCallback()
      //     }
      //   }
      // }

      var direction = 0;
      var directionInWord = "";
      // console.log("FIRST ATTEMPT LOG COLUMN KEY: " + this.state.sortData[columnkey]);
      if (this.state.sortData[columnkey] >= 0 || this.state.sortData[columnkey] === undefined) {
        direction = -1;
        directionInWord = "DESC";
      } else {
        direction = 1;
        directionInWord = "ASC";
      }

      var copyOfServerSideSort = this.state.serverSideSortData;
      var columnIndex = _underscore2.default.findIndex(this.state.serverSideSortData, function (data) {
        return data.fieldName == columnkey;
      });
      // MULTIPLE SORTING 

      if (this.state.sortingIsActive === true) {
        this.setState({
          sortData: _extends({}, this.state.sortData, _defineProperty({}, columnkey, direction)),
          isVisible: true
        }, function () {
          if (isServerSideSort) {

            if (columnIndex === -1) {
              if (this.state.sortData[columnkey] === undefined) {
                copyOfServerSideSort.push({
                  fieldName: columnkey,
                  direction: directionInWord
                });
                this.setState({
                  serverSideSortData: copyOfServerSideSort
                }, function () {
                  if (onSortCallback) {
                    if (typeof onSortCallback === "function") {
                      onSortCallback(this.state.serverSideSortData);
                    }
                  }
                });
              } else {
                copyOfServerSideSort.push({
                  fieldName: columnkey,
                  direction: this.state.sortData[columnkey] === -1 ? "DESC" : "ASC"
                });

                if (onSortCallback) {
                  if (typeof onSortCallback === "function") {
                    onSortCallback(this.state.serverSideSortData);
                  }
                }
              }
            } else {
              if (copyOfServerSideSort[columnIndex].direction === "ASC") {
                copyOfServerSideSort[columnIndex].direction = "DESC";
              } else {
                copyOfServerSideSort[columnIndex].direction = "ASC";
              }

              this.setState({
                serverSideSortData: copyOfServerSideSort
              }, function () {
                if (onSortCallback) {
                  if (typeof onSortCallback === "function") {
                    onSortCallback(this.state.serverSideSortData);
                  }
                }
              });
            }
          } else {
            console.log("not server side sort");
            this.setState({
              data: this.getFieldsAndDirection(),
              copyOfData: this.getFieldsAndDirection()
            }, function () {
              this._handlePagination();
            });
          }

          // this._handlePagination()
          this.forceUpdate();
        });
      } else {
        this.setState({
          sortData: _defineProperty({}, columnkey, direction),
          isVisible: true
        }, function () {
          if (isServerSideSort) {
            this.setState({
              serverSideSortData: [{
                fieldName: columnkey,
                direction: directionInWord
              }]
            }, function () {
              // console.log(JSON.stringify(this.state.serverSideSortData))
              if (onSortCallback) {
                if (typeof onSortCallback === "function") {
                  onSortCallback(this.state.serverSideSortData);
                }
              }
            });
          } else {
            console.log("not server side sort");
            this.setState({
              data: this.getFieldsAndDirection(),
              copyOfData: this.getFieldsAndDirection()
            }, function () {
              this._handlePagination();
            });
          }

          this.forceUpdate();
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      this.state.columnOrder.map(function (columnKey, index) {
        // this._handleShowHide(this, columnKey.name)
        if (columnKey.isNotHidden) {
          this._showColumn(columnKey.name);
        } else {
          this._hideColumn(columnKey.name);
        }
      }, this);

      if (this.props.defaultSort) {
        this.setState({
          isVisible: true,
          data: this.state.copyOfData.sort((0, _sortby2.default)(this.props.defaultSort)),
          sortData: this.props.defaultSort
        }, function () {
          this._handlePagination();
        });
      }
    }
  }, {
    key: '_handlePagination',
    value: function _handlePagination(pageNumber) {
      var _props2 = this.props,
          isServerSidePagination = _props2.isServerSidePagination,
          onPaginationCallback = _props2.onPaginationCallback,
          defaultSortParameter = _props2.defaultSortParameter;

      console.log(pageNumber);
      this.setState({
        allSelected: false,
        activePage: pageNumber,
        listOfData: []
      }, function () {
        var page = this.state.activePage;
        var per_page = this.state.itemsPerPage;
        var offset = (page - 1) * per_page;
        var paginatedItems = _underscore2.default.rest(this.state.copyOfData, offset).slice(0, per_page);
        // let ShallowCopyOfList = this.state.data;
        console.log(paginatedItems);
        if (isServerSidePagination) {
          if (onPaginationCallback) {
            if (typeof onPaginationCallback === "function") {
              if (this.state.serverSideSortData.length !== 0) {
                onPaginationCallback({ page: page, itemsPerPage: per_page, sort: this.state.sortData });
              } else {
                onPaginationCallback({ page: page, itemsPerPage: per_page, sort: this.state.sortData });
              }
            }
          }
        } else {
          this.setState({
            data: paginatedItems
          }, function () {
            this.state.data = paginatedItems;
            this.forceUpdate();
          });
        }
        document.getElementsByName('checkboxHeader').checked = false;
      }, function () {
        this.forceUpdate();
      });
    }
  }, {
    key: '_handleInputPagination',
    value: function _handleInputPagination(event) {
      var _props3 = this.props,
          isServerSidePagination = _props3.isServerSidePagination,
          onPaginationCallback = _props3.onPaginationCallback,
          defaultSortParameter = _props3.defaultSortParameter;

      var value = event.target.value;
      var totalPageCount = Math.ceil(this.state.copyOfData.length / this.state.itemsPerPage);
      console.log(value);
      console.log(totalPageCount);
      console.log(totalPageCount >= value);
      console.log(0 < value);
      document.getElementsByName('checkboxHeader').checked = false;
      if (totalPageCount >= value && 0 < value) {
        this.setState({
          allSelected: false,
          activePage: value,
          listOfData: []
        }, function () {
          var page = this.state.activePage;
          var per_page = this.state.itemsPerPage;
          var offset = (page - 1) * per_page;
          var paginatedItems = _underscore2.default.rest(this.state.copyOfData, offset).slice(0, per_page);
          // let ShallowCopyOfList = this.state.data;
          if (isServerSidePagination) {
            if (onPaginationCallback) {
              if (typeof onPaginationCallback === "function") {
                if (this.state.serverSideSortData.length !== 0) {
                  onPaginationCallback({ page: page, itemsPerPage: per_page, sort: this.state.sortData });
                } else {
                  onPaginationCallback({ page: page, itemsPerPage: per_page, sort: this.state.sortData });
                }
              }
            }
          } else {
            this.setState({
              data: paginatedItems
            }, function () {
              this.state.data = paginatedItems;
              this.forceUpdate();
            });
          }
        }, function () {
          this.forceUpdate();
        });
      } else {
        // do nothing
        console.log("do nothing");
      }
    }
  }, {
    key: '_handleRowCount',
    value: function _handleRowCount(data) {
      this._handlePagination();
      this.setState({
        itemsPerPage: parseInt(data.value)
      }, function () {
        console.log(this.state.itemsPerPage);
        this.forceUpdate();
      });
    }
  }, {
    key: '_createCheckboxHeader',
    value: function _createCheckboxHeader(key, value) {
      return _react2.default.createElement(
        'div',
        { className: 'f4InputCheckbox checkbox' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', { key: key, name: 'checkboxHeader', checked: this.state.allSelected, type: "checkbox", onChange: this._selectAll })
        )
      );
    }
  }, {
    key: '_createCheckboxColumn',
    value: function _createCheckboxColumn(key, value) {
      var indexOfData = _underscore2.default.findLastIndex(this.state.listOfData, _defineProperty({}, this.props.uniqueKey, key));
      var isChecked = false;
      if (indexOfData > -1) {
        isChecked = true;
      } else {
        isChecked = false;
      }
      return _react2.default.createElement(
        'div',
        { className: 'f4InputCheckbox checkbox' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', { key: key, id: key, name: 'checkboxColumn', checked: isChecked, type: "checkbox", onChange: this._selectColumn, value: value })
        )
      );
    }
  }, {
    key: '_selectAll',
    value: function _selectAll(event) {
      var onSelectAllCallback = this.props.onSelectAllCallback;


      var checkboxHeader = document.getElementsByName('checkboxHeader');
      var checkBoxesList = document.getElementsByName('checkboxColumn');
      var data = [];
      var isChecked = false;

      for (var index = 0; index < checkBoxesList.length; index++) {
        checkBoxesList[index].checked = event.target.checked;
      }

      if (checkboxHeader[0].checked) {
        data = this.state.data;
      } else {
        data = [];
      }

      console.log(data);

      this.setState({
        allSelected: !this.state.allSelected,
        listOfData: data
      }, function () {
        if (typeof onSelectAllCallback === "function") {
          var total = 0;
          if (this.props.keyToBeSum) {
            for (var i = 0; i < this.state.listOfData.length; i++) {
              //loop through the array
              total += this.state.listOfData[i][this.props.keyToBeSum]; //Do the math!
            }
          }
          onSelectAllCallback(event, data, total);
        }
      });
    }
  }, {
    key: '_selectColumn',
    value: function _selectColumn(event) {
      var listOfData = this.state.listOfData;
      var onSingleSelect = this.props.onSingleSelect;

      var indexData = _underscore2.default.findLastIndex(this.state.data, _defineProperty({}, this.props.uniqueKey, event.target.id));
      var indexOfNewData = _underscore2.default.findLastIndex(listOfData, _defineProperty({}, this.props.uniqueKey, event.target.id));

      if (indexOfNewData > -1) {
        console.log("REMOVING DATA FROM THE LIST");
        listOfData.splice(indexOfNewData, 1);
        this.setState({
          listOfData: listOfData
        }, function () {
          var total = 0;
          if (this.props.keyToBeSum) {
            if (parseInt(this.state.data[indexData][this.props.keyToBeSum]) !== NaN) {
              for (var i = 0; i < this.state.listOfData.length; i++) {
                //loop through the array
                total += this.state.listOfData[i][this.props.keyToBeSum]; //Do the math!
              }
            }
          }
          if (typeof onSingleSelect === "function") {
            onSingleSelect(event, this.state.listOfData, total);
          }
        });
      } else {
        listOfData.push(this.state.data[indexData]);
        this.setState({
          listOfData: listOfData
        }, function () {
          var total = 0;
          if (this.props.keyToBeSum) {
            if (parseInt(this.state.data[indexData][this.props.keyToBeSum]) !== NaN) {
              for (var i = 0; i < this.state.listOfData.length; i++) {
                //loop through the array
                total += this.state.listOfData[i][this.props.keyToBeSum]; //Do the math!
              }
            }
          }
          if (typeof onSingleSelect === "function") {
            onSingleSelect(event, this.state.listOfData, total);
          }
        });
      }

      console.log(listOfData);

      // - [x] push data on list
      // - [x] find data on list
      // - [x] remove data on list
    }
  }, {
    key: '_createToolTip',
    value: function _createToolTip(text) {
      return _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'tooltip' },
        text
      );
    }
  }, {
    key: '_createCell',
    value: function _createCell(column, props) {

      var self = this;
      if (column.type === "text") {
        if (column.tooltip) {
          return _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            { placement: 'bottom', overlay: this._createToolTip(this.state.data[props.rowIndex][column.tooltipTarget]) },
            _react2.default.createElement(
              'div',
              { className: "F4DataTableCell", style: { "float": column.textAlign, "height": this.props.rowHeight } },
              _react2.default.createElement(
                _fixedDataTable.Cell,
                null,
                ' ',
                this.state.data[props.rowIndex][column.name],
                ' '
              )
            )
          );
        }
        return _react2.default.createElement(
          'div',
          { style: { "float": column.textAlign } },
          _react2.default.createElement(
            _fixedDataTable.Cell,
            null,
            ' ',
            this.state.data[props.rowIndex][column.name],
            ' '
          )
        );
      }
      if (column.type === "image") {
        if (column.tooltip) {
          return _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            { placement: 'bottom', overlay: this._createToolTip(this.state.data[props.rowIndex][column.tooltipTarget]) },
            _react2.default.createElement(_DataTableCell.ImageCell, { src: this.state.data[props.rowIndex][column.name] })
          );
        }

        return _react2.default.createElement(_DataTableCell.ImageCell, { src: this.state.data[props.rowIndex][column.name] });
      }
      if (column.type === "link") {
        if (column.tooltip) {
          return _react2.default.createElement(
            _reactBootstrap.OverlayTrigger,
            { placement: 'bottom', overlay: this._createToolTip(this.state.data[props.rowIndex][column.tooltipTarget]) },
            _react2.default.createElement(
              _DataTableCell.LinkCell,
              { link: this.state.data[props.rowIndex][column.name] },
              _react2.default.createElement(
                'div',
                { style: { "float": column.textAlign } },
                this.state.data[props.rowIndex][column.name]
              )
            )
          );
        }

        return _react2.default.createElement(
          _DataTableCell.LinkCell,
          { link: "mailto:" + this.state.data[props.rowIndex][column.name] },
          _react2.default.createElement(
            'div',
            { style: { "float": column.textAlign } },
            this.state.data[props.rowIndex][column.name]
          )
        );
      }
    }
  }, {
    key: '_copyToClipBoard',
    value: function _copyToClipBoard() {
      // var textRange = document.createRange(); 
      // console.log(textRange);
      var arr = [];
      this.state.copyOfColumnOrder.map(function (data, index) {
        if (data.name === "") {} else {
          arr.push(data.name);
        }
      });

      // // console.log(arr[0].toString());

      // for (let listIndex = 0; listIndex < arr.length; listIndex++) {
      //   // const element = array[index];
      //   console.log(arr[listIndex])
      //   for (let dataIndex = 0; dataIndex < this.state.data.length; dataIndex++) {

      //     console.log(this.state.data[dataIndex][arr[listIndex]])
      //   }
      // }

      return json2csv({ data: this.state.data, fields: arr });
      // textRange.moveToElementText(document.getElementById("f4DataTable")); 
      // textRange.execCommand("Copy");
    }
  }, {
    key: '_clickAbstractCell',
    value: function _clickAbstractCell(props, event) {}
  }, {
    key: '_createPopOver',
    value: function _createPopOver() {
      return _react2.default.createElement(
        _reactBootstrap.Popover,
        { id: 'popover-positioned-bottom', title: '' },
        _react2.default.createElement(
          _Row2.default,
          { className: 'hide-columns' },
          _react2.default.createElement(
            _Col2.default,
            { md: 12 },
            this._renderFilterService()
          ),
          _react2.default.createElement(
            _Col2.default,
            { md: 12, style: { "marginTop": "20px" } },
            this.state.copyOfColumnOrder.map(function (columnKey, index) {
              return _react2.default.createElement(
                _Col2.default,
                { md: 6, key: index, className: 'f4InputCheckbox checkbox' },
                _react2.default.createElement(
                  'label',
                  null,
                  _react2.default.createElement('input', { type: 'checkbox', defaultChecked: columnKey.isNotHidden, onChange: this._handleShowHide.bind(this, columnKey.name) }),
                  columnKey.headerTitle || columnKey.name
                )
              );
            }, this)
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var self = this;
      this.props.dataTableRef(self);

      var _props4 = this.props,
          height = _props4.height,
          width = _props4.width,
          containerHeight = _props4.containerHeight,
          containerWidth = _props4.containerWidth,
          props = _objectWithoutProperties(_props4, ['height', 'width', 'containerHeight', 'containerWidth']);

      return _react2.default.createElement(
        'div',
        {
          className: 'App',
          onKeyDown: this._keyDown,
          onKeyUp: this._keyUp
        },
        _react2.default.createElement(
          _DataTable2.default,
          _extends({
            id: 'f4DataTable',
            headerHeight: this.props.headerHeight,
            rowsCount: this.state.data.length,
            onColumnReorderEndCallback: this._onColumnReorderEndCallback,
            onColumnResizeEndCallback: this._onColumnResizeEndCallback,
            subRowHeightGetter: this._subRowHeightGetter,
            rowExpanded: this._rowExpandedGetter,
            rowHeight: this.props.rowHeight,
            isColumnReordering: false,
            isColumnResizing: false
            // width={this.props.tableWidth} 
            // height={this.props.tableHeight}
            , width: this.props.containerWidth,
            height: this.props.containerHeight
          }, this.props),
          this.props.hasSelectAll ? _react2.default.createElement(_fixedDataTable.Column, {
            header: _react2.default.createElement(
              _fixedDataTable.Cell,
              null,
              this._createCheckboxHeader()
            ),
            cell: function cell(props) {
              return _react2.default.createElement(
                _fixedDataTable.Cell,
                props,
                _this4.state.data.length !== 0 ? _this4._createCheckboxColumn(_this4.state.data[props.rowIndex][[_this4.props.uniqueKey]], _this4.state.data[props.rowIndex]) : null
              );
            },
            fixed: true,
            width: 30
          }) : null,
          this.props.hasExpandable ? _react2.default.createElement(_fixedDataTable.Column, {
            cell: _react2.default.createElement(_DataTableCell.CollapseCell, { data: this.state.data, callback: this._handleCollapseClick, collapsedRows: this.state.collapsedRows }),
            fixed: true,
            width: 30
          }) : null,
          this.state.columnOrder.map(function (columnKey, index) {
            return _react2.default.createElement(_fixedDataTable.Column, {
              allowCellsRecycling: true,
              columnKey: columnKey.name,
              key: index,
              isReorderable: columnKey.isReorderable,
              isResizable: columnKey.isResizable,
              width: columnKey.width,
              fixed: columnKey.fixed,
              flexGrow: 1,
              header: _react2.default.createElement(
                _fixedDataTable.Cell,
                {
                  onClick: function onClick() {
                    columnKey.isSortable ? self._changeDataOrder(columnKey.name) : console.log("not sortable");
                  },
                  style: columnKey.isSortable ? { "cursor": "pointer", "textTransform": "uppercase" } : { "cursor": "default" }

                },
                _react2.default.createElement(
                  'span',
                  null,
                  columnKey.headerTitle,
                  self._handleFieldsDirection(columnKey.name)
                )
              ),
              cell: columnKey.cell ? columnKey.cell : self._createCell.bind(self, columnKey)

            });
          }),
          this.props.children
        ),
        _react2.default.createElement(
          _Col2.default,
          _defineProperty({ md: 12, style: { margin: "0" } }, 'style', { "width": containerWidth }),
          Math.ceil(this.state.copyOfData.length) === 1 ? null : _react2.default.createElement(_reactJsPagination2.default, {
            prevPageText: '<',
            nextPageText: '>',
            firstPageText: '<<',
            lastPageText: '>>',
            activePage: this.state.activePage,
            itemsCountPerPage: this.state.itemsPerPage,
            totalItemsCount: Math.ceil(this.state.copyOfData.length),
            onChange: this._handlePagination
          }),
          _react2.default.createElement(
            _Col2.default,
            { md: 3, className: 'pagination' },
            _react2.default.createElement(
              _Col2.default,
              { md: 6 },
              _react2.default.createElement('input', { className: 'f4InputField form-control', style: { width: "100%" }, type: 'number', onChange: this._handleInputPagination })
            ),
            _react2.default.createElement(
              _Col2.default,
              { md: 6 },
              _react2.default.createElement(_reactSelect2.default, { onChange: this._handleRowCount, value: this.state.itemsPerPage, options: this.props.listOfItemPerPage })
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'f4DataTable-total-count' },
            "Selected " + this.state.listOfData.length + ", Total Count " + this.state.copyOfData.length
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 12 },
            _react2.default.createElement(
              _reactBootstrap.OverlayTrigger,
              { trigger: 'click', placement: 'bottom', overlay: this._createPopOver() },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-link' },
                _react2.default.createElement(_reactFontawesome2.default, { name: "gear" })
              )
            ),
            _react2.default.createElement(
              _reactClipboard2.default,
              { className: 'btn btn-link', 'option-text': this._copyToClipBoard },
              _react2.default.createElement(_reactFontawesome2.default, { name: "copy" })
            )
          )
        )
      );
    }
  }]);

  return F4DataTable;
}(_react.Component);

exports.default = Dimensions()(F4DataTable);
module.exports = exports['default'];