import React from "react";

export default function PublicationCard({ value }) {
  console.log(value);
  return (
    <div className="h-content  rounded-md bg-[#f5eeee] drop-shadow-md border-2 m-5 p-3 text-black">
      <div className=" w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 ">
          <div className="text-center font-bold sm:text-left mr-2">Company Name </div>
          <div className="text-center sm:text-left font-medium">{value.companyName}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 ">
          <div className="text-center font-bold sm:text-left mr-2">Description </div>
          <div className="text-center sm:text-left font-medium">{value.description}</div>
        </div>
        <div className=" hidden sm:grid grid-cols-2 ">
          <div className="text-center font-bold sm:text-left mr-2">Email </div>
          <div className="text-center sm:text-left font-medium">{value.email}</div>
        </div>
      </div>
    </div>
  );
}

// companyName
// :
// "jayant"
// description
// :
// "master chef"
// email
// :
// "cse210001072@iiti.ac.in"
