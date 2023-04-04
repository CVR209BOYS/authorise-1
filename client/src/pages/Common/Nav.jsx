// import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
// import { Context } from "../App";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { NavLink } from "react-router-dom";
ReactSession.setStoreType("localStorage");


function Nav() {
  const [user, setUser] = useState(undefined);
  const [user2, setUser2] = useState(undefined);
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
      console.log(tokenResponse.access_token);
      const data = axios({
        method: "post",
        url: "http://localhost:3001/createusers",
        data: {
          tokenResponse,
        },
      }).then((res) => {
        console.log(res.data);
        ReactSession.set("user", res.data);
        setUser(ReactSession.get("user"));
        // console.log(ReactSession.get("user"))
      });
      console.log(data);
    },
    // onCompleted: (user) => {
    //     const hasRequiredScopes = scopes.every((scope) =>
    //         user.accessToken.scopes.includes(scope)
    //     );

    //     if (!hasRequiredScopes) {
    //         console.log("Try logging in again");
    //     } else {
    //         navigate("/");
    //     }
    // },
  });
  const logout = () => {
    ReactSession.set("user", undefined);
    setUser(undefined);
    setUser2(undefined);
  };

  const history=useNavigate();
  console.log(history)

  return (
    <div>
      <div className="bg-[#f9f8f6] w-[100%] h-[50px] sm:h-[70px] z-50 text-black flex justify-between align-middle fixed my-auto">
        <div className="w-fit h-full">
          <div className="ml-4 w-fit pr-2 h-full font-bold pt-3 text-[15px]   md:text-2xl lg:text-3xl">
            authoRISE
          </div>
        </div>

        {/* nav links */}
        <div className="flex border-b-[1px]  border-amber-300">
          <a
            className="mt-4 mx-3 text-center text-amber-400 hover:text-amber-600 font-semibold text-[10px]  md:text-2xl lg:text-2xl hover:border-b-2 hover:border-b-amber-600 duration-100"
            href="/BecomeAWriter "
          >
            Become A Writer
          </a>
          <a
            className="mt-4 mx-3 text-center text-amber-400 hover:text-amber-600 font-semibold text-[10px]  md:text-2xl lg:text-2xl hover:border-b-2 hover:border-b-amber-600 duration-100"
            href="/PublishBook"
          >
            Publish Book
          </a>
        </div>
        {/* profile corner */}
        <div className="flex justify-end ">
          {user2 && (
            <div className="my-auto mx-2 py-1 px-1 rounded-md text-[10px] text-center bg-amber-400 text-amber-900 md:text-base lg:text-base">
              <a href="/profile">{user2.name}</a>
            </div>
          )}
          {!user2 && (
            <div className="my-auto mx-2 py-1 px-1 rounded-md bg-amber-400 text-amber-900 text-[15px]  hover:text-white hover:bg-amber-700  md:text-base lg:text-lg">
              <button onClick={signIn}>Login</button>
            </div>
          )}
          {user2 && (
            <div className="my-auto mx-2 py-1 px-1 rounded-md bg-amber-400 text-amber-900 text-[10px]  hover:text-white hover:bg-amber-700  md:text-base lg:text-base">
              <button onClick={logout}>Logout</button>
            </div>
          )}
          <div className="bg-[#00000054] text-white font-bold rounded-md h-fit absolute mt-[80px] mr-[10px] p-1 " >
            <button onClick={() => history(-1)}> BACK</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
