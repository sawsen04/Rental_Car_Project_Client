import React from "react";
import { TbBrandBooking } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";


import { ImUserCheck } from "react-icons/im";
function WhyShooseUs() {
  const Data = [
    {
      name: "Easy & Fast Booking",
      icon: (
        <TbBrandBooking className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description:
        "Completely carinate e business testing process whereas fully researched customer service. Extensive content with quality.",
      aosDelay: "0",
    },
    {
      name: "Many Pickup Location",
      icon: (
        <IoLocationSharp className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description:
        "Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective.",
      aosDelay: "500",
    },
    {
      name: "Customer Satisfaction",
      icon: (
        <ImUserCheck className="text-5xl text-primary group-hover:text-black duration-500" />
      ),
      description:
        "Globally user centric method interactive. Seamlessly revolutionize unique portals corporate collaboration.",
      aosDelay: "1000",
    },
  ];
  return (
    <div className="pb-[15%] px-20 py-20 dark:bg-black dark:text-white sm:min-h[600px]">
      <div className="container">
        <div className="pb-12 md:flex md:flex-col items-center gap-4">
          <h1 className="md:text-3xl text-xl font-extrabold text-center sm:text-4xl">
            Why Choose Us
          </h1>
          <div className="md:flex md:flex-col items-center">
            <p>Lorem Ipsum has been the industry's standard dummy text</p>
            <p>ever since the 1500s,</p>
          </div>
        </div>
        <div className="md:flex gap-10">
          {Data.map((step) => (
            <div
              key={step.name}
              data-aos="fade-up"
              data-aos-delay={step.aosDelay}
              className="card md:w-[400px] md:flex md:flex-col justify-center items-center text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
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

export default WhyShooseUs;
