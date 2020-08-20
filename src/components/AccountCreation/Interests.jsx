import React, { useState } from "react";
import {
  Button,
  Card,
  CardImg
} from "shards-react";
import { Modal } from 'rsuite';

import InterestsDisplay from './InterestsDisplay';
import './Interests.scss';

import tickmark from '../../assets/tickmark.jpg';

const Interests = (props) => {

  //Modal State Variable
  const [showCompletion, setShowCompletion] = useState(false);

  function handleSaveDetails() {
    // props.persistDetails();
    setShowCompletion(true);
  }

  function handlePrevious() {
    props.prevStep();
  }

  function acceptAck() {
    console.log("coming to accept ack function ");
    setShowCompletion(false);
  }

  return (
    <div className="Interests">
      <h4>Choose five categories that represent your hobbies</h4>
      <InterestsDisplay cols={3}>
        <Card style={{ maxWidth: "100px" }}>
          <CardImg src="https://picsum.photos/100" />
        </Card>
        <Card style={{ maxWidth: "100px" }}>
          <CardImg src="https://picsum.photos/100" />
        </Card>
        <Card style={{ maxWidth: "100px" }}>
          <CardImg src="https://picsum.photos/100" />
        </Card>
        <Card style={{ maxWidth: "100px" }}>
          <CardImg src="https://picsum.photos/100" />
        </Card>
        <Card style={{ maxWidth: "100px" }}>
          <CardImg src="https://picsum.photos/100" />
        </Card>
        <Card style={{ maxWidth: "100px" }}>
          <CardImg src="https://picsum.photos/100" />
        </Card>
      </InterestsDisplay>
      {showCompletion && <Modal className="completion-modal" size="xs" show={true}>
        <Modal.Header>
          <Modal.Title className="completion-modal-title">BRAVO!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="completion-modal-body">
            <p>Your profile has been created</p>
          </Modal.Body>
        <Modal.Footer>
        <button className="completion-modal-image" onClick={acceptAck}><img src={tickmark} alt="Tick" style={{width: "50px", height: "50px" }}/></button>
          </Modal.Footer>
      </Modal>}
      <Button size="lg" pill theme="light" onClick={handlePrevious}>Go Back</Button>
      <Button size="lg" pill theme="light" onClick={handleSaveDetails}>Submit</Button>
    </div>
  );


}
export default Interests;