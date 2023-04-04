import { useLocation, useParams } from "react-router-dom";

import SIdebar from "./SIdebar";
import { useState } from "react";
import CatBookWorkSpace from "./CatBookWorkSpace";


export default function CatBook() {
  const { state } = useLocation();
  console.log(state);

  console.log();

  const [open, setOpen] = useState(true);

  return (
    <div>
      <SIdebar open={open} setOpen={setOpen} />
      <CatBookWorkSpace open={open} />
    </div>
  );
}
