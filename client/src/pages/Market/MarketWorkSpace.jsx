import { useLocation } from "react-router-dom";
import Filters from "./Filters";
import { useState } from "react";

function MarketWorkSpace({ open }) {
  const [languages, setLanguages] = useState([]);
  const [categories, setCategories] = useState([]);
  const { state } = useLocation();
  console.log(state);
  return (
    <div
      className={`${open ? "w-[calc(100%-240px)]" : "w-[calc(100%-64px)]"} ${
        open ? "ml-[240px]" : "ml-[64px]"
      } pt-[50px] sm:pt-[70px]`}
    >
      <Filters></Filters>
    </div>
  );
}

export default MarketWorkSpace;
