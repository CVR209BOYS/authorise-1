import React from "react";
import CatButton from "../Utils/CatButton";
import { useLocation } from "react-router-dom";
import data from "../Utils/categories.json";

import { Link } from "react-router-dom";
export default function Categories() {
  const { state } = useLocation();

  return (
    <div className="border-4  border-white w-full text-left px-8 py-4">
      <div className="text-[30px] font-mono font-semibold mb-5 text-center sm:text-left">
        Categories
      </div>
      <div className="flex-wrap flex">
        {data.categories.map((val, index) => (
          <Link
            key={index}
            to={{
              pathname: "/market",
            }}
            state={val.value}
          >
            <CatButton value={{ name: val.value, selected: state }} />
          </Link>
        ))}
      </div>
    </div>
  );
}
