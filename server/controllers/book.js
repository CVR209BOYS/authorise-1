const express = require("express");
const mongoose = require("mongoose");
const bookModel = require("../models/book");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const uploadBooks = async (req, res) => {
  console.log("ohmymy");
  // const newBook = new bookModel(req.body);
  // await newBook.save();
  console.log("book added");
};

const getBooks = async (req, res) => {
  let books = await bookModel.find();
  res.send(books);
};

<<<<<<< HEAD
(module.exports = uploadBooks), getBooks;
// module.exports = getBooks;
=======


// module.exports = getBooks;
module.exports = { uploadBooks, getBooks };



>>>>>>> bf9ed54dc3b1de6cef3d5f687b56ab9c3f8f6942
