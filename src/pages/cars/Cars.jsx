import React, { useState } from "react";
// import { CgCalendarDates } from "react-icons/cg";
// import { AiFillDashboard } from "react-icons/ai";
// import { GiSteeringWheel } from "react-icons/gi";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import { MdCarRental } from "react-icons/md";

import "./cars.css";
import { url } from "../../utils/url";
import { DotLoader } from "react-spinners";
import { useFetch } from "../../utils/useFetch";
//import CardCar from "../../components/card/CardCar";
import SideBarCars from "../../components/cars/SideBarCars";
//import SearchCar from "../../components/cars/SearchCar";
import CardCar from "../../components/card/CardCar";
// import { useNavigate } from "react-router-dom";
//import CarListing from "../../components/cars/CarListing";

function Cars() {
  const [gear, setGear] = useState("");
  const [brand, setBrand] = useState([]);
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(500);
  const { data } = useFetch(`${url}/cars`, {
    headers: {
      "access-control-allow-origin": "https://dreams-rent-agency.netlify.app/",
    },
  });
  return (
    <div className="bg-white dark:bg-dark dark:text-white">
      <div className="bg-img flex justify-center items-center">
        <h1 className="text-white font-extrabold text-[35px]">Car Listings</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration={1000}
        className=" flex justify-center  gap-10 min-h-[200vh] py-[6%]  "
      >
        <SideBarCars
          setGear={setGear}
          gear={gear}
          setBrand={setBrand}
          brand={brand}
          min={min}
          max={max}
          setMin={setMin}
          setMax={setMax}
        />
        {/*car listing*/}
        <div className="cars-list  w-[70%] ">
          <div className="">
            <div
              data-aos="fade-up"
              data-aos-duration={1500}
              className=" flex justify-center flex-wrap  gap-x-20 gap-y-10"
            >
              {data ? (
                data
                  .filter((elt) =>
                    brand.length >= 1 ? brand.includes(elt.brand) : elt
                  )
                  .filter((car) => car.gearBox.toLowerCase().includes(gear))
                  .filter(
                    (elt) => elt.pricePerDay >= min && elt.pricePerDay <= max
                  )
                  // .filter((car) => car.isAvailable)
                  .map((car, i) => <CardCar key={i} {...car} />)
              ) : (
                <DotLoader color="#f76839" size={70} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
