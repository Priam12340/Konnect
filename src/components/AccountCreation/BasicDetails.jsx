import React, { Component } from "react";
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, ButtonToolbar, Button } from 'rsuite';

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
        <Form>
          <div className="username">
            <FormGroup className= "form-group">
              <ControlLabel>Username</ControlLabel>
              <FormControl name="name" />
              <HelpBlock>Required</HelpBlock>
            </FormGroup>
          </div>

          <div className="email">
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl name="email" type="email" />
              <HelpBlock tooltip>Required</HelpBlock>
            </FormGroup>
          </div>
          <div className="password">
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl name="password" type="password" />
            </FormGroup>
          </div>
        </Form>
        <Button size="lg" pill theme="light" onClick={this.handleSaveAndContinue}>Save &amp; Continue</Button>
      </div >
    );
  }
}
export default BasicDetails;