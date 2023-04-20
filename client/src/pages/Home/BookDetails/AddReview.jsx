import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactSession } from "react-client-session";
import axios from "axios";

function AddReview({ bookid, setReviews }) {
  const [addReviewForm, setAddReviewForm] = useState(false);
  const openAddReview = () => {
    setAddReviewForm(!addReviewForm);
  };
  console.log(bookid);
  const [reviewData, setReviewData] = useState({
    bookid: bookid,
    email: ReactSession.get("user").email,
    picid: ReactSession.get("user").picture,
    rating: "1",
    review: "",
    username: ReactSession.get("user").name,
  });

  const handleRatingChange = (e) => {
    setReviewData({ ...reviewData, rating: e.target.value });
  };

  const handleReviewChange = (e) => {
    setReviewData({ ...reviewData, review: e.target.value });
  };

  const handleReviewSubmit = async () => {
    const res = await axios({
      url: "http://localhost:3001/reviews/createreview",
      data: reviewData,
      method: "POST",
    })
      .then(async (review) => {
        await setReviews(review.data);
        setReviewData({
          bookid: bookid,
          email: ReactSession.get("user").email,
          picid: ReactSession.get("user").picture,
          rating: "1",
          review: "",
          username: ReactSession.get("user").name,
        });
        setAddReviewForm(false);
      })
      .catch((err) => {
        console.log("sorry");
      });
  };

  return (
    <div className="rounded-md border-2 px-[1px] py-[1px] my-2">
      <button
        onClick={openAddReview}
        className="rounded-md w-full h-[50px] bg-red-600 text-[25px] text-white font-semibold"
      >
        Add Review
      </button>
      {addReviewForm && (
        <div className="my-2">
          <div className="grid grid-cols-4 mx-3">
            <label
              htmlFor="rating"
              className="col-span-full md:col-span-2 lg:col-span-1 text-[25px]"
            >
              Rating:
            </label>
            <select
              onChange={handleRatingChange}
              className="col-span-full md:col-span-2 lg:col-span-3 border-2 border-gray-400 px-3 rounded-md text-[25px]"
              name="rating"
              value={reviewData.rating}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="grid grid-cols-4 mx-3">
            <label
              htmlFor="review"
              className="col-span-full md:col-span-2 lg:col-span-1 text-[20px] md:text-[25px]"
            >
              Description:
            </label>
            <textarea
              onChange={handleReviewChange}
              value={reviewData.review}
              className="col-span-full md:col-span-2 lg:col-span-3 border-2 border-gray-400 px-3 rounded-md text-[20px] md:text-[25px]"
              name="review"
              rows="5"
              cols="50"
              minLength="20"
            ></textarea>
            <div
              className="col-span-full rounded-md bg-red-600 h-10 text-white text-center text-[25px]"
              onClick={handleReviewSubmit}
            >
              Submit
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddReview;
