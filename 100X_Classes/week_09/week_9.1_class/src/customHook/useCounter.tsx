import React, { useEffect, useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counterFn = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(counterFn);
    };
  }, []);
  return counter;
};

export default useCounter;
