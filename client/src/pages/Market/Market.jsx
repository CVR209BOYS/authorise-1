import Sidebar from "../Home/Sidebar";
import MarketWorkSpace from "./MarketWorkSpace";
import { MenuContext } from "../../MenuContext";
import { useContext } from "react";

function Market() {
  const { openSidebar, setOpenSidebar } = useContext(MenuContext);

  return (
    <div>
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <MarketWorkSpace open={openSidebar}></MarketWorkSpace>
    </div>
  );
}

export default Market;
