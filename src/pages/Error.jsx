import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import error from "../assets/13315300_5203299.jpg";

export const Error = () => {
  return (
    <div>
      <div className="notFound">
        <img className="adjustError" src={error} alt="Page non trouvée" />
        <h1>Hey, cette page n'existe pas !</h1>
        <Link to="/" className="error-status spec">
          Retourner à l'accueil
        </Link>
      </div>
    </div>
  );
};
