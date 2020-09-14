import React, { useState } from "react";
import { Form, FormGroup, FormControl, ControlLabel, Schema } from 'rsuite';
import './BasicDetails.scss';
import next from '../../assets/next.png';

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

  function handlePrevious() {
    //navigate to signuplogin page
  }

  return (
    <div className="BasicDetails">
      <img className="Prev" src={next} onClick={handlePrevious} alt="Previous" />
      <img className="Next" src={next} onClick={handleSaveAndContinue} alt="Save&amp;Continue" />
      <div className="BasicDetailsSection">
      <h4>Create Account</h4>
      <div className="BasicDetailsForm">
        <Form model={model}
          formDefaultValue={formValue || ''}
          onChange={formValue => setFormValue(formValue)}>
          <div className="fullName">
            <TextField name="fullName" placeholder="Full Name" />
          </div>

          <div className="email">
            <TextField name="email" placeholder="Email" />
          </div>

          <div className="password">
            <TextField name="password" placeholder="Password" type="password" />
            <TextField name="verifyPassword" placeholder="Verify password" type="password" />
          </div>
        </Form>
        </div>
      </div>
    </div >
  );
}

export default BasicDetails;