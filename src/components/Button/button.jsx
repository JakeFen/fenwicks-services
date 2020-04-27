import React from "react";

const Button = ({ type, className, handleClick, label, ...props }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={(event) => handleClick(event)}
    >
      {label}
    </button>
  );
};

export default Button;
