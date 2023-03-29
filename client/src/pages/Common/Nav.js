// import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
// import { Context } from "../App";
import axios from "axios";
import { ReactSession } from 'react-client-session';
import { NavLink } from "react-router-dom";
ReactSession.setStoreType("localStorage")


function Nav() {
  const [user, setUser] = useState(undefined);
  const [user2, setUser2] = useState(undefined)
  const setUserFunc = () => {
    setUser(ReactSession.get("user"))
  }
  useEffect(() => {
    setUser(currentUser => ReactSession.get("user"));
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
            method: 'post',
            url: 'http://localhost:3001/createusers',
            data: {
              tokenResponse
            }
          }).then(res=>{
            console.log(res.data);
            ReactSession.set("user", res.data);
            setUser(ReactSession.get("user"))
            // console.log(ReactSession.get("user"))
          });
          // console.log(data)
          
          
        //navigate("/Home", { state: tokenResponse });
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
    
}



);
const logout = ()=>{
  ReactSession.set("user", undefined);
  setUser(undefined)
  setUser2(undefined)
}

  return (
    <div>
      <div className="bg-[#93908d]  w-[100%] h-[50px] text-white flex justify-between">
        <div >logo</div>
        <div className="flex justify-between w-[20%]">
          <div>notification</div>
          <div>profile</div>
          {user2 && <div> <a href="/profile">{user2.name}</a></div>}
          {!user2 && <div> <button onClick={signIn}>login</button></div>}
          {user2 && <div> <button onClick={logout}>logout</button></div>}
          
        </div>
      </div>
    </div>
  );
}

export default Nav;
