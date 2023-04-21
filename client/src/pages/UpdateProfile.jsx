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
    <div className="border-2 w-[50%] mx-auto pt-[200px]">
      <div className="bg-white drop-shadow-xl">

      <form>
        <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2 ">
          <label for="name">name</label>
          <input
            type="String"
            id="name"
            name="name"
            onChange={onchange}
            placeholder={`${data.name}`}
            className="bg-[#d8d7d7] w-[60%] font-normal text-[15px]"
          />
        </div>
        <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2">
          <label for="description">Description</label>
          <input
            type="string"
            id="description"
            name="description"
            onChange={onchange}
            placeholder={`${data.description}`}
            className="bg-[#d8d7d7] w-[60%] font-normal text-[15px]"
          />
        </div>
        <br />
      </form>
      <button onClick={eventHandler}>save</button>
      </div>
    </div>
  );
}
