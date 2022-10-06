import React from "react";
import "../styles/details.css";

export const Rate = ({ star }) => {
  console.log(star);
  return (
    <span className={`material-icons  ${star ? "redor" : "grisor"}`}>star</span>
  );
};
