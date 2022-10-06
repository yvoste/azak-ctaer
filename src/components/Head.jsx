import React from "react";

export const Head = ({ type }) => {
  console.log(type);
  return (
    <div className={`topit ${type}`}>
      <div className="hover-image"></div>
      {type === "home" ? (
        <h1 className="title">Chez vous, partout et ailleurs</h1>
      ) : (
        <p></p>
      )}
    </div>
  );
};
