import { Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import pageLinks from "../NavBar/pageLinks.json";
import scrollWithOffset from "../NavBar/offsetPlugin";

import "./index.scss";
import SiteLogo from "/assets/images/logos/Phoenix_Homes_logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-blue">
      <img className="footer-logo" src={SiteLogo} />
      <div className="content-w">
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 1 }}>
            <h6>Phoenix Homes</h6>
            <br />

            <div className="address">
              #103 - 12889 84th Ave
              <br />
              Surrey, BC
              <br />
              Canada V3W 0K5
              <br />
              <br />
              <a className="mb-3" href="mailto:info@phoenixhomesbc.ca">
                info@phoenixhomesbc.ca
              </a>
            </div>
          </Col>
          <Col
            className="mb-5 mb-md-0 d-flex justify-content-center justify-content-md-end"
            xs={{ span: 12, order: 1 }}
            md={{ span: 8, order: 2 }}
          >
            <div className="content-wrapper">
              <h3>
                THE REGENERATION
                <br />
                OF QUALITY AND EXPERTISE
              </h3>

              <ul className="d-flex">
                {pageLinks.map(({ name, hash }, i) => (
                  <li key={i}>
                    <HashLink
                      key={i}
                      to={`/${hash}`}
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      {name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        <br />

        <Row>
          <Col xs={12} md={6}>
            <div className="copyright">
              &copy; Copyright {new Date().getFullYear()} Phoenix Homes | All
              rights Reserved.
            </div>
          </Col>
          <Col
            className="policy d-flex justify-content-center justify-content-md-end"
            xs={12}
            md={6}
          >
            Privacy Policy | Terms of Use
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
