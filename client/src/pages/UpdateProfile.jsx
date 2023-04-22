import axios from "axios";
import React, { useState } from "react";
import { ReactSession } from "react-client-session";

export default function UpdateProfile() {
  const data = ReactSession.get("user");
  console.log(data);
  const [credentials, setCredentials] = useState({
    name: "",
    description: "",
    email: data.email,
  });
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const eventHandler = async () => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:3001/update/updateprofile",
      data: {
        name: credentials.name,
        email: credentials.email,
        description: credentials.description,
      },
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log("incoming");
    });
  };

  console.log(credentials);
  return (
    <div className=" w-[50%] mx-auto pt-[200px]">
      <div className="bg-white p-4 drop-shadow-xl ">
        <div className=" mx-auto mb-5 font-bold text-[30px] text-center md:text-[40px] ">
          Update your Profile
        </div>

        <form className="p-3 grid grid-cols-1">
          <div className="font-bold text-left  grid grid-cols-1 md:grid-cols-2 text-[15px] w-[90%] md:text-md lg:text-xl m-2 ">
            <div>
              <label for="name">Name</label>
            </div>
            <div>
              <input
                type="String"
                id="name"
                name="name"
                onChange={onchange}
                placeholder={`${data.name}`}
                className="bg-[#d8d7d7] p-1 w-[200px] font-normal text-[15px] mr-0"
              />
            </div>
          </div>
          <div className="font-bold text-left grid grid-cols-1 md:grid-cols-2 text-[15px] w-[90%] md:text-md lg:text-xl m-2">
            <div>
              <label for="description">Description</label>
            </div>
            <div>
              <input
                type="string"
                id="description"
                name="description"
                onChange={onchange}
                placeholder={`${data.description}`}
                className="bg-[#d8d7d7] p-1 w-[200px] font-normal text-[15px]"
              />
            </div>
          </div>
        </form>
        <div className="bg-red-500 w-fit p-1 rounded-md text-white mx-auto">
          <button className="" onClick={eventHandler}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
