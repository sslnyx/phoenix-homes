import { useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import owner from "/assets/images/care/Homeownercare_pic.jpg";
import phoenixBg from "/assets/images/care/Homeownercare_graphic.jpg";
import ArrowRBtn from "../../../../components/ArrowRBtn";
import getSectionTopBOttom from "../../getSectionTopBottom";
import "./index.scss";

const HomeOwner = ({ setSecLocation }) => {
  const homeOwner = useRef();

  useEffect(() => {
    setSecLocation((acc) => getSectionTopBOttom(acc, homeOwner?.current));
  }, [homeOwner?.current?.offsetTop]);

  return (
    <section id="homeowner-care" className="home-owner" ref={homeOwner}>
      <div className="content-w">
        <Row className="row-1">
          <Col xs={12} lg={4}>
            <div className="gray-block"></div>
            <img src={owner} className="mb-5 mb-md-0" />
          </Col>
          <Col xs={12} lg={8}>
            <h2>Home Owner Care</h2>

            <h5 className="mb-3">OUR COMMITMENT</h5>
            <p>
              Creating that special home for each family is very important to
              Phoenix Homes. As such, we have deep personal interests vested in
              each development and take pride in what we build. From handpicking
              each property to ensure each will grow into a vibrant community,
              to designing distinctive architecture with functional floorplans
              and selecting the very best materials, the Phoenix commitment to
              quality and service is uncompromising and evident in our homes.
            </p>
            <p>
              From condominums, townhomes and single family homes, Phoenix
              maintain the quality and high building standards by using the
              latest technology, a full team of tradespeople, and dedicated
              project managers who work with us exclusively. This enables us to
              provide timely work, outstanding quality, and more flexibility to
              our clients.
            </p>
          </Col>
        </Row>

        <Row className="row-2">
          <Col xs={12} lg={6}>
            <h3>
              INSPIRED
              <br />
              BY PASSION,
              <br />
              FUELED
              <br />
              BY EXPOERTISE
            </h3>
          </Col>
          <Col xs={12} lg={6}>
            <img className="phoenixBg" src={phoenixBg} alt="phoenixBg" />

            <div className="text-content mb-5 mb-lg-0">
              <h5>Peace of Mind in your New Home</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                quo corrupti incidunt magnam est itaque. Fuga beatae
                consequatur, qui pariatur similique quisquam? Eveniet accusamus
                dolores numquam dolor vitae ab sunt.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit fugiat eveniet facere.
              </p>

              <ul className="mb-3">
                <li>2 Years</li>
                <li>2 Years</li>
                <li>2 Years</li>
              </ul>

              <ArrowRBtn way="right" color="white">
                <span>More</span>
              </ArrowRBtn>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HomeOwner;
