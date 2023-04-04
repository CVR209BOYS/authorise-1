import React from "react";
import NewCard from "../Utils/NewCard";
import data from "../Utils/data.json";

export default function BookGrid() {
  return (
    <div className=" flex flex-wrap justify-evenly">
      {data.resources.map((val, key) => {
        return (
            <NewCard data={val} />
        )
      })}
    </div>
  );
}
