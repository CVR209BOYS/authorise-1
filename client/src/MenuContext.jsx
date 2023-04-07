import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(true);

  const Books = async () => {
    const res = await axios({
      method: "get",
      url: "http://localhost:3001/bookupl/get",
    });
    // console.log(res);
    setAllBooks([...res.data]);
  };

  // console.log(allBooks);

  useEffect(() => {
    Books();
  }, []);
  return (
    <MenuContext.Provider
      value={{ allBooks, setAllBooks, openSidebar, setOpenSidebar }}
    >
      {children}
    </MenuContext.Provider>
  );
};
