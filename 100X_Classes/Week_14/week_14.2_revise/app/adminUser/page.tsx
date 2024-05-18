import axios from "axios";
import React from "react";

async function getAdminDetails() {
  let adminData: any = await axios.get(
    "http://localhost:3000/api/admindetails"
  );
  await new Promise((r) => setTimeout(r, 3000));
  return adminData.data;
}

async function page() {
  let adminDetails = await getAdminDetails();
  return (
    <div>
      <div>
        <h1>list down admin details using get api</h1>
        <p>name : {adminDetails.name}</p>
        <p> email:{adminDetails.email}</p>
      </div>

      
    </div>
  );
}

export default page;
