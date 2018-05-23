'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Dropdown = require('react-bootstrap/lib/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _MenuItem = require('react-bootstrap/lib/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Tooltip = require('react-bootstrap/lib/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4Toolbar = function (_Component) {
  _inherits(F4Toolbar, _Component);

  function F4Toolbar(props) {
    _classCallCheck(this, F4Toolbar);

    var _this = _possibleConstructorReturn(this, (F4Toolbar.__proto__ || Object.getPrototypeOf(F4Toolbar)).call(this, props));

    _this.buildMenus = _this.buildMenus.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);

    _this.state = {
      scrollClassName: ""
    };
    return _this;
  }

  _createClass(F4Toolbar, [{
    key: 'handleScroll',
    value: function handleScroll(event) {
      var _props = this.props,
          withScrollEffect = _props.withScrollEffect,
          scrollEffectClassName = _props.scrollEffectClassName,
          scrollLimit = _props.scrollLimit;


      if (withScrollEffect) {
        var scrollTop = event.target.scrollTop;

        if (scrollTop > scrollLimit) {

          if (this.state.scrollClassName !== scrollEffectClassName) {
            this.setState({
              scrollClassName: scrollEffectClassName
            });
          }
        } else {
          if (this.state.scrollClassName !== "") {
            this.setState({
              scrollClassName: ""
            });
          }
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var withScrollEffect = this.props.withScrollEffect;


      if (withScrollEffect) {
        document.querySelector('#root').addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var withScrollEffect = this.props.withScrollEffect;


      if (withScrollEffect) {
        document.querySelector('#root').removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
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
      var _props2 = this.props,
          children = _props2.children,
          title = _props2.title,
          textSize = _props2.textSize,
          icon = _props2.icon,
          iconColor = _props2.iconColor,
          maxActionsNum = _props2.maxActionsNum,
          infoText = _props2.infoText; // eslint-disable-line no-shadow

      var titleStyle = {
        fontSize: textSize + 'px'
      };

      var hideWithIcons = false;
      var renderChildren = [];
      var tooltip = _react2.default.createElement(
        _Tooltip2.default,
        { id: title },
        title
      );

      if (children && children.map) {

        renderChildren = children.slice();
        renderChildren.reverse();
        if (children.length > maxActionsNum) {
          hideWithIcons = true;
        }
      } else {
        renderChildren = children;
      }

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          { xs: 10, sm: 10, md: 10, lg: 10 },
          _react2.default.createElement(
            'div',
            { className: 'f4ToolbarTitle f4ToolbarFixedHeight ' + this.state.scrollClassName },
            icon && _react2.default.createElement(_reactFontawesome2.default, { name: icon }),
            _react2.default.createElement(
              'span',
              { className: 'f4ToolbarTitleText', style: titleStyle },
              title
            )
          )
        ),
        _react2.default.createElement(
          _Col2.default,
          { xsHidden: true, smHidden: true, md: 2, lg: 2, mdHidden: hideWithIcons },
          _react2.default.createElement(
            'div',
            { className: 'f4ToolbarActions f4ToolbarFixedHeight' },
            renderChildren
          )
        ),
        _react2.default.createElement(
          _Col2.default,
          { xs: 2, sm: 2, md: 2, mdHidden: !hideWithIcons, lgHidden: true },
          _react2.default.createElement(
            'div',
            { className: 'f4ToolbarActions f4ToolbarFixedHeight' },
            _react2.default.createElement(
              _Dropdown2.default,
              { className: 'f4ToolbarActionsMore', bsStyle: 'default', id: 'dropdown-no-caret', pullRight: true },
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
        ),
        infoText && _react2.default.createElement(
          _Col2.default,
          { xs: 12, sm: 12, md: 12, lg: 12 },
          _react2.default.createElement(
            'div',
            { className: 'f4ToolbarActionsInfoText' },
            _react2.default.createElement(
              'p',
              null,
              infoText
            )
          )
        )
      );
    }
  }]);

  return F4Toolbar;
}(_react.Component);

F4Toolbar.propTypes = {
  title: _propTypes2.default.string,
  textSize: _propTypes2.default.number,
  icon: _propTypes2.default.string,
  iconColor: _propTypes2.default.string,
  maxActionsNum: _propTypes2.default.number,
  infoText: _propTypes2.default.string,
  withScrollEffect: _propTypes2.default.bool,
  scrollEffectClassName: _propTypes2.default.string,
  scrollLimit: _propTypes2.default.number
};

F4Toolbar.defaultProps = {
  textSize: 18,
  maxActionsNum: 3,
  withScrollEffect: false,
  scrollLimit: 132
};

exports.default = F4Toolbar;
module.exports = exports['default'];