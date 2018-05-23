'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp, _initialiseProps; /**
                                              * F4ListView.js
                                              */

/**
* References:
* https://react-bootstrap.github.io/components/table/
* https://github.com/clauderic/react-sortable-hoc
* 
* @observable listViewUpdate - listViewUpdate(newData)
* @observable listViewGetData - listViewGetData()
*/

// import {Table, Column, Cell} from 'fixed-data-table-2';
// import 'fixed-data-table-2/dist/fixed-data-table.css';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _reactSortableHoc = require('react-sortable-hoc');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4ListView = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
  _inherits(F4ListView, _Component);

  function F4ListView(props) {
    _classCallCheck(this, F4ListView);

    var _this = _possibleConstructorReturn(this, (F4ListView.__proto__ || Object.getPrototypeOf(F4ListView)).call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        data = _this$props.data,
        store = _this$props.store;

    _this.state = {
      data: data,
      holders: _this.getEmptyArray(data.length)

      //stores
    };if (store) {
      store.listViewUpdate = function (data) {
        _this.setState({ data: data });
      };

      store.listViewGetData = function () {
        return _this.state.data;
      };
      store.listViewAddRow = _this.addRow;
      store.listViewGetHolders = _this.getHolders;
    }
    return _this;
  }

  _createClass(F4ListView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isSortableRow = _props.isSortableRow,
          draggedRowClassName = _props.draggedRowClassName,
          sortableContainer = _props.sortableContainer,
          buttonLabelComponent = _props.buttonLabelComponent,
          addRowData = _props.addRowData,
          onAddRow = _props.onAddRow,
          title = _props.title;

      var holders = this.state.holders.slice();

      return _react2.default.createElement(
        'div',
        null,
        title,
        isSortableRow ? _react2.default.createElement(
          SortableTable,
          _extends({ onSortEnd: this.onSortEnd, useDragHandle: true }, sortableContainer, { helperClass: (0, _classnames2.default)("f4ListView_draggedRow", draggedRowClassName) }),
          this.getTable()
        ) : this.getTable(),
        _react2.default.createElement(
          _reactBootstrap.Button,
          { onClick: function onClick() {
              _this2.addRow(addRowData);

              holders.push({});
              _this2.setState({ holders: holders });

              if (onAddRow) onAddRow(addRowData);
            } },
          buttonLabelComponent
        )
      );
    }
  }]);

  return F4ListView;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getEmptyArray = function (size) {
    var arr = [];
    for (var i = 0; i < size; i++) {
      arr.push({});
    }
    return arr;
  };

  this.getHolder = function (rowIndex) {
    _this3.getHolders()[rowIndex];
  };

  this.updateHolder = function (rowIndex, key, data) {
    var holders = _this3.state.holders.slice();

    holders[rowIndex][key] = data;

    _this3.setState({ holders: holders });
  };

  this.updateHolders = function (rowIndex, dataArr) {
    var holders = _this3.state.holders.slice();

    if (dataArr) {
      for (var i = 0; i < dataArr.length; i++) {
        var data = dataArr[i];
        holders[rowIndex][data.key] = data.value;
      }
    }

    _this3.setState({ holders: holders });
  };

  this.getHolders = function () {
    return _this3.state.holders;
  };

  this.addRow = function (row) {
    if (!row) return;

    var data = _this3.state.data;
    data.push(row);
    _this3.setState({ data: data });
  };

  this.getTableHeader = function () {
    var _props2 = _this3.props,
        cols = _props2.cols,
        hasArrows = _props2.hasArrows,
        isSortableRow = _props2.isSortableRow,
        thClassName = _props2.thClassName,
        trClassName = _props2.trClassName,
        hasDeleteButton = _props2.hasDeleteButton;


    return _react2.default.createElement(
      'tr',
      { className: (0, _classnames2.default)("f4ListView_tr", trClassName) },
      isSortableRow ? _react2.default.createElement('th', { className: (0, _classnames2.default)("f4ListView_th", thClassName) }) : null,
      cols.map(function (data, key) {
        return _react2.default.createElement(
          'th',
          { className: (0, _classnames2.default)("f4ListView_th", thClassName), key: key },
          data.headerCell ? data.headerCell(data) : data.title
        );
      }),
      hasArrows ? _react2.default.createElement('th', null) : null,
      hasDeleteButton ? _react2.default.createElement('th', null) : null
    );
  };

  this.getTableRow = function (dataData, dk) {
    var _props3 = _this3.props,
        cols = _props3.cols,
        tdClassName = _props3.tdClassName,
        trClassName = _props3.trClassName,
        hasArrows = _props3.hasArrows,
        hasDeleteButton = _props3.hasDeleteButton,
        isSortableRow = _props3.isSortableRow,
        dragHandleClassName = _props3.dragHandleClassName,
        tdDragHandleClassName = _props3.tdDragHandleClassName,
        sortableElement = _props3.sortableElement;
    var data = _this3.state.data;


    var cellProps = { rowIndex: dk, row: dataData, data: data, update: function update(data) {
        return _this3.setState(data);
      },
      updateHolder: function updateHolder(key, data) {
        return _this3.updateHolder(dk, key, data);
      }, holder: _this3.getHolder(dk),
      updateHolders: function updateHolders(data) {
        return _this3.updateHolders(dk, data);
      } };

    if (isSortableRow) {
      return _react2.default.createElement(
        SortableItem,
        { index: dk, key: "sr-" + dk },
        _react2.default.createElement(
          'tr',
          _extends({ key: "dk-" + dk }, sortableElement, { className: (0, _classnames2.default)("f4ListView_tr", trClassName) }),
          _react2.default.createElement(
            'td',
            { className: (0, _classnames2.default)("f4ListView_td", "f4ListView_td_dragHandle", tdClassName, tdDragHandleClassName) },
            _react2.default.createElement(DragHandle, { dragHandleClassName: dragHandleClassName })
          ),
          cols.map(function (colsData, ck) {
            return _react2.default.createElement(
              'td',
              { className: (0, _classnames2.default)("f4ListView_td", colsData.isRightAligned ? "f4ListView_rightAligned" : null, tdClassName), key: "dk-" + dk + ",ck-" + ck },
              _react2.default.createElement(
                'div',
                { style: colsData.cellStyle, className: (0, _classnames2.default)("f4ListView_td_div", colsData.tdDivClassName) },
                colsData.cell ? colsData.cell(_extends({ colIndex: ck }, cellProps)) : dataData[colsData.dataKey]
              )
            );
          }),
          hasArrows ? _this3.getArrows(dk) : null,
          hasDeleteButton ? _this3.getDeleteButton(dk) : null
        )
      );
    } else {
      return _react2.default.createElement(
        'tr',
        { key: "dk-" + dk, className: (0, _classnames2.default)("f4ListView_tr", trClassName) },
        cols.map(function (colsData, ck) {
          return _react2.default.createElement(
            'td',
            { className: (0, _classnames2.default)("f4ListView_td", tdClassName), key: "dk-" + dk + ",ck-" + ck },
            _react2.default.createElement(
              'div',
              { style: colsData.cellStyle, className: (0, _classnames2.default)("f4ListView_td_div", colsData.tdDivClassName) },
              colsData.cell ? colsData.cell(_extends({ colIndex: ck }, cellProps)) : dataData[colsData.dataKey]
            )
          );
        }),
        hasArrows ? _this3.getArrows(dk) : null,
        hasDeleteButton ? _this3.getDeleteButton(dk) : null
      );
    }
  };

  this.getTableBody = function () {
    var isSortableRow = _this3.props.isSortableRow;
    var data = _this3.state.data;


    if (!data) return;

    return data.map(function (dataData, dk) {
      return _this3.getTableRow(dataData, dk);
    });
  };

  this.getDeleteButton = function (index) {
    var _props4 = _this3.props,
        deleteButtonClassName = _props4.deleteButtonClassName,
        tdDeleteButtonClassName = _props4.tdDeleteButtonClassName,
        tdClassName = _props4.tdClassName;


    return _react2.default.createElement(
      'td',
      { className: (0, _classnames2.default)("f4ListView_td", "f4ListView_td_deleteButton", tdClassName, tdDeleteButtonClassName) },
      _react2.default.createElement(
        _reactBootstrap.Button,
        { bsStyle: 'link', className: (0, _classnames2.default)("f4ListView_deleteButton", deleteButtonClassName), onClick: function onClick() {
            var data = _this3.state.data.slice();
            data.splice(index, 1);

            var holders = _this3.state.holders.slice();
            holders.splice(index, 1);

            _this3.setState({ data: data, holders: holders });
          } },
        _react2.default.createElement('i', { className: 'fa fa-times' })
      )
    );
  };

  this.getArrows = function (index) {
    var _props5 = _this3.props,
        tdClassName = _props5.tdClassName,
        tdArrowsClassName = _props5.tdArrowsClassName;
    var data = _this3.state.data;


    return _react2.default.createElement(
      'td',
      { className: (0, _classnames2.default)("f4ListView_td", "f4ListView_td_arrows", tdClassName, tdArrowsClassName) },
      _react2.default.createElement(
        'div',
        null,
        index < data.length - 1 ? _this3.getDownArrow(index) : null,
        index > 0 ? _this3.getUpArrow(index) : null
      )
    );
  };

  this.getDownArrow = function (index) {
    var downArrowClassName = _this3.props.downArrowClassName;

    var data = _this3.state.data.slice();
    var holders = _this3.state.holders.slice();

    return _react2.default.createElement(
      _reactBootstrap.Button,
      { bsStyle: 'link', className: (0, _classnames2.default)("f4ListView_downArrow", downArrowClassName), onClick: function onClick() {
          var temp = data[index];
          data[index] = data[index + 1];
          data[index + 1] = temp;

          var temp2 = holders[index];
          holders[index] = holders[index + 1];
          holders[index + 1] = temp2;

          _this3.setState({ data: data, holders: holders });
        } },
      _react2.default.createElement('i', { className: 'fa fa-arrow-down' })
    );
  };

  this.getUpArrow = function (index) {
    var upArrowClassName = _this3.props.upArrowClassName;

    var data = _this3.state.data.slice();
    var holders = _this3.state.holders.slice();

    return _react2.default.createElement(
      _reactBootstrap.Button,
      { bsStyle: 'link', className: (0, _classnames2.default)("f4ListView_upArrow", upArrowClassName), onClick: function onClick() {
          var temp = data[index];
          data[index] = data[index - 1];
          data[index - 1] = temp;

          var temp2 = holders[index];
          holders[index] = holders[index - 1];
          holders[index - 1] = temp2;

          _this3.setState({ data: data, holders: holders });
        } },
      _react2.default.createElement('i', { className: 'fa fa-arrow-up' })
    );
  };

  this.onSortEnd = function (_ref) {
    var oldIndex = _ref.oldIndex,
        newIndex = _ref.newIndex;

    _this3.setState({
      data: (0, _reactSortableHoc.arrayMove)(_this3.state.data, oldIndex, newIndex),
      holders: (0, _reactSortableHoc.arrayMove)(_this3.state.holders, oldIndex, newIndex)
    });
  };

  this.getTable = function () {
    var _props6 = _this3.props,
        table = _props6.table,
        cols = _props6.cols,
        tableClassName = _props6.tableClassName,
        theadClassName = _props6.theadClassName,
        tbodyClassName = _props6.tbodyClassName,
        hasHeader = _props6.hasHeader,
        NoContentComponent = _props6.NoContentComponent;
    var data = _this3.state.data;

    // if (data && data.length !== 0) {
    //   return <Table striped bordered responsive {...table} className={classNames("f4ListView_table", tableClassName)}>
    //   {hasHeader ? <thead className={classNames("f4ListView_thead", theadClassName)}>
    //     {this.getTableHeader()}
    //   </thead> : null}
    //   <tbody className={classNames("f4ListView_tbody", tbodyClassName)}>
    //     {this.getTableBody()}
    //   </tbody>
    // </Table>
    // } else {
    //   if (NoContentComponent) {
    //     return NoContentComponent;
    //   } else return null;
    // }

    return _react2.default.createElement(
      _reactBootstrap.Table,
      _extends({ striped: true, bordered: true, responsive: true }, table, { className: (0, _classnames2.default)("f4ListView_table", tableClassName) }),
      hasHeader ? _react2.default.createElement(
        'thead',
        { className: (0, _classnames2.default)("f4ListView_thead", theadClassName) },
        _this3.getTableHeader()
      ) : null,
      _react2.default.createElement(
        'tbody',
        { className: (0, _classnames2.default)("f4ListView_tbody", tbodyClassName) },
        _this3.getTableBody()
      )
    );
  };
}, _temp)) || _class;

