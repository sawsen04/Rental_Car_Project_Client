import React from "react";
import "./footer.css";
import FooterElt from "./FooterElt";
import { TfiLineDouble } from "react-icons/tfi";
import { MdPhoneInTalk } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { TiSocialLinkedinCircular } from "react-icons/ti";
function Footer() {
  return (
    <div className="">
      <div className="bgimage">
        <img
          src="https://www.blacktint-lyon.fr/wp-content/uploads/2017/10/homescreen-final2.jpg"
          alt=""
          className="absolute z-10 md:w-auto md:min-w-full  md:max-w-none md:h-[60vh] h-[90vh]"
        />
      </div>
      <div className=" footer relative  z-20 ">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="md:flex md:gap-[10%] md:pt-9 md:pb-[15px]  md:px-10 px-6 "
        >
          <FooterElt
            title={"About Company"}
            one={"Shop Toyota"}
            two={"Dreamsrentals Worldwide"}
            three={"Dreamsrentals Racing"}
            foor={"Dreamsrentals Racing"}
            five={"Virtual Auto Show"}
          />
          <FooterElt
            title={"Vehicles Type"}
            one={"All Vehicles"}
            two={"SUVs"}
            three={"Trucks"}
            foor={"Cars"}
            five={"Crossovers"}
          />
          <FooterElt
            title={"Quick links"}
            one={"My Account"}
            two={"Champaigns"}
            three={"Dreamsrental Dealers"}
            foor={"Deals and Incentive"}
            five={"Financial Services"}
          />
          <div className="md:flex flex-col md:gap-4  cursor-pointer ">
            <h1 className="font-bold text-white hover:text-primary">
              Contact Info
            </h1>
            <TfiLineDouble color="orange" fontSize={25} />
            <div className="flex gap-3  hover:text-primary">
              <MdPhoneInTalk color="white" size={20} />
              <h1 className="text-white font-bold">(+216) 00 000 000</h1>
            </div>
            <div className="flex gap-3">
              <SiGmail color="white" size={20} />
              <h1 className="text-white font-bold">support@example.com</h1>
            </div>
            <div className="mt-9">
              <h1 className="text-white font-bold">Connect with us</h1>
              <div className="flex gap-5 mt-3">
                <FaFacebook color="white" size={20} />
                <GrInstagram color="white" size={20} />
                <TiSocialLinkedinCircular color="white" size={26} />
              </div>
            </div>
          </div>
        </div>
        <div className="   text-white ">
          <h1 className="md:px-10 px-3 md:pt-16 pt-5 font-normal">
            © 2023 Dreams Rent. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
