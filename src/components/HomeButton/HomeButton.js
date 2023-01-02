import React from "react";
import { Link } from "react-router-dom";
import "./HomeButton.scss";
import close from "../../assets/images/close.png";

const HomeButton = () => {
  return (
    <div className="home-button">
      <Link className="home-button__link" to="/">
        <img className="home-button__icon" src={close} alt="Close" />
      </Link>
    </div>
  );
};

export default HomeButton;
