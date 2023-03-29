import React from "react";
import Book from "../Home/Book";
import Cat from "../Home/Cat";
import Author from "./Author";
import ContRead from "./ContRead";
import Sugget from "./Sugget";

export default function WorkSpace({ open }) {
  return (
    <div
      className={`${
        open ? "w-[calc(100%-288px)]" : "w-[calc(100%-64px)]"
      } ${open ? "ml-[288px]" : "ml-[64px]"}`}
    >
      <Cat />
      <Book />
      <ContRead/>
      <Sugget/>
      <Author/>
    </div>
  );
}
