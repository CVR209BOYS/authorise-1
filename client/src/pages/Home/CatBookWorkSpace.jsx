import React from 'react'
import { Link } from "react-router-dom";
import data from "../Utils/categories.json";
import CatButton from "../Utils/CatButton";
import { useLocation } from "react-router-dom";
import BookGrid from '../Utils/BookGrid';


export default function CatBookWorkSpace({ open }) {
    const { state } = useLocation();
  console.log(state);

  console.log();
  return (
    <div
      className={`${open ? "w-[calc(100%-240px)]" : "w-[calc(100%-64px)]"} ${
        open ? "ml-[240px]" : "ml-[64px]"
      } p-[50px] sm:pt-[70px]`}
    >
        <div className="pt-[30px]">
          <div className="flex-wrap flex">
        {data.categories.map((val, index) => (
          <Link
          to={{
            pathname: "/category",
            hash: `${val.name}`,
          }}
          state={{categories: `${val.name}`}}>
          
          <CatButton value={{name:val.name,selected:state}} />
          </Link>
        ))}
      </div>
      
      <div>{state.categories}</div>
      
      <div className="">
      <BookGrid/>
      </div>
    </div>
      
    </div>
  )
}
