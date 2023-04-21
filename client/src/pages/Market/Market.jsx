import Sidebar from "../Home/Sidebar";
import MarketWorkSpace from "./MarketWorkSpace";
import { MenuContext } from "../../MenuContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

function Market() {
  const data=useLocation()
  const { openSidebar, setOpenSidebar } = useContext(MenuContext);
  console.log(data)
  return (
    <div>
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <MarketWorkSpace open={openSidebar}></MarketWorkSpace>
    </div>
  );
}

export default Market;
