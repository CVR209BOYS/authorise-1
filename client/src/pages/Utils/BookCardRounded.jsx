import React from "react";
import auth from "../../images/auth.jpg";

const BookCardRounded = ({ data }) => {
  return (
    <div className="">
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-1 my-1 px-3 py-2 grid grid-flow-row gap-[2px] grid-rows-12 shadow-xl bg-white hover:bg-slate-50 hover:shadow-md border-gray-300 hover:border-gray-400 border-[1px] duration-200">
        <div className="row-span-11 " style={{}}>
          <img
            src={auth}
            // alt="No CoverPage Available"
            className="w-[250px] h-[100px] rounded-full"
            style={{ backgroundSize: "cover"}}
          />
        </div>
      </div>
      <div className="row-span-1 grid grid-rows-2">
        <div className="row-span-1 grid grid-cols-2  pt-3 ml-9">
          <div className="grid grid-rows-3 col-span-1 text-[14px]">
            <div className="row-span-2 text-[18px]">{data.author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardRounded;
