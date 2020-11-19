import React from "react";
import { Link } from "react-router-dom";
import horseHome from "../../assets/images/horseHome.png";
import "./homeButton.css";

const HomeButton = () => {
  return (
    <div className="homeButton">
      <Link to="/">
        <img src={horseHome} alt="home" />
      </Link>
    </div>
  );
};

export default HomeButton;
