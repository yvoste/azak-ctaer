import { useState } from "react";
import { Head, Accordion } from "../components";
import { Data } from "../models";
import "../styles/about.css";

export const About = () => {
  const [dataabouts] = useState(Data);

  const type = "about";
  return (
    <div>
      <Head type={type} />
      <div className="blocAccordion">
        {dataabouts.map((data, index) => (
          <Accordion
            key={data.id}
            data={data}
            flag={data.title}
            uuid={data.id}
          />
        ))}
      </div>
    </div>
  );
};
