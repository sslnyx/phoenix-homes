import React from "react";
import NewsBg from "/assets/images/contact/contact.jpg";
import { Row, Col } from "react-bootstrap";
import NewsContainer from "./NewsContainer";
import "./index.scss";

const News = () => {
  return (
    <div className="news">
      <img className="contact-bg" src={NewsBg} />
      <Row>
        <Col xs={12} lg={6}></Col>
        <Col xs={12} lg={6}>
          <div className="news-wrapper">
            <h5>NEWS &amp; UPDATES</h5>
            <p>
              Please visit this page often for updates to Phoenix Homes and our
              developments.
            </p>

            <NewsContainer />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default News;
