import React from "react";

const Card = ({ imageLink, productName, productDetails, productPrice }) => {
  return (
    <div className="m-6">
      <div className="border-2 border-slate-300 w-full h-full p-10">
        <div className="flex justify-center">
          <img src={imageLink} alt="" className="w-[150px] h-[150px]" />
        </div>
        <div className="text-center my-2">
          <p className="text-lg font-bold">{productName}</p>
          <p className="text-base font-semibold">{productDetails} </p>
          <p className="text-sm font-semibold"> ₹{productPrice} </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-400 rounded p-4 w-100">BuyNow</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
