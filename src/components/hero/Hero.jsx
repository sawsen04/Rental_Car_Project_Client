import React from "react";
import "./hero.css";
import videoBg from "../../assets/videoBg.mp4";

//import { HiArrowLongRight } from "react-icons/hi2";
import whiteW from "../../assets/whiteW.mp4";
//import { useNavigate, NavLink } from "react-router-dom";
//import Button from "../button/Button";
//import { FaLongArrowAltRight } from "react-icons/fa";
function Hero({ theme }) {
  // let theme = localStorage.getItem("theme");
  //const navigate = useNavigate();
  return (
    <div className=" relative flex  overflow-hidden dark:bg-black dark:text-white duration-300 p-0 h-[73vh]">
      {/* className="mb-12 dark:bg-black dark:text-white duration-300 py-[13vh] relative
      -z-20" */}
      <div className="container p-0">
        <div className="">
          {/* className=" grid place-items-center grid-cols-1 sm:grid-cols-2" */}
          <div
            data-aos="zoom-in"
            data-aos-duration="0"
            //className="order-1 sm:order-2"
          >
            <video
              className=" absolute z-10 w-auto min-w-full  max-w-none p-0"
              //className=" relative -z-10 max-h-[400px]  drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              src={theme === "dark" ? videoBg : whiteW}
              //  src={videoBg }
              autoPlay
              loop
              muted
            />
          </div>
          <div className="flex flex-col gap-11 relative z-15 bg-opacity-50 p-[5%] w-[50%] text-white">
            {/* className="relative z-30 bg-opacity-50 p-0 order-2 sm:order-1
            space-y-6 sm:pr-32" */}
            <div>
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
            </div>

            <p data-aos="fade-up" data-aos-delay="1000" className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              ducimus in corrupti molestiae at accusantium labore <br /> Lorem
              ipsum dolor sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
