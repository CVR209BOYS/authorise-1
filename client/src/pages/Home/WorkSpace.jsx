import React from "react";
import Book from "../Home/Book";
import Categories from "./Categories";
import Authors from "./Authors";
import ContinueRead from "./ContinueRead";
import Suggestions from "./Suggestions";

export default function WorkSpace({ open }) {
  return (
    <div
      className={`${open ? "w-[calc(100%-240px)]" : "w-[calc(100%-64px)]"} ${
        open ? "ml-[240px]" : "ml-[64px]"
      } pt-[50px] sm:pt-[70px]`}
    >
      <Categories />
      <Book />
      {/* <ContinueRead /> */}
      {/* <Suggestions /> */}
      {/* <Authors /> */}
    </div>
  );
}
