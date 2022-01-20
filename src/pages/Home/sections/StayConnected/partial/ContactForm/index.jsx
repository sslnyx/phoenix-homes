import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const ContactForm = () => {
  const contactForm = useRef();

  const formSubmit = (ev) => {
    ev.preventDefault();

    const formData = new FormData(contactForm.current);

    console.log(contactForm.current);
  };

  return (
    <div className="contact-form">
      <h6>What development are you interested in?</h6>

      <div>
        <i className="arrow down"></i>
        <div className="line"></div>
      </div>

      <form ref={contactForm} onSubmit={formSubmit}>
        <Row>
          <Col>
            <input type="text" name="firstName" placeholder="First Name*" />
          </Col>
          <Col>
            <input type="text" name="lastName" placeholder="Last Name*" />
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="text" name="email" placeholder="Email Address*" />
          </Col>
          <Col>
            <input type="text" name="phone" placeholder="Primary Phone*" />
          </Col>
        </Row>

        <p>ARE YOU A REALTOR?</p>

        <div className="d-flex">
          <label className="radio-container">
            <input type="radio" name="realtor" value={true} />
            <span className="checkmark"></span>
            <span>YES</span>
          </label>

          <label className="radio-container">
            <input type="radio" name="realtor" value={false} />
            <span className="checkmark"></span>
            <span>NO</span>
          </label>
        </div>

        <label className="concent radio-container">
          <input type="checkbox" name="concent" />
          <span className="checkmark"></span>
          <span>
            Yes, I'd like to recive email from Phoenix Homes, which include
            pricing, floorplans,sales updates, event invitations and
            corporatenewsletters. I understand that I can unsubscribe at any
            time.
          </span>
        </label>

        <button type="submit" className="btn-submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
