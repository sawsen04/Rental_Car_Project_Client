import React from "react";
import { Link } from "react-router-dom";
//import UserList from "../../components/userList/UserList";
import { Sidebar } from "flowbite-react";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
function SideBar() {
  return (
    <div>
      <Sidebar className="md:h-100%  " aria-label="Default sidebar example">
        <Sidebar.Items className=" pb-[50%] pt-[50%]">
          <Sidebar.ItemGroup className="flex flex-col gap-2">
            <Link to="/adminProfile">
              <Sidebar.Item icon={CgProfile}>Admin Profile</Sidebar.Item>
            </Link>

            <Link to="/Users">
              <Sidebar.Item icon={HiUser}>Users</Sidebar.Item>
            </Link>
            <Link to="/orders">
              <Sidebar.Item icon={HiShoppingBag}>Orders</Sidebar.Item>
            </Link>
            <Link to="/addProduct">
              <Sidebar.Item icon={HiShoppingBag}>Add Product</Sidebar.Item>
            </Link>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
