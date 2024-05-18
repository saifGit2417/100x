import React from "react";
interface Props {
  name?: string;
  email?: string;
}

const CardComponent = (props: Props) => {
  return (
    <div className="border-2 border-gray-900 h-full w-1/5 flex flex-col text-center justify-center">
      <div className="font-bold text-xl">{props?.name} </div>
      <div>{props?.email} </div>
    </div>
  );
};

export default CardComponent;
