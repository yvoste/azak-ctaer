import { Kasa } from "../models";

export default class KasaService {
  static advertisements = Kasa;

  static getAdvertisements() {
    return new Promise((resolve) => {
      resolve(this.advertisements);
    });
    /*
    return fetch(
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json",
      {
        method: "GET",
        headers: {
          Host: "https://s3-eu-west-1.amazonaws.com",
          "Content-Type": "application/json",
          Origin: "http://localhost:3000",
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => this.handleError(error));*/
  }
}
