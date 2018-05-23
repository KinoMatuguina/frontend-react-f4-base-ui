'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4SingleSelect.js
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _mobxReact = require('mobx-react');

var _classnames = require('classnames');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4SingleSelect = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4SingleSelect, _Component);

  function F4SingleSelect(props) {
    _classCallCheck(this, F4SingleSelect);

    return _possibleConstructorReturn(this, (F4SingleSelect.__proto__ || Object.getPrototypeOf(F4SingleSelect)).call(this, props));
  }

  _createClass(F4SingleSelect, [{
    key: 'renderNone',
    value: function renderNone() {
      return _react2.default.createElement('span', { style: { display: 'none' } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          onChange = _props.onChange,
          options = _props.options,
          _valueComponent = _props.valueComponent,
          _optionComponent = _props.optionComponent,
          value = _props.value,
          placeholder = _props.placeholder,
          selectedValue = _props.selectedValue,
          disabled = _props.disabled,
          className = _props.className,
          labelKey = _props.labelKey,
          valueKey = _props.valueKey,
          imageKey = _props.imageKey,
          subLabelKey = _props.subLabelKey,
          hasImage = _props.hasImage,
          noImagePaddingLeft = _props.noImagePaddingLeft,
          isVisible = _props.isVisible,
          searchable = _props.searchable,
          clearable = _props.clearable,
          name = _props.name;


      if (isVisible) {
        var _React$createElement;

        return _react2.default.createElement(
          'div',
          { style: style },
          _react2.default.createElement(_reactSelect2.default, (_React$createElement = {
            closeOnSelect: true,
            name: name,
            value: value,
            options: options,
            onChange: onChange,
            valueKey: valueKey,
            labelKey: labelKey,
            searchable: searchable,
            placeholder: placeholder,
            clearable: clearable,
            valueComponent: _valueComponent,
            optionComponent: _optionComponent
          }, _defineProperty(_React$createElement, 'valueComponent', function valueComponent(props) {
            return _valueComponent(_extends({}, props, { labelKey: labelKey, imageKey: imageKey, subLabelKey: subLabelKey, hasImage: hasImage }));
          }), _defineProperty(_React$createElement, 'optionComponent', function optionComponent(props) {
            return _optionComponent(_extends({}, props, { labelKey: labelKey, imageKey: imageKey, subLabelKey: subLabelKey, hasImage: hasImage, noImagePaddingLeft: noImagePaddingLeft }));
          }), _React$createElement))
        );
      }
      return this.renderNone();
    }
  }]);

  return F4SingleSelect;
}(_react.Component)) || _class;

var OptionImage = function (_Component2) {
  _inherits(OptionImage, _Component2);

  function OptionImage(props) {
    _classCallCheck(this, OptionImage);

    var _this2 = _possibleConstructorReturn(this, (OptionImage.__proto__ || Object.getPrototypeOf(OptionImage)).call(this, props));

    _this2._handleMouseDown = _this2._handleMouseDown.bind(_this2);
    _this2._handleMouseEnter = _this2._handleMouseEnter.bind(_this2);
    _this2._handleMouseMove = _this2._handleMouseMove.bind(_this2);
    return _this2;
  }

  _createClass(OptionImage, [{
    key: '_handleMouseDown',
    value: function _handleMouseDown(event) {
      event.preventDefault();
      event.stopPropagation();

      this.props.onSelect(this.props.option, event);
    }
  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter(event) {

      this.props.onFocus(this.props.option, event);
    }
  }, {
    key: '_handleMouseMove',
    value: function _handleMouseMove(event) {
      if (this.props.isFocused) return;
      this.props.onFocus(this.props.option, event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          labelKey = _props2.labelKey,
          imageKey = _props2.imageKey,
          subLabelKey = _props2.subLabelKey,
          hasImage = _props2.hasImage,
          noImagePaddingLeft = _props2.noImagePaddingLeft;

      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: { wordBreak: 'break-all' },
          onMouseDown: this._handleMouseDown,
          onMouseEnter: this._handleMouseEnter,
          onMouseMove: this._handleMouseMove
        },
        hasImage ? _react2.default.createElement(
          'div',
          null,
          this.props.option[imageKey] === undefined || this.props.option[imageKey] === null || this.props.option[imageKey] === '' ? _react2.default.createElement(
            'div',
            { style: { paddingLeft: noImagePaddingLeft } },
            _react2.default.createElement(
              'div',
              { className: 'multi-option-label' },
              _react2.default.createElement(
                'strong',
                null,
                this.props.option[labelKey]
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'multi-option-subLabel' },
              this.props.option[subLabelKey]
            )
          ) : _react2.default.createElement(
            'div',
            null,
            this.props.option[subLabelKey] === undefined || this.props.option[subLabelKey] === null || this.props.option[subLabelKey] === '' ? _react2.default.createElement(
              'div',
              { style: { display: 'table-row' } },
              _react2.default.createElement(
                'div',
                { style: { display: 'table-cell' } },
                _react2.default.createElement('img', { className: 'multi-option-image', width: '40px', src: this.props.option[imageKey], style: { marginRight: '10px' } })
              ),
              _react2.default.createElement(
                'div',
                { className: 'multi-option-label', style: { display: 'table-cell', verticalAlign: 'middle' } },
                _react2.default.createElement(
                  'strong',
                  null,
                  this.props.option[labelKey]
                )
              )
            ) : _react2.default.createElement(
              'div',
              { style: { display: 'table-row' } },
              _react2.default.createElement(
                'div',
                { style: { display: 'table-cell' } },
                _react2.default.createElement('img', { className: 'multi-option-image', width: '40px', src: this.props.option[imageKey], style: { marginRight: '10px' } })
              ),
              _react2.default.createElement(
                'div',
                { style: { display: 'table-cell', verticalAlign: 'middle' } },
                _react2.default.createElement(
                  'div',
                  { className: 'multi-option-label' },
                  _react2.default.createElement(
                    'strong',
                    null,
                    this.props.option[labelKey]
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'multi-option-subLabel' },
                  this.props.option[subLabelKey]
                )
              )
            )
          )
        ) : // Else (!hasImage)
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'multi-option-label' },
            _react2.default.createElement(
              'strong',
              null,
              this.props.option[labelKey]
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'multi-option-subLabel' },
            this.props.option[subLabelKey]
          )
        )
      );
    }
  }]);

  return OptionImage;
}(_react.Component);

