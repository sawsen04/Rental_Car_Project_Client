import React from "react";
import "./button.css";
function Button(props) {
  // console.log(props);
  return (
    <div>
      <button
        type="button"
        className="Button "
        style={{
          border: props.border,
          backgroundColor: props.backgroundColor,
          color: props.color,
        }}
        onClick={() => {
          props.fn && props.fn();
        }}
      >
        {props.icon}
        {props.title}
      </button>
    </div>
  );
}

export default Button;
