import React from "react";
import { url } from "../../utils/url";

import { useFetch } from "../../utils/useFetch";
import AdminInfoCard from "../../components/adminInfo/AdminInfoCard";
import SideBar from "../adminDashboard/SideBar";

function AdminProfile() {
  const token = localStorage.getItem("token");
  const { data } = useFetch(`${url}/getUserInfo`, token);
  return (
    <div className=" md:flex ">
      <SideBar />
      <AdminInfoCard  {...data} />
    </div>
  );
}

export default AdminProfile;
