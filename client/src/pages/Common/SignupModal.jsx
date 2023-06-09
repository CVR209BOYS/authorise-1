import axios from "axios";
import React, { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

export default function SignupMOdal({
  setOpenSin,
  setOpenSup,
  user,
  user2,
  setUser,
  setUser2,
}) {
  const [credentials, setcredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    setUser((currentUser) => ReactSession.get("user"));
  }, []);
  useEffect(() => {
    setUser2(user);
  }, [user]);
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  console.log(credentials);
  const eventHandler = async () => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:3001/createmusers/signup",
      data: {
        name: credentials.username,
        email: credentials.email,
        password: credentials.password,
      },
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((data) => {
        console.log(data);
        if (data.data.status === 403) {
          alert("kindly fill the form properly");
        } else if (data.data.status === 400) {
          console.log(`Invalid ${data.data.errors[0].path}`);
          alert(`Invalid ${data.data.errors[0].path}`);
        } else {
          console.log(data.data);
          ReactSession.set("user", data.data);
          setUser(ReactSession.get("user"));
          console.log(ReactSession.get("user"));
          setOpenSin(false);
          setOpenSup(false);
        }
      })
      .catch(() => alert("fill form mannn"));
  };
  return (
    <div>
      <div className="bg-[#000000db] text-black w-full h-screen snap-none fixed top-0 z-[60]">
        <div className="border-2 w-[50%] bg-white text-red rounded-xl text-center mx-auto mt-12">
          <div className=" w-fit pr-2 h-full font-bold pt-3 text-[15px] mx-auto  md:text-2xl lg:text-3xl">
            <p>Welcome to authoRISE</p>
          </div>
          <div>
            <div className=" border-3 border-red w-[70%] mx-auto mt-10">
              <form>
                <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2 ">
                  <label for="email">Username</label>
                  <input
                    type="string"
                    id="username"
                    name="username"
                    onChange={onchange}
                    className="bg-[#d8d7d7] w-[60%] font-normal text-[15px]"
                  />
                </div>
                <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2 ">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={onchange}
                    className="bg-[#d8d7d7] w-[60%] font-normal text-[15px]"
                  />
                </div>
                <div className="font-bold text-left flex justify-between text-[15px] w-[90%] md:text-md lg:text-xl m-2">
                  <label for="password">Password</label>
                  <input
                    type="string"
                    id="password"
                    name="password"
                    onChange={onchange}
                    className="bg-[#d8d7d7] w-[60%] font-normal text-[15px]"
                  />
                </div>
                <br />
              </form>
            </div>
          </div>

          <div>
            <div className="w-[200px] mx-auto p-1 mt-3 rounded-md bg-[#8e8e8e] text-red mb-4 text-[15px]  hover:text-white hover:bg-red-700  md:text-base lg:text-lg">
              <button
                onClick={() => {
                  eventHandler();
                }}
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
