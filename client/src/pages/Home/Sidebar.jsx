import axios from "axios";
import React from "react";

export default function Sidebar({ setOpen, open, openPublicationList }) {
  return (
    <div
      id="sidebar"
      className={`${
        open ? "w-[250px]" : "w-[64px]"
      } flex gap-4 border-2 border-red-600 h-screen  fixed overflow-hidden mx-0 my-[50px] sm:my-[70px] `}
    >
      <div className="bg-red-600 duration-500 px-2 text-white w-full">
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
        {/* <div className={`text-[24px] font-semibold mx-2 ${!open && "hidden"}`}>
          Table Of Contents
        </div> */}
        <div className="mt-1 flex flex-col relative ">
          <a href="/BecomeAWriter ">
            <div className="flex items-center text-md gap-3.5 font-medium p-2 hover:bg-red-700 text-left rounded-md">
              <div className="px-2 py-2">*</div>
              <div
                className={`whitespace-pre duration-100 ${
                  !open && "opacity-0"
                }`}
              >
                Become A Writer
              </div>
            </div>
          </a>

          <button
            onClick={() => {
              openPublicationList(true);
            }}
          >
            <div className="flex items-center text-md gap-3.5 font-medium p-2 hover:bg-red-700 text-left rounded-md">
              <div className="px-2 py-2">*</div>
              <div
                className={`whitespace-pre duration-100 ${
                  !open && "opacity-0"
                }`}
              >
                Search Publication
              </div>
            </div>
          </button>
          <a href="/RegisterYourPublication ">
            <div className="flex items-center  text-md gap-3.5 font-medium p-2 hover:bg-red-700 text-left rounded-md">
              <div className="px-2 py-2">*</div>
              <div
                className={`whitespace-pre duration-100 ${
                  !open && "opacity-0"
                }`}
              >
                Register your Publication
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
