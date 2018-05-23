'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _F4Card = require('../F4Card/F4Card');

var _F4Card2 = _interopRequireDefault(_F4Card);

var _F4ErrorListFeedback = require('../F4ErrorListFeedback/F4ErrorListFeedback');

var _F4ErrorListFeedback2 = _interopRequireDefault(_F4ErrorListFeedback);

var _F4Feedback = require('../F4Feedback/F4Feedback');

var _F4Feedback2 = _interopRequireDefault(_F4Feedback);

var _F4Toolbar = require('../F4Toolbar/F4Toolbar');

var _F4Toolbar2 = _interopRequireDefault(_F4Toolbar);

var _F4ToolbarElement = require('../F4ToolbarElement/F4ToolbarElement');

var _F4ToolbarElement2 = _interopRequireDefault(_F4ToolbarElement);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4AddEditView = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4AddEditView, _Component);

  function F4AddEditView(props) {
    _classCallCheck(this, F4AddEditView);

    var _this = _possibleConstructorReturn(this, (F4AddEditView.__proto__ || Object.getPrototypeOf(F4AddEditView)).call(this, props));

    _this.handleClearClick = _this.handleClearClick.bind(_this);
    return _this;
  }

  _createClass(F4AddEditView, [{
    key: 'handleClearClick',
    value: function handleClearClick() {
      var onClearClick = this.props.onClearClick;


      if (typeof onClearClick !== 'undefined') {
        onClearClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          icon = _props.icon,
          errorMessages = _props.errorMessages,
          successMessage = _props.successMessage,
          children = _props.children,
          xs = _props.xs,
          md = _props.md,
          onClearClick = _props.onClearClick;


      return _react2.default.createElement(
        _Col2.default,
        { xs: xs, md: md },
        successMessage && successMessage !== "" && _react2.default.createElement(
          _F4Feedback2.default,
          { type: 'success' },
          successMessage
        ),
        _react2.default.createElement(_F4ErrorListFeedback2.default, { errorArray: errorMessages }),
        _react2.default.createElement(
          _F4Card2.default,
          null,
          _react2.default.createElement(
            _F4Toolbar2.default,
            { title: title, textSize: 15, icon: icon },
            typeof onClearClick !== 'undefined' && _react2.default.createElement(_F4ToolbarElement2.default, { icon: "eraser", text: "Clear", onClick: this.handleClearClick })
          ),
          children
        )
      );
    }
  }]);

  return F4AddEditView;
}(_react.Component)) || _class;

exports.default = F4AddEditView;


F4AddEditView.propTypes = {
  children: _propTypes2.default.any,
  icon: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  errorMessages: _propTypes2.default.any,
  isLoading: _propTypes2.default.bool,
  xs: _propTypes2.default.number,
  md: _propTypes2.default.number,
  onClearClick: _propTypes2.default.func
};

F4AddEditView.defaultProps = {
  icon: "cog",
  title: "NEW [CHANGE ME]",
  errorMessages: [],
  xs: 12,
  md: 12
};
module.exports = exports['default'];