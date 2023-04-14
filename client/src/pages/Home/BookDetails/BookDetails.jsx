import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import BookReviews from "../BookDetails/BookReviews";
import { useLocation } from "react-router-dom";

function BookDetails({ state }) {
  const location = useLocation();
  const book = location.state.book;
  const ref = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // console.log(book);
  const [coverSectionLift, setCoverSectionLift] = useState(
    window.innerWidth >= 768 ? -50 : -50
  );

  const [detailsSectionLift, setDetailsSectionLift] = useState(
    window.innerWidth >= 768 ? 10 : -40
  );

  useEffect(() => {
    const handleResize = () => {
      setCoverSectionLift(window.innerWidth >= 768 ? -50 : -50);
      setDetailsSectionLift(window.innerWidth >= 768 ? 10 : -40);
    };
    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  //   const [widthVar, setWidthVar] = useState();
  //   useEffect(() => {
  //     setWidthVar(ref.current ? ref.current.offsetWidth : 0);
  //   }, [ref]);

  return (
    <div className="h-[100vh]">
      <div className="h-[20%] bg-blue-800 overflow-hidden"></div>
      <div className="grid grid-cols-12 mx-4 gap-4 mb-2 md:mb-10">
        <motion.div
          ref={ref}
          className="col-span-12 md:col-span-5 lg:text-[25px] md:text-[22px] sm:text-[18px]"
          initial={() => ({ y: coverSectionLift })}
        >
          <div className="rounded-md mx-auto mb-5 shadow-md px-2 py-2 bg-white max-w-xs lg:max-w-md">
            {!imageLoaded && <div>Loading...</div>}
            <img
              className="rounded-md z-50"
              src={book.coverpageurl}
              alt="not available"
              onLoad={handleImageLoad}
              style={{
                display: imageLoaded ? "block" : "none",
                objectFit: "contain ",
              }}
            />
          </div>
          {/* action buttons include "read now", "publish it" and "bookmark it" */}
          {/* action buttons for large screens */}
          <div className="grid-rows-3 gap-2 mx-auto   max-w-xs lg:max-w-md hidden md:grid">
            <div className="row-span-1">
              <button className="w-full py-2  rounded-md shadow-md bg-blue-800 text-white hover:bg-blue-700 duration-150">
                Read Now
              </button>
            </div>
            <div className="row-span-1">
              <button className="w-full py-2 rounded-md shadow-md border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white duration-150">
                Add To Bookmarks
              </button>
            </div>
            <div className="row-span-1">
              <button className="w-full py-2 rounded-md shadow-md border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white duration-150">
                Publish It!!
              </button>
            </div>
          </div>
          {/* action buttons for small screens */}
          <div className="grid md:hidden grid-cols-3 gap-4 w-fit mx-auto">
            <div className="w-[50px] text-white flex align-middle justify-center pt-2 text-[20px] aspect-square rounded-full bg-blue-700 z-10 shadow-md shadow-blue-700">
              R
            </div>
            <div className="w-[50px] text-white flex align-middle justify-center pt-2 text-[20px] aspect-square rounded-full bg-blue-700 z-10 shadow-md shadow-blue-700">
              C
            </div>
            <div className="w-[50px] text-white flex align-middle justify-center pt-2 text-[20px] aspect-square rounded-full bg-blue-700 z-10 shadow-md shadow-blue-700">
              B
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={() => ({ y: detailsSectionLift })}
          className="col-span-12 md:col-span-7 md:mt-8 md:mr-20 mx-5"
        >
          <div className="flex justify-start mb-4">
            {book.tags.map((item, index) => (
              <div
                key={index}
                className="py-1 px-2 mx-1 text-blue-800 text-[16px] bg-blue-200  rounded-md font-semibold shadow-md"
              >
                {item.value}
              </div>
            ))}
          </div>
          <div className="font-serif text-left text-[24px] md:text-[40px] font-bold mb-2">
            {book.title.toUpperCase()}
          </div>
          <div className="font-mono text-[20px] text-left mb-2 h-fit break-all">
            {book.description}
          </div>
          <hr className="my-8"></hr>
          <div className="text-left">
            <div className="font-serif font-semibold text-[28px]">
              Information
            </div>
            <div className="ml-3 text-[22px] font-mono leading-loose">
              <div>
                <span className="text-gray-500 mr-1">Author:</span>
                me
              </div>
              <div>
                <span className="text-gray-500 mr-1">Rating:</span>
                {book.rating} / 5
              </div>
              <div>
                <span className="text-gray-500 mr-1">Publisher:</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <hr className="w-[98%] mx-auto mb-8 border-gray-400" />
      {/* reviews section generated based on a query */}
      <BookReviews bookId={book._id ? book._id : null} />
      <hr className="w-[98%] mx-auto mb-8 border-gray-400" />
      <div>
        {/* <WriterCard
          authors={authors}
          authorPic={coverPageUrl}
          authorDescription={authorDescription}
        /> */}
      </div>
      balhhh
    </div>
  );
}

export default BookDetails;
