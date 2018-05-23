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

var _Form = require('react-bootstrap/lib/Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4FormWrapper
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4FormWrapper = function (_Component) {
  _inherits(F4FormWrapper, _Component);

  function F4FormWrapper(props) {
    _classCallCheck(this, F4FormWrapper);

    var _this = _possibleConstructorReturn(this, (F4FormWrapper.__proto__ || Object.getPrototypeOf(F4FormWrapper)).call(this, props));

    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);
    return _this;
  }

  _createClass(F4FormWrapper, [{
    key: 'handleOnSubmit',
    value: function handleOnSubmit(event) {
      event.preventDefault();
      event.stopPropagation();

      var onSubmit = this.props.onSubmit;


      if (typeof onSubmit !== 'undefined' && onSubmit) {
        onSubmit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isHorizontal = _props.isHorizontal;


      var className = "f4FormWrapper";

      if (isHorizontal) {
        className += " form-horizontal";
      }

      return _react2.default.createElement(
        'form',
        { className: className, onSubmit: this.handleOnSubmit },
        children
      );
    }
  }]);

  return F4FormWrapper;
}(_react.Component);

exports.default = F4FormWrapper;


F4FormWrapper.propTypes = {
  isHorizontal: _propTypes2.default.bool,
  onSubmit: _propTypes2.default.func
};

F4FormWrapper.defaultProps = {
  isHorizontal: false
};
module.exports = exports['default'];