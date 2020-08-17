import React, { Component } from "react";
import { 
  Form, 
  FormInput, 
  FormGroup, 
  Button 
} from "shards-react";

const BasicDetails = (props) => {

  function handleSaveAndContinue() {
    props.nextStep();
  }

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
        <Button size="lg" pill theme="light" onClick={handleSaveAndContinue}>Save &amp; Continue</Button>
    </div>
  );
}

export default BasicDetails;