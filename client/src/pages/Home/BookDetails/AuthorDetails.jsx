import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AuthorDetails({ open }) {
  console.log(open);
  const AuthorDetails = open.authordata.book;
  console.log(AuthorDetails);
  const [profile, setprofile] = useState("");

  useEffect(() => {
    getuserdata();
  }, []);
  // console.log("update data");
  // console.log(user)

  const getuserdata = async () => {
    console.log(AuthorDetails.email);
    const response = await axios({
      method: "POST",
      url: "http://localhost:3001/getusers/myUser",
      data: {
        email: `${AuthorDetails.authorEmail}`,
      },
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      // setuserInformation(res.data)
      console.log("userdata");
      console.log(res.data.data[0].picture);
      setprofile(res.data.data[0].picture);
    });
  };

  return (
    <div className="bg-[#000000db] text-black w-full h-screen snap-none fixed top-0 z-[60]">
      <div className="bg-white w-[60%] m-auto mt-60 p-3 rounded-md  md:rounded-lg ">
        <div className="flex justify-end font-semibold text-xl">
          <button
            onClick={() => {
              open.setopendetails(false);
              open.setauthordata({});
              // open.setopendetails(true);
            }}
          >
            X
          </button>
        </div>
        <div className=" p-4 md:pl-12 md:pr-14 md:pb-12  mx-auto ">
          <div className=" mx-auto mb-5 font-bold text-[30px] text-center md:text-[40px] ">
            <p>Author Details</p>
          </div>
          <div className=" text-center font-medium m-2 md:text-[20px] flex space-x-4 justify-center">
            <div className=" aspect-square mt-2"> <img src={profile}></img></div>
            <div className=" text-left ">
              Author: {AuthorDetails.authorName}
              <br></br>
              Email: {AuthorDetails.authorEmail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
