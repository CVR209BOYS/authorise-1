import { useLocation } from "react-router-dom";
import Filters from "./Filters";
import { useState } from "react";
import BookGrid from "../Utils/BookGrid";

function MarketWorkSpace({ open }) {
  const { state } = useLocation();
  const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState([state]);
  const [ratingRange, setRatingRange] = useState(null);

  return (
    <div
      className={`${open ? "w-[calc(100%-240px)]" : "w-[calc(100%-64px)]"} ${
        open ? "ml-[240px]" : "ml-[64px]"
      } pt-[50px] sm:pt-[70px]`}
    >
      <Filters
        genres={genres}
        setGenres={setGenres}
        languages={languages}
        setLanguages={setLanguages}
        ratingRange={ratingRange}
        setRatingRange={setRatingRange}
      ></Filters>
      {/* <BookGrid
        genres={genres}
        languages={languages}
        ratingRange={ratingRange}
      ></BookGrid> */}
    </div>
  );
}

export default MarketWorkSpace;
