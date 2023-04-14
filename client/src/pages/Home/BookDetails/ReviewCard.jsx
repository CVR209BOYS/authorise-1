import React, { useState } from "react";
import { motion } from "framer-motion";

function ReviewCard({
  reviewerName,
  review_text,
  rating,
  total_reads,
  review_date,
}) {
  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    } else {
      return string;
    }
  }
  const untrtext = review_text;
  const trtext = truncateString(review_text, 100);
  const [review, setReview] = useState(trtext);

  return (
    <div
      className="py-4 grid grid-cols-12 gap-1  min-h-[200px]
    border-t-2"
    >
      <div className="col-span-full md:col-span-6 lg:col-span-5 ">
        <div className="grid grid-cols-7 gap-2 h-full">
          <div className="col-span-1 md:col-span-2 flex justify-center ">
            <div className="w-[45px] md:w-[80px] h-[45px] md:h-[80px] rounded-md bg-blue-200">
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div className="text-left font-semibold col-span-6 md:col-span-5 text-[16px] md:text-[25px]">
            {reviewerName}
            <div>
              <span className="font-semibold text-[13px] md:text-[16px] font-mono">
                Total Reads:
              </span>
              <span className="font-semibold text-[15px] md:text-[18px] font-mono"></span>
              {total_reads}
            </div>
          </div>
        </div>
      </div>
      <div className="text-[19px] leading-8 font-serif  pl-4 md:pl-8 col-span-full md:col-span-6 lg:col-span-7">
        <span className="text-[16px] text-gray-600 mb-3">{review_date}</span>
        <div>{review}</div>
        <button
          onClick={() =>
            setReview((review) => {
              return review === untrtext ? trtext : untrtext;
            })
          }
        >
          {review === trtext ? (
            <span className="bg-blue-100 rounded-md px-3 py-1 my-2 text-blue-500 font-semibold hover:bg-blue-600 hover:text-blue-100 duration-150">
              Read More
            </span>
          ) : (
            <span className="bg-blue-100 rounded-md px-3 py-1 my-2 text-blue-500 font-semibold hover:bg-blue-600 hover:text-blue-100 duration-150">
              Read Less
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default ReviewCard;
