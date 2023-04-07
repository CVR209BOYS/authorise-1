import React from "react";
import ReviewCard from "./ReviewCard";
// dummy data import
import data from "../BookDetails/reviews.json";

function BookReviews({ bookId }) {
  const avgRating = (data) => {
    var total = 0;
    var count = 0;

    data.reviews.forEach((item, index) => {
      total += item.rating;
      count++;
    });
    return total / count;
  };
  
  return (
    <div className="mx-5 md:mx-20 text-left font-serif">
      <div className="font-bold text-[24px] md:text-[40px] mb-5">Reviews</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-0 mb-5">
        <div className="col-span-1 border-r-2 border-r-gray-300 mx-6 py-3">
          <div className="font-medium text-[16px] md:text-[20px] ">
            Total Reviews
          </div>
          <div className="flex gap-5">
            <div className="font-semibold text-[30px] md:text-[45px] align-top">
              {data.reviews.length}
            </div>
            <div className="w-fit rounded-full bg-amber-100 px-2 py-1 text-[14px] font-light text-amber-600 h-fit my-auto hidden md:block">
              BlockBuster!!
            </div>
          </div>
        </div>
        <div className="col-span-1 border-0 lg:border-r-2 lg:border-r-gray-300 mx-6 py-3">
          <div className="font-medium text-[16px] md:text-[20px] ">
            Average Rating
          </div>
          <div className="flex gap-5">
            <div className="font-semibold text-[30px] md:text-[45px] align-top">
              {avgRating(data).toFixed(1)}
            </div>
            <div className="w-fit rounded-full bg-amber-100 px-2 py-1 text-[14px] font-light text-amber-600 h-fit my-auto hidden md:block">
              starsstars
            </div>
          </div>
        </div>
        <div className="hidden lg:block col-span-1 py-3 mx-6">
          <div className="font-medium text-[20px] underline">Category Rank</div>
          <div className="flex">
            <div className="w-fit rounded-lg bg-amber-100 px-2 py-1 text-[14px] font-light text-amber-600 h-fit my-2 mx-1">
              Self Growth - 200
            </div>
            <div className="w-fit rounded-lg bg-amber-100 px-2 py-1 text-[14px] font-light text-amber-600 h-fit my-2 mx-1">
              Self Dev - 800
            </div>
          </div>
        </div>
      </div>

      {data.reviews.map((review, index) => {
        return (
          <ReviewCard
            key={index}
            index={index}
            reviewerName={review.reviewer_name}
            rating={review.rating}
            review_text={review.review_text}
            total_reads={review.total_reads}
            review_date={review.review_date}
          />
        );
      })}
    </div>
  );
}

export default BookReviews;
