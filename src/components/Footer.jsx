import React from "react";
import "../styles/header.css";
import FOOT from "../assets/FOOT.png";
import TitleFoot from "../assets/TitleFoot.png";

export const Footer = () => {
  return (
    <footer className="footBack footer">
      <img className="foot" src={FOOT} alt="foot"></img>
      <img className="titleFoot" src={TitleFoot} alt="foot"></img>
    </footer>
  );
};
