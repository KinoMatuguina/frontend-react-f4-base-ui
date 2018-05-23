/**
* F4MultiStepForm
*/

import React, { Component } from 'react';  import PropTypes from 'prop-types'; 
import { observer } from 'mobx-react';
import Fontawesome from 'react-fontawesome';
import { BaseComponents } from 'frontend-react-f4-base-ui';


import asF4FormElement from '../asF4FormElement/asF4FormElement';
import F4Button from '../F4Button/F4Button';
import F4Card from '../F4Card/F4Card';
import F4ErrorListFeedback from '../F4ErrorListFeedback/F4ErrorListFeedback';
import F4Toolbar from '../F4Toolbar/F4Toolbar';
import F4ToolbarElement from '../F4ToolbarElement/F4ToolbarElement';

@observer
class F4MultiStepForm extends Component {
  constructor(props) {
    super(props);

    this.stepTitles = [];

    this.renderTracker = this.renderTracker.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.handleOnBackClick = this.handleOnBackClick.bind(this);
    this.handleOnNextClick = this.handleOnNextClick.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      scrollClassName: ""
    };

    this.handleScroll = this.handleScroll.bind(this);

  }
  componentWillMount() {

    const { children } = this.props;

    if (children && children.map && children.length > 0) {

      this.stepTitles = children.map((child) => {
        return child.props.stepTitle;
      });

    } else {

      this.stepTitles = [ children.props.stepTitle ];
    }

  }
  handleScroll(event) {

    let scrollTop = event.target.scrollTop;

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
  componentDidMount() {
    document.querySelector('#root').addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.querySelector('#root').removeEventListener('scroll', this.handleScroll);
  }
  handleOnSubmit(event) {

    event.preventDefault();

    const { onSubmit } = this.props;

    if (onSubmit && typeof onSubmit !== 'undefined') {
      onSubmit();
    }
  }
  handleOnBackClick(event) {

    const { onBackClick } = this.props;

    event.preventDefault();

    if (onBackClick && typeof onBackClick !== 'undefined') {
      onBackClick();
    }
  }
  handleOnNextClick(event) {

    const { children, currStep } = this.props;

    event.preventDefault();


    if (children && children.map && children.length > 0) {

      const onChildNextAction = children[currStep].props.onNextAction;

      if (onChildNextAction && typeof onChildNextAction !== 'undefined') {
        onChildNextAction();
      }

    }

  }
  renderTracker() {

    const { currStep } = this.props;
    const { scrollClassName } = this.state;

    const stepNodes = this.stepTitles.map((title, index) => {

      let className = "";
      if (index < currStep) {
        className="completed"
      } else if(index === currStep) {
        className="active";
      }

      return (
        <li key={`${title}`} className={className}>
          <span className="bubble">
          </span>
          <span className="stacked-text">
            { index < currStep &&
              <span>
                <Fontawesome name="check-circle-o" size="2x"/>
                <br />
              </span>
            }
            { title }
          </span>
        </li>
      );
    });



    return (
      <ul className={`progress-indicator ${scrollClassName}`}>
        { stepNodes }
      </ul>
    );
  }
  renderChildren() {

    const { children, currStep, steps } = this.props;

    let renderChild = [];

    if (children && children.map && children.length > 0) {
      renderChild = React.cloneElement(children[currStep], { ...children[currStep].props });
    } else {
      renderChild = children;
    }

    return renderChild;
  }
  render() {

    const { children, steps, currStep, errorMessages, isFetching } = this.props;

    let halfBlock = false;

    if (currStep > 0 && currStep < steps) {
      halfBlock = true;
    }

    return (
      <div className="f4MultiStepForm">
        <F4Card>
          { this.renderTracker() }
        </F4Card>
        <F4ErrorListFeedback errorArray={errorMessages} />
        <div className="f4MultiStepFormContent">
          { this.renderChildren() }
        </div>
        <div className="f4MultiStepFormButton">

          { currStep > 0 &&
            <F4Button
              style="default"
              onClick={this.handleOnBackClick}
              pullRight={false}
              pullLeft={true}
              isLoading={isFetching}
              block={!halfBlock}
              halfBlock={halfBlock}
            >
              BACK
            </F4Button>
          }
          { currStep < steps && currStep !== steps &&
            <F4Button
              style="primary"
              onClick={this.handleOnNextClick}
              pullRight={true}
              pullLeft={false}
              isLoading={isFetching}
              block={!halfBlock}
              halfBlock={halfBlock}
            >
              NEXT
            </F4Button>
          }
          { currStep === steps &&
            <F4Button
              style="primary"
              onClick={this.handleOnSubmit}
              pullRight={true}
              pullLeft={false}
              isLoading={isFetching}
              block={!halfBlock}
              halfBlock={halfBlock}
            >
              SUBMIT
            </F4Button>
          }
        </div>
      </div>
    );
  }
}



F4MultiStepForm.propTypes = {
  steps: PropTypes.number.isRequired,
  currStep: PropTypes.number.isRequired,
  errorMessages: PropTypes.any,
  isFetching: PropTypes.bool
};

F4MultiStepForm.defaultProps = {
  errorMessages: [],
  isFetching: false
};

export default asF4FormElement(F4MultiStepForm);
