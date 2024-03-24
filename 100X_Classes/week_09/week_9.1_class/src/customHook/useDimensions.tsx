import React, { useEffect, useState } from "react";

const useDimensions = () => {
  interface Dimensions {
    height: number;
    width: number;
  }
  const [dimension, setDimension] = useState<Dimensions>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const findDimension = () => {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    setDimension(() => ({ height: windowHeight, width: windowWidth }));
  };
  useEffect(() => {
    window.addEventListener("resize", findDimension);
  }, []);
  return dimension;
};

export default useDimensions;
