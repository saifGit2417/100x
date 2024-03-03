"use client";

import React from "react";

interface Props {
  buttonText: String | any;
}

const Button = (props: Props) => {
  return (
    <div>
      {" "}
      <button
        type="button"
        className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={() => {
          console.log(`button pressed for ${props.buttonText}`);
        }}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;
