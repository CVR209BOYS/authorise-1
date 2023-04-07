import { useLocation } from "react-router-dom";

function MarketWorkSpace({ open }) {
  const { state } = useLocation();
  console.log(state);
  return (
    <div
      className={`${open ? "w-[calc(100%-240px)]" : "w-[calc(100%-64px)]"} ${
        open ? "ml-[240px]" : "ml-[64px]"
      } pt-[50px] sm:pt-[70px]`}
    >
      hello
    </div>
  );
}

export default MarketWorkSpace;
