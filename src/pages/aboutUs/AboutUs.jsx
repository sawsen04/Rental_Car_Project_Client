import React from "react";
import "./about.css";
import { FaCheckCircle } from "react-icons/fa";
import range from "../../assets/range.jpg";
function AboutUs() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-white dark:bg-dark dark:text-white border-2 border-[red]"
    >
      <div className="md:flex justify-center gap-[30%] p-8 pt-[50px] pb-10">
        <div className="md:flex pt-10">
          <div className="md:h-[60vh] md:w-[400px] bg-[#ffa633] md:flex rounded-xl drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] ">
            <h1 className="font-bold text-white md:text-[30px] md:-rotate-90 py-5 px-5 ">
              10 years of experience
            </h1>
          </div>
          <div className="w-fit md:-mx-[350px]  md:my-[50px] ">
            <img
              className=" rounded-2xl drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] "
              src={range}
              alt=""
              width={600}
            />
          </div>
        </div>
        <div className="md:w-[600px]">
          <h2 className="text-[#d48742] font-extrabold">ABOUT OUR COMPANY</h2>
          <h1 className="font-bold md:text-[50px] text-[29px]">
            Best Solution For Renting Services
          </h1>
          <div className="md:flex flex-col gap-4 md:text-[11px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim minim
              veniam, quis nostrud exercitation ullamco laboris nisi esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <div className="md:flex gap-10 mt-2">
            <div>
              <div className="flex gap-2 p-2">
                <FaCheckCircle color="rgb(212, 135, 66)" />
                <p>
                  At vero et accusamus iusto <br /> dignissimos
                </p>
              </div>
              <div className="flex gap-2 p-2">
                <FaCheckCircle color="rgb(212, 135, 66)" />
                <p>
                  At vero et accusamus iusto <br /> dignissimos
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 p-2">
                <FaCheckCircle color="rgb(212, 135, 66)" />
                <p>
                  At vero et accusamus iusto <br /> dignissimos
                </p>
              </div>
              <div className="flex gap-2 p-2">
                <FaCheckCircle color="rgb(212, 135, 66)" />
                <p>
                  At vero et accusamus iusto <br /> dignissimos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
