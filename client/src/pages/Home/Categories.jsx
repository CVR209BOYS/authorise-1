import React from "react";
import CatButton from "../Utils/CatButton";

import data from "../Utils/categories.json";

export default function Categories() {


  return (
    <div className="border-4 border-green w-full text-left px-8 py-4">
      <div className="text-[30px] font-mono font-semibold mb-5">Categories</div>
      <div className="flex-wrap flex">
        {data.categories.map((val, index) => (
          <CatButton key={index} value={val.name} />
        ))}
      </div>
    </div>
  );
}
