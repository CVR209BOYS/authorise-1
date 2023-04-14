import React, { useState } from "react";

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
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  console.log(credentials);
  const eventHandler = async () => {
    const response = await fetch("http://localhost:3001/createmusers/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      }),
    });
  };
  return (
    <div>
      <div className="bg-[#000000db] text-white w-full h-screen snap-none fixed top-0 z-[60]">
        <div className="border-2 w-[50%] bg-white text-black rounded-xl text-center mx-auto mt-12">
          <div className=" w-fit pr-2 h-full font-bold pt-3 text-[15px] mx-auto  md:text-2xl lg:text-3xl">
            <p>Welcome to authoRISE</p>
          </div>
          <div>
            <div className=" border-3 border-black w-[70%] mx-auto mt-10">
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
            <div className="w-[200px] mx-auto p-1 mt-3 rounded-md bg-[#8e8e8e] text-black mb-4 text-[15px]  hover:text-white hover:bg-blue-700  md:text-base lg:text-lg">
              <button
                onClick={() => {
                  setOpenSin(false);
                  setOpenSup(false);
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
