import React from "react";
import News from "./partial/News";
import ContactForm from "./partial/ContactForm";
import "./index.scss";

const StayConnected = () => {
  return (
    <section className="stay-connected">
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
