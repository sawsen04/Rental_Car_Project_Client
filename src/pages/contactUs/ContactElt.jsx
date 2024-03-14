import React from "react";

function ContactElt(props) {
  return (
    <div
      className=" drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] md:w-[20%]  md:py-5 py-3 md:px-12 px-6 rounded-lg flex flex-col gap-2 items-center bg-white hover:text-white 
    hover:bg-[#127384] duration-500"
    >
      {props.icon}
      <h1 className="md:font-bold font-medium md:text-[20px] text-[12px]">
        {props.title}
      </h1>
      <p className="md:font-medium md:text-sm text-xs">{props.detail}</p>
    </div>
  );
}

export default ContactElt;
