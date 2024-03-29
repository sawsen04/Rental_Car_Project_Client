import React, { useState } from "react";
import "./navbar.css";
import { HiOutlineUser } from "react-icons/hi";
import { FaLock } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import Button from "../button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { IoMenuSharp } from "react-icons/io5";

import MobileNav from "./MobileNav";
function NavBar({ theme, setTheme }) {
  const [showMobileNav, setShowMolbileNav] = useState(false);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let isUser = JSON.parse(localStorage.getItem("isUser"));
  let isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  return (
    <div className="flex justify-between items-center p-[25px] shadow-md bg-white dark:bg-dark dark:text-white duration-300 sticky top-0 z-30">
      <NavLink to="/">
        <div>
          <img
            src="https://dreamsrent.dreamstechnologies.com/html/assets/img/logo.svg"
            alt=""
          />
        </div>
      </NavLink>
      <div className="md:flex hidden justify-between items-center  w-[30%] ">
        <ul className="flex  justify-between w-[85%]  ">
          <li className="font-bold  hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500">
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

      <div className="md:flex hidden justify-center gap-8  w-[28%]  ">
        {token && isUser ? (
          <>
            <NavLink to="/profile">
              <Button
                icon={<FaHouseUser size={17} />}
                title={"Profile"}
                backgroundColor={"black"}
                color={"white"}
                border={"none"}
              />
            </NavLink>
          </>
        ) : (
          token &&
          isAdmin && (
            <>
              <NavLink to="/adminProfile">
                <Button
                  icon={<FaHouseUser size={17} />}
                  title={"Dashbord"}
                  backgroundColor={"black"}
                  color={"white"}
                  border={"none"}
                />
              </NavLink>
            </>
          )
        )}
        {token ? (
          <NavLink
            onClick={() => {
              localStorage.clear();
              setTimeout(() => {
                navigate("/login");
              }, 2000);
            }}
          >
            <Button
              icon={<FiLogOut size={17} />}
              title={"Logout"}
              backgroundColor={"black"}
              color={"white"}
              border={"none"}
            />
          </NavLink>
        ) : (
          <>
            <NavLink to="/login">
              <Button
                icon={<FaLock size={17} />}
                title={"Sign In"}
                backgroundColor={"black"}
                color={"white"}
                border={"none"}
              />
            </NavLink>
            <NavLink to="/register">
              <Button
                icon={<HiOutlineUser size={17} />}
                title={"Sign Up"}
                backgroundColor={"black"}
                color={"white"}
                border={"none"}
              />
            </NavLink>
          </>
        )}
      </div>
      <IoMenuSharp
        onClick={() => {
          setShowMolbileNav(!showMobileNav);
        }}
        className="md:hidden block"
        size={25}
      />
      {showMobileNav && (
        <MobileNav>
          <>
            <div className="flex flex-col justify-between items-center p-2 w-[100%]">
              <ul className="flex flex-col items-center gap-4  w-[90%] ">
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
            <div className="flex flex-col items-center gap-3  w-[100%] p-4">
              {token && isUser ? (
                <>
                  <NavLink to="/profile">
                    <Button
                      icon={<FaHouseUser size={17} />}
                      title={"Profile"}
                      backgroundColor={"black"}
                      color={"white"}
                      border={"none"}
                    />
                  </NavLink>
                </>
              ) : (
                token &&
                isAdmin && (
                  <>
                    <NavLink to="/adminProfile">
                      <Button
                        icon={<FaHouseUser size={17} />}
                        title={"Dashbord"}
                        backgroundColor={"black"}
                        color={"white"}
                        border={"none"}
                      />
                    </NavLink>
                  </>
                )
              )}
              {token ? (
                <NavLink
                  onClick={() => {
                    localStorage.clear();
                    setTimeout(() => {
                      navigate("/login");
                    }, 2000);
                  }}
                >
                  <Button
                    icon={<FiLogOut size={17} />}
                    title={"Logout"}
                    backgroundColor={"black"}
                    color={"white"}
                    border={"none"}
                  />
                </NavLink>
              ) : (
                <>
                  <NavLink to="/login">
                    <Button
                      icon={<FaLock size={17} />}
                      title={"Sign In"}
                      backgroundColor={"black"}
                      color={"white"}
                      border={"none"}
                    />
                  </NavLink>
                  <NavLink to="/register">
                    <Button
                      icon={<HiOutlineUser size={17} />}
                      title={"Sign Up"}
                      backgroundColor={"black"}
                      color={"white"}
                      border={"none"}
                    />
                  </NavLink>
                </>
              )}
            </div>
          </>
        </MobileNav>
      )}
    </div>
  );
}

export default NavBar;
