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

var _Alert = require('react-bootstrap/lib/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4Feedback = (_temp = _class = function (_Component) {
  _inherits(F4Feedback, _Component);

  function F4Feedback() {
    _classCallCheck(this, F4Feedback);

    return _possibleConstructorReturn(this, (F4Feedback.__proto__ || Object.getPrototypeOf(F4Feedback)).apply(this, arguments));
  }

  _createClass(F4Feedback, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var type = this.props.type; // eslint-disable-line no-shadow

      return _react2.default.createElement(
        _reactMotion.Motion,
        { defaultStyle: { x: 0 }, style: { x: (0, _reactMotion.spring)(1) } },
        function (value) {
          return _react2.default.createElement(
            _Alert2.default,
            { bsStyle: type ? type : 'info', style: { opacity: value.x } },
            _this2.props.children
          );
        }
      );
    }
  }]);

  return F4Feedback;
}(_react.Component), _class.propTypes = {
  type: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.any
}, _temp);
exports.default = F4Feedback;
module.exports = exports['default'];