var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref2) {
  var dragHandleClassName = _ref2.dragHandleClassName;
  return _react2.default.createElement('i', { className: (0, _classnames2.default)("fa fa-bars", "f4ListView_dragHandle", dragHandleClassName) });
});

var SortableTable = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
  var children = _ref3.children;

  return children;
});

var SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref4) {
  var children = _ref4.children;

  return children;
});

F4ListView.propTypes = {
  table: _propTypes2.default.object,
  data: _propTypes2.default.array.isRequired,
  cols: _propTypes2.default.array.isRequired,
  store: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
  NoContentComponent: _propTypes2.default.object,
  buttonLabelComponent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  sortableContainer: _propTypes2.default.object,
  sortableElement: _propTypes2.default.object,
  title: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  onAddRow: _propTypes2.default.func,

  isSortableRow: _propTypes2.default.bool,
  hasArrows: _propTypes2.default.bool,
  hasHeader: _propTypes2.default.bool,
  hasDeleteButton: _propTypes2.default.bool,

  tdDeleteButtonClassName: _propTypes2.default.string,
  deleteButtonClassName: _propTypes2.default.string,
  dragHandleClassName: _propTypes2.default.string,
  upArrowClassName: _propTypes2.default.string,
  downArrowClassName: _propTypes2.default.string,
  tableClassName: _propTypes2.default.string,
  theadClassName: _propTypes2.default.string,
  tbodyClassName: _propTypes2.default.string,
  trClassName: _propTypes2.default.string,
  tdClassName: _propTypes2.default.string,
  thClassName: _propTypes2.default.string,
  draggedRowClassName: _propTypes2.default.string,
  tdDragHandleClassName: _propTypes2.default.string,
  tdArrowsClassName: _propTypes2.default.string
};

F4ListView.defaultProps = {
  hasHeader: true,
  isSortableRow: true,
  hasArrows: true,
  hasDeleteButton: true,
  buttonLabelComponent: "Add Row"
  // default props
};

exports.default = F4ListView;
module.exports = exports['default'];