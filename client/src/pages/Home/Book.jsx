import { useEffect, useState } from "react";
import Carousel from "../Utils/Carousal";
import axios from "axios";

const Book = () => {
  const [allBooks, setAllBooks] = useState([]);

  const Books = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:3001/bookupl/get",
    });
    console.log(res);
    setAllBooks(res.data);
  };

  useEffect(() => {
    Books();
  }, []);

  const coverPageUrl =
    "https://firebasestorage.googleapis.com/v0/b/authorise-f26ef.appspot.com/o/images%2Fservice3.png?alt=media&token=49b6377a-4580-40c9-98fb-32eefb8ad174";
  const title = "the subtle art of not giving a fuck!";
  const stars = "4.7";
  const authors = ["Mark Manson"];
  const genres = ["Self Growth", "Self Development"];

  return (
    <div className="overflow-hidden">
      <div className="text-[30px] font-mono font-semibold mb-5 ml-10 text-center sm:text-left">
        All Books
      </div>
      <Carousel allBooks={allBooks} />
    </div>
  );
};

export default Book;
