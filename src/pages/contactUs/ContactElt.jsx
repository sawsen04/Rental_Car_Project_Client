import React from "react";

function ContactElt(props) {
  return (
    <div
      className=" drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] w-[20%] py-5 px-12 rounded-lg flex flex-col gap-2 items-center bg-white hover:text-white 
    hover:bg-[#127384] duration-500"
    >
      {props.icon}
      <h1 className="font-bold text-[20px]">{props.title}</h1>
      <p className="font-medium text-sm">{props.detail}</p>
    </div>
  );
}

export default ContactElt;
