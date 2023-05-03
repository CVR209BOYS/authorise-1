import { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";
import Book from "./Home/Book";
import Carousel from "../pages/Utils/Carousal";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { MenuContext } from "../MenuContext";
import { useContext } from "react";
import NewCard from "../pages/Utils/NewCard";
import { Link } from "react-router-dom";

ReactSession.setStoreType("localStorage");

function Profile() {
  // const navigate = Navigate();
  const [user, setUser] = useState(undefined);
  const [user2, setUser2] = useState(undefined);
  const [userInformation, setuserInformation] = useState({});
  // useEffect(() => {
  // }, [ReactSession.get("user")]);
  console.log(ReactSession.get("user"));
  const userEmail = ReactSession.get("user").email;
  console.log(userEmail);
  useEffect(() => {
    getuserdata();
  }, []);
  // console.log("update data");
  // console.log(user)

  const getuserdata = async () => {
    console.log(userEmail);
    const response = await axios({
      method: "POST",
      url: "http://localhost:3001/getusers/myUser",
      data: {
        email: `${userEmail}`,
      },
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      // setuserInformation(res.data)
      console.log("userdata");
      console.log(res);
      setuserInformation(res.data.data);
    });
    console.log(userInformation);
    setUser((currentUser) => ReactSession.get("user"));
    console.log(user);
    setUser2(user);
  };

  //uplloaded books
  const { allBooks } = useContext(MenuContext);
  console.log(allBooks);

  const uploadedBook = allBooks.filter((val) => {
    if (val.authorName === userInformation[0]?.name) {
      return true;
    } else {
      return false;
    }
  });
  console.log(uploadedBook);

  const publishedBook = uploadedBook.filter((val) => {
    if (val.publicationId.length !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(publishedBook);

  return (
    <div className="pt-[100px] drop-shadow-xl bg-[#efefef] w-[80%] mx-auto">
      {user && (
        <div className="">
          <div className=" flex w-[80%] mx-auto  space-x-4 justify-center">
            <div className="  bg-white p-1 rounded-md w-[20%] aspect-square">
              <img src={user.picture}></img>
            </div>
            <div className="bg-white p-1 rounded-md w-[50%]">
              <div className=" ml-2 mr-2 font-semibold text-[17px] sm:text-md md:text-lg lg:text:xl">
                <div>{userInformation[0].name}</div>
                <div>{userInformation[0].email}</div>
              </div>
              <div className=" ml-2  mr-2mt-2   text-[17px] sm:text-sm md:text-lg lg:text:xl">
                <div className="font-semibold"> About me</div>
                <div className="bg-[#f0f0f0] mr-2 rounded-sm p-1 max-w-[200px]">
                  {userInformation[0].description.length === 0 ? (
                    <div>no content</div>
                  ) : (
                    <div>{userInformation[0].description}</div>
                  )}
                </div>
              </div>
              <div className="bg-red-400 m-2 max-w-[200px] text-white rounded-sm p-1 font-medium text-center hover:bg-red-500 cursor-pointer">
                <a href="/updateprofile">Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <br />

      {uploadedBook.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <div className="font-bold text-center w-[100%] text-[25px]  md:text-[35px] md:ml-10">
            Uploaded Book
          </div>
          <div className="w-[80%] mx-auto  p-5 flex flex-wrap justify-evenly">
            {uploadedBook?.length &&
              uploadedBook.map((book, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-item text-center relative w-[300px] h-fit mx-3 my-4 rounded-md snap-start z-50"
                  >
                    <Link
                      to={{
                        pathname: "/bookdetails",
                      }}
                      state={{ book }}
                    >
                      <NewCard book={book} />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {publishedBook.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <div className="font-bold text-center w-[100%] text-[25px]  md:text-[35px] md:ml-10">
            Published book
          </div>
          <div className="w-[80%] mx-auto  p-5 flex flex-wrap justify-evenly">
            {publishedBook?.length &&
              publishedBook.map((book, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-item text-center relative w-[300px] h-fit mx-3 my-4 rounded-md snap-start z-50"
                  >
                    <Link
                      to={{
                        pathname: "/bookdetails",
                      }}
                      state={{ book }}
                    >
                      <NewCard book={book} />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
