import { useState } from "react";
import SIdebar from "./SIdebar";
import Footer from "../Common/Footer";
import WorkSpace from "./WorkSpace";

function Landing() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <SIdebar open={open} setOpen={setOpen} />
      <WorkSpace open={open} />
      <Footer />
    </div>
  );
}

export default Landing;
