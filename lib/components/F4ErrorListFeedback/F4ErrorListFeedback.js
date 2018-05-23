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

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactMotion = require('react-motion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorMessageNode = function ErrorMessageNode(props) {
  return _react2.default.createElement(
    'li',
    null,
    props.message
  );
};

var F4ErrorListFeedback = (_temp = _class = function (_Component) {
  _inherits(F4ErrorListFeedback, _Component);

  function F4ErrorListFeedback(props) {
    _classCallCheck(this, F4ErrorListFeedback);

    var _this = _possibleConstructorReturn(this, (F4ErrorListFeedback.__proto__ || Object.getPrototypeOf(F4ErrorListFeedback)).call(this, props));

    _this.renderMessages = _this.renderMessages.bind(_this);
    _this.renderNone = _this.renderNone.bind(_this);
    return _this;
  }

  _createClass(F4ErrorListFeedback, [{
    key: 'renderMessages',
    value: function renderMessages() {
      var errorArray = this.props.errorArray;


      var messageNodes = _underscore2.default.map(errorArray, function (msg, index) {
        return _react2.default.createElement(ErrorMessageNode, { key: _lodash2.default.uniqueId('f4ErrorListERM-'), message: msg });
      });

      return _react2.default.createElement(
        _reactMotion.Motion,
        { defaultStyle: { x: 0 }, style: { x: (0, _reactMotion.spring)(1) } },
        function (value) {
          return _react2.default.createElement(
            _Alert2.default,
            { bsStyle: 'danger', style: { opacity: value.x } },
            _react2.default.createElement(
              'ul',
              { key: _lodash2.default.uniqueId('f4ErrorList-'), style: { padding: '0px', paddingLeft: '15px' } },
              messageNodes
            )
          );
        }
      );
    }
  }, {
    key: 'renderNone',
    value: function renderNone() {
      return _react2.default.createElement('span', { style: { display: 'none' } });
    }
  }, {
    key: 'render',
    value: function render() {
      var errorArray = this.props.errorArray;


      if (errorArray && errorArray.length > 0) {
        return this.renderMessages();
      }

      return this.renderNone();
    }
  }]);

  return F4ErrorListFeedback;
}(_react.Component), _class.propTypes = {
  errorArray: _propTypes2.default.any
}, _class.defaultProps = {
  errorArray: []
}, _temp);
exports.default = F4ErrorListFeedback;
module.exports = exports['default'];