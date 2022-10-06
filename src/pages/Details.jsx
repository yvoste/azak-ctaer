import React from "react";
import { Tag, Autor, Carrousel, Accordion } from "../components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Kasa } from "../models";
import sanitizeTitle from "../helpers/sanitize";
import "../styles/details.css";

export const Details = () => {
  const params = useParams();
  const [advertisements] = useState(Kasa);
  console.log(params.id);
  let ind = 0;
  advertisements.forEach((elem, index) => {
    const tit = sanitizeTitle(elem.title);
    if (tit === params.id) {
      ind = index;
    }
  });
  const det = advertisements[ind];

  return (
    <>
      <Carrousel data={det.pictures} />
      <div>
        <div className="posTagAut">
          <div className="dataItem">
            <h1 className="titros">{det.title}</h1>
            <h2>{det.location}</h2>
            <Tag data={det.tags} />
          </div>
          <div className="blocAutor">
            <Autor data={det.host} rate={det.rating} />
          </div>
        </div>
      </div>
      <div>
        <div className="blocAccordionD">
          <Accordion
            key={det.id}
            data={det.description}
            flag="Description"
            uuid={det.id}
            type="desc"
          />

          <Accordion
            key={det.id + "_1"}
            data={det.equipments}
            flag="Equipments"
            uuid={det.id + "1"}
            type="equi"
          />
        </div>
      </div>
    </>
  );
};
