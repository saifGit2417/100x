import React from "react";

import axios from "axios";

async function internalApi() {
  let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
  await new Promise((r) => setTimeout(r, 5000));
  return result.data;
}

export default async function User() {
  const data: any = await internalApi();
  return (
    <div>
      {data?.slice(0, 10)?.map((data: any, index: number) => {
        return (
          <div
            style={{
              border: "2px solid gray",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              margin: "10px",
            }}
          >
            <p>{index + 1} </p>
            <p>{data?.title} </p>
            <p>{data?.completed === true ? "true " : "false"} </p>
          </div>
        );
      })}
    </div>
  );
}
