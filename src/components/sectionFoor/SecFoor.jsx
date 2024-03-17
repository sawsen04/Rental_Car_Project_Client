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
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
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
    <div data-aos="fade-up" className="slide-container md:w-[50%] m-auto ">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            className="m-auto rounded-xl w-[40%] "
            key={index}
            // style={{ width: "40%" }}
            src={each}
            alt=""
          />
        ))}
      </Zoom>
    </div>
  );
};
function SecFoor() {
 // const navigate = useNavigate();
  return (
    <div className="md:pb-24 pb-7 md:pt-12 pt- dark:bg-dark bg-slate-100 dark:text-white">
      <div className="md:flex md:flex-col justify-center items-center">
        <h1
          data-aos="fade-up"
          className="md:text-3xl text-xl sm:text-4xl font-semibold mb-3"
        >
          Explore Most Popular Cartypes
        </h1>
        <p data-aos="fade-up" className="mmd:text-sm text-xs">
          Lorem Ipsum has been the industry's standard dummy text
        </p>
        <p data-aos="fade-up" className="md:text-sm text-xs pb-10">
          ever since the 1500s,
        </p>
      </div>
      <div className="slides">
        <Slideshow />
      </div>
      <div className="md:flex justify-center items-center md:w-[100%] mt-20">
        <NavLink
          data-aos="fade-up"
          className="font-semibold rounded-lg "
          to="/cars"
        >
          <Button
            icon={<HiArrowLongRight size={17} />}
            title={"View all cars"}
            backgroundColor={"orange"}
            color={"white"}
            border={"none"}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default SecFoor;
