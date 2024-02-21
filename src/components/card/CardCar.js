import React from "react";
import { NavLink } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdCarRental } from "react-icons/md";
function CardCar({
  brand,
  model,
  year,
  mileage,
  fuel,
  gearBox,
  pricePerDay,
  imageUrl,
  _id,
}) {
  return (
    <div>
      <div
        data-aos="fade-up"
        className="p-4 relative shadow-xl shadow-slate-600 rounded-lg"
      >
        <img
          src={imageUrl[0]}
          alt=""
          className="w-[350px] rounded-lg hover:scale-75 shadow-xl shadow-slate-400 duration-700"
        />
        <div>
          <h1 className="w-fit py-1 px-6 rounded-lg bg-slate-300  text-sm font-semibold absolute left-6 top-5  hover:bg-primary duration-500  cursor-pointer ">
            {brand}
          </h1>
        </div>
        <div className="flex justify-between m-4">
          <h2 className="text-xl font-bold ">{model}</h2>
          <div className="flex gap-2 items-center">
            <p className="text-xl font-bold text-primary">{pricePerDay}DT</p>
            <p className="text-sm">/Day</p>
          </div>
        </div>
        <div className=" flex justify-between mt-4">
          <div className=" flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <CgCalendarDates />
              <p>{year}</p>
            </div>
            <div className="flex items-center gap-1">
              <AiFillDashboard />
              <p>{mileage}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <GiSteeringWheel />
              <p>{gearBox}</p>
            </div>
            <div className="flex items-center gap-1">
              <BsFillFuelPumpFill />
              <p>{fuel}</p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg text-white bg-black flex items-center gap-2 justify-center font-bold text-lg p-2 hover:bg-primary duration-500  cursor-pointer mt-4 ">
          <MdCarRental />
          <NavLink
            to={localStorage.getItem("token") ? `/RentNow/${_id}` : "/login"}
          >
            <button> Rent Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CardCar;
