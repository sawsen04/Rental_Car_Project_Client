import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdCarRental } from "react-icons/md";
import { carListData } from "../../carList";
function CarListing() {
  return (
    <div>
      <div className="cars-list border-2 border-blue-600 w-[70%] ">
        <div className="">
          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className=" flex justify-center flex-wrap  gap-x-20 gap-y-10"
          >
            {carListData.map((data) => {
              return (
                <div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    className="p-4 relative shadow-xl shadow-slate-600 rounded-lg"
                  >
                    <img
                      src={data.imageUrl[0]}
                      alt=""
                      className="w-[350px] rounded-lg hover:scale-75 shadow-xl shadow-slate-400 duration-700"
                    />
                    <div>
                      <h1 className="w-fit py-1 px-6 rounded-lg bg-slate-300  text-sm font-semibold absolute left-6 top-5  hover:bg-primary duration-500  cursor-pointer ">
                        {data.brand}
                      </h1>
                    </div>
                    <div className="flex justify-between m-4">
                      <h2 className="text-xl font-bold ">{data.model}</h2>
                      <div className="flex gap-2 items-center">
                        <p className="text-xl font-bold text-primary">
                          {data.pricePerDay}DT
                        </p>
                        <p className="text-sm">/Day</p>
                      </div>
                    </div>
                    <div className=" flex justify-between mt-4">
                      <div className=" flex flex-col gap-3">
                        <div className="flex items-center gap-1">
                          <CgCalendarDates />
                          <p>{data.year}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <AiFillDashboard />
                          <p>{data.mileage}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-1">
                          <GiSteeringWheel />
                          <p>{data.gearBox}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <BsFillFuelPumpFill />
                          <p>{data.fuel}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg text-white bg-black flex items-center gap-2 justify-center font-bold text-lg p-2 hover:bg-primary duration-500  cursor-pointer mt-4 ">
                      <MdCarRental />
                      <button> Rent Now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarListing;
