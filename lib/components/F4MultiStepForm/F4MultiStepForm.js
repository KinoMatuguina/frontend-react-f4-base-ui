'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class; /**
            * F4MultiStepForm
            */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _frontendReactF4BaseUi = require('frontend-react-f4-base-ui');

var _asF4FormElement = require('../asF4FormElement/asF4FormElement');

var _asF4FormElement2 = _interopRequireDefault(_asF4FormElement);

var _F4Button = require('../F4Button/F4Button');

var _F4Button2 = _interopRequireDefault(_F4Button);

var _F4Card = require('../F4Card/F4Card');

var _F4Card2 = _interopRequireDefault(_F4Card);

var _F4ErrorListFeedback = require('../F4ErrorListFeedback/F4ErrorListFeedback');

var _F4ErrorListFeedback2 = _interopRequireDefault(_F4ErrorListFeedback);

var _F4Toolbar = require('../F4Toolbar/F4Toolbar');

var _F4Toolbar2 = _interopRequireDefault(_F4Toolbar);

var _F4ToolbarElement = require('../F4ToolbarElement/F4ToolbarElement');

var _F4ToolbarElement2 = _interopRequireDefault(_F4ToolbarElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var F4MultiStepForm = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(F4MultiStepForm, _Component);

  function F4MultiStepForm(props) {
    _classCallCheck(this, F4MultiStepForm);

    var _this = _possibleConstructorReturn(this, (F4MultiStepForm.__proto__ || Object.getPrototypeOf(F4MultiStepForm)).call(this, props));

    _this.stepTitles = [];

    _this.renderTracker = _this.renderTracker.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);
    _this.handleOnBackClick = _this.handleOnBackClick.bind(_this);
    _this.handleOnNextClick = _this.handleOnNextClick.bind(_this);
    _this.handleOnSubmit = _this.handleOnSubmit.bind(_this);

    _this.state = {
      scrollClassName: ""
    };

    _this.handleScroll = _this.handleScroll.bind(_this);

    return _this;
  }

  _createClass(F4MultiStepForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var children = this.props.children;


      if (children && children.map && children.length > 0) {

        this.stepTitles = children.map(function (child) {
          return child.props.stepTitle;
        });
      } else {

        this.stepTitles = [children.props.stepTitle];
      }
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(event) {

      var scrollTop = event.target.scrollTop;

      if (scrollTop > 132) {

        if (this.state.scrollClassName !== "f4MultiStepFormTrackerScrolled") {
          this.setState({
            scrollClassName: "f4MultiStepFormTrackerScrolled"
          });
        }
      } else {
        if (this.state.scrollClassName !== "") {
          this.setState({
            scrollClassName: ""
          });
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.querySelector('#root').addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.querySelector('#root').removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'handleOnSubmit',
    value: function handleOnSubmit(event) {

      event.preventDefault();

      var onSubmit = this.props.onSubmit;


      if (onSubmit && typeof onSubmit !== 'undefined') {
        onSubmit();
      }
    }
  }, {
    key: 'handleOnBackClick',
    value: function handleOnBackClick(event) {
      var onBackClick = this.props.onBackClick;


      event.preventDefault();

      if (onBackClick && typeof onBackClick !== 'undefined') {
        onBackClick();
      }
    }
  }, {
    key: 'handleOnNextClick',
    value: function handleOnNextClick(event) {
      var _props = this.props,
          children = _props.children,
          currStep = _props.currStep;


      event.preventDefault();

      if (children && children.map && children.length > 0) {

        var onChildNextAction = children[currStep].props.onNextAction;

        if (onChildNextAction && typeof onChildNextAction !== 'undefined') {
          onChildNextAction();
        }
      }
    }
  }, {
    key: 'renderTracker',
    value: function renderTracker() {
      var currStep = this.props.currStep;
      var scrollClassName = this.state.scrollClassName;


      var stepNodes = this.stepTitles.map(function (title, index) {

        var className = "";
        if (index < currStep) {
          className = "completed";
        } else if (index === currStep) {
          className = "active";
        }

        return _react2.default.createElement(
          'li',
          { key: '' + title, className: className },
          _react2.default.createElement('span', { className: 'bubble' }),
          _react2.default.createElement(
            'span',
            { className: 'stacked-text' },
            index < currStep && _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(_reactFontawesome2.default, { name: 'check-circle-o', size: '2x' }),
              _react2.default.createElement('br', null)
            ),
            title
          )
        );
      });

      return _react2.default.createElement(
        'ul',
        { className: 'progress-indicator ' + scrollClassName },
        stepNodes
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _props2 = this.props,
          children = _props2.children,
          currStep = _props2.currStep,
          steps = _props2.steps;


      var renderChild = [];

      if (children && children.map && children.length > 0) {
        renderChild = _react2.default.cloneElement(children[currStep], _extends({}, children[currStep].props));
      } else {
        renderChild = children;
      }

      return renderChild;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          steps = _props3.steps,
          currStep = _props3.currStep,
          errorMessages = _props3.errorMessages,
          isFetching = _props3.isFetching;


      var halfBlock = false;

      if (currStep > 0 && currStep < steps) {
        halfBlock = true;
      }

      return _react2.default.createElement(
        'div',
        { className: 'f4MultiStepForm' },
        _react2.default.createElement(
          _F4Card2.default,
          null,
          this.renderTracker()
        ),
        _react2.default.createElement(_F4ErrorListFeedback2.default, { errorArray: errorMessages }),
        _react2.default.createElement(
          'div',
          { className: 'f4MultiStepFormContent' },
          this.renderChildren()
        ),
        _react2.default.createElement(
          'div',
          { className: 'f4MultiStepFormButton' },
          currStep > 0 && _react2.default.createElement(
            _F4Button2.default,
            {
              style: 'default',
              onClick: this.handleOnBackClick,
              pullRight: false,
              pullLeft: true,
              isLoading: isFetching,
              block: !halfBlock,
              halfBlock: halfBlock
            },
            'BACK'
          ),
          currStep < steps && currStep !== steps && _react2.default.createElement(
            _F4Button2.default,
            {
              style: 'primary',
              onClick: this.handleOnNextClick,
              pullRight: true,
              pullLeft: false,
              isLoading: isFetching,
              block: !halfBlock,
              halfBlock: halfBlock
            },
            'NEXT'
          ),
          currStep === steps && _react2.default.createElement(
            _F4Button2.default,
            {
              style: 'primary',
              onClick: this.handleOnSubmit,
              pullRight: true,
              pullLeft: false,
              isLoading: isFetching,
              block: !halfBlock,
              halfBlock: halfBlock
            },
            'SUBMIT'
          )
        )
      );
    }
  }]);

  return F4MultiStepForm;
}(_react.Component)) || _class;

F4MultiStepForm.propTypes = {
  steps: _propTypes2.default.number.isRequired,
  currStep: _propTypes2.default.number.isRequired,
  errorMessages: _propTypes2.default.any,
  isFetching: _propTypes2.default.bool
};

F4MultiStepForm.defaultProps = {
  errorMessages: [],
  isFetching: false
};

exports.default = (0, _asF4FormElement2.default)(F4MultiStepForm);
module.exports = exports['default'];