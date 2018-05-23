'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _rcSteps = require('rc-steps');

var _rcSteps2 = _interopRequireDefault(_rcSteps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * F4Stepper.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var F4Stepper = function (_Component) {
  _inherits(F4Stepper, _Component);

  function F4Stepper(props) {
    _classCallCheck(this, F4Stepper);

    var _this = _possibleConstructorReturn(this, (F4Stepper.__proto__ || Object.getPrototypeOf(F4Stepper)).call(this, props));

    _this.onNext = _this.onNext.bind(_this);
    _this.onBack = _this.onBack.bind(_this);
    _this.state = {
      currentStep: 0,
      stepIndicator: "Step One"
    };
    return _this;
  }

  _createClass(F4Stepper, [{
    key: 'onNext',
    value: function onNext() {
      var _props = this.props,
          stepperStore = _props.stepperStore,
          stepData = _props.stepData,
          _onNext = _props._onNext;

      var addStep = stepperStore.currentStep;
      stepperStore.updateCurrentStep(addStep + 1);
      console.log(stepperStore.currentStep);
      if (stepperStore.currentStep === stepData.length) {
        stepperStore.currentStep = 0;
      }

      // for the Stepper Indicator only - you can delete this anytime
      if (stepperStore.currentStep === 0) {
        stepperStore.indicator = "Step One";
      }
      if (stepperStore.currentStep === 1) {
        stepperStore.indicator = "Step Two";
      }
      if (stepperStore.currentStep === 2) {
        stepperStore.indicator = "Step Three";
      }
      this.setState({
        currentStep: stepperStore.currentStep,
        stepIndicator: stepperStore.indicator
      });
      _onNext();
    }
  }, {
    key: 'onBack',
    value: function onBack() {
      var _props2 = this.props,
          stepperStore = _props2.stepperStore,
          stepData = _props2.stepData,
          _onBack = _props2._onBack;

      var addStep = stepperStore.currentStep;
      stepperStore.updateCurrentStep(addStep - 1);
      console.log(stepperStore.currentStep);
      if (stepperStore.currentStep <= 0) {
        stepperStore.currentStep = 0;
      }

      // for the Stepper Indicator only - you can delete this anytime
      if (stepperStore.currentStep === 0) {
        stepperStore.indicator = "Step One";
      }
      if (stepperStore.currentStep === 1) {
        stepperStore.indicator = "Step Two";
      }
      if (stepperStore.currentStep === 2) {
        stepperStore.indicator = "Step Three";
      }
      this.setState({
        currentStep: stepperStore.currentStep,
        stepIndicator: stepperStore.indicator
      });
      _onBack();
    }
  }, {
    key: 'render',
    value: function render() {
      var stepperStore = this.props.stepperStore;
      var _props3 = this.props,
          _onNext = _props3._onNext,
          _onBack = _props3._onBack,
          isDirection = _props3.isDirection,
          current = _props3.current,
          stepData = _props3.stepData;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Col2.default,
          { lg: 12, md: 12, sm: 12 },
          _react2.default.createElement(
            'label',
            { className: 'stepperLabel' },
            this.state.stepIndicator
          ),
          _react2.default.createElement(
            _rcSteps2.default,
            { direction: isDirection, current: this.state.currentStep },
            stepData.map(function (entry, index) {
              return _react2.default.createElement(_rcSteps.Step, { key: index, title: stepData[index] });
            })
          ),
          this.props.isCustomEventClick ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', { onClick: this.onBack, type: 'button', value: 'Back', className: 'textFont' }),
            _react2.default.createElement('input', { onClick: this.onNext, type: 'button', value: 'Next', className: 'textFont' })
          ) : ' '
        )
      );
    }
  }]);

  return F4Stepper;
}(_react.Component);

F4Stepper.propTypes = {
  _onBack: _propTypes2.default.func,
  _onNext: _propTypes2.default.func,
  stepData: _propTypes2.default.array,
  isDirection: _propTypes2.default.string,
  current: _propTypes2.default.number,
  isCustomEventClick: _propTypes2.default.bool,
  stepperStore: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired
};

F4Stepper.defaultProps = {
  isDirection: "vertical",
  current: 0,
  isCustomEventClick: false
};

exports.default = F4Stepper;
module.exports = exports['default'];