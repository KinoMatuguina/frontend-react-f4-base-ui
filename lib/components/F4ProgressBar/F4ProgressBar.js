'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4ProgressBar
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4ProgressBar = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4ProgressBar, _Component);

  function F4ProgressBar(props) {
    _classCallCheck(this, F4ProgressBar);

    return _possibleConstructorReturn(this, (F4ProgressBar.__proto__ || Object.getPrototypeOf(F4ProgressBar)).call(this, props));
  }

  _createClass(F4ProgressBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          progress = _props.progress,
          color = _props.color,
          height = _props.height;

      var barWidth = 0;

      if (progress < 0) {
        barWidth = 0;
      } else if (progress > 100) {
        barWidth = 100;
      } else {
        barWidth = progress;
      }
      var overrideStyle = {
        backgroundColor: color,
        height: height,
        width: barWidth + '%',
        borderRadius: '5px',
        transition: 'width 0.25s ease-in-out'
      };

      return _react2.default.createElement(
        'div',
        { className: 'f4ProgressBar' },
        _react2.default.createElement('div', { className: 'f4ProgressBarContent', style: overrideStyle })
      );
    }
  }]);

  return F4ProgressBar;
}(_react.Component)) || _class;

exports.default = F4ProgressBar;


F4ProgressBar.propTypes = {
  progress: _propTypes2.default.number.isRequired,
  color: _propTypes2.default.string,
  height: _propTypes2.default.number
};

F4ProgressBar.defaultProps = {
  color: '#5082b3',
  height: 10
};
module.exports = exports['default'];