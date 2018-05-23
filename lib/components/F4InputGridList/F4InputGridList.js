'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2; /**
                     * F4InputGridList
                     */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _Table = require('react-bootstrap/lib/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Tooltip = require('react-bootstrap/lib/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

var _UUIDUtil = require('../UUIDUtil');

var UUIDUtil = _interopRequireWildcard(_UUIDUtil);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4InputGridListElement = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputGridListElement, _Component);

  function F4InputGridListElement() {
    _classCallCheck(this, F4InputGridListElement);

    return _possibleConstructorReturn(this, (F4InputGridListElement.__proto__ || Object.getPrototypeOf(F4InputGridListElement)).apply(this, arguments));
  }

  _createClass(F4InputGridListElement, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          tooltip = _props.tooltip,
          children = _props.children,
          onClick = _props.onClick;


      return _react2.default.createElement(
        'div',
        { className: 'f4InputGridListElement' },
        _react2.default.createElement(
          _OverlayTrigger2.default,
          { placement: 'right', overlay: tooltip },
          _react2.default.createElement(
            'span',
            { className: 'f4InputGridListElementClose' },
            _react2.default.createElement(
              _Button2.default,
              { bsClass: 'f4InputList btn btn-danger', bsStyle: 'danger', style: { borderRadius: '50%' }, onClick: onClick },
              'x'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'f4InputGridListElementContent' },
          this.props.children
        )
      );
    }
  }]);

  return F4InputGridListElement;
}(_react.Component)) || _class;

var F4InputGridList = (0, _mobxReact.observer)(_class2 = function (_Component2) {
  _inherits(F4InputGridList, _Component2);

  function F4InputGridList(props) {
    _classCallCheck(this, F4InputGridList);

    var _this2 = _possibleConstructorReturn(this, (F4InputGridList.__proto__ || Object.getPrototypeOf(F4InputGridList)).call(this, props));

    _this2.handleOnElementAdd = _this2.handleOnElementAdd.bind(_this2);
    _this2.handleOnElementRemove = _this2.handleOnElementRemove.bind(_this2);
    _this2.buildGrid = _this2.buildGrid.bind(_this2);
    return _this2;
  }

  _createClass(F4InputGridList, [{
    key: 'handleOnElementAdd',
    value: function handleOnElementAdd() {
      var fieldNames = this.props.fieldNames;


      if (fieldNames && fieldNames.length > 0) {
        var value = this.props.value;

        var self = this;
        var newObj = {};
        newObj.id = 'gridEl-' + UUIDUtil.get();
        console.log('GridEl ID ' + newObj.id);
        fieldNames.map(function (name) {
          newObj[name] = "";
        });

        value.push(newObj);
      }
    }
  }, {
    key: 'handleOnElementRemove',
    value: function handleOnElementRemove(id) {
      if (id) {
        var value = this.props.value;

        if (value && value.length > 0) {
          var indexToDel = value.findIndex(function (obj) {
            return obj.id === id;
          });

          if (typeof indexToDel !== 'undefined' && indexToDel != null) {
            if (value.length === 1) {
              value.pop();
            } else {
              value.splice(indexToDel, 1);
            }
          }
        }
      }
    }
  }, {
    key: 'buildGrid',
    value: function buildGrid() {
      var _this3 = this;

      var _props2 = this.props,
          children = _props2.children,
          value = _props2.value,
          singleInstanceName = _props2.singleInstanceName,
          deleteTooltipText = _props2.deleteTooltipText;


      if (value && value.map && value.length > 0) {

        return value.map(function (obj) {

          var newProp = {};
          newProp[singleInstanceName] = obj;

          var cloned = _react2.default.cloneElement(children, newProp);

          var tooltip = _react2.default.createElement(
            _Tooltip2.default,
            { id: 'f4GridList-remove-tooltip-' + obj.id },
            deleteTooltipText
          );

          return _react2.default.createElement(
            F4InputGridListElement,
            { key: 'f4IGLE-' + obj.id, onClick: _this3.handleOnElementRemove.bind(null, obj.id), tooltip: tooltip },
            cloned
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          id = _props3.id,
          name = _props3.name,
          type = _props3.type,
          placeholder = _props3.placeholder,
          disabled = _props3.disabled,
          value = _props3.value,
          addTooltipText = _props3.addTooltipText;


      var tooltip = _react2.default.createElement(
        _Tooltip2.default,
        { id: 'f4GridList-add-tooltip' },
        addTooltipText
      );

      return _react2.default.createElement(
        'div',
        { className: 'f4InputGridList' },
        value && value.length > 0 && this.buildGrid(),
        _react2.default.createElement(
          'div',
          { className: 'f4InputGridListElementAdd' },
          _react2.default.createElement(
            _OverlayTrigger2.default,
            { placement: 'right', overlay: tooltip },
            _react2.default.createElement(
              _Button2.default,
              { bsClass: 'f4InputList btn btn-primary', bsStyle: 'primary', style: { borderRadius: '50%' }, onClick: this.handleOnElementAdd },
              '+'
            )
          )
        )
      );
    }
  }]);

  return F4InputGridList;
}(_react.Component)) || _class2;

F4InputGridList.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  isVisible: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string,
  fieldNames: _propTypes2.default.array.isRequired,
  addTooltipText: _propTypes2.default.string,
  deleteTooltipText: _propTypes2.default.string
};

F4InputGridList.defaultProps = {
  disabled: false,
  isVisible: true,
  addTooltipText: "Add",
  deleteTooltipText: "Remove"
};

exports.default = (0, _asF4FormElement2.default)(F4InputGridList);
module.exports = exports['default'];