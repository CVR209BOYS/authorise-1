import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { NavLink } from "react-router-dom";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
import { ReactSession } from "react-client-session";

function Nav() {
  const history = useNavigate();

  const [user, setUser] = useState(undefined);
  const [user2, setUser2] = useState(undefined);

  const [OpenSin, setOpenSin] = useState(false);
  const [OpenSup, setOpenSup] = useState(false);

  const logout = () => {
    ReactSession.set("user", undefined);
    setUser(undefined);
    setUser2(undefined);
  };

  return (
    <GoogleOAuthProvider clientId="959469014856-evue44rqpagjru2pe34irb4mvlk68s03.apps.googleusercontent.com">
      {OpenSin && (
        <SigninModal
          setOpenSin={setOpenSin}
          setOpenSup={setOpenSup}
          user={user}
          user2={user2}
          setUser={setUser}
          setUser2={setUser2}
        />
      )}
      {OpenSup && (
        <SignupModal
          setOpenSin={setOpenSin}
          setOpenSup={setOpenSup}
          user={user}
          user2={user2}
          setUser={setUser}
          setUser2={setUser2}
        />
      )}

      <div>
        <div className="bg-[#f9f8f6] w-[100%] h-[50px] sm:h-[70px] z-50 text-black flex justify-between align-middle fixed my-auto">
          <div className="w-fit h-full">
            <div className="ml-4 w-fit pr-2 h-full font-bold pt-3 text-[15px]   md:text-2xl lg:text-3xl">
              authoRISE
            </div>
          </div>

          {/* nav links */}
          
          {/* profile corner */}
          <div className="flex justify-end ">
            <div>

            {!user2 && (
              <div
              onClick={() => {
                setOpenSin(true);
              }}
              className="w-fit my-auto mx-2 mt-4 py-1 px-1 rounded-md bg-blue-400 text-blue-900 text-[15px]  hover:text-white hover:bg-blue-700  md:text-base lg:text-lg">
              login
            </div>
              
            )}
              
            </div>
            {user2 && (
              <div className="my-auto mx-2 py-1 px-1 rounded-md text-[10px] text-center bg-blue-400 text-blue-900 md:text-base lg:text-base">
                <a href="/profile">{user2.name}</a>
              </div>
            )}
            {/* {!user2 && (
              <div className="my-auto mx-2 py-1 px-1 rounded-md bg-blue-400 text-blue-900 text-[15px]  hover:text-white hover:bg-blue-700  md:text-base lg:text-lg">
                <button onClick={signIn}>Login</button>
              </div>
            )} */}
            {user2 && (
              <div className="my-auto mx-2 py-1 px-1 rounded-md bg-blue-400 text-blue-900 text-[10px]  hover:text-white hover:bg-blue-700  md:text-base lg:text-base">
                <button onClick={logout}>Logout</button>
              </div>
            )}
            <div className="bg-[#00000054] text-white font-bold rounded-md h-fit absolute mt-[80px] mr-[10px] p-1 ">
              <button onClick={() => history(-1)}> BACK</button>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Nav;
