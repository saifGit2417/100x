import React, { useEffect, useState } from "react";

const useDebounce = (input:string,timeRange:number) => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setInputVal(input);
    }, timeRange);
    return () => clearTimeout(timer);
  }, [input]);

  return inputVal;
};

export default useDebounce;
