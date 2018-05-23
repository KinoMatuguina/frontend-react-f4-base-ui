'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputSelector
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _ButtonGroup = require('react-bootstrap/lib/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _UUIDUtil = require('../UUIDUtil');

var UUIDUtil = _interopRequireWildcard(_UUIDUtil);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputSelector = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputSelector, _Component);

  function F4InputSelector(props) {
    _classCallCheck(this, F4InputSelector);

    var _this = _possibleConstructorReturn(this, (F4InputSelector.__proto__ || Object.getPrototypeOf(F4InputSelector)).call(this, props));

    _this.handleOnChange = _this.handleOnChange.bind(_this);
    _this.buildSelectors = _this.buildSelectors.bind(_this);

    return _this;
  }

  _createClass(F4InputSelector, [{
    key: 'handleOnChange',
    value: function handleOnChange(value) {
      var _props = this.props,
          disabled = _props.disabled,
          onChange = _props.onChange,
          name = _props.name;


      if (!disabled && typeof onChange !== 'undefined') {
        onChange(name, value);
      }
    }
  }, {
    key: 'buildSelectors',
    value: function buildSelectors() {
      var _props2 = this.props,
          options = _props2.options,
          value = _props2.value,
          required = _props2.required;


      var selectors = [];

      if (options && options.length > 0) {
        var self = this;

        var selectorOptions = options.slice();
        if (!required) {
          selectorOptions = [{ label: "None", value: null }].concat(selectorOptions);
        }

        selectors = selectorOptions.map(function (option, index) {

          var className = "f4InputSelectorButton btn btn-default";

          if (value === option.value) {
            className = "f4InputSelectorButton selected btn btn-default";
          }

          return _react2.default.createElement(
            'div',
            { key: '' + UUIDUtil.get(), className: className, onClick: self.handleOnChange.bind(self, option.value) },
            option.label
          );
        });
      }

      if (selectors && selectors.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: 'btn-group' },
          selectors
        );
      }

      return selectors;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'label',
        { className: 'f4InputSelector' },
        this.buildSelectors()
      );
    }
  }]);

  return F4InputSelector;
}(_react.Component)) || _class;

F4InputSelector.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.any,
  options: _propTypes2.default.any,
  onChange: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string,
  isVisible: _propTypes2.default.bool,
  required: _propTypes2.default.bool
};

F4InputSelector.defaultProps = {
  disabled: false,
  isVisible: true,
  required: false
};

exports.default = (0, _asF4FormElement2.default)(F4InputSelector);
module.exports = exports['default'];