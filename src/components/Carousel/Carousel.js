import React, { useEffect } from "react";
import M from "materialize-css";

const Carousel = ({ carousel }) => {
  useEffect(() => {
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, { duration: 200, interval: 3000 });
  });
  return (
    <div className="slider">
      <ul className="slides">
        {carousel.map((carouselItem, index) => {
          return (
            <li key={index}>
              <img alt={carouselItem.caption} src={carouselItem.imgUrl} />
              <div className="caption center-align">
                <h3>{`${carouselItem.discount}`}</h3>
                <h5 className="light grey-text text-lighten-3">
                  {carouselItem.caption}
                </h5>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Carousel;
