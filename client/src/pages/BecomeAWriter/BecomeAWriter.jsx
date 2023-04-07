import React, { useEffect, useState } from "react";
import CloudinaryUploadWidget from "./Cloud";
import axios from "axios";

function BecomeAWriter(props) {
  const bookTags = ["funny", "historical", "adventure", "manga", "webdev"];

  const [selectedTags, setSelectedTags] = useState([]);
  const [coverpageurl, setCoverpageurl] = useState();
  const [bookurl, setBookurl] = useState();

  const [formData, setFormData] = useState({
    description: "",
    authorObjId: "",
    title: "",
    publicationId: "",
  });

  const submitHandler = async () => {
    console.log(coverpageurl + "      " + bookurl);
    const data = {
      coverpageurl: coverpageurl,
      description: formData.description,
      bookurl: bookurl,
      authorObjId: formData.authorObjId,
      title: formData.title,
      tags: selectedTags,
      publicationId: formData.publicationId,
    };
    axios.post("http://localhost:3001/bookupl/upload", data);
    // await axios({
    //   method: "post",
    //   url: "http://localhost:3001/bookupl/upload",
    //   body: formData,
    // });
  };

  // console.log(selectedTags);
  // useEffect(() => {
  //   console.log(bookurl);
  //   console.log(coverpageurl);
  // }, [bookurl, coverpageurl]);

  return (
    <div className="pt-[100px]  w-[90%] mx-auto ">
      {/* <label htmlFor="yourDescription">Your Description</label>
      <textarea
        rows="5"
        cols="50"
        maxLength="400"
        className="border-black border-2"
        onChange={(e) => {
          setFormData({ ...formData, yourDescription: e.target.value });
        }}
      />
      <br /> */}
      {/* blah */}
      <div className="rounded-xl w-fit mx-auto text-center p-5 bg-[#ededed]">
        <div className="flex flex-col">
          <label htmlFor="TitleTags" className="font-bold mr-5">
            Title
          </label>
          <label htmlFor="title" />
          <input
            type="text"
            className="border-black border-2"
            name="title"
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
        </div>
        <br />
        <div className="flex flex-col">
          <label htmlFor="bookDescription" className="font-bold ">
            Book Description
          </label>
          <textarea
            rows="5"
            cols="50"
            id="bookDescription"
            name="bookDescription"
            maxLength="400"
            className="border-black border-2"
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
        </div>
        <br />

        <label htmlFor="bookTags" className="font-bold ">
          Categories
        </label>
        <div className="w-fit mx-auto">
          {bookTags.map((item, index) => {
            // console.log(JSON.stringify(item));
            return (
              <div key={index} className="text-left">
                <input
                  name={item}
                  type="checkbox"
                  value={item}
                  onClick={() => {
                    setSelectedTags([...selectedTags, item]);
                  }}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
        </div>
        <br />

        <div className=" flex justify-between">
          <div>
            <label htmlFor="coverpage" className="font-bold ">
              Cover Page{" "}
            </label>
            <CloudinaryUploadWidget
              value={1}
              setUrl={setCoverpageurl}
              url={coverpageurl}
            ></CloudinaryUploadWidget>
          </div>
          <div className="font-bold ">
            <label htmlFor="coverpage" className="font-bold ">
              Book Upload{" "}
            </label>
            <CloudinaryUploadWidget
              value={2}
              setUrl={setBookurl}
              url={bookurl}
            ></CloudinaryUploadWidget>
          </div>
        </div>
        <br />
        <div
          className="font-bold sm:text-[20px]cursor-pointer w-fit mx-auto p-1 rounded-md bg-amber-400 text-amber-900 text-[15px]  hover:text-white hover:bg-amber-700  md:text-base lg:text-lg"
          onClick={submitHandler}
        >
          Submit
        </div>
      </div>
    </div>
  );
}

export default BecomeAWriter;
