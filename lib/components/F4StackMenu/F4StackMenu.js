'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _F4Spinner = require('../F4Spinner/F4Spinner');

var _F4Spinner2 = _interopRequireDefault(_F4Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4StackMenu = function (_Component) {
  _inherits(F4StackMenu, _Component);

  function F4StackMenu(props) {
    _classCallCheck(this, F4StackMenu);

    var _this = _possibleConstructorReturn(this, (F4StackMenu.__proto__ || Object.getPrototypeOf(F4StackMenu)).call(this, props));

    _this.buildMenu = _this.buildMenu.bind(_this);
    _this.buildSubmenuParent = _this.buildSubmenuParent.bind(_this);
    _this.buildSubmenuChildren = _this.buildSubmenuChildren.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.renderMenu = _this.renderMenu.bind(_this);
    return _this;
  }

  _createClass(F4StackMenu, [{
    key: 'handleSelect',
    value: function handleSelect(info) {
      if (info.key.startsWith("Logout")) {
        this.props.logoutFunc();
        return;
      }

      var menuUrl = info.key.substr(info.key.indexOf(':') + 1);
      if (menuUrl) {
        window.location.href = menuUrl;
      }
    }
  }, {
    key: 'buildMenu',
    value: function buildMenu() {
      var _this2 = this;

      var _props = this.props,
          menuData = _props.menuData,
          isFetching = _props.isFetching;


      if (menuData && menuData.length > 0) {
        var ret = _underscore2.default.map(menuData, function (menu, index) {
          if (menu.children && menu.children.length > 0) {
            return _this2.buildSubmenuParent(index, menu);
          }

          var className = '';

          if (menu.isActive) {
            className = 'rc-menu-item-selected';
          }

          return _react2.default.createElement(
            _rcMenu.MenuItem,
            { className: className, key: menu.name + ':' + menu.url },
            menu.name
          );
        });

        return ret;
      }

      return null;
    }
  }, {
    key: 'buildSubmenuParent',
    value: function buildSubmenuParent(parentKey, parent) {
      var title = this.buildTitle(parent.name);
      return _react2.default.createElement(
        _rcMenu.SubMenu,
        { title: title, key: parentKey },
        this.buildSubmenuChildren(parentKey, parent.children)
      );
    }
  }, {
    key: 'buildSubmenuChildren',
    value: function buildSubmenuChildren(parentKey, children) {
      var _this3 = this;

      var ret = _underscore2.default.map(children, function (child, index) {
        if (child.children && child.children.length > 0) {
          return _this3.buildSubmenuParent(index, child);
        }
        return _react2.default.createElement(
          _rcMenu.MenuItem,
          { key: child.name + ':' + child.url },
          child.name
        );
      });
      return ret;
    }
  }, {
    key: 'buildTitle',
    value: function buildTitle(name) {
      return _react2.default.createElement(
        'span',
        null,
        name,
        _react2.default.createElement('i', { className: 'fa fa-caret-right fa-lg pull-right' })
      );
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      return _react2.default.createElement(
        _rcMenu2.default,
        {
          onSelect: this.handleSelect,
          className: 'col-xs-6 col-sm-3',
          multiple: true
        },
        this.buildMenu()
      );
    }
  }, {
    key: 'renderSpinner',
    value: function renderSpinner() {
      return _react2.default.createElement(_F4Spinner2.default, null);
    }
  }, {
    key: 'render',
    value: function render() {
      var isFetching = this.props.isFetching;


      return _react2.default.createElement(
        'span',
        null,
        isFetching ? this.renderSpinner() : this.renderMenu()
      );
    }
  }]);

  return F4StackMenu;
}(_react.Component);

exports.default = F4StackMenu;
module.exports = exports['default'];