/* eslint-disable react/prop-types */

import { useEffect, useMemo, useState } from "react";

/* eslint-disable no-unused-vars */
const Child = ({ num1, num2 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("inside use effect");
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const result = useMemo(() => {
    console.log("inside use memo");
    return num1 + num2;
  }, [num1, num2]);

  return <div>Child</div>;
};

export default Child;
