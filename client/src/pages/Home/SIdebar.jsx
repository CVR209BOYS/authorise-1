import React from "react";

export default function SIdebar({ setOpen, open }) {
  return (
    <div id="sidebar" className={`${open ? 'w-[288px]' : 'w-[64px]'} flex gap-6 border-2 border-red-500 h-screen fixed overflow-hidden  mx-0`}>
      <div className="bg-[#948d7a] duration-500 px-4 text-white mt-6 w-full">
        <div className="py-3 flex justify-end">
          <div
            className="cursor-pointer p-5 text-xl "
            onClick={(e) => {
              setOpen(!open);
            }}
          >
            x
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative ">
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#977f3d]  rounded-md">
            <div>ic</div>
            <div
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-7 overflow-hidden"
              }`}
            >
              -------fjsafjasa-----
            </div>
          </div>
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#977f3d]  rounded-md">
            <div>ic</div>
            <div
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-7 overflow-hidden"
              }`}
            >
              -------fjsafjasa-----
            </div>
          </div>
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#977f3d]  rounded-md">
            <div>ic</div>
            <div
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-7 overflow-hidden"
              }`}
            >
              -------fjsafjasa-----
            </div>
          </div>
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#977f3d]  rounded-md">
            <div>ic</div>
            <div
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-7 overflow-hidden"
              }`}
            >
              -------fjsafjasa-----
            </div>
          </div>
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#977f3d]  rounded-md">
            <div>ic</div>
            <div
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-7 overflow-hidden"
              }`}
            >
              -------fjsafjasa-----
            </div>
          </div>
          <div className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#977f3d]  rounded-md">
            <div>ic</div>
            <div
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-7 overflow-hidden"
              }`}
            >
              -------fjsafjasa-----
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
