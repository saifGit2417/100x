import React, { useEffect, useState } from "react";

const useDebounce = (input) => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setInputVal(input);
    }, 2000);
    return () => clearTimeout(timer);
  }, [input]);

  return inputVal;
};

export default useDebounce;