var ValueImage = function (_Component3) {
  _inherits(ValueImage, _Component3);

  function ValueImage() {
    _classCallCheck(this, ValueImage);

    return _possibleConstructorReturn(this, (ValueImage.__proto__ || Object.getPrototypeOf(ValueImage)).apply(this, arguments));
  }

  _createClass(ValueImage, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          disabled = _props3.disabled,
          value = _props3.value,
          onRemove = _props3.onRemove,
          labelKey = _props3.labelKey,
          imageKey = _props3.imageKey,
          subLabelKey = _props3.subLabelKey,
          valueKey = _props3.valueKey,
          hasImage = _props3.hasImage;

      return _react2.default.createElement(
        'div',
        { id: 'single-select-value', className: 'Select-value' },
        _react2.default.createElement(
          'span',
          { id: 'single-value-label', className: 'Select-value-label' },
          hasImage ? _react2.default.createElement(
            'span',
            null,
            this.props.value[imageKey] === undefined || this.props.value[imageKey] === null || this.props.value[imageKey] === '' ? _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(
                'strong',
                null,
                this.props.value[labelKey]
              )
            ) : _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('img', { className: 'single-value-image', width: '20px', src: this.props.value[imageKey], style: { marginRight: '5px' } }),
              _react2.default.createElement(
                'strong',
                null,
                this.props.value[labelKey]
              )
            )
          ) : _react2.default.createElement(
            'strong',
            null,
            this.props.value[labelKey]
          ),
          this.props.value[subLabelKey] === undefined || this.props.value[subLabelKey] === null || this.props.value[subLabelKey] === '' ? '' : _react2.default.createElement(
            'span',
            { className: 'single-value-subLabel' },
            ' - ',
            this.props.value[subLabelKey],
            ' '
          )
        )
      );
    }
  }]);

  return ValueImage;
}(_react.Component);

F4SingleSelect.propTypes = {
  name: _propTypes2.default.name,
  onChange: _propTypes2.default.func,
  closeOnSelect: _propTypes2.default.bool,
  options: _propTypes2.default.array.isRequired,
  valueKey: _propTypes2.default.string,
  labelKey: _propTypes2.default.string,
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  className: _propTypes2.default.string,
  hasImage: _propTypes2.default.bool,
  noImagePaddingLeft: _propTypes2.default.string,
  label: _propTypes2.default.string,
  isVisible: _propTypes2.default.bool,
  withLabel: _propTypes2.default.bool,
  fieldLabel: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  searchable: _propTypes2.default.bool,
  clearable: _propTypes2.default.bool
};

F4SingleSelect.defaultProps = {
  style: {
    width: '100%',
    height: 'auto'
  },
  valueComponent: function valueComponent(props) {
    return _react2.default.createElement(ValueImage, props);
  },
  optionComponent: function optionComponent(props) {
    return _react2.default.createElement(OptionImage, props);
  },
  placeholder: 'Select',
  disabled: false,
  isVisible: true,
  withLabel: true,
  searchable: true,
  clearable: true
};

exports.default = (0, _asF4FormElement2.default)(F4SingleSelect);

// OptionImage.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
//   isDisabled: PropTypes.bool,
//   isFocused: PropTypes.bool,
//   isSelected: PropTypes.bool,
//   onFocus: PropTypes.func,
//   onSelect: PropTypes.func,
// option: PropTypes.object.isRequired,
// }


{/* {
            (this.props.option[subLabelKey] === undefined || this.props.option[subLabelKey] === null || this.props.option[subLabelKey] === '') ?  
              <div>
                {
                  (this.props.option[imageKey] === undefined || this.props.option[imageKey] === null || this.props.option[imageKey] === '') ?
                     <div style={{wordWrap: 'break-word'}}><strong>{this.props.option[labelKey]}</strong><br/></div>
                    :
                    <div  style={{display: 'table-row'}}>
                      <div style={{display: 'table-cell'}}><img width="40px" src={this.props.option[imageKey]} style={{marginRight: '10px'}}/></div>
                      <div style={{wordWrap: 'break-word', display: 'table-cell'}}><strong>{this.props.option[labelKey]}</strong></div>             
                    </div>
                }            
              </div>             
              :
              <div>
                {
                  (this.props.option[imageKey] === undefined || this.props.option[imageKey] === null || this.props.option[imageKey] === '') ?
                  <div>
                    <div style={{wordWrap: 'break-word'}}><strong>{this.props.option[labelKey]}</strong></div>
                    <div style={{marginLeft: '5px',wordWrap: 'break-word'}}>{this.props.option[subLabelKey]}</div>
                  </div>
                  :
                  <div>
                    <img width="40px" src={this.props.option[imageKey]} style={{marginRight: '10px', float:'left'}}/>
                    <div style={{marginLeft: '50px' , wordWrap: 'break-word'}}><strong>{this.props.option[labelKey]}</strong></div>
                    <div style={{marginLeft: '55px' , wordWrap: 'break-word'}}>{this.props.option[subLabelKey]}</div>
                  </div>
                }              
              </div>
          }      */}
module.exports = exports['default'];