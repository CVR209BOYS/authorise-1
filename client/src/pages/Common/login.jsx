// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
// import { Context } from "../App";

import axios from "axios";

function LoginPage(props) {

    const navigate = useNavigate();

    const signIn = useGoogleLogin({
        clientId:
            "http://959469014856-evue44rqpagjru2pe34irb4mvlk68s03.apps.googleusercontent.com",
        redirect_uri: "http://localhost:3000",
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse.access_token);
           
            axios({
                method: 'post',
                url: 'http://localhost:3001/createusers/use',
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
        <>
            <button onClick={signIn}>Sign In With Google</button>
        </>
    );
}

export default LoginPage;