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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4LetterAvatar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4LetterAvatar = function (_Component) {
  _inherits(F4LetterAvatar, _Component);

  function F4LetterAvatar(props) {
    _classCallCheck(this, F4LetterAvatar);

    return _possibleConstructorReturn(this, (F4LetterAvatar.__proto__ || Object.getPrototypeOf(F4LetterAvatar)).call(this, props));
  }

  _createClass(F4LetterAvatar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          width = _props.width,
          height = _props.height,
          textColor = _props.textColor,
          text = _props.text,
          fontSize = _props.fontSize;


      var paddingLeft = width / 5 + 'px';

      if (text.length === 1) {
        paddingLeft = width / 3 + 'px';
      }

      return _react2.default.createElement(
        'div',
        {
          className: 'f4LetterAvatar',
          style: {
            backgroundColor: backgroundColor,
            width: width,
            height: height,
            color: textColor,
            borderRadius: '50%',
            paddingTop: height / 5 + 'px',
            paddingLeft: paddingLeft
          }
        },
        _react2.default.createElement(
          'span',
          { style: { fontSize: fontSize } },
          text.toUpperCase()
        )
      );
    }
  }]);

  return F4LetterAvatar;
}(_react.Component);

exports.default = F4LetterAvatar;


F4LetterAvatar.propTypes = {
  backgroundColor: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  textColor: _propTypes2.default.string,
  fontSize: _propTypes2.default.number
};

F4LetterAvatar.defaultProps = {
  backgroundColor: "#2d71b3",
  width: 60,
  height: 60,
  textColor: 'white',
  fontSize: 28
};
module.exports = exports['default'];