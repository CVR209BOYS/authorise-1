import Sidebar from "../Common/Sidebar";
import data from "../Utils/book.json";

import { useState } from "react";
import SIdebar from "./SIdebar";

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
    <div className="border-4">
      
      
      
    </div>
  );
}

export default Market;
