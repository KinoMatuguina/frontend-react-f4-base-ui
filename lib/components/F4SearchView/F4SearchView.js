'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _F4Card = require('../F4Card/F4Card');

var _F4Card2 = _interopRequireDefault(_F4Card);

var _F4Toolbar = require('../F4Toolbar/F4Toolbar');

var _F4Toolbar2 = _interopRequireDefault(_F4Toolbar);

var _F4ToolbarElement = require('../F4ToolbarElement/F4ToolbarElement');

var _F4ToolbarElement2 = _interopRequireDefault(_F4ToolbarElement);

var _F4Spinner = require('../F4Spinner/F4Spinner');

var _F4Spinner2 = _interopRequireDefault(_F4Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4SearchView
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var ResultView = function (_Component) {
  _inherits(ResultView, _Component);

  function ResultView() {
    _classCallCheck(this, ResultView);

    return _possibleConstructorReturn(this, (ResultView.__proto__ || Object.getPrototypeOf(ResultView)).apply(this, arguments));
  }

  _createClass(ResultView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _F4Card2.default,
        null,
        _react2.default.createElement(_F4Toolbar2.default, { title: this.props.title, icon: this.props.icon }),
        !this.props.isLoading && this.props.children,
        this.props.isLoading && _react2.default.createElement(_F4Spinner2.default, { color: "#002242" })
      );
    }
  }]);

  return ResultView;
}(_react.Component);

var FilterView = function (_Component2) {
  _inherits(FilterView, _Component2);

  function FilterView() {
    _classCallCheck(this, FilterView);

    return _possibleConstructorReturn(this, (FilterView.__proto__ || Object.getPrototypeOf(FilterView)).apply(this, arguments));
  }

  _createClass(FilterView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _F4Card2.default,
        null,
        _react2.default.createElement(_F4Toolbar2.default, { smallTitle: this.props.title, icon: this.props.icon }),
        this.props.children
      );
    }
  }]);

  return FilterView;
}(_react.Component);

var F4SearchView = (0, _mobxReact.observer)(_class = function (_Component3) {
  _inherits(F4SearchView, _Component3);

  function F4SearchView(props) {
    _classCallCheck(this, F4SearchView);

    return _possibleConstructorReturn(this, (F4SearchView.__proto__ || Object.getPrototypeOf(F4SearchView)).call(this, props));
  }

  _createClass(F4SearchView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isLoading = _props.isLoading,
          children = _props.children;


      var resultViewChildren = [];
      var filterViewChildren = [];

      _react2.default.Children.forEach(children, function (child) {
        if (child.type === ResultView) {
          resultViewChildren.push(child);
        } else if (child.type === FilterView) {
          filterViewChildren.push(child);
        }
      });

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          { xs: 6, md: 8 },
          resultViewChildren
        ),
        _react2.default.createElement(
          _Col2.default,
          { xs: 6, md: 4 },
          filterViewChildren
        )
      );
    }
  }]);

  return F4SearchView;
}(_react.Component)) || _class;

F4SearchView.ResultView = ResultView;
F4SearchView.FilterView = FilterView;

exports.default = F4SearchView;
module.exports = exports['default'];