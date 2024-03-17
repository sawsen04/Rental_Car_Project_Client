import React, { useState } from "react";
import Swal from "sweetalert2";
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
  const dateP = new Date(startDatePickup);
  const dateR = new Date(startDateReturn);
  const differenceInMill = Math.abs(dateR - dateP);
  const differenceInDays = differenceInMill / (1000 * 3600 * 24);
  // console.log(differenceInDays);
  const [dayPick, setDayPick] = useState();
  const [dayReturn, setDayReturn] = useState();

  const [pickUpMonth, setPickUpMonth] = useState();
  const [pickUpYear, setPickUpYear] = useState();
  // const [pickUpYear, setpickUpYear] = useState();
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
    // formDataOrder.append(
    //   "ammount",
    //   Math.abs(
    //     ((dayReturn.getTime() - dayPick.getTime()) / (1000 * 3600 * 24)) *
    //       pricePerDay
    //   )
    // );
    formDataOrder.append("ammount", differenceInDays * pricePerDay);

    if (startDatePickup && startDateReturn && licencePhoto.length > 0) {
      axios
        .post(`${url}/addOrder/${_id}`, formDataOrder, {
          headers: {
            token,
            "access-control-allow-origin":
              "https://dreams-rent-agency.netlify.app",
          },
        })
        .then((res) => {
          setLoading(false);
          // console.log(res);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order has been saved",
            showConfirmButton: false,
            timer: 1800,
          });
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
            <span className="md:font-medium font-normal">Info alert!</span>{" "}
            Empty fields are not allowed!
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
      <div className="bg-img md:flex justify-center items-center">
        <h1 className="text-white md:font-extrabold font-semibold md:text-[35px] text-[25px]">
          {model}
        </h1>
      </div>
      {/* <div className="car-details pl-[100px] py-[30px] mt-5 mb-6">
        <h1 className="font-bold text-[25px]">{model}</h1>
        <p className="font-normal text-[10px]">{pricePerDay}Dt</p>
      </div> */}
      <div className="container md:flex justify-center md:py-[30px] bg-white dark:bg-dark dark:text-white">
        <div className="car-container">
          <div>
            <Thumbnails images={imageUrl} />
          </div>
        </div>
        <div className="rent-container shadow-xl shadow-slate-600 rounded-lg py-3">
          <div className="fmd:lex flex-col gap-2 p-4">
            <div>
              <Label
                className="md:font-bold font-medium"
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
          <div className="pickUp-and-return-date md:flex flex-col gap-2 p-6">
            <div className="pickup md:flex flex-col gap-3 md:font-semibold font-normal">
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
                  let currentYear = new Date().getFullYear();
                  // console.log(currentYear);
                  // console.log(currentMonth);
                  let pickUpDay = e.target.value.split("-")[2];
                  let pickUpMonthInput =
                    new Date(e.target.value).getMonth() + 1;
                  let pickupYearInput = new Date(e.target.value).getFullYear();
                  // console.log(pickupYearInput);
                  if (
                    pickUpMonthInput > currentMonth &&
                    pickupYearInput >= currentYear
                  ) {
                    setdateERR(false);
                    setStartDatePickup(e.target.value);
                    setDayPick(Number(e.target.value.split("-")[2]));
                    setPickUpMonth(pickUpMonthInput);
                    setPickUpYear(pickupYearInput);
                  } else if (
                    pickUpMonthInput === currentMonth &&
                    pickupYearInput === currentYear &&
                    pickUpDay >= today
                  ) {
                    setdateERR(false);
                    setStartDatePickup(e.target.value);
                    setDayPick(Number(e.target.value.split("-")[2]));
                    setPickUpMonth(pickUpMonthInput);
                    setPickUpYear(pickupYearInput);
                  } else if (
                    pickUpMonthInput <= currentMonth &&
                    pickupYearInput > currentYear
                  ) {
                    setdateERR(false);
                    setStartDatePickup(e.target.value);
                    setDayPick(Number(e.target.value.split("-")[2]));
                    setPickUpMonth(pickUpMonthInput);
                    setPickUpYear(pickupYearInput);
                  } else {
                    setdateERR(true);
                  }
                }}
              />
            </div>
            <div className=" return md:flex flex-col gap-3 md:font-semibold font-normal">
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
                  let currentYear = new Date().getFullYear();
                  let returnMonth = new Date(e.target.value).getMonth() + 1;
                  let returnYearInput = new Date(e.target.value).getFullYear();
                  // console.log(returnYearInput);
                  let returnDay = e.target.value.split("-")[2];

                  if (
                    Number(returnMonth) > Number(pickUpMonth) &&
                    Number(returnYearInput) >= Number(pickUpYear)
                  ) {
                    setdateERR(false);
                    setStartDateReturn(e.target.value);
                    setDayReturn(Number(returnDay));
                  } else if (
                    Number(returnMonth) === Number(pickUpMonth) &&
                    Number(returnDay) >= Number(dayPick) &&
                    Number(returnYearInput) >= Number(pickUpYear)
                  ) {
                    setdateERR(false);
                    setStartDateReturn(e.target.value);
                    setDayReturn(Number(returnDay));
                  } else if (
                    Number(returnMonth) === Number(pickUpMonth) &&
                    Number(returnDay) <= Number(dayPick) &&
                    Number(returnYearInput) >= Number(pickUpYear)
                  ) {
                  } else if (
                    Number(returnMonth) === Number(pickUpMonth) &&
                    Number(currentMonth) === Number(pickUpMonth) &&
                    Number(currentYear) === Number(pickUpYear) &&
                    Number(returnDay) >= Number(today) &&
                    Number(returnDay) >= Number(dayPick)
                  ) {
                    setdateERR(false);
                    setStartDateReturn(e.target.value);
                    setDayReturn(Number(returnDay));
                  } else if (
                    Number(returnMonth) < Number(pickUpMonth) &&
                    // Number(returnDay) >= Number(dayPick)
                    Number(pickUpYear) < Number(returnYearInput)
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
                      <span className="md:font-medium font-normal">
                        Info alert!
                      </span>{" "}
                      Cannot choose past date!
                    </span>
                  </Alert>
                )}
              </span>
              <span className="text-[red]">{fieldsErr && fieldsErr}</span>
            </div>
            <button className="btn ">
              <span class="text ">
                {" "}
                Amount :{" "}
                {dayReturn && dayPick ? differenceInDays * pricePerDay : 0} Dt
              </span>
              <span class="blob "></span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
            </button>
          </div>
          {isAvailable && (
            <div className="md:flex justify-center">
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
