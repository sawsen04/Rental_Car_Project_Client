import React from 'react'
import { TfiLineDouble } from "react-icons/tfi";
function FooterElt(props) {
  return (
    <div className="md:flex md:flex-col gap-4  cursor-pointer ">
      <h1 className="font-bold text-white hover:text-primary">
        {props.title}
      </h1>
      <TfiLineDouble color="orange" fontSize={25} />
      <p className="text-white hover:text-primary">{props.one}</p>
      <p className="text-white hover:text-primary">{props.two}</p>
      <p className="text-white hover:text-primary">{props.three}</p>
      <p className="text-white hover:text-primary">{props.foor}</p>
      <p className="text-white hover:text-primary">{props.five}</p>
    </div>
  );
}

export default FooterElt