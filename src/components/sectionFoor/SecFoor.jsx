import React from "react";
import { Zoom } from "react-slideshow-image";
import pickup from "../../assets/pickup.png";
import crossover from "../../assets/crossover.png";
import familyMPV from "../../assets/familyMPV.png";
import sedan from "../../assets/sedan.png";
import sportsCoupe from "../../assets/sportsCoupe.png";
import "react-slideshow-image/dist/styles.css";
import "./style.css";
import { HiArrowLongRight } from "react-icons/hi2";
const images = [pickup, crossover, familyMPV, sedan, sportsCoupe];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div data-aos="fade-up" className="slide-container w-[50%] m-auto ">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            className="m-auto rounded-xl"
            key={index}
            style={{ width: "40%" }}
            src={each}
            alt=""
          />
        ))}
      </Zoom>
    </div>
  );
};
function SecFoor() {
  return (
    <div className="pb-24 pt-12 dark:bg-dark bg-slate-100 dark:text-white">
      <div className="flex flex-col justify-center items-center">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold mb-3"
        >
          Explore Most Popular Cartypes
        </h1>
        <p data-aos="fade-up" className="text-sm">
          Lorem Ipsum has been the industry's standard dummy text
        </p>
        <p data-aos="fade-up" className="text-sm pb-10">
          ever since the 1500s,
        </p>
      </div>
      <div className="slides">
        <Slideshow />
      </div>
      <div>
        <button
          data-aos="fade-up"
          className="border-2 border-black font-semibold px-4 py-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary hover:duration-300 flex items-center gap-2 m-auto my-10"
        >
          View all Cars <HiArrowLongRight size={35} />
        </button>
      </div>
    </div>
  );
}

export default SecFoor;
