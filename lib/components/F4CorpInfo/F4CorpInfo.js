"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Col = require("react-bootstrap/lib/Col");

var _Col2 = _interopRequireDefault(_Col);

var _Row = require("react-bootstrap/lib/Row");

var _Row2 = _interopRequireDefault(_Row);

var _frontendReactF4BaseCommons = require("frontend-react-f4-base-commons");

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * F4CorpInfo.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var connect = _frontendReactF4BaseCommons.BaseContext.connect;

var F4CorpInfo = function (_Component) {
  _inherits(F4CorpInfo, _Component);

  function F4CorpInfo(props) {
    _classCallCheck(this, F4CorpInfo);

    return _possibleConstructorReturn(this, (F4CorpInfo.__proto__ || Object.getPrototypeOf(F4CorpInfo)).call(this, props));
  }

  _createClass(F4CorpInfo, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "col-xs-5" },
        _react2.default.createElement(
          _reactBootstrap.Panel,
          { className: "corpInfo" },
          _react2.default.createElement(
            "div",
            { className: "col-xs-offset-1" },
            _react2.default.createElement(
              _reactBootstrap.Panel.Body,
              null,
              _react2.default.createElement("img", { src: this.props.corpImage, width: "50%", height: "50px" }),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "h4",
                  null,
                  this.props.corpName
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "h4",
                  null,
                  _react2.default.createElement(
                    "i",
                    { className: "fa fa-map-marker" },
                    this.props.corpLocation
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return F4CorpInfo;
}(_react.Component);

F4CorpInfo.propTypes = {
  // props definition
  corpName: _propTypes2.default.string.isRequired,
  corpLocation: _propTypes2.default.string.isRequired,
  corpImage: _propTypes2.default.string.isRequired
};

F4CorpInfo.defaultProps = {
  // default props
};

exports.default = F4CorpInfo;
module.exports = exports["default"];