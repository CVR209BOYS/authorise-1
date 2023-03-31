import React, { useEffect, useState } from "react";
import CloudinaryUploadWidget from "./Cloud";
import axios from "axios";

function BecomeAWriter(props) {
  const bookTags = ["funny", "historical", "adventure", "manga", "webdev"];

  const [selectedTags, setSelectedTags] = useState([]);

  const [formData, setFormData] = useState({
    coverpageurl: "",
    description: "",
    bookurl: "",
    authorObjId: "",
    title: "",
    tags: [],
    publicationId: "",
  });

  const submitHandler = async () => {
    console.log("hello");
    console.log(formData);
    axios.post("http://localhost:3001/bookupl/upload", formData);
    // await axios({
    //   method: "post",
    //   url: "http://localhost:3001/bookupl/upload",
    //   body: formData,
    // });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="pt-[70px]">
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
      <label htmlFor="coverpage">Cover Page</label>
      <CloudinaryUploadWidget
        value={1}
        setFormData={setFormData}
        formData={formData}
      ></CloudinaryUploadWidget>
      <br />
      <label htmlFor="bookDescription">Book Description</label>
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
      <br />
      <label htmlFor="title" />
      <input
        type="text"
        name="title"
        onChange={(e) => {
          setFormData({ ...formData, title: e.target.value });
        }}
      />
      <br />
      <br />
      <label htmlFor="bookTags">Categories</label>
      <div className="border-2 w-fit">
        {bookTags.map((item, index) => {
          // console.log(JSON.stringify(item));
          return (
            <div key={index}>
              <input
                name={item}
                type="checkbox"
                value={item}
                onClick={async () => {
                  await setSelectedTags([...selectedTags, item]);
                  setFormData({ ...formData, tags: selectedTags });
                }}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
      book upload
      <CloudinaryUploadWidget
        value={2}
        setFormData={setFormData}
        formData={formData}
      ></CloudinaryUploadWidget>
      <div className="border-2" onClick={submitHandler}>
        Submit
      </div>
    </div>
  );
}

export default BecomeAWriter;
