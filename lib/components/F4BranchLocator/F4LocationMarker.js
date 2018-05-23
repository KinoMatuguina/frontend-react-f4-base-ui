'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4BranchLocator
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var K_WIDTH = 40;
var K_HEIGHT = 40;

var innerWidth = 20;
var innerHeight = 20;

var F4LocationMarker = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4LocationMarker, _Component);

  function F4LocationMarker(props) {
    _classCallCheck(this, F4LocationMarker);

    var _this = _possibleConstructorReturn(this, (F4LocationMarker.__proto__ || Object.getPrototypeOf(F4LocationMarker)).call(this, props));

    _this.renderMarker = _this.renderMarker.bind(_this);
    return _this;
  }

  _createClass(F4LocationMarker, [{
    key: 'renderMarker',
    value: function renderMarker() {
      var _props = this.props,
          icon = _props.icon,
          isSelected = _props.isSelected,
          iconColor = _props.iconColor,
          iconColorActive = _props.iconColorActive;


      if (typeof icon !== 'undefined' && icon && icon !== 'CURRENT') {

        var icColor = iconColor;

        if (isSelected) {
          icColor = iconColorActive;
        }

        return _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement('div', { style: {
              backgroundColor: 'white',
              border: '2px solid ' + icColor,
              position: 'absolute',
              width: K_WIDTH,
              height: K_HEIGHT,
              left: 0,
              top: 0,
              borderRadius: K_HEIGHT,
              textAlign: 'center',
              display: 'inline-block'
            } }),
          _react2.default.createElement(
            'div',
            { style: {
                position: 'absolute',
                width: innerWidth,
                height: innerHeight,
                left: '8px',
                top: '9px'
              } },
            _react2.default.createElement(_reactFontawesome2.default, { name: icon, style: { color: iconColor }, size: 'lg' })
          )
        );
      } else {

        return _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement('div', { style: {
              backgroundColor: '#00e0ff',
              position: 'absolute',
              width: K_WIDTH,
              height: K_HEIGHT,
              left: 0,
              top: 0,
              borderRadius: K_HEIGHT,
              opacity: 0.4
            } }),
          _react2.default.createElement('div', { style: {
              backgroundColor: '#00b0ff',
              position: 'absolute',
              width: innerWidth,
              height: innerHeight,
              left: innerWidth / 2,
              top: innerHeight / 2,
              borderRadius: '50%',
              border: '2px solid white'
            } })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          icon = _props2.icon,
          isSelected = _props2.isSelected,
          hintText = _props2.hintText;

      var style = {
        position: 'absolute',
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,
        borderRadius: K_HEIGHT,
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 4
      };

      var hintStyle = {
        width: 80
      };

      if (this.props.$hover) {
        style.cursor = 'pointer';
      }

      if (isSelected) {
        hintStyle.visibility = "visible";
        hintStyle.opacity = 0.7;
      }

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'div',
          { style: {
              position: 'relative',
              width: K_WIDTH,
              height: K_HEIGHT,
              top: 0,
              left: 0
            }, className: 'f4BankLocatorMarkerContainer' },
          this.renderMarker(),
          _react2.default.createElement(
            'span',
            { style: hintStyle, className: 'f4BranchLocatorHintText' },
            hintText
          )
        )
      );
    }
  }]);

  return F4LocationMarker;
}(_react.Component)) || _class;

exports.default = F4LocationMarker;


F4LocationMarker.propTypes = {
  icon: _propTypes2.default.string,
  iconColor: _propTypes2.default.string,
  iconColorActive: _propTypes2.default.string,
  isSelected: _propTypes2.default.bool,
  hintText: _propTypes2.default.string
};

F4LocationMarker.defaultProps = {
  icon: "map-marker",
  iconColor: "#00b0ff",
  iconColorActive: "#13304d",
  isSelected: false,
  hintText: 'CHANGE ME'
};
module.exports = exports['default'];