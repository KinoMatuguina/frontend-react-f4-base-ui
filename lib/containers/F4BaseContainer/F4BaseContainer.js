'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4BaseContainer
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _components = require('../../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4WithNavContainer = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4WithNavContainer, _Component);

  function F4WithNavContainer(props) {
    _classCallCheck(this, F4WithNavContainer);

    return _possibleConstructorReturn(this, (F4WithNavContainer.__proto__ || Object.getPrototypeOf(F4WithNavContainer)).call(this, props));
  }

  _createClass(F4WithNavContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          appContext = _props.appContext,
          uiStore = _props.uiStore,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_components.F4Navbar, { hasBurgerIcon: false, appContext: appContext, uiStore: uiStore }),
        _react2.default.createElement(
          'div',
          { className: 'f4BaseContainer' },
          children
        )
      );
    }
  }]);

  return F4WithNavContainer;
}(_react.Component)) || _class;

exports.default = F4WithNavContainer;
module.exports = exports['default'];