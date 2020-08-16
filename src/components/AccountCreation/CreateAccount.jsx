import React from "react";
import BasicDetails from './BasicDetails';
import AdditionalDetails from './AdditionalDetails';
import Interests from './Interests';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <h1>Create Account</h1>
      <BasicDetails />
      <AdditionalDetails />
      <Interests />
    </div>
  );
};
export default CreateAccount;