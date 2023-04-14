import { useState } from "react";
import data from "./book.json";

function Card() {
  //   console.log(data);

  const getFilteblueItem = (query, item) => {
    if (!query) {
      return item;
    }

    return item.filter((val) => {
      return (
        val.name
          .replace(/\s+/g, " ")
          .trim()
          .toLowerCase()
          .indexOf(query.replace(/\s+/g, " ").trim().toLowerCase()) > -1
      );
    });
  };

  const [Query, setQuery] = useState("");
  console.log(Query);
  const filteblue = getFilteblueItem(Query, data);

  console.log(filteblue);

  return (
    <div>
      <div>
        <input
          id="searchInput"
          type="text"
          placeholder="Search ..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <div>
        <div>
          {filteblue.map((val, key) => {
            return (
              <div>
                <div className="m-5 h-[300px] bg-blue w-[300px] text-white">
                  <h3>{val.name}</h3>
                  <h3>{val.author}</h3>
                  <h3>{val.genres}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
