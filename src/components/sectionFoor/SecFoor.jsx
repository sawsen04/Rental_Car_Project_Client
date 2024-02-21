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
 // const navigate = useNavigate();
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
      <div className="flex justify-center items-center w-[100%] mt-20">
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
