import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const ArrowRBtn = ({ children, way, color }) => {
  return (
    <div className="btn-arrow">
      <span>{children}</span>

      <div className={`arrow-wrapper arrow-${way}`}>
        <i className={`arrow arrow-${color ? color : "inherit"} ${way}`}></i>
      </div>
    </div>
  );
};

export default ArrowRBtn;
