/**
* F4Stepper.js
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Steps, { Step } from 'rc-steps';

class F4Stepper extends Component {
  constructor(props) {
    super(props);
    this.onNext = this.onNext.bind(this);
    this.onBack = this.onBack.bind(this);
    this.state = {
       currentStep: 0,
       stepIndicator: "Step One",
    }
  }

  onNext(){
    const { stepperStore, stepData, _onNext } = this.props;
    let addStep = stepperStore.currentStep;
    stepperStore.updateCurrentStep(addStep + 1);
    console.log(stepperStore.currentStep);
    if (stepperStore.currentStep === stepData.length) {
      stepperStore.currentStep = 0;
    }
    
    // for the Stepper Indicator only - you can delete this anytime
    if (stepperStore.currentStep === 0){
      stepperStore.indicator = "Step One";
    }
    if (stepperStore.currentStep === 1){
      stepperStore.indicator = "Step Two";
    }
    if (stepperStore.currentStep === 2){
      stepperStore.indicator = "Step Three";
    }
    this.setState ({
      currentStep: stepperStore.currentStep,
      stepIndicator: stepperStore.indicator,
    })
    _onNext();
  }

  onBack(){
    const { stepperStore, stepData, _onBack } = this.props;
    let addStep = stepperStore.currentStep;
    stepperStore.updateCurrentStep(addStep - 1);
    console.log(stepperStore.currentStep);
    if (stepperStore.currentStep <= 0) {
      stepperStore.currentStep = 0;
    }

    // for the Stepper Indicator only - you can delete this anytime
    if (stepperStore.currentStep === 0){
      stepperStore.indicator = "Step One";
    }
    if (stepperStore.currentStep === 1){
      stepperStore.indicator = "Step Two";
    }
    if (stepperStore.currentStep === 2){
      stepperStore.indicator = "Step Three";
    }
    this.setState ({
      currentStep: stepperStore.currentStep,
      stepIndicator: stepperStore.indicator,
    })
    _onBack();
  }

  render() {
    const { stepperStore } = this.props;
    const { _onNext, _onBack, isDirection, current, stepData } = this.props;
    return (
      <div>
        <Col lg={12} md={12} sm={12}>
        <label className= "stepperLabel">{this.state.stepIndicator}</label>
          <Steps direction = { isDirection } current = { this.state.currentStep }>
            {/* Mapping all the Step elements */}
            { stepData.map(( entry, index ) => <Step key = { index } title = { stepData[index] } />) }
          </Steps>
          {this.props.isCustomEventClick ? 
            <div>
              <input onClick={this.onBack} type = "button" value = "Back" className="textFont" />
              <input onClick={this.onNext} type = "button" value = "Next" className="textFont" />  
            </div> : ' '}
        </Col>
      </div>
    );
  }
}

F4Stepper.propTypes = {
  _onBack: PropTypes.func,
  _onNext: PropTypes.func,
  stepData: PropTypes.array,
  isDirection: PropTypes.string,
  current: PropTypes.number,
  isCustomEventClick: PropTypes.bool,
  stepperStore: PropTypes.oneOfType([PropTypes.func,PropTypes.object]).isRequired,
}

F4Stepper.defaultProps = {
  isDirection: "vertical",
  current: 0,
  isCustomEventClick: false,
}


export default F4Stepper;
