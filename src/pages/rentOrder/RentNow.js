import React from "react";
import { url } from "../../utils/url";
// import { DotLoader } from "react-spinners";

import { useFetch } from "../../utils/useFetch";
import { useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";
import SingleRent from "./SingleRent";
function RentNow() {
  let { id } = useParams();
  let token = localStorage.getItem("token");

  const { data } = useFetch(`${url}/singleCar/${id}`, token);
  // console.log(data);
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration={1000} className="">
        {data ? <SingleRent {...data} /> : <DotLoader color="#f76839" size={70} />}
      </div>
    </div>
  );
}

export default RentNow;
