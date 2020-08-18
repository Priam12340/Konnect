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
  const [formError, setFormError] = useState({});

  function handleSaveAndContinue() {
    props.saveBasicDetails(formValue);
    props.nextStep();
  }

  return (
    <div className="BasicDetails">
      <Form model={model} 
            formDefaultValue={formValue || ''} 
            onChange={formValue => setFormValue(formValue)} 
            onCheck={formError => setFormError(formError)}>
        <div className="fullName">
          <TextField name="fullName" label="Full Name" />
        </div>

        <div className="email">
          <TextField name="email" label="Email" />
        </div>

        <div className="password">
          <TextField name="password" label="Password" type="password" />
          <TextField name="verifyPassword" label="Verify password" type="password" />
        </div>
      </Form>
      <Button size="lg" pill="true" theme="light" onClick={handleSaveAndContinue}>Save &amp; Continue</Button>
    </div >
  );
}

export default BasicDetails;