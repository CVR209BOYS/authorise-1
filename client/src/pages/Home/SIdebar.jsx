import React from "react";

export default function Sidebar({ setOpen, open }) {
  return (
    <div
      id="sidebar"
      className={`${
        open ? "w-[240px]" : "w-[64px]"
      } flex gap-4 border-2 border-amber-600 h-screen fixed overflow-hidden mx-0 my-[50px] sm:my-[70px]`}
    >
      <div className="bg-amber-600 duration-500 px-2 text-white w-full">
        <div className=" flex justify-end">
          <div
            className="cursor-pointer p-5 text-xl "
            onClick={(e) => {
              setOpen(!open);
            }}
          >
            x
          </div>
        </div>
        <div className={`text-[24px] font-semibold mx-2 ${!open && "hidden"}`}>
          Table Of Contents
        </div>
        <div className="mt-1 flex flex-col relative ">
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-amber-700 text-left rounded-md">
            <div className="px-2 py-2">ic</div>
            <div
              className={`whitespace-pre duration-500 ${!open && "opacity-0"}`}
            >
              -------fjsafjasa-----
            </div>
          </div>
        </div>
        <div className="mt-1 flex flex-col relative ">
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-amber-700 text-left rounded-md">
            <div className="px-2 py-2">ic</div>
            <div
              className={`whitespace-pre duration-500 ${!open && "opacity-0 "}`}
            >
              -------fjsafjasa-----
            </div>
          </div>
        </div>
        <div className="mt-1 flex flex-col relative ">
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-amber-700 text-left rounded-md">
            <div className="px-2 py-2">ic</div>
            <div
              className={`whitespace-pre duration-500 ${!open && "opacity-0"}`}
            >
              -------fjsafjasa-----
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
