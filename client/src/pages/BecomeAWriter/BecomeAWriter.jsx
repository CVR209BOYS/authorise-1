import React, { useState, useContext, useEffect } from "react";
import CloudinaryUploadWidget from "./Cloud";
import axios from "axios";
import Select from "react-select";
import bg2 from "../../images/bg2.png";
import { ReactSession } from "react-client-session";
import { MenuContext } from "../../MenuContext";
import { useNavigate } from "react-router-dom";
ReactSession.setStoreType("localStorage");

const BecomeAWriter = (props) => {
  const { setAllBooks, allBooks } = useContext(MenuContext);
  const navigate = useNavigate();
  const authorObjid = ReactSession.get("user").email;
  console.log(authorObjid);

  const [selectedTags, setSelectedTags] = useState([]);
  const [coverpageurl, setCoverpageurl] = useState(null);
  const [bookurl, setBookurl] = useState(null);

  const { categoryList } = useContext(MenuContext);

  const [formData, setFormData] = useState({
    description: "",
    title: "",
    publicationId: "",
    authorObjid: authorObjid,
  });

  const submitHandler = async () => {
    // console.log(coverpageurl + "      " + bookurl);
    const data = {
      coverpageurl: coverpageurl,
      description: formData.description,
      bookurl: bookurl,
      authorObjid: formData.authorObjid,
      title: formData.title,
      tags: selectedTags,
      publicationId: formData.publicationId,
    };
    const book = await axios
      .post("http://localhost:3001/bookupl/upload", data)
      .then(async (response) => {
        setFormData({
          description: "",
          authorObjId: "",
          title: "",
          publicationId: "",
        });
        setSelectedTags([]);
        setCoverpageurl(null);
        setBookurl(null);
        await setAllBooks([...allBooks, response.data]);
        console.log(response.data);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(allBooks);
  }, [allBooks]);

  return (
    <div className="pt-[100px]  w-[90%] mx-auto ">
      <div className=" w-[70%] bg-green-400 text-green rounded-lg text-center p-5 mx-auto mt-1 flex">
        <div
          className="w-[40%] mr-9 bg-black bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg2})`,
          }}
        ></div>
        <div className="w-[80%]">
          <div className="flex justify-between">
            <label
              htmlFor="TitleTags"
              className="font-bold text-left flex justify-between text-[15px] w-[50%] md:text-md lg:text-xl m-2 "
            >
              Title
            </label>
            <label htmlFor="title" />
            <input
              type="text"
              className=" w-[50%] m-2 bg-[#ffffff]"
              name="title"
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
            />
          </div>
          <br />
          <div className="flex justify-between">
            <label
              htmlFor="bookDescription"
              className="font-bold text-left flex justify-between text-[15px] w-[50%] md:text-md lg:text-xl m-2 "
            >
              Book Description
            </label>
            <textarea
              rows="5"
              cols="50"
              id="bookDescription"
              name="bookDescription"
              maxLength="400"
              className=" w-[50%] m-2 bg-[#ffffff]"
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
            />
          </div>
          <br />

          <div className="w-[100%] mx-auto flex">
            <label
              htmlFor="bookTags"
              className="font-bold text-left flex justify-between text-[15px] w-[50%] md:text-md lg:text-xl m-2 "
            >
              Categories
            </label>
            <div className="w-[50%] flex">
              <Select
                className=" w-[100%] m-2 bg-[#ffffff]"
                value={selectedTags}
                onChange={setSelectedTags}
                options={categoryList}
              />
            </div>
          </div>
          <br />

          <div className=" flex justify-center flex-col bg-[#ffffff] p-1 mt-10 rounded-md">
            <div className="m-2">
              <label
                htmlFor="coverpage"
                className="font-bold  text-[15px] w-[50%] md:text-md lg:text-xl m-2 "
              >
                Cover Page{" "}
              </label>
              <CloudinaryUploadWidget
                value={1}
                setUrl={setCoverpageurl}
                url={coverpageurl}
              ></CloudinaryUploadWidget>
            </div>
            <div className="font-bold m-2">
              <label
                htmlFor="coverpage"
                className="font-bold  text-[15px] w-[50%] md:text-md lg:text-xl m-2 "
              >
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
            className="w-[200px] mx-auto p-1 mt-3 font-bold text-white rounded-md hover:bg-green-100 hover:text-black text-green mb-4 text-[15px]   bg-green-700  md:text-base lg:text-lg"
            onClick={submitHandler}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAWriter;

