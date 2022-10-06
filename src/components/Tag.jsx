import React from "react";

export const Tag = ({ data }) => {
  let listTags = data.map((item, index) => (
    <span className="tagitos" key={index}>
      {item}
    </span>
  ));
  return <div>{listTags}</div>;
};
