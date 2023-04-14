import { useRef } from "react";
import { motion } from "framer-motion";
import BookReviews from "../BookDetails/BookReviews";
import { useLocation } from "react-router-dom";

function BookDetails({ state }) {
  const location = useLocation();
  const bookData = location.state;
  const ref = useRef(null);
  //   const [widthVar, setWidthVar] = useState();
  //   useEffect(() => {
  //     setWidthVar(ref.current ? ref.current.offsetWidth : 0);
  //   }, [ref]);

  return (
    <div className="h-[100vh]">
      <div className="h-[15%] bg-blue-800 overflow-hidden"></div>
      <div className="grid grid-cols-12 gap-4 mb-2 md:mb-10">
        <motion.div
          ref={ref}
          className="col-span-12 md:col-span-5 lg:text-[25px] md:text-[22px] sm:text-[18px]"
          initial={{ y: -50 }}
        >
          <div className="rounded-md mx-auto mb-5 shadow-md px-2 py-2 bg-white max-w-xs lg:max-w-md">
            <img
              className="rounded-md z-50"
              src={bookData.coverPageUrl}
              alt="not available"
              style={{ objectFit: "contain " }}
            />
          </div>
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
          <motion.div
            initial={{ y: -40 }}
            className="grid md:hidden grid-cols-3 gap-4 w-fit mx-auto"
          >
            <div className="w-[50px] text-white flex align-middle justify-center pt-2 text-[20px] aspect-square rounded-full bg-blue-700 z-10 shadow-md shadow-blue-700">
              R
            </div>
            <div className="w-[50px] text-white flex align-middle justify-center pt-2 text-[20px] aspect-square rounded-full bg-blue-700 z-10 shadow-md shadow-blue-700">
              C
            </div>
            <div className="w-[50px] text-white flex align-middle justify-center pt-2 text-[20px] aspect-square rounded-full bg-blue-700 z-10 shadow-md shadow-blue-700">
              B
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: `screen.width>="768px" ? 500 : -100` }}
          className="col-span-12 md:col-span-7 md:mt-8 md:mr-20 mx-5"
        >
          <div className="flex justify-start mb-4">
            {bookData.tags.map((item, index) => (
              <div
                key={index}
                className="py-1 px-2 mx-1 text-blue-800 text-[16px] bg-blue-200  rounded-md font-semibold shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="font-serif text-left text-[24px] md:text-[40px] font-bold mb-2">
            {bookData.title.toUpperCase()}
          </div>
          <div className="font-mono text-[20px] text-left mb-2">
            {bookData.description}
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
                {bookData.rating} / 5
              </div>
              <div>
                <span className="text-gray-500 mr-1">Publisher:</span>
              </div>
              <div>
                <span className="text-gray-500 mr-1">First Published On:</span>
                September 13, 2016
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <hr className="w-[98%] mx-auto mb-8 border-gray-400" />
      {/* <BookReviews bookId={bookId} /> */}
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
