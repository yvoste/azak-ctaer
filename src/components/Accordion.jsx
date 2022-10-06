import { useState } from "react";

export const Accordion = ({ data, flag, uuid, type = null }) => {
  const [isVisible, setIsVisible] = useState(false);
  //console.log(isVisible);
  const toggleIt = (id) => {
    const elem = document.getElementById(id);
    isVisible === true ? setIsVisible(false) : setIsVisible(true);
    var panel = elem.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0px";
    } else {
      console.log(2);
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = "20px 10px 20px 10px";
    }
  };
  //console.log(data);
  //console.log(type);
  let lisItems;
  if (type === "equi") {
    lisItems = data.map((item, index) => <li key={index}>{item}</li>);
  }
  return (
    <div
      className={
        type !== "desc" && type !== "equi" ? "posElemStd" : "posElemDet"
      }
    >
      <div className="accordion" id={uuid} onClick={() => toggleIt(uuid)}>
        <span className="tit">{flag}</span>
        {isVisible ? (
          <span className="material-icons">expand_less</span>
        ) : (
          <span className="material-icons">expand_more</span>
        )}
      </div>
      {type === "desc" ? (
        <div className="panel">{data}</div>
      ) : type === "equi" ? (
        <div className="panel">
          <ul>{lisItems}</ul>
        </div>
      ) : (
        <div className="panel">{data.description}</div>
      )}
    </div>
  );
};
