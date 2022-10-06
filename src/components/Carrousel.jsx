import "../styles/carousel.css";
import { useEffect } from "react";

export const Carrousel = ({ data }) => {
  const newData = [];
  let elem;
  const nbTot = data.length;
  for (let i = 1; i <= nbTot; i++) {
    let u = parseInt(i) - 1;
    elem = {
      img: data[u],
      id: i,
    };
    newData.push(elem);
  }

  useEffect(() => {
    console.log("useEffect");
    slider();
  });

  function slider() {
    let slider = document.querySelector(".slider");
    let last = slider.lastElementChild;
    let first = slider.firstElementChild;
    slider.insertBefore(last, first);
  }
  const movement = (e) => {
    let slider = document.querySelector(".slider");
    let last = slider.lastElementChild;
    let first = slider.firstElementChild;

    const activeSlide = document.querySelector(".active");
    const indexImg = activeSlide.dataset.index;

    if (e.target.id === "next") {
      moveDot(indexImg, "next");
      slider.insertBefore(first, last.nextSibling);
      activeSlide.classList.remove("active");
      activeSlide.nextElementSibling.classList.add("active");
    } else {
      moveDot(indexImg, "prev");
      slider.insertBefore(last, first);
      activeSlide.classList.remove("active");
      activeSlide.previousElementSibling.classList.add("active");
    }
  };

  const moveDot = (indexImg, state) => {
    let dot = document.getElementById("dot_" + indexImg);
    dot.classList.remove("activeDot");
    let newDot;
    if (state === "next") {
      newDot = parseInt(indexImg) + 1;
    } else {
      newDot = parseInt(indexImg) - 1;
    }
    //console.log(newDot, nbTot);
    if (newDot < nbTot && newDot >= 0) {
      dot = document.getElementById("dot_" + newDot);
    } else if (newDot < 0) {
      dot = document.getElementById("dot_" + (nbTot - 1));
    } else {
      dot = document.getElementById("dot_0");
    }

    dot.classList.add("activeDot");
  };

  const moveByDot = (e, indexImg) => {
    // remove active
    const activeSlide = document.querySelector(".active");
    const nextDot = activeSlide.dataset.index;
    let dot = document.getElementById("dot_" + nextDot);
    dot.classList.remove("activeDot");
    activeSlide.classList.remove("active");

    //add Active
    const img = document.querySelector(`[data-index="${indexImg}"]`);
    img.classList.add("active");
    const newDot = document.getElementById("dot_" + indexImg);
    newDot.classList.add("activeDot");
  };

  // map image
  const gim = newData.map((elems, index) => {
    return (
      <img
        key={index}
        data-index={index}
        className={`slide sizeImgCarousel ${index === 0 ? "active" : ""}`}
        src={elems.img}
        alt="bolot"
      ></img>
    );
  });
  // map dot
  const doti = newData.map((elem, index) => {
    return (
      <span
        key={index}
        id={`dot_${index}`}
        className={`dot ${index === 0 ? "activeDot" : ""}`}
        onClick={(e) => moveByDot(e, index)}
      ></span>
    );
  });

  return (
    <>
      <div className="slider__wrapper">
        <div className="slider">{gim}</div>
        {nbTot > 1 && (
          <>
            <div className="controls">
              <span
                className="carousel__button--prev"
                id="next"
                onClick={(e) => movement(e)}
              >
                &#10095;
              </span>
              <span
                className="carousel__button--next"
                id="prev"
                onClick={(e) => movement(e)}
              >
                &#10094;
              </span>
            </div>
            <div className="doto">
              <div className="posDot">{doti}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
