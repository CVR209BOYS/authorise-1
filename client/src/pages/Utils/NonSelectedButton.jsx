import React from "react";

export default function SelectedButton({ val }) {
  return (
    <div className="bg-red-400 text-red-800 hover:bg-red-700 hover:text-red-50 rounded-md mx-1 my-1 py-2 px-2 w-fit duration-150 text-sm">
      {val}
    </div>
  );
}

{
  /* <div className="bg-red-400 hover:bg-red-200 text-red-900 hover:text-red-50 rounded-md mx-1 my-1 py-2 px-2 w-fit duration-150 text-sm ">
    {val}
  </div> */
}
