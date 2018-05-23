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

var _Image = require('react-bootstrap/lib/Image');

var _Image2 = _interopRequireDefault(_Image);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _StringUtils = require('../StringUtils');

var _StringUtils2 = _interopRequireDefault(_StringUtils);

var _F4LetterAvatar = require('../F4LetterAvatar/F4LetterAvatar');

var _F4LetterAvatar2 = _interopRequireDefault(_F4LetterAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4DrawerHeader
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4DrawerHeader = function (_Component) {
  _inherits(F4DrawerHeader, _Component);

  function F4DrawerHeader(props) {
    _classCallCheck(this, F4DrawerHeader);

    return _possibleConstructorReturn(this, (F4DrawerHeader.__proto__ || Object.getPrototypeOf(F4DrawerHeader)).call(this, props));
  }

  _createClass(F4DrawerHeader, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;


      var displayName = "";
      var avatarImgSrc = "";

      if (typeof user !== 'undefined' && user) {
        if (typeof user.name !== 'undefind' && user.name) {
          displayName = user.name;
        } else if (typeof user.username !== 'undefined' && user.username) {
          displayName = user.username;
        }

        if (typeof user.avatarImgUrl !== 'undefined' && user.avatarImgUrl) {
          avatarImgSrc = user.avatarImgUrl;
        }
      }

      var letters = _StringUtils2.default.getLettersForAvatar(displayName);
      var avatar = _react2.default.createElement(_F4LetterAvatar2.default, { width: 60, height: 60, fontSize: 32, text: letters });

      if (avatarImgSrc !== "") {
        avatar = _react2.default.createElement(_Image2.default, { src: avatarImgSrc, circle: true });
      }

      return _react2.default.createElement(
        'div',
        { className: 'f4DrawerHeader' },
        _react2.default.createElement(
          'div',
          { className: 'f4DrawerHeaderAvatarContainer' },
          _react2.default.createElement(
            'div',
            { className: 'f4DrawerHeaderAvatar' },
            avatar
          ),
          _react2.default.createElement(
            'div',
            { className: 'f4DrawerHeaderText' },
            _react2.default.createElement(
              'strong',
              null,
              'Hello'
            ),
            _react2.default.createElement('br', null),
            displayName
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'f4DrawerHeaderLoginInfo' },
            _react2.default.createElement(
              'div',
              null,
              'Your last login was on ',
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'span',
                null,
                user && (0, _moment2.default)(user.lastLoginDate).format("MMMM DD, YYYY, hh:mm A")
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                { className: 'text-info' },
                'You have ',
                user && user.invalidLogins,
                ' unsuccessful logins.'
              )
            )
          )
        )
      );
    }
  }]);

  return F4DrawerHeader;
}(_react.Component);

exports.default = F4DrawerHeader;


F4DrawerHeader.propTypes = {
  user: _propTypes2.default.object
};
module.exports = exports['default'];