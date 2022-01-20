import React from "react";
import { Link } from "react-router-dom";
import ArrowRBtn from "../../../../../../../../components/ArrowRBtn";
import "./index.scss";

const NewsLine = ({ title, content, date, slidesUrl }) => {
  return (
    <div className="news-line">
      <h6>{title}</h6>
      <div className="d-flex justify-content-between">
        <p className="date">{date}</p>
        <ArrowRBtn way="right">
            <Link to={"/"}>More</Link>
        </ArrowRBtn>
      </div>
      <div className="hr-line"></div>
    </div>
  );
};

export default NewsLine;
