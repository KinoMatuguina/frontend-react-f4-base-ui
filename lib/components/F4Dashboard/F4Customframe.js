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

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4Customframe.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4Customframe = function (_Component) {
  _inherits(F4Customframe, _Component);

  function F4Customframe(props) {
    _classCallCheck(this, F4Customframe);

    var _this = _possibleConstructorReturn(this, (F4Customframe.__proto__ || Object.getPrototypeOf(F4Customframe)).call(this, props));

    _this.state = {
      open: _this.props.open
    };

    return _this;
  }

  _createClass(F4Customframe, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onRemove = _props.onRemove,
          editable = _props.editable,
          title = _props.title;

      var collapseTip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'collapseTip' },
        _react2.default.createElement(
          'strong',
          null,
          'collapse'
        )
      );
      var removeTip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'removeTip' },
        _react2.default.createElement(
          'strong',
          null,
          'close'
        )
      );
      var maximizeTip = _react2.default.createElement(
        _reactBootstrap.Tooltip,
        { id: 'maximizeTip' },
        _react2.default.createElement(
          'strong',
          null,
          'maximize'
        )
      );
      var remove = _react2.default.createElement(
        'a',
        { href: true, onClick: function onClick() {
            onRemove();
          } },
        _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
          { placement: 'bottom', overlay: removeTip },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsSize: 'xsmall', bsStyle: 'link' },
            ' ',
            _react2.default.createElement(_reactFontawesome2.default, { name: 'close' }),
            ' '
          )
        )
      );
      var collapse = _react2.default.createElement(
        'a',
        null,
        _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
          { placement: 'bottom', trigger: ['hover'], overlay: collapseTip },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsSize: 'xsmall', bsStyle: 'link', onClick: function onClick() {
                return _this2.setState({ open: !_this2.state.open });
              } },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'minus' }),
            ' '
          )
        )
      );

      var maximize = _react2.default.createElement(
        'a',
        { href: title },
        _react2.default.createElement(
          _reactBootstrap.OverlayTrigger,
          { placement: 'bottom', overlay: maximizeTip },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsSize: 'xsmall', bsStyle: 'link' },
            _react2.default.createElement(_reactFontawesome2.default, { name: 'fas fa-expand' }),
            ' '
          )
        )
      );
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Navbar,
          { fluid: this.props.fluidity },
          _react2.default.createElement(
            _reactBootstrap.Navbar.Header,
            null,
            title,
            _react2.default.createElement(_reactBootstrap.Navbar.Toggle, null)
          ),
          _react2.default.createElement(
            _reactBootstrap.Navbar.Collapse,
            null,
            _react2.default.createElement(
              _reactBootstrap.Navbar.Text,
              { pullRight: true },
              remove
            ),
            _react2.default.createElement(
              _reactBootstrap.Navbar.Text,
              { pullRight: true },
              collapse
            ),
            _react2.default.createElement(
              _reactBootstrap.Navbar.Text,
              { pullRight: true },
              maximize
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            { expanded: this.state.open },
            _react2.default.createElement(
              _reactBootstrap.Panel.Collapse,
              null,
              _react2.default.createElement(
                _reactBootstrap.Panel.Body,
                null,
                _react2.default.createElement('div', { className: 'clearfix' }),
                _react2.default.createElement(
                  'div',
                  { className: 'x_content' },
                  children
                )
              )
            )
          )
        )
      );
    }
  }]);

  return F4Customframe;
}(_react.Component);

F4Customframe.propTypes = {
  // props definition
};

F4Customframe.defaultProps = {
  // default props
  fluidity: true,
  open: true

};

exports.default = F4Customframe;
module.exports = exports['default'];