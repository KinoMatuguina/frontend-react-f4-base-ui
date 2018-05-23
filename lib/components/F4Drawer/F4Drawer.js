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

var _reactCustomScrollbars = require('react-custom-scrollbars');

var _F4DrawerHeader = require('../F4DrawerHeader/F4DrawerHeader');

var _F4DrawerHeader2 = _interopRequireDefault(_F4DrawerHeader);

var _F4Menu = require('../F4Menu/F4Menu');

var _F4Menu2 = _interopRequireDefault(_F4Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4Drawer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// import F4AccordionMenu from '../F4AccordionMenu/F4AccordionMenu';


var F4Drawer = function (_Component) {
  _inherits(F4Drawer, _Component);

  function F4Drawer(props) {
    _classCallCheck(this, F4Drawer);

    return _possibleConstructorReturn(this, (F4Drawer.__proto__ || Object.getPrototypeOf(F4Drawer)).call(this, props));
  }

  _createClass(F4Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          isFetching = _props.isFetching,
          menuData = _props.menuData,
          logoutFunc = _props.logoutFunc,
          overrideStyle = _props.overrideStyle;


      return _react2.default.createElement(
        'div',
        { className: 'f4Drawer', style: overrideStyle },
        _react2.default.createElement(
          _reactCustomScrollbars.Scrollbars,
          { style: { width: 220, height: '100vh' },
            autoHide: true,
            autoHideTimeout: 1000,
            autoHideDuration: 200,
            universal: true
          },
          _react2.default.createElement(
            'div',
            { style: { width: 220, marginBottom: '100px' } },
            _react2.default.createElement(_F4DrawerHeader2.default, { user: user }),
            _react2.default.createElement(_F4Menu2.default, { menuData: menuData })
          )
        )
      );
    }
  }]);

  return F4Drawer;
}(_react.Component);

exports.default = F4Drawer;


F4Drawer.propTypes = {
  user: _propTypes2.default.object,
  isFetching: _propTypes2.default.bool,
  logoutFunc: _propTypes2.default.func,
  overrideStyle: _propTypes2.default.object
};

F4Drawer.defaultProps = {
  overrideStyle: {}
};
module.exports = exports['default'];