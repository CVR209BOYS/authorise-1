import React from "react";
import NewCard from "../Utils/NewCard";
import data from "../Utils/data.json";

const BookGrid = ({ genres, languages, ratingRange }) => {
  return (
    <div className=" flex flex-wrap justify-evenly">
      {data.resources.map((val, key) => {
        return <NewCard data={val} />;
      })}
    </div>
  );
};

export default BookGrid;
