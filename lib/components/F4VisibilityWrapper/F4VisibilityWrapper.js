'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4VisibilityWrapper = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4VisibilityWrapper, _Component);

  function F4VisibilityWrapper() {
    _classCallCheck(this, F4VisibilityWrapper);

    return _possibleConstructorReturn(this, (F4VisibilityWrapper.__proto__ || Object.getPrototypeOf(F4VisibilityWrapper)).apply(this, arguments));
  }

  _createClass(F4VisibilityWrapper, [{
    key: 'renderNone',
    value: function renderNone() {
      return _react2.default.createElement('span', { style: { display: 'none' } });
    }
  }, {
    key: 'render',
    value: function render() {

      var isVisible = this.props.isVisible;
      if (typeof isVisible === 'undefined') {
        isVisible = true;
      }

      if (isVisible) {
        return _react2.default.createElement(
          'span',
          { className: 'f4VisibilityWrapper' },
          this.props.children
        );
      } else {
        return this.renderNone();
      }
    }
  }]);

  return F4VisibilityWrapper;
}(_react.Component)) || _class;

exports.default = F4VisibilityWrapper;
module.exports = exports['default'];