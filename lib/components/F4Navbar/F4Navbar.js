'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4Navbar
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactRouter = require('react-router');

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('react-bootstrap/lib/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _Image = require('react-bootstrap/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Dropdown = require('react-bootstrap/lib/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _F4NavbarActionElement = require('../F4NavbarActionElement/F4NavbarActionElement');

var _F4NavbarActionElement2 = _interopRequireDefault(_F4NavbarActionElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4Navbar = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4Navbar, _Component);

  function F4Navbar(props) {
    _classCallCheck(this, F4Navbar);

    var _this = _possibleConstructorReturn(this, (F4Navbar.__proto__ || Object.getPrototypeOf(F4Navbar)).call(this, props));

    _this.buildMenus = _this.buildMenus.bind(_this);
    return _this;
  }

  _createClass(F4Navbar, [{
    key: 'buildMenus',
    value: function buildMenus() {

      var menus = [];
      var children = this.props.children;


      if (children && children.map && children.length > 1) {
        menus = children.map(function (child) {
          return _react2.default.createElement(
            _MenuItem2.default,
            { key: child.props.text, onClick: child.props.onClick },
            child.props.text
          );
        });
      } else if (children && typeof children !== 'undefined') {
        menus = _react2.default.createElement(
          _MenuItem2.default,
          { onClick: children.props.onClick },
          children.props.text
        );
      }

      return menus;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          appContext = _props.appContext,
          onBurgerIconClick = _props.onBurgerIconClick,
          uiStore = _props.uiStore,
          hasBurgerIcon = _props.hasBurgerIcon; // eslint-disable-line no-shadow

      var actionChildren = void 0;
      var navActions = null;

      if (uiStore && uiStore.breakpoints && uiStore.breakpoints.xs) {

        navActions = _react2.default.createElement(
          'div',
          { className: 'f4NavbarActionsMore' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Dropdown2.default,
              { className: 'f4ToolbarActionsMore', bsStyle: 'default', id: 'dropdown-navbar-no-caret', pullRight: true },
              _react2.default.createElement(
                _Dropdown2.default.Toggle,
                { noCaret: true },
                _react2.default.createElement(_reactFontawesome2.default, { name: 'ellipsis-v' })
              ),
              _react2.default.createElement(
                _Dropdown2.default.Menu,
                null,
                this.buildMenus()
              )
            )
          )
        );
      } else {
        if (typeof children !== 'undefined') {
          if (children && children.map) {
            F4Navbar;
            actionChildren = children.map(function (child) {
              if (child.type && child.type === _F4NavbarActionElement2.default) {
                return child;
              }
            });
          } else {
            if (children.type && children.type === _F4NavbarActionElement2.default) {
              navActions = _react2.default.createElement(
                _Nav2.default,
                { className: 'f4NavbarActions', pullRight: true },
                children
              );
            }
          }

          if (actionChildren && actionChildren.length > 1) {
            navActions = _react2.default.createElement(
              _Nav2.default,
              { className: 'f4NavbarActions', pullRight: true },
              actionChildren
            );
          }
        }
      }

      return _react2.default.createElement(
        _Navbar2.default,
        { className: 'f4Navbar', fixedTop: true, fluid: true },
        _react2.default.createElement(
          _Navbar2.default.Header,
          { className: 'f4NavbarHeader' },
          _react2.default.createElement(
            _Navbar2.default.Brand,
            { className: 'f4NavbarBrand' },
            hasBurgerIcon && _react2.default.createElement(
              'span',
              { onClick: onBurgerIconClick },
              _react2.default.createElement(_reactFontawesome2.default, {
                name: 'bars',
                style: { color: 'white', marginLeft: '20px', cursor: 'pointer' }
              })
            ),
            _react2.default.createElement(
              _reactRouter.IndexLink,
              { to: this.props.homeUrl, style: { marginLeft: '20px' } },
              _react2.default.createElement(_Image2.default, { className: 'f4NavbarLogo', src: "/" + appContext + "/images/base_logo.png" })
            )
          )
        ),
        navActions
      );
    }
  }]);

  return F4Navbar;
}(_react.Component)) || _class;

exports.default = F4Navbar;


F4Navbar.propTypes = {
  appContext: _propTypes2.default.string.isRequired,
  onBurgerIconClick: _propTypes2.default.func,
  uiStore: _propTypes2.default.any.isRequired,
  hasBurgerIcon: _propTypes2.default.bool,
  homeUrl: _propTypes2.default.string

};

F4Navbar.defaultProps = {
  hasBurgerIcon: true,
  homeUrl: '/'
};
module.exports = exports['default'];