"use client";

import CardComponent from "@/components/CardComponent";
import axios from "axios";

async function internalApi() {
  let result = await axios.get("http://localhost:3000/api/user");
  return result.data;
}

export default async function Home() {
  // let result = await internalApi();
  // console.log("result: ", result);

  return (
    <div className="h-full w-full flex text-center justify-center">
      {/* <CardComponent name={result.name} email={result.email} />; */}
    </div>
  );
}
