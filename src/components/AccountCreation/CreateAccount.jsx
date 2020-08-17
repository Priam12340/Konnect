import React, { useState } from "react";
import BasicDetails from './BasicDetails';
import AdditionalDetails from './AdditionalDetails';
import Interests from './Interests';
import { useFirebase } from "react-redux-firebase";

const CreateAccount = (props) => {

  const [step, setStep] = useState(1);
  const firebase = useFirebase();

  function nextStep () {
    setStep(step + 1);
  }

  function prevStep () {
    setStep(step - 1);
  }

  function saveDetails (detailsObj) {
    const sampleTodo = { text: 'Pramothini', done: true };
    return firebase.push('todos', sampleTodo);
  }

  switch(step) {
  case 1: return <BasicDetails className="CreateAccount"
                nextStep={nextStep} />;
  case 2: return <AdditionalDetails className="CreateAccount"
                nextStep={nextStep}
                prevStep={prevStep} />;
  case 3: return <Interests className="CreateAccount"
                saveDetails={saveDetails}
                prevStep={prevStep} />;
  }

}

export default CreateAccount;