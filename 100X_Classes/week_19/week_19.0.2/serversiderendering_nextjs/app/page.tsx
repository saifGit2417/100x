/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React from "react";

const page = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(response.data.slice(1, 10));
  return (
    <div>
      {response.data.slice(0, 10).map((data: any) => {
        return (
          <>
            <p>{data.title} </p>
          </>
        );
      })}
    </div>
  );
};

export default page;
