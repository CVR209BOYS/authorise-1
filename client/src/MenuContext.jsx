import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState();
  const [languageList, setLanguageList] = useState();

  const [allBooks, setAllBooks] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(true);

  const getAllBooks = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:3001/bookupl/getallbooks",
    });
    console.log(res);
    if (res.data === null) {
      setAllBooks([]);
    } else {
      setAllBooks([...res.data]);
    }
  };

  const Categories = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:3001/getcategories/get",
    });
    let cat = [];
    res.data.forEach((element) => {
      cat.push({ value: element["value"], label: element["label"] });
    });
    setCategoryList(cat);
  };

  const Languages = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:3001/getlanguages/get",
    });
    let cat = [];
    res.data.forEach((element) => {
      cat.push({ value: element["value"], label: element["label"] });
    });
    // console.log(cat);
    setLanguageList(cat);
  };

  useEffect(() => {
    getAllBooks();
  }, []);
  useEffect(() => {
    Categories();
  }, []);
  useEffect(() => {
    Languages();
  }, []);

  return (
    <MenuContext.Provider
      value={{
        allBooks,
        setAllBooks,
        openSidebar,
        setOpenSidebar,
        categoryList,
        setCategoryList,
        languageList,
        setLanguageList,
        getAllBooks,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
