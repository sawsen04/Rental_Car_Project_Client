import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import axios from "axios";
import { url } from "../../utils/url";
function AdminInfoCard({ fullName, email, imageUrl, createdAt, _id }) {
  let token = localStorage.getItem("token");
  const [openModal, setOpenModal] = useState(false);
  const [openModalPhoto, setOpenModalPhoto] = useState(false);
  const [loading, setloading] = useState(false);
  const [newAdminInfo, setnewAdminInfo] = useState({});
  const [newAdminPhoto, setnewAdminPhoto] = useState();
  const handleUpdateAdminInfo = () => {
    setloading(true);
    axios
      .put(`${url}/updateInfo/${_id}`, newAdminInfo, {
        headers: {
          token,
          "access-control-allow-origin":
            "https://dreams-rent-agency.netlify.app/",
        },
      })
      .then((res) => {
        setloading(false);
        setOpenModal(false);
        console.log(res);
      })
      .catch((err) => {
        setloading(false);
        console.dir(err);
      });
  };
  const handleUpdateAdminPhoto = () => {
    setloading(true);
    let formData = new FormData();
    formData.append("photo", newAdminPhoto);
    axios
      .put(`${url}/updateUserPhoto/${_id}`, formData, {
        headers: {
          token,
          "access-control-allow-origin":
            "https://dreams-rent-agency.netlify.app/",
        },
      })
      .then((res) => {
        setloading(false);
        setOpenModalPhoto(false);
        console.log(res);
      })
      .catch((err) => {
        setloading(false);
        console.dir(err);
      });
  };
  return (
    <div className="w-[100%] ">
      {/* ---------------------Edit admin Info--------------- */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update Informations</Modal.Header>
        <Modal.Body>
          <div
            onChange={(e) => {
              setnewAdminInfo({
                ...newAdminInfo,
                [e.target.name]: e.target.value,
              });
            }}
            className="card_info space-y-4"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Your Name" />
              </div>
              <TextInput name="fullName" id="small" type="text" sizing="sm" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Email" />
              </div>
              <TextInput
                name="email"
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa839] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ffa839]  dark:focus:ring-blue-800"
            onClick={() => {
              handleUpdateAdminInfo();
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
      {/* ---------------------Edit admin Photo--------------- */}
      <Modal
        dismissible
        show={openModalPhoto}
        onClose={() => setOpenModalPhoto(false)}
      >
        <Modal.Header>Update Photo</Modal.Header>
        <Modal.Body>
          <div
            onChange={(e) => {
              setnewAdminPhoto(e.target.files[0]);
            }}
            className="card_info space-y-4"
          >
            <div className="mb-2 block">
              <Label htmlFor="small" value="Profile Photo" />
            </div>
            <TextInput name="photo" id="small" type="file" sizing="sm" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa839] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ffa839]  dark:focus:ring-blue-800"
            onClick={() => {
              handleUpdateAdminPhoto();
            }}
            loading={loading}
          >
            Save
          </Button>
          <Button color="gray" onClick={() => setOpenModalPhoto(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <div class="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={imageUrl}
              alt=""
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {fullName}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <MdOutlineEmail />
              {email}
            </span>
            <div class="flex mt-4 md:mt-6">
              {/* ----Edit admin info--- */}
              <div className="flex gap-5">
                <Button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa839] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ffa839]  dark:focus:ring-blue-800"
                  onClick={() => setOpenModal(true)}
                >
                  Edit
                </Button>
                {/* ----Edit admin photo--- */}
                <Button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa839] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ffa839]  dark:focus:ring-blue-800"
                  onClick={() => setOpenModalPhoto(true)}
                >
                  Edit Photo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInfoCard;
