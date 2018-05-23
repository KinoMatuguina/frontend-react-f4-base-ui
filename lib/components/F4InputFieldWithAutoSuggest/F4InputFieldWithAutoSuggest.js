'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputFieldWithAutoSuggest.js
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactAutosuggest = require('react-autosuggest');

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultGetSuggestions = function DefaultGetSuggestions(_ref) {
  var list = _ref.list,
      value = _ref.value,
      valueKey = _ref.valueKey,
      maxSuggestion = _ref.maxSuggestion;

  var inputValue = value.trim().toLowerCase();
  var inputLength = inputValue.length;

  return inputLength === 0 ? [] : list.filter(function (data) {
    var toFilter = data[valueKey].toLowerCase().slice(0, inputLength);
    return toFilter == inputValue;
  }).slice(0, maxSuggestion);
};

var DefaultGetSuggestionValue = function DefaultGetSuggestionValue(_ref2) {
  var suggestion = _ref2.suggestion,
      valueKey = _ref2.valueKey;
  return suggestion[valueKey];
};

// Use your imagination to render suggestions.
var DefaultRenderSuggestion = function DefaultRenderSuggestion(_ref3) {
  var suggestion = _ref3.suggestion,
      valueKey = _ref3.valueKey;
  return _react2.default.createElement(
    'a',
    null,
    suggestion[valueKey]
  );
};

var F4InputFieldWithAutoSuggest = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputFieldWithAutoSuggest, _Component);

  function F4InputFieldWithAutoSuggest(props) {
    _classCallCheck(this, F4InputFieldWithAutoSuggest);

    var _this = _possibleConstructorReturn(this, (F4InputFieldWithAutoSuggest.__proto__ || Object.getPrototypeOf(F4InputFieldWithAutoSuggest)).call(this, props));

    _this.onSuggestionsFetchRequested = function (_ref4) {
      var value = _ref4.value;
      var _this$props = _this.props,
          store = _this$props.store,
          getSuggestions = _this$props.getSuggestions,
          valueKey = _this$props.valueKey,
          maxSuggestion = _this$props.maxSuggestion;

      store.suggestions = getSuggestions({ list: store.list, value: value, valueKey: valueKey, maxSuggestion: maxSuggestion });
    };

    _this.onSuggestionsClearRequested = function () {
      var store = _this.props.store;

      store.suggestions = [];
    };

    _this.onChange = function (event, _ref5) {
      var newValue = _ref5.newValue;
      var store = _this.props.store;

      store.value = newValue;
    };

    return _this;
  }

  _createClass(F4InputFieldWithAutoSuggest, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          _getSuggestionValue = _props.getSuggestionValue,
          _renderSuggestion = _props.renderSuggestion,
          placeholder = _props.placeholder,
          valueKey = _props.valueKey,
          inputFieldProps = _props.inputFieldProps,
          autoSuggestProps = _props.autoSuggestProps;


      var inputProps = _extends({
        placeholder: placeholder,
        value: store.value,
        onChange: this.onChange
      }, inputFieldProps);

      var suggestions = _underscore2.default.map(store.suggestions, function (suggestion) {
        return suggestion;
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactAutosuggest2.default, _extends({
          suggestions: suggestions,
          onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
          onSuggestionsClearRequested: this.onSuggestionsClearRequested,
          getSuggestionValue: function getSuggestionValue(suggestion) {
            return _getSuggestionValue({ suggestion: suggestion, valueKey: valueKey });
          },
          renderSuggestion: function renderSuggestion(suggestion) {
            return _renderSuggestion({ suggestion: suggestion, valueKey: valueKey });
          },
          inputProps: inputProps
        }, autoSuggestProps))
      );
    }
  }]);

  return F4InputFieldWithAutoSuggest;
}(_react.Component)) || _class;

F4InputFieldWithAutoSuggest.propTypes = {
  store: _propTypes2.default.object.isRequired,
  valueKey: _propTypes2.default.string.isRequired,

  maxSuggestion: _propTypes2.default.number,

  getSuggestionValue: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),
  renderSuggestion: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]),

  placeholder: _propTypes2.default.string,

  autoSuggestProps: _propTypes2.default.object,
  inputFieldProps: _propTypes2.default.object
  // props definition
};

F4InputFieldWithAutoSuggest.defaultProps = {
  // default props
  placeholder: "Input text",
  getSuggestions: DefaultGetSuggestions,
  getSuggestionValue: DefaultGetSuggestionValue,
  renderSuggestion: DefaultRenderSuggestion,
  maxSuggestion: 5
};

exports.default = F4InputFieldWithAutoSuggest;
module.exports = exports['default'];