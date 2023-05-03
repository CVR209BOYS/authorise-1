import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../Utils/Carousal";
import Book from "../../Home/Book";

export default function PublicationdataDetails({
  state,
  setopenPublicationList,
}) {
  const location = useLocation();
  const Publicationdata = location.state.value;

  useEffect(() => {
    console.log(Publicationdata);
    setopenPublicationList(false);
  }, []);

  return (
    <div className="pt-[100px] w-[80%] bg-slate-400 mx-auto">
      <div className=" flex w-[80%] mx-auto  space-x-4 justify-center">
        <div className="bg-white p-1 rounded-md w-[50%]">
          <div className=" ml-2 mr-2 font-semibold text-[17px] sm:text-md md:text-lg lg:text:xl">
            <div>Company name-</div>
            <div>{Publicationdata.companyName}</div>
          </div>
          <div className=" ml-2 mr-2 font-semibold text-[17px] sm:text-md md:text-lg lg:text:xl">
            <div>email-</div>
            <div>{Publicationdata.email}</div>
          </div>
          <div className=" ml-2  mr-2mt-2   text-[17px] sm:text-sm md:text-lg lg:text:xl">
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

      <div>Uploaded book</div>
      <Carousel />
      <Book />

      <div>Published book</div>
      <Carousel />
    </div>
  );
}
