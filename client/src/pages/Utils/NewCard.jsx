import React from "react";

const BookCard = ({book}) => {
  return (
    <div className="w-[300px] h-[450px] rounded-md mx-1 my-1 px-3 py-2 grid grid-flow-row gap-[2px] grid-rows-12 shadow-md bg-white hover:bg-slate-50 hover:shadow-sm border-gray-300 hover:border-gray-400 border-[1px] duration-200">
      <div className="row-span-11 h-[260px]">
        <img
          src={book.coverpageurl}
          alt="No CoverPage Available"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="row-span-1 grid grid-rows-2">
        <div className="row-span-1 text-[20px]">{book.title.toUpperCase()}</div>
        <div className="row-span-1 grid grid-cols-2 border-t-2 pt-3">
          <div className="grid grid-rows-3 col-span-1 text-[14px] text-left">
            <span className="text-gray-400 row-span-1">Authors</span>
            <div className="row-span-2 text-[18px]">me</div>
          </div>
          <div className="grid grid-rows-3 col-span-1 text-[14px] text-right">
            <div className="text-gray-400 row-span-1">Rating</div>
            <div className="row-span-2 text-[18px]">{book.rating} / 5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
