import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../Utils/Carousal";
import Book from "../../Home/Book";
import { MenuContext } from "../../../MenuContext";
import { useContext } from "react";
import NewCard from "../../Utils/NewCard";
import { Link } from "react-router-dom";

export default function PublicationdataDetails({
  state,
  setopenPublicationList,
}) {
  const location = useLocation();
  const Publicationdata = location.state.value;
  console.log(Publicationdata._id);

  useEffect(() => {
    console.log(Publicationdata);
    setopenPublicationList(false);
  }, []);

  const { allBooks } = useContext(MenuContext);
  console.log(allBooks);
  const publishedBook = allBooks.filter((val) => {
    if (val.publicationId === Publicationdata._id) {
      return true;
    } else {
      return false;
    }
  });

  console.log(publishedBook);

  return (
    <div className="pt-[100px] w-[80%] bg-red-100 mx-auto">
      <div className=" flex w-[80%] mx-auto  space-x-4 justify-center">
        <div className="bg-white p-1 rounded-md w-[50%]">
          <div className=" ml-2 mr-2 flex font-semibold text-[17px] sm:text-md md:text-lg lg:text:xl">
            <div>Company name-</div>
            <div className="text-[#ffff5] font-medium">
              {Publicationdata.companyName}
            </div>
          </div>
          <div className=" ml-2 mr-2 flex font-semibold text-[17px] sm:text-md md:text-lg lg:text:xl">
            <div>email-</div>
            <div className="text-[#ffff5] font-medium">
              {Publicationdata.email}
            </div>
          </div>
          <div className=" ml-2  mr-2mt-2  text-[17px] sm:text-sm md:text-lg lg:text:xl">
            <div className="font-semibold"> About the company</div>
            <div className="bg-[#f0f0f0] mr-2 rounded-sm p-1 max-w-[200px]">
              {Publicationdata.description}
            </div>
          </div>

          <div className="bg-red-400 m-2 max-w-[200px] text-white rounded-sm p-1 font-medium text-center hover:bg-red-500 cursor-pointer">
            awsrexdtcfyvgubhjnlm
          </div>
        </div>
      </div>

      <div className="font-bold text-center w-[100%] text-[25px] p-5 md:text-[35px] ">
        Published Book
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
  );
}
