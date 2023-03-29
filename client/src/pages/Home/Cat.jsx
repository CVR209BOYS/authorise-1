import React from "react";
import CatButton from "../Utils/CatButton";

let arr = ["horror", "Fiction", "Poetry", "Science", "Romance"];
export default function Cat() {
  return (
    <div className="border-4 border-green w-full">
      <div className="mt-12">category</div>
      {arr.map((val, index) => (
        <CatButton key={index} value={val} />
      ))}
    </div>
  );
}
