'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactCollapse = require('react-collapse');

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _UUIDUtil = require('../UUIDUtil');

var UUIDUtil = _interopRequireWildcard(_UUIDUtil);

var _F4Spinner = require('../F4Spinner/F4Spinner');

var _F4Spinner2 = _interopRequireDefault(_F4Spinner);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4AccordionMenu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4Accordion = function (_Component) {
  _inherits(F4Accordion, _Component);

  function F4Accordion(props) {
    _classCallCheck(this, F4Accordion);

    return _possibleConstructorReturn(this, (F4Accordion.__proto__ || Object.getPrototypeOf(F4Accordion)).call(this, props));
  }

  _createClass(F4Accordion, [{
    key: 'render',
    value: function render() {

      var icon = "info-circle";
      var caretIcon = "chevron-right";

      if (typeof this.props.icon !== 'undefined' && this.props.icon && this.props.icon !== "") {
        icon = this.props.icon;
      }

      if (this.props.isOpen) {
        caretIcon = "chevron-down";
      }

      return _react2.default.createElement(
        'div',
        { className: 'f4AccordionItem' },
        _react2.default.createElement(
          'div',
          { onClick: this.props.onClick, className: 'f4AccordionToggle' },
          _react2.default.createElement(
            'div',
            { className: 'f4AccordionToggleContent' },
            _react2.default.createElement(
              'div',
              { className: 'f4AccordionToggleContentIcon' },
              _react2.default.createElement(_reactFontawesome2.default, { name: icon, size: 'lg' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'f4AccordionToggleContentText' },
              this.props.title
            ),
            this.props.hasChildren && _react2.default.createElement(
              'div',
              { className: 'f4AccordionToggleContentCaret' },
              _react2.default.createElement(_reactFontawesome2.default, { name: caretIcon })
            )
          )
        ),
        this.props.hasChildren && _react2.default.createElement(
          _reactCollapse2.default,
          { isOpened: this.props.isOpen, springConfig: { stiffness: 170, damping: 26 } },
          this.props.children
        )
      );
    }
  }]);

  return F4Accordion;
}(_react.Component);

var F4AccordionMenu = (0, _mobxReact.observer)(_class = function (_Component2) {
  _inherits(F4AccordionMenu, _Component2);

  function F4AccordionMenu(props) {
    _classCallCheck(this, F4AccordionMenu);

    var _this2 = _possibleConstructorReturn(this, (F4AccordionMenu.__proto__ || Object.getPrototypeOf(F4AccordionMenu)).call(this, props));

    _this2.state = {
      open: []
    };

    _this2.handleOnOpenClick = _this2.handleOnOpenClick.bind(_this2);
    _this2.buildMenu = _this2.buildMenu.bind(_this2);
    _this2.handleUrlClick = _this2.handleUrlClick.bind(_this2);
    return _this2;
  }

  _createClass(F4AccordionMenu, [{
    key: 'handleOnOpenClick',
    value: function handleOnOpenClick(i) {

      console.log(this.state.open);

      var newOpen = this.state.open.slice();
      var index = newOpen.indexOf(i);

      if (index > -1) {

        if (newOpen.length === 1) {
          newOpen = [];
        } else {
          newOpen.splice(index, 1);
        }
      } else {
        newOpen = [i];
      }

      this.setState({
        open: newOpen
      });
    }
  }, {
    key: 'handleUrlClick',
    value: function handleUrlClick(url) {

      if (typeof url !== 'undefined' && url && url !== "") {
        window.location.href = url;
      } else {
        window.location.href = "/";
      }
    }
  }, {
    key: 'buildMenu',
    value: function buildMenu() {
      var _this3 = this;

      var menuData = this.props.menuData;
      var open = this.state.open;


      if (menuData && menuData.map && menuData.length > 0) {
        return menuData.map(function (menu) {

          var onClick = _this3.handleOnOpenClick.bind(null, menu.id);
          var hasChildren = true;
          if (typeof menu.children === 'undefined' || !menu.children || menu.children.length === 0) {
            onClick = function onClick() {
              window.location.href = menu.url;
            };
            hasChildren = false;
          }

          return _react2.default.createElement(
            F4Accordion,
            { key: menu.id, title: menu.name, icon: menu.icon, isOpen: open.indexOf(menu.id) > -1, onClick: onClick, hasChildren: hasChildren },
            menu.children && menu.children.length > 0 && _react2.default.createElement(
              'div',
              { onClick: _this3.handleUrlClick.bind(null, menu.children[0].url), style: { padding: '15px 35px 15px' }, className: 'f4AccordionMenuChild' },
              '' + menu.children[0].name
            )
          );
        });
      } else {
        return [];
      }
    }
  }, {
    key: 'renderLoader',
    value: function renderLoader() {
      return _react2.default.createElement(
        'div',
        { style: { padding: '15px' } },
        _react2.default.createElement(_F4Spinner2.default, { color: 'white' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          items = _state.items,
          open = _state.open;
      var _props = this.props,
          menuData = _props.menuData,
          isFetching = _props.isFetching;


      return _react2.default.createElement(
        'div',
        { className: 'f4AccordionMenu' },
        isFetching ? this.renderLoader() : this.buildMenu()
      );
    }
  }]);

  return F4AccordionMenu;
}(_react.Component)) || _class;

exports.default = F4AccordionMenu;
module.exports = exports['default'];