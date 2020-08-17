import React, { Component } from "react";
import { 
  Form, 
  FormInput, 
  FormGroup, 
  Button 
} from "shards-react";

class BasicDetails extends Component {

  constructor(props) {
    super(props);
    this.handleSaveAndContinue = this.handleSaveAndContinue.bind(this);
  }

  handleSaveAndContinue() {
    this.props.nextStep();
  }

  render() {
    return (
      <div className="BasicDetails">
          <Form className="basic-details-form">
              <FormGroup>
                  <label htmlFor="#username">User name</label>
                  <FormInput id="#username" placeholder="Username" />
              </FormGroup>
              <FormGroup>
                  <label htmlFor="#password">Password</label>
                  <FormInput type="password" id="#password" placeholder="Password" />
              </FormGroup>
          </Form>
          <Button size="lg" pill theme="light" onClick={this.handleSaveAndContinue}>Save &amp; Continue</Button>
      </div>
    );
  }


}
export default BasicDetails;