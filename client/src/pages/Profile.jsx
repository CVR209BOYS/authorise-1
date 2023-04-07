
import { useEffect, useState } from "react";
import { ReactSession } from 'react-client-session';
import Book from "./Home/Book";
import Carousel from "../pages/Utils/Carousal";
ReactSession.setStoreType("localStorage")

function Profile() {
    const [user, setUser] = useState(undefined);
    const [user2, setUser2] = useState(undefined)
    useEffect(() => {
        setUser(currentUser => ReactSession.get("user"));
    }, [ReactSession.get("user")]);
    useEffect(() => {
        setUser2(user);
    }, [user]);
    return (
        <div className="pt-[100px] border-2 border-red-600 w-[80%] mx-auto">
        
            {user2 &&
                <div className="border-2 border-black flex w-[80%] mx-auto">
                    <div>
                        <img src={user2.picture}></img>
                    </div>
                    <div>

                    {user2.name}
                    <div>
                        {user2.email}
                    </div>
                    <div>
                        this is my description ...........
                    </div>
                    </div>
                </div>
            }
            {
                !user2 && <div>koi user nhi h LAUDE</div>
            }
          <br/>
          <br/>
          <div>Uploaded book</div>
            <Carousel/>
            <Book/>
          <br/>
          <div>Published book</div>
            <Carousel/>
           
          <br/>


        </div>



    )
}

export default Profile