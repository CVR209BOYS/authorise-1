import React from "react";

export default function CatButton({ value }) {
  return (
    <div className="bg-amber-200 hover:bg-amber-400 text-amber-700 hover:text-amber-50 rounded-md mx-1 my-1 py-2 px-2 w-fit duration-150">
      {value}
    </div>
  );
}
