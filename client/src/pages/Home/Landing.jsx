import { useContext } from "react";
import Sidebar from "./Sidebar";
import Footer from "../Common/Footer";
import WorkSpace from "./WorkSpace";
import { MenuContext } from "../../MenuContext";

function Landing() {
  const { openSidebar, setOpenSidebar } = useContext(MenuContext);

  return (
    <div>
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <WorkSpace open={openSidebar} />
      <Footer />
    </div>
  );
}

export default Landing;
