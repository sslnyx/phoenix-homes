import { Row, Col } from "react-bootstrap";
import oImg from "/src/assets/images/hero/Letter_O_graphic.svg";
import "./index.scss";

const OurLegacy = () => {
  return (
    <section className="legacy bg-blue">
      <div className="content">
        <Row>
          <Col xs={12} md={6}>
            <img className="o-legacy" src={oImg} alt="" />
            <div className="text-block">
              <h2>Our Legacy</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                turpis ipsum, eleifend at sem ut, dictum dapibus quam. Duis
                tristique magna ut iaculis consectetur. Etiam lobortis augue at
                nisl volutpat convallis. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
                Pellentesque sapien nisl, pellentesque nec lorem luctus, aliquam
                aliquam augue.
              </p>
              <p>
                Curabitur vulputate lacus non nisi bibendum volutpat. Phasellus
                in neque vehicula nibh mattis sagittis ut in turpis. Nulla
                dictum turpis lacinia arcu rhoncus imperdiet. 
              </p>
              <p>
                Aliquam erat volutpat. Nam pretium tortor at massa tempus
                aliquam. Nulla non aliquet leo. Vestibulum convallis arcu eu
                dolor aliquam, accumsan tincidunt arcu pretium.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
      </div>
    </section>
  );
};

export default OurLegacy;
