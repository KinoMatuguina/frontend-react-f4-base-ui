'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _F4Toolbar = require('../F4Toolbar/F4Toolbar');

var _F4Toolbar2 = _interopRequireDefault(_F4Toolbar);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4Card = (_temp = _class = function (_Component) {
  _inherits(F4Card, _Component);

  function F4Card() {
    _classCallCheck(this, F4Card);

    return _possibleConstructorReturn(this, (F4Card.__proto__ || Object.getPrototypeOf(F4Card)).apply(this, arguments));
  }

  _createClass(F4Card, [{
    key: 'render',
    value: function render() {
      var children = this.props.children; // eslint-disable-line no-shadow

      var headerChildren = [];
      var contentChildren = [];
      var footerChildren = [];

      if (children && children.length > 1) {
        _underscore2.default.each(children, function (child) {
          if (child.type === _F4Toolbar2.default) {
            headerChildren.push(child);
          } else {
            contentChildren.push(child);
          }
        });
      } else if (children && !(children instanceof Array)) {
        if (children.type === _F4Toolbar2.default) {
          headerChildren.push(children);
        } else {
          contentChildren.push(children);
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'f4Card panel' },
        _react2.default.createElement(
          'div',
          { className: 'f4CardHeading panel-heading' },
          headerChildren
        ),
        _react2.default.createElement(
          'div',
          { className: 'f4CardBody panel-body' },
          contentChildren
        )
      );
    }
  }]);

  return F4Card;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.any
}, _temp);
exports.default = F4Card;
module.exports = exports['default'];