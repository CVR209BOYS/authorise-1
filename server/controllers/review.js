const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const reviewModel = require("../models/review");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { where } = require("../models/Publication");

const createReview = async (req, res) => {
  const reviews = req.body;
  let review = {};
  const Userdata = await UserModel.find({
    email: req.body.email,
  })
    .then((data) => {
      if (data.length == 0) {
        console.log("invalid email");
        res.send({
          status: 403,
          message: "invalid email",
        });
      } else {
        review = {
          bookid: req.body.bookid,
          email: req.body.email,
          picid: req.body.picid,
          ratings: req.body.ratings,
          review: req.body.review,
          username: req.body.username,
        };
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
  console.log(review);
  const newReview = new reviewModel(review);
  await newReview.save();
  console.log("user added");
};
const getReview = async (req, res) => {
  let book = {};
  const bookreview = await reviewModel
    .find({
      bookid: req.body.bookid,
    })
    .then((data) => {
      if (data.length == 0) {
        console.log("invalid email");
        res.send({
          status: 403,
          message: "invalid email",
        });
      } else {
        book = data;
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
  res.send({
    status: 200,
    bookreview: book,
  });
};

module.exports = { createReview, getReview };
