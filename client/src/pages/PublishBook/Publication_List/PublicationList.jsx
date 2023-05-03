import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PublicationCard from "../Publication_List/PublicationCard";

export default function PublicationList({
  setopenPublicationList,
  setPublicationDetails,
}) {
  const handleback = () => {
    setopenPublicationList(false);
  };

  const [PublicationList, setPublication] = useState([]);
  console.log(PublicationList);

  const handle = async () => {
    const response = axios({
      method: "GET",
      url: "http://localhost:3001/communication/getAllPub",

      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log("incoming");
      console.log(res.data);
      setPublication(res.data);
    });
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div className="bg-[#000000db]  text-white w-full h-screen snap-none fixed top-0 z-[60]">
      <div className="">
        <div className="  font-semibold text-white  mr-3  sm:mt-[80px] ml-[10px] px-2 text-[25px] z-50 ">
          <button onClick={handleback}>X </button>
        </div>
        <div className="bg-white w-[60%] p-4 mx-auto text-center rounded-md">
          <div className=" text-black font-bold text-[20px] mb-5">
            Publication List
          </div>

          <div className=" p-3 overflow-scroll w-[80%] h-[400px] mx-auto ">
            {PublicationList.length !== 0 ? (
              <>
                {PublicationList.map((value, key) => {
                  return (
                    <Link to="/Publicationdetails" state={{ value }} >
                      
                      <PublicationCard value={value} />
                    </Link>
                  );
                })}
              </>
            ) : (
              <div>loading</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
