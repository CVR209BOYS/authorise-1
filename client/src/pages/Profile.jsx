import { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import Book from "./Home/Book";
import Carousel from "../pages/Utils/Carousal";
import { Navigate } from "react-router-dom";
ReactSession.setStoreType("localStorage");

function Profile() {
  // const navigate = Navigate();
  const [user, setUser] = useState(undefined);
  const [user2, setUser2] = useState(undefined);
  // useEffect(() => {
  // }, [ReactSession.get("user")]);
  useEffect(() => {
    setUser((currentUser) => ReactSession.get("user"));
    setUser2(user);
  }, []);
  console.log(user);
  // const desc = user.email;
  // console.log(desc);
  // const handleUpdate = () => {

  // };
  return (
    <div className="pt-[100px] border-2 border-red-600 w-[80%] mx-auto">
      {user && (
        <div className="border-2 border-red  w-[80%] mx-auto">
          <div>
            <img src={user.picture}></img>
          </div>
          <div>
            {user.name}
            <div>{user.email}</div>
            {/* <div>{user.description}</div> */}

            {user.description.length === 0 ? (
              <div>no content</div>
            ) : (
              <div>{user.description}</div>
            )}
          </div>
          <div>
          <a href="/updateprofile">update</a>
          </div>
        </div>
      )}
      {!user && <div>koi user nhi h LAUDE</div>}
      <br />
      <br />
      <div>Uploaded book</div>
      <Carousel />
      <Book />
      <br />
      <div>Published book</div>
      <Carousel />

      <br />
    </div>
  );
}

export default Profile;
