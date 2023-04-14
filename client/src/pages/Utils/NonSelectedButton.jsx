import React from "react";

export default function SelectedButton({ val }) {
  return (
    <div className="bg-blue-400 text-blue-800 hover:bg-blue-700 hover:text-blue-50 rounded-md mx-1 my-1 py-2 px-2 w-fit duration-150 text-sm">
      {val}
    </div>
  );
}

{
  /* <div className="bg-blue-400 hover:bg-blue-200 text-blue-900 hover:text-blue-50 rounded-md mx-1 my-1 py-2 px-2 w-fit duration-150 text-sm ">
    {val}
  </div> */
}
