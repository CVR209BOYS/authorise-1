import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { ReactSession } from "react-client-session";
import React from "react";
ReactSession.setStoreType("localStorage");

export default function SigninModal({
  setOpenSin,
  setOpenSup,
  user,
  user2,
  setUser,
  setUser2,
}) {
  // const setUserFunc = () => {
  //   setUser(ReactSession.get("user"));
  // };
  useEffect(() => {
    setUser((currentUser) => ReactSession.get("user"));
  }, []);
  useEffect(() => {
    setUser2(user);
  }, [user]);
  const signIn = useGoogleLogin({
    clientId:
      "http://959469014856-evue44rqpagjru2pe34irb4mvlk68s03.apps.googleusercontent.com",
    redirect_uri: "http://localhost:3000",
    onSuccess: (tokenResponse) => {
      // console.log(tokenResponse.access_token);
      const data = axios({
        method: "post",
        url: "http://localhost:3001/createusers",
        data: {
          tokenResponse,
        },
      }).then((res) => {
        // console.log(res.data);
        ReactSession.set("user", res.data);
        setUser(ReactSession.get("user"));
        console.log(ReactSession.get("user"));
      });
      console.log(data);
    },
  });
  const logout = () => {
    ReactSession.set("user", undefined);
    setUser(undefined);
    setUser2(undefined);
  };

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(credentials);
  }, [credentials]);
  const eventHandler = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:3001/muserlogin/signin",
      data: {
        email: credentials.email,
        password: credentials.password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data);
      if (
        res.data.status !== 403 &&
        res.data.status !== 402 &&
        res.data.status !== 405 &&
        res.data.status !== 400
      ) {
        ReactSession.set("user", res.data);
        setUser(ReactSession.get("user"));
        console.log(ReactSession.get("user"));
      } else {
        if (res.data.status === 402) {
          alert("user dosent exist");
        } else if (res.data.status === 403) {
          alert("invalid credentials");
        } else if (res.data.status === 405) {
          alert("please login with google");
        } else {
          console.log(`Invalid ${res.data.errors[0].path}`);
          alert(`Invalid ${res.data.errors[0].path}`);
        }
      }
    });
  };

  // const history = useNavigate();

  return (
    <div className="bg-[#000000db] text-black w-full h-screen snap-none fixed top-0 z-[60]">
      <div className="border-2 w-[50%] bg-white text-red rounded-xl text-center mx-auto mt-12">
        <div className=" w-fit pr-2 h-full font-bold pt-3 text-[15px] mx-auto  md:text-2xl lg:text-3xl">
          <p>Welcome to authoRISE</p>
        </div>
        <div>
          <div className=" border-3 border-red w-[70%] mx-auto mt-10">
            <form>
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
          <div className="flex flex-wrap">
            <div className="w-[200px] h-full p-1 m-1 mx-auto rounded-md bg-red-400 text-red-900 text-[15px]  hover:text-white hover:bg-red-700  md:text-base lg:text-lg">
              <div onClick={() => eventHandler()}>login</div>
            </div>

            <div className="w-[200px] mx-auto p-1  m-1 rounded-md bg-red-400 text-red-900 text-[15px]  hover:text-white hover:bg-red-700  md:text-base lg:text-lg">
              <button onClick={signIn}>Signin with Google</button>
            </div>
          </div>
        </div>

        {user2 && setOpenSin(false)}
        <div
          onClick={() => {
            setOpenSin(false);
          }}
        >
          <div
            className="w-[200px] mx-auto p-1 mt-3 rounded-md bg-[#8e8e8e] text-red mb-4
           text-[15px]  hover:text-white hover:bg-red-700  md:text-base lg:text-lg"
          >
            <button
              onClick={() => {
                setOpenSin(false);
                setOpenSup(true);
              }}
            >
              Create an account
            </button>
          </div>
          <div
            className="w-[200px] mx-auto p-1 mt-3 rounded-md bg-[#8e8e8e] text-red mb-4
           text-[15px]  hover:text-white hover:bg-red-700  md:text-base lg:text-lg"
          >
            <button>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
