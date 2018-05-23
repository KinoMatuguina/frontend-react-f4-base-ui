'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4Bookmark.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4Bookmark = function (_Component) {
  _inherits(F4Bookmark, _Component);

  function F4Bookmark(props) {
    _classCallCheck(this, F4Bookmark);

    var _this = _possibleConstructorReturn(this, (F4Bookmark.__proto__ || Object.getPrototypeOf(F4Bookmark)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(F4Bookmark, [{
    key: 'onClick',
    value: function onClick() {
      var _props = this.props,
          _onChange = _props._onChange,
          bookmarkStore = _props.bookmarkStore;

      bookmarkStore.isChecked(!bookmarkStore.checkStatus);
      _onChange();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          AddBookmark = _props2.AddBookmark,
          RemoveBookmark = _props2.RemoveBookmark,
          iconFill = _props2.iconFill,
          iconOutline = _props2.iconOutline,
          iconFillColor = _props2.iconFillColor,
          iconOutlineColor = _props2.iconOutlineColor,
          status = _props2.status;


      console.log(status);

      if (status === false) {
        return _react2.default.createElement(
          _Col2.default,
          { lg: 12, md: 12, sm: 12, xs: 12, style: { marginTop: '30px' } },
          _react2.default.createElement(
            'div',
            { className: 'changeIcon' },
            _react2.default.createElement(_reactFontawesome2.default, {
              style: iconFillColor,
              className: 'iconStyle iconStar',
              name: iconFill,
              onClick: this.onClick }),
            _react2.default.createElement(_reactFontawesome2.default, {
              style: iconOutlineColor,
              className: 'iconStyle iconStarO',
              name: iconOutline,
              onClick: this.onClick }),
            _react2.default.createElement(
              'label',
              { className: 'bookmarkLabel' },
              _react2.default.createElement('input', { type: 'checkbox', className: 'customCheckBox',
                onClick: this.onClick }),
              status == true ? RemoveBookmark : AddBookmark
            )
          )
        );
      } else {
        return _react2.default.createElement(
          _Col2.default,
          { lg: 12, md: 12, sm: 12, xs: 12, style: { marginTop: '30px' } },
          _react2.default.createElement(
            'div',
            { className: "changeIcon " + status == true ? iconFill : iconOutline },
            _react2.default.createElement(_reactFontawesome2.default, {
              style: iconFillColor,
              className: "iconStyle",
              name: iconFill,
              onClick: this.onClick }),
            _react2.default.createElement(
              'label',
              { className: 'bookmarkLabel' },
              _react2.default.createElement('input', { type: 'checkbox', className: 'customCheckBox', onClick: this.onClick }),
              status == true ? RemoveBookmark : AddBookmark
            )
          )
        );
      }
    }
  }]);

  return F4Bookmark;
}(_react.Component);

F4Bookmark.propTypes = {
  _onChange: _propTypes2.default.func,
  iconStyle: _propTypes2.default.object,
  AddBookmark: _propTypes2.default.string,
  RemoveBookmark: _propTypes2.default.string,
  iconFill: _propTypes2.default.string,
  iconOutline: _propTypes2.default.string,
  iconFillColor: _propTypes2.default.object,
  iconOutlineColor: _propTypes2.default.object,
  status: _propTypes2.default.bool.isRequired,
  bookmarkStore: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired
};

F4Bookmark.defaultProps = {
  AddBookmark: "Add Account Enrollment from Bookmarks",
  RemoveBookmark: "Remove Account Enrollment from Bookmarks",
  iconFill: "star",
  iconFillColor: { color: "#CE9732" },
  iconOutline: "star-o",
  iconOutlineColor: { color: "#000000" },
  status: false
};

exports.default = F4Bookmark;
module.exports = exports['default'];