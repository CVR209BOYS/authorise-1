const express = require("express");
const mongoose = require("mongoose");
const bookModel = require("../models/book");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const uploadBooks = async (req, res) => {
  //console.log("ohmymy");
  const newBook = new bookModel(req.body);
  await newBook
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ status: 403 });
    });
  //console.log("book added");
};

const getBookbyid = async (req, res) => {
  console.log(req.body._id);
  let book = await bookModel
    .findById(req.body._id)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("opps!");
    });
  res.send(book);
};

const getBooks = async (req, res) => {
  let books = await bookModel.find();
  res.send(books);
};

// module.exports = getBooks;
module.exports = { uploadBooks, getBooks, getBookbyid };
