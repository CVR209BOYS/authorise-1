const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const uploadBooks = async (req, res) => {
  console.log(req.data);
  const newBook = new bookModel(req.data);
  await newBook.save();
  console.log("book added");
};

const getBooks = async (req, res) => {
  let books = await bookModel.find();
  res.send(books);
};
module.exports = uploadBooks;
