import React, { useState } from "react";
import BasicDetails from './BasicDetails';
import AdditionalDetails from './AdditionalDetails';
import Interests from './Interests';
import './CreateAccount.scss';
// import { useFirebase } from "react-redux-firebase";
// import { useFirestore } from "react-redux-firebase";

const CreateAccount = (props) => {

  // const firebase = useFirebase();
  // const firestore = useFirestore();

  //State Variables defined
  const [step, setStep] = useState(1);
  
  const [interests, setInterests] = useState([
    {
      id: '1',
      img: 'https://picsum.photos/100',
      label: 'Running'
    },
    {
      id: '2',
      img: 'https://picsum.photos/100',
      label: 'Cooking'
    },
    {
      id: '3',
      img: 'https://picsum.photos/100',
      label: 'Golfing'
    },
    {
      id: '4',
      img: 'https://picsum.photos/100',
      label: 'Badminton'
    },
    {
      id: '5',
      img: 'https://picsum.photos/100',
      label: 'Squash'
    },
    {
      id: '6',
      img: 'https://picsum.photos/100',
      label: 'Soccer'
    },
    {
      id: '7',
      img: 'https://picsum.photos/100',
      label: 'Running'
    },
    {
      id: '8',
      img: 'https://picsum.photos/100',
      label: 'Cooking'
    },
    {
      id: '9',
      img: 'https://picsum.photos/100',
      label: 'Golfing'
    },
    {
      id: '10',
      img: 'https://picsum.photos/100',
      label: 'Badminton'
    },
    {
      id: '11',
      img: 'https://picsum.photos/100',
      label: 'Squash'
    },
    {
      id: '12',
      img: 'https://picsum.photos/100',
      label: 'Soccer'
    }
  ]);

  const [basicDetails, setBasicDetails] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [additionalDetails, setAdditionalDetails] = useState({
    dob: new Date(),
    gender: ''
  });
  
  function nextStep () {
    setStep(step + 1);
  }

  function prevStep () {
    setStep(step - 1);
  }

  function persistDetails(interests) {
    console.log("Showing interests ", interests);
    setInterests(interests);
  };

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
                setInterests={setInterests}
                persistDetails={persistDetails}
                prevStep={prevStep} />;
  default: return ;
  }

}

export default CreateAccount;