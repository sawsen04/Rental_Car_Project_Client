import React from "react";
import UserList from "../../components/userList/UserList";
import SideBar from "../adminDashboard/SideBar";

function Users() {
  return (
    <div className="md:flex">
      <SideBar />
      <UserList />
    </div>
  );
}

export default Users;
