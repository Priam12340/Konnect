import React, { useState } from "react";
import BasicDetails from './BasicDetails';
import AdditionalDetails from './AdditionalDetails';
import Interests from './Interests';
import { useFirebase } from "react-redux-firebase";

const CreateAccount = (props) => {

  //State Variables defined
  const [step, setStep] = useState(1);
  
  const [interests, setInterests] = useState();

  const [basicDetails, setBasicDetails] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [additionalDetails, setAdditionalDetails] = useState({
    fullName: "John Smith",
    email: "google@gmail.com",
    password: 'HTML5'
  });
  const firebase = useFirebase();

  function nextStep () {
    setStep(step + 1);
  }

  function prevStep () {
    setStep(step - 1);
  }

  function persistDetails (detailsObj) {
    const sampleTodo = { text: 'Pramothini', done: true };
    return firebase.push('todos', sampleTodo);
  }

  function saveBasicDetails (basicDetails) {
    console.log("Showing basic details ", basicDetails);
    setBasicDetails(basicDetails);
  }

  function saveAdditionalDetails (additionalDetails) {
    console.log("Showing additional details ", additionalDetails);
    setAdditionalDetails(additionalDetails);
  }

  switch(step) {
  case 1: return <BasicDetails className="CreateAccount"
                saveBasicDetails={saveBasicDetails}
                basicDetails={basicDetails}
                nextStep={nextStep} />;
  case 2: return <AdditionalDetails className="CreateAccount"
                saveAdditionalDetails={saveAdditionalDetails}
                additionalDetails={additionalDetails}
                nextStep={nextStep}
                prevStep={prevStep} />;
  case 3: return <Interests className="CreateAccount"
                interests={interests}
                persistDetails={persistDetails}
                prevStep={prevStep} />;
  }

}

export default CreateAccount;