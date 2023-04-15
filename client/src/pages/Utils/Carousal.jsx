import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import NewCard from "../Utils/NewCard";
import { Link } from "react-router-dom";

const Carousel = ({ allBooks }) => {
  // console.log(allBooks);

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="w-[90%] h-[510px] carousel mx-auto my-auto">
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: 225 }}
          className="flex justify-between absolute top left w-full h-0 z-10"
        >
          <button
            onClick={movePrev}
            className="bg-red-500 hover:bg-red-600 text-white w-12 h-12 text-center opacity-85 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed z-50 p-0 m-0 transition-all ease-in-out duration-300 rounded-full"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 z-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="bg-red-500 hover:bg-red-600 text-white w-12 h-12 text-center opacity-85 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-50 p-0 m-0 transition-all ease-in-out duration-300 rounded-full"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 z-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </motion.div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 mx-auto w-[100%]"
        >
          {allBooks &&
            allBooks.map((book, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item text-center relative w-[300px] h-fit mx-3 my-4 rounded-md snap-start z-50"
                >
                  <Link
                    to={{
                      pathname: "/bookdetails",
                    }}
                    state={{ book }}
                  >
                    <NewCard book={book} />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
