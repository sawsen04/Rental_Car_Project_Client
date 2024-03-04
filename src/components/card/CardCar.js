import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdCarRental } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { Label, TextInput, FileInput } from "flowbite-react";
import axios from "axios";
import { adminUrl } from "../../utils/url";
// import { toast, ToastContainer } from "react-toastify";
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
  isAvailable,
}) {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openModalPhoto, setOpenModalPhoto] = useState(false);
  const [loading, setloading] = useState(false);
  const [newCarInfo, setnewCarInfo] = useState({});
  const [newCarPhoto, setnewCarPhoto] = useState();
  const handleUpdateCarInfo = () => {
    setloading(true);
    axios
      .put(`${adminUrl}/updateCar/${_id}`, newCarInfo, {
        headers: {
          token,
          "access-control-allow-origin": [
            "https://dreams-rent-agency.netlify.app/",
            "http://localhost:3000",
          ],
        },
      })
      .then((res) => {
        setloading(false);
        setOpenModal(false);
        console.log(res);
        // toast.success("Car was updated successfully", {
        //   position: "bottom-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      })
      .catch((err) => {
        setloading(false);
        console.dir(err);
      });
  };
  const handleUpdateCarPhoto = () => {
    setloading(true);
    let formData = new FormData();
    if (newCarPhoto) {
      for (let i = 0; i < newCarPhoto.length; i++) {
        formData.append("photos", newCarPhoto[i]);
      }
      axios
        .put(`${adminUrl}/updatePhotoCar/${_id}`, formData, {
          headers: {
            token,
            "access-control-allow-origin": [
              "https://dreams-rent-agency.netlify.app/",
              "http://localhost:3000",
            ],
          },
        })
        .then((res) => {
          setloading(false);
          setOpenModalPhoto(false);
          console.log(res);
          // toast.success("Car was updated successfully", {
          //   position: "bottom-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "colored",
          // });
        })
        .catch((err) => {
          setloading(false);
          console.dir(err);
        });
    }
  };
  const handleAdminDeleteCar = () => {
    setloading(true);
    axios
      .delete(`${adminUrl}/deleteCar/${_id}`, {
        headers: {
          token,
          "access-control-allow-origin": [
            "https://dreams-rent-agency.netlify.app/",
            "http://localhost:3000",
          ],
        },
      })
      .then((res) => {
        setloading(false);
        navigate("/cars");
        console.log(res);
        // toast.success("Car was deleted successfully", {
        //   position: "bottom-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      })
      .catch((err) => {
        setloading(false);
        console.dir(err);
      });
  };
  let isAdmin = localStorage.getItem("isAdmin");
  return (
    <div>
      {/* ---------------------Edit car Info--------------- */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update Informations</Modal.Header>
        <Modal.Body>
          <div
            onChange={(e) => {
              setnewCarInfo({
                ...newCarInfo,
                [e.target.name]: e.target.value,
              });
            }}
            className="card_info space-y-4"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Brand" />
              </div>
              <TextInput name="brand" id="small" type="text" sizing="sm" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Model" />
              </div>
              <TextInput name="model" id="email1" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="year" />
              </div>
              <TextInput name="year" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Fuel" />
              </div>
              <TextInput name="fuel" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Mileage" />
              </div>
              <TextInput name="mileage" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Price per day" />
              </div>
              <TextInput name="pricePerDay" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Gear Box" />
              </div>
              <TextInput name="gearBox" type="text" required />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa839] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ffa839]  dark:focus:ring-blue-800"
            onClick={() => {
              handleUpdateCarInfo();
            }}
            loading={loading}
          >
            Save
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ---------------------Edit car Photo--------------- */}
      <Modal
        dismissible
        show={openModalPhoto}
        onClose={() => setOpenModalPhoto(false)}
      >
        <Modal.Header>Update Photo</Modal.Header>
        <Modal.Body>
          <div
            onChange={(e) => {
              setnewCarPhoto(e.target.files);
            }}
            className="card_info space-y-4"
          >
            <div className="mb-2 block">
              <Label
                htmlFor="multiple-file-upload"
                value="Upload multiple files"
              />
            </div>
            <FileInput name="photos" id="multiple-file-upload" multiple />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa839] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ffa839]  dark:focus:ring-blue-800"
            onClick={() => {
              handleUpdateCarPhoto();
            }}
            isProcessing={loading}
            loading={loading}
          >
            Save
          </Button>
          <Button color="gray" onClick={() => setOpenModalPhoto(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        data-aos="fade-up"
        className="p-4 relative shadow-xl shadow-slate-600 rounded-lg"
      >
        <NavLink
          to={localStorage.getItem("token") ? `/RentNow/${_id}` : "/login"}
        >
          <img
            src={imageUrl[0]}
            alt=""
            className="w-[350px] rounded-lg hover:scale-75 shadow-xl shadow-slate-400 duration-700"
          />
        </NavLink>

        <div>
          <h1 className="w-fit py-1 px-6 rounded-lg bg-slate-300  text-sm font-semibold absolute left-6 top-5  hover:bg-primary duration-500  cursor-pointer ">
            {brand}
          </h1>
          {!isAvailable && (
            <p className="w-[150px] py-2 px-6 rounded-lg bg-[red]  text-sm font-semibold absolute left-[55%] top-5  hover:bg-[orange] duration-500  cursor-pointer ">
              Not Available
            </p>
          )}
        </div>
        <div className="flex justify-between m-4">
          <NavLink
            to={localStorage.getItem("token") ? `/RentNow/${_id}` : "/login"}
          >
            <h2 className="text-xl font-bold ">{model}</h2>
          </NavLink>

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
        <NavLink
          to={localStorage.getItem("token") ? `/RentNow/${_id}` : "/login"}
        >
          <div className="border rounded-lg text-white bg-black flex items-center gap-2 justify-center font-bold text-lg p-2 hover:bg-primary duration-500  cursor-pointer mt-4 ">
            <MdCarRental />
            <button> Rent Now</button>
          </div>
        </NavLink>
        {isAdmin === "true" && (
          <div className="flex justify-around gap-8">
            <button
              onClick={() => setOpenModal(true)}
              className="border rounded-lg text-white bg-black flex items-center gap-2 justify-center font-bold text-lg p-2 hover:bg-primary duration-500  cursor-pointer mt-4 "
            >
              Edit
            </button>
            <button
              onClick={() => setOpenModalPhoto(true)}
              className="border rounded-lg text-white bg-black flex items-center gap-2 justify-center font-bold text-lg p-2 hover:bg-primary duration-500  cursor-pointer mt-4 "
            >
              Edit Photos
            </button>
            <button
              onClick={() => {
                handleAdminDeleteCar();
              }}
              loading={loading}
              className="border rounded-lg text-white bg-black flex items-center gap-2 justify-center font-bold text-lg p-2 hover:bg-primary duration-500  cursor-pointer mt-4 "
            >
              Delete
            </button>
          </div>
        )}
      </div>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
    </div>
  );
}
export default CardCar;
