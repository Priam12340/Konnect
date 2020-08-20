import React, { Component } from "react";
import { 
  Button 
} from "shards-react";

class Interests extends Component {

  constructor(props) {
    super(props);
    this.handleSaveDetails = this.handleSaveDetails.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleSaveDetails() {
    this.props.persistDetails();
  }

  handlePrevious() {
    this.props.prevStep();
  }

  render() {
    return (
      <div className="AdditionalDetails">
          <Button size="lg" pill theme="light" onClick={this.handlePrevious}>Go Back</Button>
          <Button size="lg" pill theme="light" onClick={this.handleSaveDetails}>Submit</Button>
      </div>
    );
  }


}
export default Interests;