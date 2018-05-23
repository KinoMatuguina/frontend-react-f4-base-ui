'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4InputList
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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

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

var F4InputList = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4InputList, _Component);

  function F4InputList(props) {
    _classCallCheck(this, F4InputList);

    var _this = _possibleConstructorReturn(this, (F4InputList.__proto__ || Object.getPrototypeOf(F4InputList)).call(this, props));

    _this.handleOnRowAdd = _this.handleOnRowAdd.bind(_this);
    _this.handleOnRowRemove = _this.handleOnRowRemove.bind(_this);
    _this.buildRows = _this.buildRows.bind(_this);
    return _this;
  }

  _createClass(F4InputList, [{
    key: 'handleOnRowAdd',
    value: function handleOnRowAdd() {
      var fieldNames = this.props.fieldNames;


      if (fieldNames && fieldNames.length > 0) {
        var value = this.props.value;

        var self = this;
        var newObj = {};
        newObj.id = 'row-' + UUIDUtil.get(); //_l.uniqueId('row-');
        console.log('ROW ID ' + newObj.id);
        fieldNames.map(function (name) {
          newObj[name] = "";
        });

        value.push(newObj);
      }
    }
  }, {
    key: 'handleOnRowRemove',
    value: function handleOnRowRemove(id) {
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
    key: 'buildRows',
    value: function buildRows() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          value = _props.value,
          singleInstanceName = _props.singleInstanceName,
          deleteTooltipText = _props.deleteTooltipText;


      if (value && value.length > 0) {

        return value.map(function (obj) {
          var newProp = {};
          newProp[singleInstanceName] = obj;
          newProp.key = _lodash2.default.uniqueId('f4InputListRow-');

          var tooltip = _react2.default.createElement(
            _Tooltip2.default,
            { id: 'f4InputList-remove-tooltip' },
            deleteTooltipText
          );

          var buttonChild = _react2.default.createElement(
            'div',
            { className: 'f4DivTableCell' },
            _react2.default.createElement(
              _OverlayTrigger2.default,
              { placement: 'right', overlay: tooltip },
              _react2.default.createElement(
                _Button2.default,
                { bsClass: 'f4InputList btn btn-danger', bsStyle: 'danger', style: { borderRadius: '50%' }, onClick: _this2.handleOnRowRemove.bind(_this2, obj.id) },
                'x'
              )
            )
          );
          var modifiedFormParentChild = _react2.default.cloneElement(children, newProp, buttonChild);
          return modifiedFormParentChild;
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          name = _props2.name,
          type = _props2.type,
          placeholder = _props2.placeholder,
          disabled = _props2.disabled,
          value = _props2.value,
          headerNames = _props2.headerNames,
          addTooltipText = _props2.addTooltipText;


      var tooltip = _react2.default.createElement(
        _Tooltip2.default,
        { id: 'f4InputList-add-tooltip' },
        addTooltipText
      );

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'div',
          { className: 'f4DivTable' },
          _react2.default.createElement(
            'div',
            { className: 'f4DivTableHead' },
            value && value.length > 0 && headerNames && headerNames.map(function (headerName) {
              return _react2.default.createElement(
                'div',
                { key: 'f4ILHead-' + headerName, className: 'f4DivTableCell' },
                headerName.toUpperCase()
              );
            })
          ),
          value && value.length > 0 && this.buildRows()
        ),
        _react2.default.createElement(
          _OverlayTrigger2.default,
          { placement: 'right', overlay: tooltip },
          _react2.default.createElement(
            _Button2.default,
            { bsClass: 'f4InputList btn btn-primary', bsStyle: 'primary', style: { borderRadius: '50%' }, onClick: this.handleOnRowAdd },
            '+'
          )
        )
      );
    }
  }]);

  return F4InputList;
}(_react.Component)) || _class;

F4InputList.propTypes = {
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

F4InputList.defaultProps = {
  disabled: false,
  isVisible: true,
  addTooltipText: "Add",
  deleteTooltipText: "Remove"
};

exports.default = (0, _asF4FormElement2.default)(F4InputList);
module.exports = exports['default'];