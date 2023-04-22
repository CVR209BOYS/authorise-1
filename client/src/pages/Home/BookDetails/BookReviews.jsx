import { useEffect, useState, useContext } from "react";
import ReviewCard from "./ReviewCard";
// dummy data import
import AddReview from "./AddReview";
import { MenuContext } from "../../../MenuContext";

function BookReviews({
  bookrating,
  nopeople,
  reviews,
  reviewFormData,
  setReviewFormData,
  openAddReview,
  addReviewFormOpen,
  setAddReviewFormOpen,
  handleRatingChange,
  handleReviewChange,
  handleReviewSubmit,
}) {
  return (
    <div className="mx-5 md:mx-20 text-left font-serif">
      <div className="font-bold text-[24px] md:text-[40px] mb-5">Reviews</div>
      <div className="grid grid-cols-2 gap-0 mb-5">
        <div className="col-span-1 border-r-2 border-r-gray-300 mx-6 py-3">
          <div className="font-medium text-[16px] md:text-[20px] ">
            Total Reviews
          </div>
          <div className="flex gap-5">
            <div className="font-semibold text-[30px] md:text-[45px] align-top">
              {nopeople}
            </div>
            <div className="w-fit rounded-full bg-red-100 px-2 py-1 text-[14px] font-light text-red-600 h-fit my-auto hidden md:block">
              BlockBuster!!
            </div>
          </div>
        </div>
        <div className="col-span-1 mx-6 py-3">
          <div className="font-medium text-[16px] md:text-[20px] ">
            Average Rating
          </div>
          <div className="flex gap-5">
            <div className="font-semibold text-[30px] md:text-[45px] align-top">
              {bookrating.toPrecision(2)}
            </div>
            <div className="w-fit rounded-full bg-red-100 px-2 py-1 text-[14px] font-light text-red-600 h-fit my-auto hidden md:block">
              starsstars
            </div>
          </div>
        </div>
        <div className="col-span-full py-3 mx-0 md:mx-6">
          <AddReview
            reviewFormData={reviewFormData}
            setReviewFormData={setReviewFormData}
            openAddReview={openAddReview}
            addReviewFormOpen={addReviewFormOpen}
            setAddReviewFormOpen={setAddReviewFormOpen}
            handleRatingChange={handleRatingChange}
            handleReviewChange={handleReviewChange}
            handleReviewSubmit={handleReviewSubmit}
          />
        </div>
      </div>
      <div className="max-h-[500px] overflow-scroll">
        {reviews.length !== 0 &&
          reviews.map((r, index) => {
            return (
              <ReviewCard
                key={index}
                index={index}
                reviewerName={r.username}
                rating={r.rating}
                review_text={r.review}
              />
            );
          })}
      </div>
    </div>
  );
}

export default BookReviews;
