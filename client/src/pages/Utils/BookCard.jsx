import React, { useEffect, useState } from "react";


const BookCard = ({ coverPageUrl, title, authors, genres, stars}) => {
  const getFilteredItem = (query, item) => {
    if (!query) {
      return item;
    }

    return item.filter((val) => {
      return (
        val.name
          .replace(/\s+/g, " ")
          .trim()
          .toLowerCase()
          .indexOf(query.replace(/\s+/g, " ").trim().toLowerCase()) > -1
      );
    });
  };

  const [Query, setQuery] = useState("");
  console.log(Query);
  // const filtered = getFilteredItem(Query, data);

  // console.log(filtered);
  
  


  
 let arr=[1];
  return (
    <>
      

      <div>
        {arr.map((val, key) => {
          return (
            <div className="w-[300px] h-[450px]  rounded-md mx-1 my-1 px-3 py-2 grid gap-1 grid-rows-12 shadow-lg bg-slate-50 hover:shadow-md border-gray-300 hover:border-gray-400 border-[1px] duration-200 hover:scale-[1.025]">
              <div className="flex justify-center align-middle row-span-6">
                <img src={coverPageUrl} alt="No CoverPage Available" />
              </div>
              <div className="flex row-span-1 text-[20px]">
                <span className="text-gray-400">Title:</span>
                {title}
              </div>
              <div className="flex row-span-2 text-[18px]">
                <span className="text-gray-400">Authors:</span>
                {authors.map((item) => (
                  <span>{item + ", "}</span>
                ))}
              </div>
              <div className=" flex row-span-1">
                {genres.map((item) => (
                  <span className="rounded-lg  mx-1 px-1 py-[2px] border-2 border-sky-800 bg-blue-200 text-sky-800 hover:bg-blue-300">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex row-span-1">Rating:{stars} / 5</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookCard;
