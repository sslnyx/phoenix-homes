import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRBtn from "../../../../../../../../components/ArrowRBtn";
import "./index.scss";

const NewsLine = ({ title, content, date, slidesUrl, setShow, getSlides }) => {
  return (
    <div className="news-line">
      <h6>{title}</h6>
      <div className="d-flex justify-content-between">
        <p className="date">{date}</p>

        <div onClick={() => (setShow(true), getSlides(slidesUrl))}>
          <ArrowRBtn way="right" color="white">
            More
          </ArrowRBtn>
        </div>
      </div>
      <div className="hr-line"></div>
    </div>
  );
};

export default NewsLine;
