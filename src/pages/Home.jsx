import { useState, useEffect } from "react";
import { Card, Head } from "../components";
import KasaService from "../services/kasa-services";
//import { Kasa } from "../models";  utilisation du JSON direct dans useState

export const Home = () => {
  const [advertisements, setAdvertisement] = useState([]);
  const type = "home";

  useEffect(() => {
    console.log("useEffect");
    KasaService.getAdvertisements().then((advertisements) =>
      setAdvertisement(advertisements)
    );
  }, [advertisements]);

  return (
    <div>
      <Head type={type} />
      <section className="blocContainer">
        {advertisements.map((advertisement, index) => (
          <Card
            key={advertisement.id}
            advertisement={advertisement}
            index={index}
          />
        ))}
      </section>
    </div>
  );
};
