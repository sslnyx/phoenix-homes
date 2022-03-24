import { useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import oImg from "/assets/images/hero/Letter_O_graphic.svg";
import familyImg from "/assets/images/legacy/family.jpg";
import getSectionTopBOttom from "../../getSectionTopBottom";
import "./index.scss";

const OurLegacy = ({ setSecLocation }) => {
  const legacy = useRef();

  useEffect(() => {
    setSecLocation((acc) => getSectionTopBOttom(acc, legacy?.current));
  }, [legacy?.current?.offsetTop]);

  return (
    <section id="our-legacy" className="legacy bg-blue" ref={legacy}>
      <div className="content-w">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-block">
              <img className="o-legacy" src={oImg} alt="" />

              <h2>
                Our
                <br /> Legacy
              </h2>
              <p>
                Phoenix Homes began as a dream. In 1978, the first home was
                built in Vancouver BC, a single-family residence in the 2-level
                Tudor style, adorned with steep gables and shingle highlights.
                The success of that first house lead to more single-family homes
                in Vancouver and within a few years, our reputation expanded
                into Surrey, Burnaby, North Vancouver, and other cities in BC.
                As the number of community developments continued to grow,
                Phoenix Homes was established in 1999, inspired by the story of
                the phoenix - a mythical bird symbolizing regeneration and
                immortality. Phoenix Homes approaches their projects with this
                state of mind - to resurrect a piece of property and regenerate
                a new home for many generations to come.
              </p>
              <p>
                To date, Phoenix Homes has built over 500 new homes in 6
                different municipalities, ranging from Metro Vancouver,
                Coquitlam, Surrey, Langley and Abbotsford, BC. Currently new
                development plans are already in place for additional projects
                coming throughout the next decade.
              </p>
              <p>
                Phoenix Homes is steadily becoming one of British Columbia's
                premier home builders with a reputation for quality
                construction, unparalleled designs and uncompromising customer
                service.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img src={familyImg} alt="family.jpg" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurLegacy;
