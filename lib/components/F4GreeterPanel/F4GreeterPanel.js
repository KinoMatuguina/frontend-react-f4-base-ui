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

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4GreeterPanel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4GreeterPanel = function (_Component) {
  _inherits(F4GreeterPanel, _Component);

  function F4GreeterPanel() {
    _classCallCheck(this, F4GreeterPanel);

    return _possibleConstructorReturn(this, (F4GreeterPanel.__proto__ || Object.getPrototypeOf(F4GreeterPanel)).apply(this, arguments));
  }

  _createClass(F4GreeterPanel, [{
    key: 'render',
    value: function render() {
      var greeting = "";
      var icon = void 0;
      var now = new Date();
      var hours = now.getHours();

      if (hours < 12) {
        greeting = "Good morning";
        icon = "horizon-alt";
      }
      if (hours > 12) {

        if (hours < 18) {
          greeting = "Good afternoon";
          icon = "day-cloudy";
        } else {
          greeting = "Good evening";
          icon = "night-clear";
        }
      }
      if (hours === 12) {
        greeting = "Now is a good time for lunch";
        icon = "day-sunny";
      }

      return _react2.default.createElement(
        'div',
        { className: 'f4Card f4GreeterPanel' },
        _react2.default.createElement(
          'div',
          { className: 'f4GreeterPanelIcon' },
          _react2.default.createElement('i', { className: 'wi wi-' + icon })
        ),
        _react2.default.createElement(
          'div',
          { className: 'f4GreeterPanelText' },
          greeting + ' ' + this.props.name + '!'
        )
      );
    }
  }]);

  return F4GreeterPanel;
}(_react.Component);

exports.default = F4GreeterPanel;
module.exports = exports['default'];