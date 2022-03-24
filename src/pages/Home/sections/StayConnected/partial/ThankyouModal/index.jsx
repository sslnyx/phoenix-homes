import React from "react";
import { Modal } from "react-bootstrap";
import "./index.scss";

const ThankyouModal = ({ handleClose, show }) => {
  return (
    <div className="ThankYouModal">
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body className="text-center p-5">
          <h3>Thank You</h3>
          <p style={{ maxWidth: "300px", margin: "0 auto" }}>
            Your message has been received. A member of our team will get back
            to you shortly.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ThankyouModal;
