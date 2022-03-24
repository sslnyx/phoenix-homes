import React, { useEffect, useRef } from "react";
import News from "./partial/News";
import ContactForm from "./partial/ContactForm";
import getSectionTopBOttom from "../../getSectionTopBottom";
import "./index.scss";

const StayConnected = ({ setSecLocation }) => {
  const connectSec = useRef();

  useEffect(() => {

    setSecLocation((acc) => getSectionTopBOttom(acc,connectSec.current));
  }, [connectSec.current?.offsetTop]);

  return (
    <section id="connect" className="stay-connected" ref={connectSec}>
      <div className="content-w">
        <h2>
          STAY
          <br /> CONNECTED
        </h2>

        <News />
        <ContactForm />
      </div>
    </section>
  );
};

export default StayConnected;
