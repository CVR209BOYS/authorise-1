const express = require("express");
const mongoose = require("mongoose");
const bookModel = require("../models/book");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const uploadBooks = async (req, res) => {
  console.log(req);
  const newBook = new bookModel(req.body);
  await newBook.save();
  console.log("book added");
};

const getBooks = async (req, res) => {
  let books = await bookModel.find();
  res.send(books);
};



// module.exports = getBooks;
module.exports = { uploadBooks, getBooks };



