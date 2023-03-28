import React, { useState } from "react";
import "./portfolio.css";

const Icon = ({ img, title, desc, techno1, link }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="Icon_content">
      <div className="icon">
        <span className="services__button" onClick={() => toggleTab(1)}>
          <i class="bx bx-right-arrow-circle"></i>
        </span>
      </div>
      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="bx bx-x services__modal-close"
          ></i>
          <img src={img} alt="img" className="services__modal-img" />
          <h3 className="services__modal-title">{title}</h3>
          <p className="services__modal-description">{desc}</p>
          <p className="services__modal-techno">
            Technologies : <span id="techno1">{techno1}</span>{" "}
          </p>
          <button className="btn"><a href={link} target="_blank" rel="noopener noreferrer">Live site</a></button>
        </div>
      </div>
    </div>
  );
};

export default Icon;
