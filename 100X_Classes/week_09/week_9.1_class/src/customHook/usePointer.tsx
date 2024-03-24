import React, { useEffect, useState } from "react";

const usePointer = () => {
  const [mousePosition, setMousePosition] = useState<any>({ x: "", y: "" });
  console.log("mousePosition: ", mousePosition);

  const handleMouseMove = (event) => {
    let xPosition = event.clientX;
    let yPosition = event.clientY;
    setMousePosition({ x: xPosition, y: yPosition });
  };

  useEffect(() => {
    // const mouse: any = window.event;
    window.addEventListener("mousemove", handleMouseMove);

    return () => removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePosition;
};

export default usePointer;
