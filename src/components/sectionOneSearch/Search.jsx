import React from "react";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="dark:bg-dark dark:text-white duration-300  rounded-lg shadow-xl shadow-slate-600  md:flex  justify-center items-center md:gap-[150px] gap-[50px] md:h-[17vh] h-[10vh] md:w-[80%] w-[60%]  md:mx-[150px] mx-[70px] md:-mt-10 -mt-5 bg-slate-100  drop-shadow-2xl  "
    >
      <div>
        <p className="font-bold md:text-[30px] text-[10px]">
          Search For Your Dream Car
        </p>
      </div>
      <Link to="/cars">
        <Button
          icon={<FaSearch size={17} />}
          title={"View All Cars"}
          backgroundColor={"rgb(255, 199, 39)"}
          color={"black"}
          border={"none"}
        />
      </Link>
    </div>
  );
}

export default Search;
