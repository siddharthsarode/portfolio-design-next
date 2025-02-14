import React from "react";

const Button = ({ text }) => {
  return (
    <button className="py-3 uppercase px-9 font-semibold text-white bg-primary hover:bg-primary/80 transition-all duration-75 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
