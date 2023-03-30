import React, { useEffect, useState } from "react";
import CloudinaryUploadWidget from "./Cloud";

function BecomeAWriter(props) {
  const bookTags = ["funny", "historical", "adventure", "manga", "webdev"];

  const [formData, setFormData] = useState({
    yourDescription: "",
    title: "",
    bookDescription: "",
    coverpage: "",
    Tags: [],
    url: "",
  });

  const [selectedBookTags, setSelectedBookTags] = useState([]);

  const onClickHandler = (item) => {
    console.log(item);
    if (selectedBookTags.find((i) => i === item) === undefined) {
      setSelectedBookTags([...selectedBookTags, item]);
    }
  };

  useEffect(() => {
    const data = formData;
    setFormData({ ...data, Tags: selectedBookTags });
    console.log(data);
  }, [selectedBookTags]);

  return (
    <div className="pt-[70px]">
      <label htmlFor="yourDescription">Your Description</label>
      <input
        type="textarea"
        maxLength="400"
        className="border-black border-2"
        onChange={(e) => {
          setFormData({ ...formData, yourDescription: e.target.value });
        }}
      />
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        className="border-black border-2"
        onChange={(e) => {
          setFormData({ ...formData, title: e.target.value });
        }}
      />
      <label htmlFor="bookDescription">Book Description</label>
      <input
        id="bookDescription"
        name="bookDescription"
        type="textarea"
        maxLength="400"
        className="border-black border-2"
        onChange={(e) => {
          setFormData({ ...formData, bookDescription: e.target.value });
        }}
      />
      <label htmlFor="title" />
      <label htmlFor="coverpage">Cover Page</label>
      <input id="coverpage" type="file" name="coverpage" />
      <label htmlFor="bookTags">Categories</label>
      <div className="border-2 w-fit">
        {bookTags.map((item, index) => {
          return (
            <div key={index} onClick={() => onClickHandler(item)}>
              {item}
            </div>
          );
        })}
      </div>
      <CloudinaryUploadWidget></CloudinaryUploadWidget>
    </div>
  );
}

export default BecomeAWriter;
