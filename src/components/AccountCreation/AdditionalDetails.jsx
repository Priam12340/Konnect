import React, { Component } from "react";
import { 
  Form, 
  FormInput, 
  FormGroup, 
  Button 
} from "shards-react";
import { Dropdown } from 'rsuite';

class AdditionalDetails extends Component {

  constructor(props) {
    super(props);
    this.handleSaveAndContinue = this.handleSaveAndContinue.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleSaveAndContinue() {
    this.props.nextStep();
  }

  handlePrevious() {
    this.props.prevStep();
  }

  render() {
    return (
      <div className="AdditionalDetails">
          <Button size="lg" pill theme="light" onClick={this.handlePrevious}>Go Back</Button>
          <Button size="lg" pill theme="light" onClick={this.handleSaveAndContinue}>Save &amp; Continue</Button>
      </div>
    );
  }


}
export default AdditionalDetails;