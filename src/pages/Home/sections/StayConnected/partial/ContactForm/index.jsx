import React, { useRef, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import ArrowRBtn from "../../../../../../components/ArrowRBtn";
import ThankyouModal from "../ThankyouModal";
import "./index.scss";

const ContactForm = () => {
  const contactForm = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formSubmit = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(contactForm.current);

    const url = "https://api.phoenixhomesbc.ca/api/connect/v1";

    try {
      setSubmitting(true);
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      setSubmitting(false);
      setShow(true);
      console.log(await response);
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  };

  return (
    <div id="contact-form" className="contact-form">
      <h6 className="font-weight-bold">
        What development are you interested in?
      </h6>
      <ArrowRBtn way="down"></ArrowRBtn>
      <div className="mb-4"></div>
      <form ref={contactForm} onSubmit={formSubmit}>
        <Row>
          <Col>
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              required
            />
          </Col>
          <Col>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="text"
              name="email"
              placeholder="Email Address*"
              required
            />
          </Col>
          <Col>
            <input type="text" name="phone" placeholder="Primary Phone*" />
          </Col>
        </Row>

        <p>ARE YOU A REALTOR?</p>

        <div className="d-flex mb-5">
          <label className="radio-container">
            <input type="radio" name="realtor" value={true} />
            <span className="checkmark"></span>
            <span style={{ fontSize: "14px" }}>YES</span>
          </label>

          <label className="radio-container">
            <input type="radio" name="realtor" value={false} />
            <span className="checkmark"></span>
            <span style={{ fontSize: "14px" }}>NO</span>
          </label>
        </div>

        <label className="concent radio-container mb-5">
          <input type="checkbox" name="concent" required />
          <span className="checkmark"></span>
          <span>
            Yes, I'd like to recive email from Phoenix Homes, which include
            pricing, floorplans,sales updates, event invitations and
            corporatenewsletters. I understand that I can unsubscribe at any
            time.
          </span>
        </label>

        <div className="submit-btn-wrapper d-flex align-items-center justify-content-center">
          {submitting ? (
            <Spinner animation="grow" />
          ) : (
            <button type="submit" className="btn-submit">
              SUBMIT
            </button>
          )}
        </div>
      </form>

      <ThankyouModal {...{ handleClose, show }} />
    </div>
  );
};

export default ContactForm;
