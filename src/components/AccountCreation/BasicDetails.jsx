import React, { useState } from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button, Schema } from 'rsuite';
import './BasicDetails.scss';

class TextField extends React.PureComponent {
  render() {
    const { name, label, accepter, ...props } = this.props;
    return (
      <FormGroup>
        <ControlLabel>{label} </ControlLabel>
        <FormControl name={name} accepter={accepter} {...props} />
      </FormGroup>
    );
  }
}

const BasicDetails = (props) => {

  const { StringType } = Schema.Types;
  const model = Schema.Model({
    fullName: StringType().isRequired('This field is required.'),
    email: StringType()
      .isEmail('Please enter a valid email address.')
      .isRequired('This field is required.'),
    password: StringType().isRequired('This field is required.'),
    verifyPassword: StringType()
      .addRule((value, data) => {
        console.log(data);
  
        if (value !== data.password) {
          return false;
        }
  
        return true;
      }, 'The two passwords do not match')
      .isRequired('This field is required.')
  });

  const [formValue, setFormValue] = useState(props.basicDetails);

  function handleSaveAndContinue() {
    props.saveBasicDetails(formValue);
    props.nextStep();
  }

  return (
    <div className="BasicDetails">
      <Form model={model} 
            formDefaultValue={formValue || ''} 
            onChange={formValue => setFormValue(formValue)}>
        <div className="fullName">
          <TextField name="fullName" placeholder="Full name"/>
        </div>

        <div className="email">
          <TextField name="email" placeholder="email ID" />
        </div>

        <div className="password">
          <TextField name="password" placeholder="Password" type="password" />
          <TextField name="verifyPassword" placeholder="Verify Password" type="password" />
        </div>
      </Form>
      <Button size="lg" pill="true" theme="light" onClick={handleSaveAndContinue}>Save &amp; Continue</Button>
    </div >
  );
}

export default BasicDetails;