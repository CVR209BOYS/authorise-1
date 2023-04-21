import { Link, useLocation } from "react-router-dom";
import Filters from "./Filters";
import { useState, useContext, useEffect } from "react";
import BookGrid from "../Utils/BookGrid";
import { MenuContext } from "../../MenuContext";
import BookCardNew from "../Utils/BookCardNew";

function MarketWorkSpace({ open }) {
  const { allBooks } = useContext(MenuContext);
  const { state } = useLocation();
  
  
  // const [languages, setLanguages] = useState([]);
  const [genres, setGenres] = useState({value:state});
  const [ratingRange, setRatingRange] = useState(null);
  const [filtered, setFiltered] = useState([])

  console.log(allBooks);
  console.log(genres);

  const getFilteredItem =(query, item) => {
    // console.log(query);
    if (!query) {
      return item;
    }
    const item_filtered = item.filter((val) => {
      const bookcat = val.tags[0];
      
      if (bookcat) {
        const catname = bookcat.label;
        console.log(val.tags[0].label);
        console.log(catname);
        return catname.toLowerCase() === query.toLowerCase();
      }
    });
    console.log(query)
    console.log(item_filtered)
    return item_filtered
  };

  console.log(genres);

  // console.log(allBooks)
  

  // console.log(filtered);
  useEffect(()=>{
    setFiltered(getFilteredItem(genres.value, allBooks))
  }, [genres])
  // if(filtered.length===0){
  //   alert("no book available")
  // }
  const NoBook=filtered.length
  console.log(NoBook)

  return (
    <div
      className={`${open ? "w-[calc(100%-240px)]" : "w-[calc(100%-64px)]"} ${
        open ? "ml-[240px]" : "ml-[64px]"
      } pt-[50px] sm:pt-[70px]`}
    >
      <Filters
        genres={genres}
        setGenres={setGenres}
        // languages={languages}
        // setLanguages={setLanguages}
        ratingRange={ratingRange}
        setRatingRange={setRatingRange}
      ></Filters>
      {/* <BookGrid
        genres={genres}
        languages={languages}
        ratingRange={ratingRange}
      ></BookGrid> */}

      <h1>we found {`${NoBook}`} books from category {`${genres.value}`}</h1>
      <div className="flex flex-wrap  flex-row w-[90%]  m-auto h-[500px] mt-7">
        {filtered.map((val, key) => {
          return (
            <div>
              <Link
                to={{
                  pathname: "/",
                }}
              >
                <BookCardNew bookdetails={val} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarketWorkSpace;
