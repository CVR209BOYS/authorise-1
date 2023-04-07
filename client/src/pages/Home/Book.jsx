import { useEffect, useState, useContext } from "react";
import Carousel from "../Utils/Carousal";
import axios from "axios";
import { MenuContext } from "../../MenuContext";

const Book = () => {
  const { allBooks } = useContext(MenuContext);
  console.log(allBooks);
  useEffect(() => {
    console.log(".");
  }, [allBooks]);

  return (
    <div className="overflow-hidden">
      <div className="text-[30px] font-mono font-semibold mb-5 ml-10 text-center sm:text-left">
        All Books
      </div>
      <Carousel allBooks={allBooks}  />
    </div>
  );
};

export default Book;
