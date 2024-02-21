import React, { useState } from "react";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/button/Button";
import "./singleRent.css";
import { Thumbnails } from "../../components/Thumbnails";
import axios from "axios";
import { url } from "../../utils/url";
import { useNavigate } from "react-router-dom";

function SingleRent({ model, pricePerDay, imageUrl, _id }) {
  // console.log(_id);
  const token = localStorage.getItem("token");
  const [startDatePickup, setStartDatePickup] = useState(new Date());
  const [startDateReturn, setStartDateReturn] = useState(new Date());
  const [dayPick, setDayPick] = useState();
  const [dayReturn, setDayReturn] = useState();
  const [licencePhoto, setLicencePhoto] = useState();
  const [dateERR, setdateERR] = useState(false);
  const navigate = useNavigate();
  // const [amount, setAmount] = useState(0);
  const handleSendOrder = () => {
    let formDataOrder = new FormData();
    formDataOrder.append("photos", licencePhoto[0]);
    formDataOrder.append("photos", licencePhoto[1]);
    formDataOrder.append("pickUpDay", startDatePickup);
    formDataOrder.append("returnDay", startDateReturn);
    formDataOrder.append("ammount", (dayReturn - dayPick) * pricePerDay);

    axios
      .post(`${url}/addOrder/${_id}`, formDataOrder, {
        headers: {
          token,
          "access-control-allow-origin": "http://localhost:3000",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/profile");
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  return (
    <div>
      <div className="bg-img flex justify-center items-center">
        <h1 className="text-white font-extrabold text-[35px]">{model}</h1>
      </div>
      <div className="car-details mt-5 mb-6">
        <h1>{model}</h1>
        <p>{pricePerDay}</p>
      </div>
      <div className="container flex justify-center border-2 border-black">
        <div className="car-container border-2 border-red-600 ">
          <div>
            <Thumbnails images={imageUrl} />
          </div>
        </div>
        <div className="rent-container border-2">
          <div className="licence-photos">
            <label for="files">driving License photos:</label>
            <input
              type="file"
              name="photos"
              multiple={true}
              onChange={(e) => {
                setLicencePhoto(e.target.files);
              }}
            />
          </div>
          <div className="pickUp-and-return-date flex flex-col gap-3">
            <div className="pickup flex flex-col gap-3 font-bold">
              <label>Pickup Date</label>
              <input
                type="date"
                name="pickUpDay"
                className=" pickup   bg-primary rounded-md "
                showIcon
                // selected={startDatePickup}

                onChange={(e) => {
                  let today = new Date().getDate();
                  if (e.target.value.split("-")[2] >= today) {
                    setdateERR(false);
                    setStartDatePickup(e.target.value);
                    setDayPick(Number(e.target.value.split("-")[2]));
                  } else {
                    setdateERR(true);
                  }
                }}
              />
            </div>
            <div className=" return flex flex-col gap-3 font-bold">
              <label>Return Date</label>
              <input
                type="date"
                name="returnDay"
                className=" pickup   bg-primary rounded-md "
                showIcon
                // selected={startDatePickup}

                onChange={(e) => {
                  let today = new Date().getDate();
                  if (
                    e.target.value.split("-")[2] >= today &&
                    e.target.value.split("-")[2] >= dayPick
                  ) {
                    setdateERR(false);
                    setStartDateReturn(e.target.value);
                    setDayReturn(Number(e.target.value.split("-")[2]));
                  } else {
                    setdateERR(true);
                  }
                }}
              />
              <span className="text-[red]">
                {dateERR && "Cannot choose past date"}
              </span>
            </div>
            <span className="ammount">
              Amount :{" "}
              {dayReturn && dayPick ? (dayReturn - dayPick) * pricePerDay : 0}
            </span>
          </div>
          {dateERR ? (
            <button
              style={{ cursor: "not-allowed" }}
              disabled
              onClick={() => {
                alert("ok");
              }}
            >
              {" "}
              No
            </button>
          ) : (
            <Button
              title={"Rent Now"}
              backgroundColor={"rgb(255, 199, 39)"}
              color={"black"}
              border={"none"}
              fn={handleSendOrder}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleRent;
