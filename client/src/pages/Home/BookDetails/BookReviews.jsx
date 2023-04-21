import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
// dummy data import
import data from "../BookDetails/reviews.json";
import axios from "axios";
import AddReview from "./AddReview";

function BookReviews({ bookid }) {
  const avgRating = (data) => {
    var total = 0;
    var count = 0;
    reviews.forEach((item, index) => {
      total += item.rating;
      count++;
    });
    return (total / count).toPrecision(3);
  };

  const [avg, setAvg] = useState(0);

  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const reviewsData = await axios({
      url: "http://localhost:3001/reviews/getreviews",
      method: "POST",
      data: { bookid: bookid },
    }).then((r) => {
      setReviews(r.data.bookreview);
    });
    // console.log(reviewsData);
  };
  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    // console.log(reviews);
    setAvg(avgRating(reviews));
  }, [reviews]);

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
              {reviews.length && reviews.length}
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
              {avg}
            </div>
            <div className="w-fit rounded-full bg-red-100 px-2 py-1 text-[14px] font-light text-red-600 h-fit my-auto hidden md:block">
              starsstars
            </div>
          </div>
        </div>
        <div className="col-span-full py-3 mx-0 md:mx-6">
          <AddReview bookid={bookid} setReviews={setReviews} />
        </div>
      </div>

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
  );
}

export default BookReviews;
