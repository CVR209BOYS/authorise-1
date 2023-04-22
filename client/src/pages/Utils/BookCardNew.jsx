import React from "react";
import { useLocation } from "react-router-dom";

export default function BookCardNew({ bookdetails }) {
  // const book=useLocation()
  console.log(bookdetails);
  return (
    <div className="h-[400px] m-5 w-[300px] bg-[#ffffff] rounded-md drop-shadow-2xl">
      <div
        className="h-[200px] w-[270px] mx-auto  bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${bookdetails.coverpageurl})` }}
      ></div>
      <div className="h-[200px] w-[270px] mx-auto m-2">
        <p className="font-semibold text-2xl m-2">{bookdetails.title}</p>
        <p className="font-normal text-md m-2">{bookdetails.description}</p>
        <div className=" border-t-2">
          <div className="flex justify-between m-2 ">
            <p className="text-md font-semibold">
              Author{bookdetails.authorName}
            </p>
            <p className="text-md font-semibold">
              Publication{bookdetails.publicationid}
            </p>
          </div>
          <div className="flex justify-between m-2">
            <p className=" flex text-md font-semibold">
              {" "}
              Rating:{" "}
              <p className="mx-2 text-lg font-bold">
                {bookdetails.rating.toPrecision(2)}/5
              </p>
            </p>
            <p className="font-normal text-md bg-slate-400 rounded-md p-1">
              {bookdetails.tags[0].value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
