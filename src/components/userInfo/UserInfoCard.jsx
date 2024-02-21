import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import axios from "axios";
import { url } from "../../utils/url";
function UserInfoCard({ fullName, email, phone, imageUrl, _id }) {
  //   console.log(imageUrl);
  let token = localStorage.getItem("token");
  const [openModal, setOpenModal] = useState(false);
  const [openModalPhoto, setOpenModalPhoto] = useState(false);
  const [loading, setloading] = useState(false);
  const [newUserInfo, setnewUserInfo] = useState({});
  const [newUserPhoto, setnewUserPhoto] = useState();
  const handleUpdateUserInfo = () => {
    setloading(true);
    axios
      .put(`${url}/updateInfo/${_id}`, newUserInfo, { headers: { token } })
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
  const handleUpdateUserPhoto = () => {
    setloading(true);
    let formData= new FormData()
    formData.append("photo",newUserPhoto )
    axios
      .put(`${url}/updateUserPhoto/${_id}`, formData, {
        headers: { token },
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
    <>
      {/* ---------------------Edit User Info--------------- */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Update Informations</Modal.Header>
        <Modal.Body>
          <div
            onChange={(e) => {
              setnewUserInfo({
                ...newUserInfo,
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
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Phone Number" />
              </div>
              <TextInput
                name="phone"
                id="phone"
                type="phone"
                placeholder="+216 00 000 000"
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa839] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ffa839]  dark:focus:ring-blue-800"
            onClick={() => {
              handleUpdateUserInfo();
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
      {/* ---------------------Edit User Photo--------------- */}
      <Modal
        dismissible
        show={openModalPhoto}
        onClose={() => setOpenModalPhoto(false)}
      >
        <Modal.Header>Update Photo</Modal.Header>
        <Modal.Body>
          <div
            onChange={(e) => {
              setnewUserPhoto(e.target.files[0]);
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
              handleUpdateUserPhoto();
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
            <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <MdLocalPhone />
              {phone}
            </span>
            <div class="flex mt-4 md:mt-6">
              {/* ----Edit user info--- */}
              <div className="flex gap-5">
                <Button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#ffa839] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ffa839]  dark:focus:ring-blue-800"
                  onClick={() => setOpenModal(true)}
                >
                  Edit
                </Button>
                {/* ----Edit user photo--- */}
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
    </>
  );
}

export default UserInfoCard;
