import { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "../Common/Footer";
import WorkSpace from "./WorkSpace";

function Landing() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <WorkSpace open={open} />
      <Footer />
    </div>
  );
}

export default Landing;
