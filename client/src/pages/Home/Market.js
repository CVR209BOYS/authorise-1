import Sidebar from "../Common/Sidebar";
import data from "../Utils/book.json";
import BookCard from "../Utils/BookCard";
import { useState } from "react";

function Market() {
  const coverPageUrl =
    "https://firebasestorage.googleapis.com/v0/b/authorise-f26ef.appspot.com/o/images%2Fservice3.png?alt=media&token=49b6377a-4580-40c9-98fb-32eefb8ad174";
  const title = "the subtle art of not giving a fuck!";
  const stars = "4.7";
  const authors = ["Mark Manson"];
  const genres = ["Self Growth", "Self Development"];

  const [bok1, setbok1] = useState(false);
  const [bok2, setbok2] = useState(false);
  const [bok3, setbok3] = useState(true);

  return (
    <div>
      <div className="flex justify-between scroll-none">
        <Sidebar open={[setbok1, setbok2, setbok3]} />
        <div className="w-[80%]  h-fit bg-white  ">
          <div className=" text-black">
            <div className="flex-wrap">
              <BookCard
                coverPageUrl={coverPageUrl}
                genres={genres}
                authors={authors}
                stars={stars}
                title={title}
                open={[setbok1, setbok2, setbok3]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
