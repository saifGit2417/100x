/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React from "react";

const Headers = React.memo(function Headers({ title }) {
  console.log("re render console");
  return (
    <>
      <h1> {title}</h1>
    </>
  );
});

export default Headers;
