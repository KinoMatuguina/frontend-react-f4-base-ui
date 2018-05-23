"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
             * F4Menu.js
             */

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Col = require("react-bootstrap/lib/Col");

var _Col2 = _interopRequireDefault(_Col);

var _Row = require("react-bootstrap/lib/Row");

var _Row2 = _interopRequireDefault(_Row);

var _reactBootstrap = require("react-bootstrap");

var _frontendReactF4BaseCommons = require("frontend-react-f4-base-commons");

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAutosuggest = require("react-autosuggest");

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _mobxReact = require("mobx-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var connect = _frontendReactF4BaseCommons.BaseContext.connect;

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.

var getSuggestionValue = function getSuggestionValue(suggestion) {
  return suggestion.name;
};

// Use your imagination to render suggestions.
var renderSuggestion = function renderSuggestion(suggestion) {
  return _react2.default.createElement(
    "a",
    { href: suggestion.url },
    suggestion.name
  );
};

var onSuggestionSelected = function onSuggestionSelected(event, _ref) {
  var suggestion = _ref.suggestion;

  window.location.href = suggestion.url;
};

var F4Menu = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4Menu, _Component);

  function F4Menu(props) {
    _classCallCheck(this, F4Menu);

    var _this = _possibleConstructorReturn(this, (F4Menu.__proto__ || Object.getPrototypeOf(F4Menu)).call(this, props));

    _this.addMenuListToLinks = function (array) {
      for (var i = 0; i < array.length; i++) {
        _this.addMenuParentToLinks(array[i]);
      }
    };

    _this.addMenuParentToLinks = function (parent) {
      var links = _this.state.links;

      if (parent.children) {
        _this.addMenuListToLinks(parent.children);
      } else {
        links.push(parent);
        _this.setState({ links: links });
      }
    };

    _this.getChildren = function (data, index) {
      if (data.length && data.length !== 0) return data[index].children;
    };

    _this.createMenuItems = function () {
      var pageHistory = _this.state.pageHistory;
      var menuData = _this.props.menuData;


      var data = menuData;
      if (pageHistory !== null && pageHistory.length !== 0) {
        for (var i = 0; i < pageHistory.length; i++) {
          data = _this.getChildren(data, pageHistory[i]);
        }
      }

      return data ? data.map(function (d, index) {
        return _this.createMenuItem(d, index);
      }) : null;
    };

    _this.createMenuItem = function (d, index) {
      return _react2.default.createElement(
        _reactBootstrap.ListGroupItem,
        {
          className: "listStyle",
          onClick: function onClick() {
            return _this.showChildren(d, index);
          },
          key: d.id
        },
        d.icon ? _react2.default.createElement(
          "i",
          { className: "col-xs-1" },
          _react2.default.createElement(
            "i",
            { className: "iconLeft" },
            _react2.default.createElement("span", { className: d.icon })
          )
        ) : null,
        _react2.default.createElement(
          "span",
          { className: "menuName" },
          _react2.default.createElement(
            "span",
            { className: "col-xs-9" },
            d.name
          )
        ),
        d.children ? _react2.default.createElement(
          "div",
          { className: "pull-right" },
          _react2.default.createElement(
            "i",
            { className: "iconRight" },
            _react2.default.createElement("i", { className: "fa fa-caret-right" })
          )
        ) : null
      );
    };

    _this.showChildren = function (d, index) {
      if (d.children === null) {
        window.location.href = d.url;
        return;
      }

      _this.addHistory(index);
    };

    _this.addHistory = function (index) {
      var pageHistory = _this.state.pageHistory;


      var newPageHistory = pageHistory;
      newPageHistory.push(index);
      _this.setState({
        pageHistory: newPageHistory
      });
    };

    _this.createBreadcrumbs = function () {
      var pageHistory = _this.state.pageHistory;


      return pageHistory && pageHistory.length > 0 ? _react2.default.createElement(
        _reactBootstrap.Breadcrumb,
        null,
        _react2.default.createElement(
          _reactBootstrap.Breadcrumb.Item,
          { onClick: _this.clearBreadcrumbs },
          _react2.default.createElement(
            "span",
            { className: "labelBread" },
            "All"
          )
        ),
        _this.createBreadcrumbItems()
      ) : null;
    };

    _this.createBreadcrumbItems = function () {
      var pageHistory = _this.state.pageHistory;
      var menuData = _this.props.menuData;


      var breadcrumbsItem = [];
      if (pageHistory.length > 1) {
        var _loop = function _loop(i) {
          var copyPageHistory = pageHistory;
          var bcData = copyPageHistory.slice(0, i + 1);
          var data = menuData;
          for (var j = 0; j < bcData.length; j++) {
            if (j === bcData.length - 1) {
              data = data[bcData[j]];
            } else {
              data = _this.getChildren(data, bcData[j]);
            }
          }

          breadcrumbsItem.push(_react2.default.createElement(
            _reactBootstrap.Breadcrumb.Item,
            { key: i, onClick: function onClick() {
                return _this.jumpTo(bcData.length);
              } },
            _react2.default.createElement(
              "a",
              { className: "labelBread" },
              data.name
            )
          ));
        };

        for (var i = 0; i < pageHistory.length - 1; i++) {
          _loop(i);
        }
      }

      return breadcrumbsItem;
    };

    _this.jumpTo = function (historyCount) {
      var pageHistory = _this.state.pageHistory;


      var newPageHistory = pageHistory;
      newPageHistory = newPageHistory.slice(0, historyCount);

      _this.setState({
        pageHistory: newPageHistory
      });
    };

    _this.clearBreadcrumbs = function () {
      _this.setState({
        pageHistory: []
      });
    };

    _this.getSuggestions = function (value) {
      var _this$state = _this.state,
          links = _this$state.links,
          suggestions = _this$state.suggestions;
      var menuSearchMaxSuggestion = _this.props.menuSearchMaxSuggestion;


      var inputValue = value.trim().toLowerCase();
      var inputLength = inputValue.length;

      return inputLength === 0 ? [] : links.filter(function (link) {
        return link.name.toLowerCase().slice(0, inputLength) === inputValue;
      }).slice(0, menuSearchMaxSuggestion);
    };

    _this.onChange = function (event, _ref2) {
      var newValue = _ref2.newValue,
          method = _ref2.method;


      _this.setState({
        value: newValue
      });
    };

    _this.onSuggestionsFetchRequested = function (_ref3) {
      var value = _ref3.value;

      _this.setState({
        suggestions: _this.getSuggestions(value)
      });
    };

    _this.onSuggestionsClearRequested = function () {
      _this.setState({
        suggestions: []
      });
    };

    _this.state = {
      pageHistory: [],
      value: '',
      suggestions: [],
      links: []
    };
    return _this;
  }

  _createClass(F4Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var menuData = this.props.menuData;


      this.addMenuListToLinks(menuData);
    }

    //start of auto-suggest


    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.


    // Autosuggest will call this function every time you need to clear suggestions.

  }, {
    key: "render",

    //end of auto-suggest

    value: function render() {
      var pageHistory = this.state.pageHistory;
      var menuData = this.props.menuData;


      var selectedData = menuData;
      for (var j = 0; j < pageHistory.length; j++) {
        if (j === pageHistory.length - 1) {
          selectedData = selectedData[pageHistory[j]];
        } else {
          selectedData = this.getChildren(selectedData, pageHistory[j]);
        }
      }

      var _state = this.state,
          value = _state.value,
          suggestions = _state.suggestions;

      // Autosuggest will pass through all these props to the input.

      var inputProps = {
        placeholder: 'Search Menu',
        value: value,
        onChange: this.onChange
      };

      return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("f4Menu_parent") },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            null,
            this.createBreadcrumbs(),
            _react2.default.createElement(
              "div",
              { className: (0, _classnames2.default)("input-group", "menuSearch") },
              _react2.default.createElement(_reactAutosuggest2.default, {
                suggestions: suggestions,
                onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
                onSuggestionsClearRequested: this.onSuggestionsClearRequested,
                getSuggestionValue: getSuggestionValue,
                renderSuggestion: renderSuggestion,
                inputProps: inputProps,
                onSuggestionSelected: onSuggestionSelected,
                highlightFirstSuggestion: true
              })
            ),
            _react2.default.createElement(
              "span",
              { className: "currentPath" },
              selectedData.name
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Panel,
            null,
            _react2.default.createElement(
              _reactBootstrap.ListGroup,
              null,
              this.createMenuItems()
            )
          )
        )
      );
    }
  }]);

  return F4Menu;
}(_react.Component)) || _class;

F4Menu.propTypes = {
  // props definition
  menuData: _propTypes2.default.oneOfType([_propTypes2.default.array.isRequired, _propTypes2.default.object.isRequired]).isRequired,
  menuSearchMaxSuggestion: _propTypes2.default.number
  // icon: Proptypes.string.isRequired
};
F4Menu.defaultProps = {
  icon: "fa fa-search",
  menuSearchMaxSuggestion: 5
};

exports.default = F4Menu;
module.exports = exports["default"];