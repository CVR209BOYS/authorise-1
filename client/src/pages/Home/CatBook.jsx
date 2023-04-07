import { useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useState } from "react";
import CatBookWorkSpace from "./CatBookWorkSpace";

export default function CatBook() {
  const { state } = useLocation();
  console.log(state);

  console.log();

  const [open, setOpen] = useState(true);

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <CatBookWorkSpace open={open} />
    </div>
  );
}
