import { Row, Col } from "react-bootstrap";
import owner from "/src/assets/images/care/Homeownercare_pic.jpg";
import ArrowRBtn from "../../../../components/ArrowRBtn";
import "./index.scss";

const HomeOwner = () => {
  return (
    <section className="home-owner">
      <div className="content-w">
        <Row className="row-1">
          <Col xs={12} lg={4}>
            <div className="gray-block"></div>
            <img src={owner} alt="" />
          </Col>
          <Col xs={12} lg={8}>
            <h2>Home Owner Care</h2>

            <h5 className="mb-3">OUR COMMITMENT</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              leo et nisl iaculis ultrices. Quisque nunc dui, mattis id egestas
              at, interdum a risus. Morbi eget vehicula nibh. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              sequi voluptatum dignissimos beatae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
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
          <Col xs={12} lg={6} className="bg-blue">
            <h5>Peace of Mind in your New Home</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero quo
              corrupti incidunt magnam est itaque. Fuga beatae consequatur, qui
              pariatur similique quisquam? Eveniet accusamus dolores numquam
              dolor vitae ab sunt.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              fugiat eveniet facere.
            </p>

            <ul className="mb-3">
              <li>2 Years</li>
              <li>2 Years</li>
              <li>2 Years</li>
            </ul>

            <ArrowRBtn way="right">
              <span>More</span>
            </ArrowRBtn>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HomeOwner;
