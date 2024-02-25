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
    <div className=" footer ">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex gap-[10%] pt-9 pb-[15px]  px-10"
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
        <div className="flex flex-col gap-4  cursor-pointer ">
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
      <div className="   text-white">
        <h1 className="px-10 pt-16 font-normal">
          © 2023 Dreams Rent. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
