import React from "react";
import { Rate } from "../components";
import "../styles/details.css";

export const Autor = ({ data, rate }) => {
  let stair;
  let tabRate = [];
  const nbrate = parseInt(rate);

  for (let i = 1; i <= 5; i++) {
    if (i <= nbrate) {
      stair = {
        id: i,
        active: true,
      };
    } else {
      stair = {
        id: i,
        active: false,
      };
    }
    tabRate.push(stair);
  }
  return (
    <>
      <div className="posAutor">
        <div className="autorName">
          <p className="nom">{data.name}</p>
          <p className="avatar">
            <img className="autorPicture" src={data.picture} alt="autor"></img>
          </p>
        </div>
      </div>
      <div className="rate">
        {tabRate.map((star) => (
          <Rate key={star.id} star={star.active} />
        ))}
      </div>
    </>
  );
};
