import React, { useState } from "react";
//import DatePicker from "react-datepicker";
import { Alert } from "flowbite-react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../components/button/Button";
import "./singleRent.css";
import { Thumbnails } from "../../components/Thumbnails";
import axios from "axios";
import { url } from "../../utils/url";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import { FileInput, Label } from "flowbite-react";

function SingleRent({ model, pricePerDay, imageUrl, _id, isAvailable }) {
  // console.log(_id);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const [startDatePickup, setStartDatePickup] = useState();
  const [startDateReturn, setStartDateReturn] = useState();
  const [dayPick, setDayPick] = useState();
  const [dayReturn, setDayReturn] = useState();
  const [pickUpMonth, setPickUpMonth] = useState();
  const [licencePhoto, setLicencePhoto] = useState([]);
  const [dateERR, setdateERR] = useState(false);
  const [fieldsErr, setFieldsErr] = useState("");
  // console.log(dateERR);
  // console.log(fieldsErr);
  // console.log(startDatePickup );
  // console.log(startDateReturn);
  // console.log(licencePhoto);
  const navigate = useNavigate();
  // const [amount, setAmount] = useState(0);
  const handleSendOrder = () => {
    setLoading(true);
    let formDataOrder = new FormData();
    formDataOrder.append("photos", licencePhoto[0]);
    formDataOrder.append("photos", licencePhoto[1]);
    formDataOrder.append("pickUpDay", startDatePickup);
    formDataOrder.append("returnDay", startDateReturn);
    formDataOrder.append(
      "ammount",
      Math.abs((dayReturn - dayPick) * pricePerDay)
    );
    if (startDatePickup && startDateReturn && licencePhoto.length > 0) {
      axios
        .post(`${url}/addOrder/${_id}`, formDataOrder, {
          headers: {
            token,
            "access-control-allow-origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          setLoading(false);
          console.log(res);
          navigate("/profile");
        })
        .catch((err) => {
          setLoading(false);
          console.dir(err);
        });
    } else {
      setLoading(false);
      setFieldsErr(
        <Alert color="warning" withBorderAccent>
          <span>
            <span className="font-medium">Info alert!</span> Empty fields are
            not allowed!
          </span>
        </Alert>
      );
      setTimeout(() => {
        setFieldsErr("");
      }, 3000);
    }
  };
  return (
    <div className="">
      <div className="bg-img flex justify-center items-center">
        <h1 className="text-white font-extrabold text-[35px]">{model}</h1>
      </div>
      {/* <div className="car-details pl-[100px] py-[30px] mt-5 mb-6">
        <h1 className="font-bold text-[25px]">{model}</h1>
        <p className="font-normal text-[10px]">{pricePerDay}Dt</p>
      </div> */}
      <div className="container flex justify-center py-[30px] bg-white dark:bg-dark dark:text-white">
        <div className="car-container">
          <div>
            <Thumbnails images={imageUrl} />
          </div>
        </div>
        <div className="rent-container shadow-xl shadow-slate-600 rounded-lg py-3">
          <div className="flex flex-col gap-2 p-4">
            <div>
              <Label
                className="font-bold"
                htmlFor="multiple-file-upload"
                value="Upload Your Driving License Photos"
              />
            </div>
            <FileInput
              onChange={(e) => {
                setLicencePhoto(e.target.files);
              }}
              name="photos"
              id="multiple-file-upload"
              multiple
            />
          </div>
          {/* <div className="licence-photos">
            <label for="files">driving License photos:</label>
            <input
              type="file"
              name="photos"
              multiple={true}
              onChange={(e) => {
                setLicencePhoto(e.target.files);
              }}
            />
          </div> */}
          <div className="pickUp-and-return-date flex flex-col gap-2 p-6">
            <div className="pickup flex flex-col gap-3 font-semibold">
              <label>Pickup Date</label>
              <input
                type="date"
                name="pickUpDay"
                className=" pickup   bg-[#ffb95e] rounded-md border-4 border-[grey] "
                showIcon
                // selected={startDatePickup}

                onChange={(e) => {
                  let today = new Date().getDate();
                  let currentMonth = new Date().getMonth() + 1;
                  console.log(currentMonth);
                  let pickUpDay = e.target.value.split("-")[2];
                  let pickUpMonthInput =
                    new Date(e.target.value).getMonth() + 1;
                  if (pickUpMonthInput > currentMonth) {
                    setdateERR(false);
                    setStartDatePickup(e.target.value);
                    setDayPick(Number(e.target.value.split("-")[2]));
                    setPickUpMonth(pickUpMonthInput);
                  } else if (
                    pickUpMonthInput === currentMonth &&
                    pickUpDay >= today
                  ) {
                    setdateERR(false);
                    setStartDatePickup(e.target.value);
                    setDayPick(Number(e.target.value.split("-")[2]));
                    setPickUpMonth(pickUpMonthInput);
                  } else {
                    setdateERR(true);
                  }
                }}
              />
            </div>
            <div className=" return flex flex-col gap-3 font-semibold">
              <label>Return Date</label>
              <input
                type="date"
                name="returnDay"
                className=" pickup   bg-[#ffb95e] rounded-md border-4 border-[grey]"
                showIcon
                // selected={startDatePickup}

                onChange={(e) => {
                  let today = new Date().getDate();
                  let currentMonth = new Date().getMonth() + 1;

                  let returnMonth = new Date(e.target.value).getMonth() + 1;
                  let returnDay = e.target.value.split("-")[2];

                  if (Number(returnMonth) > Number(pickUpMonth)) {
                    setdateERR(false);
                    setStartDateReturn(e.target.value);
                    setDayReturn(Number(returnDay));
                  } else if (
                    Number(returnMonth) === Number(pickUpMonth) &&
                    Number(returnDay) >= Number(dayPick)
                  ) {
                    setdateERR(false);
                    setStartDateReturn(e.target.value);
                    setDayReturn(Number(returnDay));
                  } else if (
                    Number(returnMonth) === Number(pickUpMonth) &&
                    Number(currentMonth) === Number(pickUpMonth) &&
                    Number(returnDay) >= Number(today) &&
                    Number(returnDay) >= Number(dayPick)
                  ) {
                    setdateERR(false);
                    setStartDateReturn(e.target.value);
                    setDayReturn(Number(returnDay));
                  } else {
                    setdateERR(true);
                  }
                }}
              />
              <span className="text-[red]">
                {dateERR && (
                  <Alert color="warning" withBorderAccent>
                    <span>
                      <span className="font-medium">Info alert!</span> Cannot
                      choose past date!
                    </span>
                  </Alert>
                )}
              </span>
              <span className="text-[red]">{fieldsErr && fieldsErr}</span>
            </div>
            <button className="btn">
              <span class="text">
                {" "}
                Amount :{" "}
                {dayReturn && dayPick
                  ? Math.abs((dayReturn - dayPick) * pricePerDay)
                  : 0}{" "}
                Dt
              </span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
            </button>
          </div>
          {isAvailable && (
            <div className="flex justify-center">
              <Button
                title={loading ? <BeatLoader size="10" /> : "Rent Now"}
                backgroundColor={"rgb(255, 199, 39)"}
                color={"black"}
                border={"none"}
                fn={handleSendOrder}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleRent;
