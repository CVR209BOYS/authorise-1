// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
// import { Context } from "../App";
import axios from "axios";

function Nav() {
 
  const signIn = useGoogleLogin({
    clientId:
        "http://959469014856-evue44rqpagjru2pe34irb4mvlk68s03.apps.googleusercontent.com",
    redirect_uri: "http://localhost:3000",
    onSuccess: (tokenResponse) => {
        console.log(tokenResponse.access_token);
        axios({
            method: 'post',
            url: 'http://localhost:3001/createusers',
            data: {
              tokenResponse
            }
          });
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
});

  return (
    <div>
      <div className="bg-[#93908d]  w-[100%] h-[50px] text-white flex justify-between">
        <div >logo</div>
        <div className="flex justify-between w-[20%]">
          <div>notification</div>
          <div>profile</div>
          <div> <button onClick={signIn}>login</button></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
