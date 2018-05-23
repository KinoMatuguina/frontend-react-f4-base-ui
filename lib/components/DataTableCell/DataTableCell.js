/*
DATA CELL
AUTHOR: KINO MATUGUINA
*/

"use strict";

// const ExampleImage = require('./ExampleImage');

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('fixed-data-table-2'),
    Cell = _require.Cell;

var React = require('react');
var ReactTooltip = require('react-tooltip');

var CollapseCell = function (_React$PureComponent) {
  _inherits(CollapseCell, _React$PureComponent);

  function CollapseCell() {
    _classCallCheck(this, CollapseCell);

    return _possibleConstructorReturn(this, (CollapseCell.__proto__ || Object.getPrototypeOf(CollapseCell)).apply(this, arguments));
  }

  _createClass(CollapseCell, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          rowIndex = _props.rowIndex,
          columnKey = _props.columnKey,
          collapsedRows = _props.collapsedRows,
          callback = _props.callback,
          props = _objectWithoutProperties(_props, ['data', 'rowIndex', 'columnKey', 'collapsedRows', 'callback']);

      return React.createElement(
        Cell,
        props,
        React.createElement(
          'a',
          { onClick: function onClick() {
              return callback(rowIndex, data[rowIndex]);
            } },
          collapsedRows.has(rowIndex) ? '\u25BC' : '\u25BA'
        )
      );
    }
  }]);

  return CollapseCell;
}(React.PureComponent);

;

module.exports.CollapseCell = CollapseCell;

var ImageCell = function (_React$PureComponent2) {
  _inherits(ImageCell, _React$PureComponent2);

  function ImageCell() {
    _classCallCheck(this, ImageCell);

    return _possibleConstructorReturn(this, (ImageCell.__proto__ || Object.getPrototypeOf(ImageCell)).apply(this, arguments));
  }

  _createClass(ImageCell, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          imageClass = _props2.imageClass,
          src = _props2.src,
          props = _objectWithoutProperties(_props2, ['imageClass', 'src']);

      return React.createElement('div', _extends({}, props, { className: "imageCell " + imageClass, style: { "backgroundImage": "url(" + src + ")" } }));
    }
  }]);

  return ImageCell;
}(React.PureComponent);

;

module.exports.ImageCell = ImageCell;

var LinkCell = function (_React$PureComponent3) {
  _inherits(LinkCell, _React$PureComponent3);

  function LinkCell() {
    _classCallCheck(this, LinkCell);

    return _possibleConstructorReturn(this, (LinkCell.__proto__ || Object.getPrototypeOf(LinkCell)).apply(this, arguments));
  }

  _createClass(LinkCell, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          link = _props3.link,
          target = _props3.target,
          props = _objectWithoutProperties(_props3, ['children', 'link', 'target']);

      return React.createElement(
        Cell,
        props,
        React.createElement(
          'a',
          { href: link, target: target },
          children
        )
      );
    }
  }]);

  return LinkCell;
}(React.PureComponent);

;
module.exports.LinkCell = LinkCell;

var TextCell = function (_React$PureComponent4) {
  _inherits(TextCell, _React$PureComponent4);

  function TextCell() {
    _classCallCheck(this, TextCell);

    return _possibleConstructorReturn(this, (TextCell.__proto__ || Object.getPrototypeOf(TextCell)).apply(this, arguments));
  }

  _createClass(TextCell, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          data = _props4.data,
          rowIndex = _props4.rowIndex,
          columnKey = _props4.columnKey,
          props = _objectWithoutProperties(_props4, ['data', 'rowIndex', 'columnKey']);

      return React.createElement(
        Cell,
        props,
        data.getObjectAt(rowIndex)[columnKey]
      );
    }
  }]);

  return TextCell;
}(React.PureComponent);

;
module.exports.TextCell = TextCell;

var TooltipCell = function (_React$PureComponent5) {
  _inherits(TooltipCell, _React$PureComponent5);

  function TooltipCell() {
    _classCallCheck(this, TooltipCell);

    return _possibleConstructorReturn(this, (TooltipCell.__proto__ || Object.getPrototypeOf(TooltipCell)).apply(this, arguments));
  }

  _createClass(TooltipCell, [{
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          data = _props5.data,
          rowIndex = _props5.rowIndex,
          columnKey = _props5.columnKey,
          props = _objectWithoutProperties(_props5, ['data', 'rowIndex', 'columnKey']);

      var value = data.getObjectAt(rowIndex)[columnKey];
      return React.createElement(
        Cell,
        _extends({}, props, {
          onMouseEnter: function onMouseEnter() {
            ReactTooltip.show();
          },
          onMouseLeave: function onMouseLeave() {
            ReactTooltip.hide();
          },
          onClick: this.props.onClick,
          style: this.props.style
        }),
        React.createElement(
          'div',
          { ref: 'valueDiv', 'data-tip': value },
          value
        )
      );
    }
  }]);

  return TooltipCell;
}(React.PureComponent);

;
module.exports.TooltipCell = TooltipCell;