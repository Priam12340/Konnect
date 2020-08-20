import React, { useState } from "react";
import { Dropdown, DatePicker, Button } from 'rsuite';

import './AdditionalDetails.scss';

const AdditionalDetails = (props) => {

  const [additionalDetails, setAdditionalDetails] = useState(props.additionalDetails);

  function handleSaveAndContinue() {
    props.saveAdditionalDetails(additionalDetails);
    props.nextStep();
  }

  function handlePrevious() {
    props.prevStep();
  }

  function handleDropdownSelect(eventKey, event) {
    setAdditionalDetails({
      ...additionalDetails,
      gender: eventKey
    });
  }

  return (
    <div className="AdditionalDetails">
      <div className="gender-dropdown">
      <Dropdown size="lg" title={additionalDetails.gender || "Choose Gender"} trigger="click" appearance="default" onSelect={handleDropdownSelect}>
        <Dropdown.Item active={additionalDetails.gender === 'Male'} eventKey={'Male'}>Male</Dropdown.Item>
        <Dropdown.Item active={additionalDetails.gender === 'Female'} eventKey={'Female'}>Female</Dropdown.Item>
        <Dropdown.Item active={additionalDetails.gender === 'Don\'t wish to specify'} eventKey={'Don\'t wish to specify'}>Don't wish to specify</Dropdown.Item>
      </Dropdown>
      </div>
      <div className="date-of-birth">
        <label className="dob-label">Date Of Birth</label>
        <DatePicker size="lg" placeholder="Select Date Of Birth" value={additionalDetails.dob || new Date()} onChange={dob => setAdditionalDetails({ ...additionalDetails, dob: dob })} />
      </div>
      <div className="create-account-navigation">
        <Button size="lg" theme="light" onClick={handlePrevious}>Go Back</Button>
        <Button size="lg" theme="light" onClick={handleSaveAndContinue}>Save &amp; Continue</Button>
      </div>
    </div>
  );


}
export default AdditionalDetails;