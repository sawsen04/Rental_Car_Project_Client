import React from "react";
import "./button.css";
function Button(props) {
  return (
    <div>
      <button
        className="Button"
        style={{border: props.border, backgroundColor: props.backgroundColor, color: props.color }}
      >
        {props.icon}
        {props.title}
      </button>
    </div>
  );
}

export default Button;