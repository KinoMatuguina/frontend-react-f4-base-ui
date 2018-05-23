'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4Stickynote.js
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _frontendReactF4BaseCommons = require('frontend-react-f4-base-commons');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var connect = _frontendReactF4BaseCommons.BaseContext.connect;

var F4Stickynote = (0, _mobxReact.observer)(_class = connect(_class = function (_Component) {
  _inherits(F4Stickynote, _Component);

  function F4Stickynote(props) {
    _classCallCheck(this, F4Stickynote);

    var _this = _possibleConstructorReturn(this, (F4Stickynote.__proto__ || Object.getPrototypeOf(F4Stickynote)).call(this, props));

    _this.setDefaultValue = function (defaultValue) {
      var loading = _this.state.loading;

      _this.setState({ defaultValue: defaultValue, loading: false });
    };

    _this._onChange = _this._onChange.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.state = {
      defaultValue: "",
      loading: true
    };
    return _this;
  }

  _createClass(F4Stickynote, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.load(this.setDefaultValue);
    }
  }, {
    key: 'save',
    value: function save(data) {
      this.props.save(data);
      //console.log(data);
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      // this.props.onChange(event, event.target.value);
      this.save(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var loading = this.state.loading;


      return _react2.default.createElement(
        'div',
        null,
        !loading ? _react2.default.createElement(_reactBootstrap.FormControl, { className: 'reminder', spellCheck: 'false', ref: 'note', defaultValue: this.state.defaultValue, componentClass: 'textarea', onChange: this._onChange }) : null
      );
    }
  }]);

  return F4Stickynote;
}(_react.Component)) || _class) || _class;

F4Stickynote.propTypes = {
  // props definition
};

F4Stickynote.defaultProps = {
  // default props
};

exports.default = F4Stickynote;
module.exports = exports['default'];