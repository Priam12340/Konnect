import React from "react";
import { Form, FormInput, FormGroup } from "shards-react";

const BasicDetails = () => {
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
    </div>
  );
};
export default BasicDetails;