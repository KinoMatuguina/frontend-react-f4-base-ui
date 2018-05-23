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

var _frontendReactF4BaseCommons = require('frontend-react-f4-base-commons');

var _reactBootstrap = require('react-bootstrap');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4Addwidgetdialog.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var connect = _frontendReactF4BaseCommons.BaseContext.connect;

var F4Addwidgetdialog = function (_Component) {
  _inherits(F4Addwidgetdialog, _Component);

  function F4Addwidgetdialog(props) {
    _classCallCheck(this, F4Addwidgetdialog);

    var _this = _possibleConstructorReturn(this, (F4Addwidgetdialog.__proto__ || Object.getPrototypeOf(F4Addwidgetdialog)).call(this, props));

    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCheckbox = _this.handleCheckbox.bind(_this);
    _this.handleSelectAll = _this.handleSelectAll.bind(_this);
    var _this$props = _this.props,
        addWidgetComponentText = _this$props.addWidgetComponentText,
        onClick = _this$props.onClick,
        widgets = _this$props.widgets,
        isModalOpen = _this$props.isModalOpen,
        onRequestClose = _this$props.onRequestClose,
        onWidgetSelect = _this$props.onWidgetSelect;


    _this.state = {
      show: isModalOpen,
      selectedWidgets: []
    };
    return _this;
  }

  _createClass(F4Addwidgetdialog, [{
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.onSubmit();
      this.handleClose();
      this.props.alert.success(_react2.default.createElement(
        'div',
        { style: { textAlign: 'center' } },
        'Dashboard Updated!'
      ));
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ show: this.props.show });
    }
  }, {
    key: 'handleShow',
    value: function handleShow() {
      this.setState({
        show: !this.props.show,
        selectedWidgets: this.props.selectedWidgets
      });
    }
  }, {
    key: 'handleSelectAll',
    value: function handleSelectAll() {
      var _props = this.props,
          widgets = _props.widgets,
          onWidgetSelect = _props.onWidgetSelect;
      var selectedWidgets = this.state.selectedWidgets;


      var newSelectedWidgets = selectedWidgets;
      var index = void 0;

      if (Object.keys(widgets).length !== selectedWidgets.length) {
        Object.keys(widgets).forEach(function (widget, key) {
          index = -1;
          for (var i = 0; i < selectedWidgets.length; i++) {
            if (selectedWidgets[i] === widget) {
              index = i;
            }
          }
          if (index === -1) {
            newSelectedWidgets.push(widget);
            onWidgetSelect(widget);
          }
        });
      } else {
        Object.keys(widgets).forEach(function (widget, key) {
          index = -1;
          for (var i = 0; i < selectedWidgets.length; i++) {
            if (selectedWidgets[i] === widget) {
              index = i;
            }
          }
          if (index !== -1) {
            newSelectedWidgets.splice(index, 1);
            onWidgetSelect(widget);
          }
        });
      }

      this.setState({
        selectedWidgets: newSelectedWidgets
      });
    }
  }, {
    key: 'handleCheckbox',
    value: function handleCheckbox(widget) {
      var selectedWidgets = this.state.selectedWidgets;
      var onWidgetSelect = this.props.onWidgetSelect;


      var newSelectedWidgets = selectedWidgets;
      var exists = false;
      var index = -1;
      for (var i = 0; i < selectedWidgets.length; i++) {
        if (selectedWidgets[i] === widget) {
          index = i;
        }
      }
      if (index !== -1) {
        newSelectedWidgets.splice(index, 1);
      } else {
        newSelectedWidgets.push(widget);
      }

      console.log(index);

      this.setState({
        selectedWidgets: newSelectedWidgets
      });
      onWidgetSelect(widget);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          addWidgetComponentText = _props2.addWidgetComponentText,
          onClick = _props2.onClick,
          widgets = _props2.widgets,
          isModalOpen = _props2.isModalOpen,
          onRequestClose = _props2.onRequestClose,
          onWidgetSelect = _props2.onWidgetSelect,
          modelStore = _props2.modelStore;
      var selectedWidgets = this.state.selectedWidgets;

      var widgetItems = Object.keys(widgets).map(function (widget, key) {
        return _react2.default.createElement(
          _Col2.default,
          { xs: 6, md: 6 },
          _react2.default.createElement(
            _reactBootstrap.Checkbox,
            { checked: selectedWidgets.includes(widget), inline: 'true', onClick: function onClick() {
                return _this2.handleCheckbox(widget);
              } },
            widgets[widget].title
          )
        );
      });
      var configureDashboardTip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'configureDashboardTip' },
        _react2.default.createElement(
          'strong',
          null,
          'Add/Remove Widget'
        )
      );
      var ShowinDashboardTip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'configureDashboardTip' },
        _react2.default.createElement(
          'strong',
          null,
          'Show in Dashboard'
        )
      );
      // console.log("selected:",selectedWidgets.length);
      // console.log("widgets:",widgets.length);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'btnConfigure' },
            _react2.default.createElement(
              _reactBootstrap.OverlayTrigger,
              { placement: 'right', trigger: ['hover'], overlay: configureDashboardTip },
              _react2.default.createElement(
                _reactBootstrap.Button,
                { bsStyle: 'default', bsSize: 'small', onClick: function onClick() {
                    _this2.handleShow();
                    modelStore.onClickAdd();
                  } },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'fas fa-wrench' }),
                addWidgetComponentText
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { bsSize: 'large', show: this.state.show, onHide: this.handleClose },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              { closeButton: true, bsStyle: 'danger' },
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                'Add Widgets'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              _react2.default.createElement(
                _reactBootstrap.Checkbox,
                { className: 'selectAllCheck', checked: selectedWidgets.length === Object.keys(widgets).length, onClick: this.handleSelectAll },
                'Select All'
              ),
              widgetItems
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.ButtonToolbar,
                { className: 'pull-right' },
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  { onClick: this.handleClose, bsStyle: 'default' },
                  'Cancel'
                ),
                _react2.default.createElement(
                  _reactBootstrap.OverlayTrigger,
                  { placement: 'bottom', trigger: ['hover'], overlay: ShowinDashboardTip },
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { onClick: this.handleSubmit, bsStyle: 'primary' },
                    'Submit'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return F4Addwidgetdialog;
}(_react.Component);

F4Addwidgetdialog.propTypes = {
  // props definition

};

F4Addwidgetdialog.defaultProps = {
  // default props
  show: false
  // export default withAlert(F4Addwidgetdialog);
};exports.default = F4Addwidgetdialog;
module.exports = exports['default'];