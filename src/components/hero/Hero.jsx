import React from "react";
import "./hero.css";
import videoBg from "../../assets/videoBg.mp4";
import { HiArrowLongRight } from "react-icons/hi2";
import whiteCar from "../../assets/whiteCar.mp4";
function Hero({ theme }) {
  // let theme = localStorage.getItem("theme");

  return (
    <div className="dark:bg-black dark:text-white duration-300 py-[13vh] relative -z-20 ">
      <div className="container">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2"
          >
            <video
              className=" relative -z-10 max-h-[600px]  drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              src={theme === "dark" ? videoBg : whiteCar}
              //  src={videoBg }
              autoPlay
              loop
              muted
            />{" "}
          </div>
          <div className=" p-0 order-2 sm:order-1 space-y-6 sm:pr-32">
            <h1 data-aos="fade-up" className=" text-3xl font-bold">
              Find Your Best
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-primary text-5xl lg:text-7xl font-semibold "
            >
              Dream Car for Rental
            </h2>
            <p data-aos="fade-up" data-aos-delay="1000" className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ducimus in corrupti molestiae at accusantium labore
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              className=" rounded-md bg-primary cursor:pointer py-2 px-10 text-black"
            >
              <span className="flex items-center font-bold gap-[10px] ">
                View all Cars <HiArrowLongRight size={35} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
