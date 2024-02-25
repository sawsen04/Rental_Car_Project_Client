import React from "react";
import { Link } from "react-router-dom";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../button/Button";
import { FaSearch } from "react-icons/fa";
function Search() {
  // const [startDatePickup, setStartDatePickup] = useState(new Date());
  // const [startDateReturn, setStartDateReturn] = useState(new Date());
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="dark:bg-dark dark:text-white duration-300  rounded-lg shadow-xl shadow-slate-600  flex  justify-center items-center gap-[150px] h-[17vh] w-[80%] mx-[150px] -mt-10 bg-slate-100  drop-shadow-2xl  "
    >
      <div>
        <p className="font-bold text-[30px]">Search For Your Dream Car</p>
      </div>
      {/* <div className="pickup flex flex-col gap-3 font-bold">
        <label>Pickup Date</label>
        <DatePicker
          className=" pickup   bg-primary rounded-md "
          showIcon
          selected={startDatePickup}
          onChange={(date) => setStartDatePickup(date)}
        />
      </div>
      <div className=" return flex flex-col gap-3 font-bold">
        <label>Return Date</label>
        <DatePicker
          className="return  bg-primary rounded-md "
          showIcon
          selected={startDateReturn}
          onChange={(date) => setStartDateReturn(date)}
        />
      </div> */}
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
