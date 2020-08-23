import React, { useState } from "react";
import { Dropdown, DatePicker } from 'rsuite';

import './AdditionalDetails.scss';
import next from '../../assets/next.png';

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
      <img className="Prev" src={next} onClick={handlePrevious} alt="Previous" />
      <img className="Next" src={next} onClick={handleSaveAndContinue} alt="Save&amp;Continue" />
      <div className="AdditionalDetailsSection">
        <div className="gender-dropdown">
          <Dropdown size="lg" title={additionalDetails.gender || "Choose Gender"} trigger="click" appearance="default" onSelect={handleDropdownSelect}>
            <Dropdown.Item active={additionalDetails.gender === 'Male'} eventKey={'Male'}>Male</Dropdown.Item>
            <Dropdown.Item active={additionalDetails.gender === 'Female'} eventKey={'Female'}>Female</Dropdown.Item>
            <Dropdown.Item active={additionalDetails.gender === 'Don\'t wish to specify'} eventKey={'Don\'t wish to specify'}>Don't wish to specify</Dropdown.Item>
          </Dropdown>
        </div>
        <label className="dob-label">Date Of Birth</label>
        <DatePicker className="date-of-birth" block size="lg" placeholder="Select Date Of Birth" value={additionalDetails.dob || new Date()} onChange={dob => setAdditionalDetails({ ...additionalDetails, dob: dob })} />
      </div>
    </div>
  );


}
export default AdditionalDetails;