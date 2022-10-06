import { useState } from "react";
import { Link } from "react-router-dom";
import sanitizeTitle from "../helpers/sanitize";
import getImage from "../helpers/load-image";
import "../styles/list.css";
import loading from "../assets/loading.gif";

export const Card = ({ advertisement, index }) => {
  const [loader, setloader] = useState(true);
  const [imgo, setImgo] = useState("");
  const rul = sanitizeTitle(advertisement.title, index);

  getImage(advertisement.cover)
    .then(function (elem) {
      setImgo(elem);
      setloader(false);
    })
    .catch(function (errorUrl) {
      console.log("error loaded");
    });

  return (
    <div className={`card ${loader ? "fixHeight" : ""}`}>
      {loader && (
        <div className="backLoad">
          <img className="loading" src={loading} alt="tor"></img>
        </div>
      )}
      <Link to={`/detail/${rul}`} className="navbar-brand showAdvertisment">
        <img
          className="initCover"
          src={imgo}
          alt="En attendant l'affichage description du bien présenté"
        ></img>
        <p className="initP">{advertisement.title}</p>
      </Link>
    </div>
  );
};
