import React from "react";
import "./navbar.css";
import { HiOutlineUser } from "react-icons/hi";
import { FaLock } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
function NavBar({ theme, setTheme }) {
  return (
    <div className=" flex justify-between items-center p-[25px] shadow-md bg-white dark:bg-dark dark:text-white duration-300 sticky top-0 z-30">
      <div>
        <img
          src="https://dreamsrent.dreamstechnologies.com/html/assets/img/logo.svg"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center  w-[30%]">
        <ul className="flex justify-between w-[85%] ">
          <li className="font-bold hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-bold hover:border-b-2 hover:text-primary  hover:border-primary transition-colors duration-500">
            <NavLink to="/cars">Cars</NavLink>
          </li>
          <li className="font-bold hover:border-b-2 hover:text-primary  hover:border-primary transition-colors duration-500">
            <NavLink to="/aboutUs">About us</NavLink>
          </li>
          <li className="font-bold hover:border-b-2 hover:text-primary  hover:border-primary transition-colors duration-500">
            <NavLink to="/contactUs">Contact us</NavLink>
          </li>
        </ul>
        <div>
          {theme === "dark" ? (
            <BiSolidSun
              onClick={
                () => setTheme("light")
                // {
                //   localStorage.setItem("theme", "light");
                //   window.location.reload();
                // }
              }
              className="text-2xl"
            />
          ) : (
            <BiSolidMoon
              onClick={
                () => setTheme("dark")
                // {
                //   localStorage.setItem("theme", "dark");
                //   window.location.reload();
                // }
              }
              className="text-2xl"
            />
          )}
        </div>
      </div>

      <div className="flex justify-between  w-[28%] ">
        <NavLink to="/login">
          <Button
            icon={<HiOutlineUser size={17} />}
            title={"Sign In"}
            backgroundColor={"black"}
            color={"white"}
            border={"none"}
          />
        </NavLink>
        <NavLink to="/profile">
          <Button
            icon={<FaHouseUser size={17} />}
            title={"Profile"}
            backgroundColor={"black"}
            color={"white"}
            border={"none"}
          />
        </NavLink>
        <NavLink to="/register">
          <Button
            icon={<FaLock size={17} />}
            title={"Sign Up"}
            backgroundColor={"black"}
            color={"white"}
            border={"none"}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
