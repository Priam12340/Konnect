import React, { Component } from "react";
import BasicDetails from './BasicDetails';
import AdditionalDetails from './AdditionalDetails';
import Interests from './Interests';

class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step - 1
    });
  }

  saveDetails = (detailsObj) => {
    console.log("Details received ", detailsObj);
  }

  render() {
    const { step } = this.state;
    switch(step) {
      case 1: return <BasicDetails className="CreateAccount"
                    nextStep={this.nextStep} />;
      case 2: return <AdditionalDetails className="CreateAccount"
                    nextStep={this.nextStep}
                    prevStep={this.prevStep} />;
      case 3: return <Interests className="CreateAccount"
                    saveDetails={this.saveDetails}
                    prevStep={this.prevStep} />;
    }
  }

}

export default CreateAccount;