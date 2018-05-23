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

var _reactDazzle = require('react-dazzle');

var _reactDazzle2 = _interopRequireDefault(_reactDazzle);

var _F4Customframe = require('./F4Customframe');

var _F4Customframe2 = _interopRequireDefault(_F4Customframe);

var _F4Addwidgetdialog = require('./F4Addwidgetdialog');

var _F4Addwidgetdialog2 = _interopRequireDefault(_F4Addwidgetdialog);

var _reactBootstrap = require('react-bootstrap');

var _reactBootstrap2 = _interopRequireDefault(_reactBootstrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4Dashboard.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4Dashboard = function (_Component) {
  _inherits(F4Dashboard, _Component);

  function F4Dashboard(props) {
    _classCallCheck(this, F4Dashboard);

    // let layout = this.props.loadLayout();

    var _this = _possibleConstructorReturn(this, (F4Dashboard.__proto__ || Object.getPrototypeOf(F4Dashboard)).call(this, props));

    _this.setLayout = function (layout) {
      if (layout) {
        _this.setState({ layout: layout });
      }
    };

    _this.onRemove = function (layout) {
      _this.setState({
        layout: layout
      });

      _this.props.saveLayout(layout);
    };

    _this.onMove = function (layout) {
      _this.setState({
        layout: layout
      });

      _this.props.saveLayout(layout);
    };

    _this.handleWidgetSelection = function (widgetName) {
      var _this$state$addWidget = _this.state.addWidgetOptions,
          rowIndex = _this$state$addWidget.rowIndex,
          columnIndex = _this$state$addWidget.columnIndex;
      var toAddWidgets = _this.state.toAddWidgets;


      var index = -1;
      for (var i = 0; i < toAddWidgets.length; i++) {
        if (toAddWidgets[i] === widgetName) {
          index = i;
          break;
        }
      }

      if (index === -1) {
        toAddWidgets.push(widgetName);
      } else {
        toAddWidgets.splice(index, 1);
      }

      // Close the dialogbox
      _this.onRequestClose();
    };

    _this.handleWidgetOnSubmit = function () {
      var _this$state$addWidget2 = _this.state.addWidgetOptions,
          rowIndex = _this$state$addWidget2.rowIndex,
          columnIndex = _this$state$addWidget2.columnIndex;
      var _this$state = _this.state,
          layout = _this$state.layout,
          toAddWidgets = _this$state.toAddWidgets;


      var exists = false;
      var newLayout = layout;

      var rows = layout.rows;
      for (var i = 0; i < toAddWidgets.length; i++) {
        var widgetName = toAddWidgets[i];

        for (var row = 0; row < rows.length; row++) {
          var cols = rows[row].columns;
          for (var col = 0; col < cols.length; col++) {
            var widgets = cols[col].widgets;
            for (var widget = 0; widget < widgets.length; widget++) {
              if (widgets[widget] && widgets[widget].key === widgetName) {
                exists = true;
                newLayout.rows[row].columns[col].widgets.splice(widget, 1);
              }
            }
          }
        }

        if (!exists) {
          //TEST
          var columns = newLayout.rows[0].columns;
          var ci = 0;
          if (columns[0].widgets.length > columns[1].widgets.length) {
            ci = 1;
          }
          newLayout = (0, _reactDazzle.addWidget)(newLayout, rowIndex, ci, widgetName);
        }
        exists = false;
      }

      console.log(toAddWidgets);

      _this.setState({
        toAddWidgets: [],
        layout: newLayout
      });
      _this.props.saveLayout(newLayout);
    };

    _this.onRequestClose = function () {
      _this.setState({
        isModalOpen: false
      });
    };

    _this.onAdd = function (layout, rowIndex, columnIndex) {
      // Open the AddWidget dialog by seting the 'isModalOpen' to true.
      // Also preserve the details such as the layout, rowIndex, and columnIndex  in 'addWidgetOptions'.
      //  This will be used later when user picks a widget to add.
      _this.setState({
        // isModalOpen: true,
        addWidgetOptions: {
          layout: layout,
          rowIndex: rowIndex,
          columnIndex: columnIndex
        }
      });
    };

    _this.getSelectedWidgets = function () {
      var layout = _this.state.layout;
      var selectedWidgets = [];

      var rows = layout.rows;
      for (var row = 0; row < rows.length; row++) {
        var cols = rows[row].columns;
        for (var col = 0; col < cols.length; col++) {
          var widgets = cols[col].widgets;
          for (var widget = 0; widget < widgets.length; widget++) {
            if (widgets[widget] && widgets[widget].key) {
              selectedWidgets.push(widgets[widget].key);
            }
          }
        }
      }

      return selectedWidgets;
    };

    var modelStore = _this.props.modelStore;

    _this.state = {
      layout: _this.props.layout,
      isModalOpen: _this.props.isModalOpen,
      addWidgetOptions: null,
      toAddWidgets: []
    };
    return _this;
  }

  _createClass(F4Dashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadLayout(this.setLayout);
    }
    // start test


    /**
     * When user selects a widget from the modal dialog, this will be called.
     * By calling the 'addWidget' method, the widget could be added to the previous requested location.
     */


    /**
     * This will be called when user tries to close the modal dialog.
     */

    /**
     * Adds new widget.
     */

  }, {
    key: 'render',
    value: function render() {
      var modelStore = this.props.modelStore;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_F4Addwidgetdialog2.default, {
          widgets: this.props.widgets,
          isModalOpen: this.props.isModalOpen,
          onRequestClose: this.onRequestClose,
          onWidgetSelect: this.handleWidgetSelection,
          modelStore: modelStore,
          addWidgetComponentText: this.props.buttonName,
          selectedWidgets: this.getSelectedWidgets(),
          onSubmit: this.handleWidgetOnSubmit
        }),
        _react2.default.createElement(_reactDazzle2.default, {
          addWidgetComponent: function addWidgetComponent(_ref) {
            var onClick = _ref.onClick,
                text = _ref.text;

            modelStore.onClickAdd = onClick;
            return null;
          },
          frameComponent: _F4Customframe2.default,
          widgets: this.props.widgets //working
          , layout: this.state.layout //working
          , editable: modelStore.editable //working
          , onRemove: this.onRemove,
          onMove: this.onMove,
          onAdd: this.onAdd

        })
      );
    }
  }]);

  return F4Dashboard;
}(_react.Component);

F4Dashboard.propTypes = {
  // props definition
  loadLayout: _propTypes2.default.func.isRequired,
  saveLayout: _propTypes2.default.func.isRequired
};

F4Dashboard.defaultProps = {
  // default props
  buttonName: "Configure Dashboard",

  layout: {
    rows: [{
      columns: [{
        className: 'col-md-7',
        widgets: []
      }, {
        className: 'col-md-5',
        widgets: []
      }]
    }]
  },
  isModalOpen: false,
  addWidgetOptions: null

};

exports.default = F4Dashboard;
module.exports = exports['default'];