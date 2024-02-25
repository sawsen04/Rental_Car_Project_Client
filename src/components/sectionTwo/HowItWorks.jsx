import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

function HowItWorks() {
  const Data = [
    {
      name: "Choose Date",
      icon: (
        <MdOutlineDateRange className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "0",
    },
    {
      name: "Check Available Cars",
      icon: (
        <FaRegCheckCircle className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "500",
    },
    {
      name: "Book Your Car",
      icon: (
        <FaCar className="text-5xl text-primary group-hover:text-black duration-500" />
      ),
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "1000",
    },
  ];
  return (
    <div className="  px-20 py-20 dark:bg-black dark:text-white sm:min-h[600px]">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-extrabold text-center sm:text-4xl">
            How It Works
          </h1>
        </div>
        <div className="flex gap-10">
          {Data.map((step) => (
            <div
              key={step.name}
              data-aos="fade-up"
              data-aos-delay={step.aosDelay}
              className="card w-[400px] flex flex-col justify-center items-center text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="">{step.icon}</div>
              <h2 className="font-bold">{step.name}</h2>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
