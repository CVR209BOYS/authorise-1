const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const reviewModel = require("../models/review");
const bookModel = require("../models/book");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { where } = require("../models/Publication");

const createReview = async (req, res) => {
  console.log(req.body);
  const reviews = req.body;
  let review = {};
  const Userdata = await UserModel.find({
    email: req.body.reviewData.email,
  })
    .then((data) => {
      if (data.length === 0) {
        console.log("invalid email");
        res.send({
          status: 403,
          message: "invalid email",
        });
      } else {
        review = {
          bookid: req.body.reviewData.bookid,
          email: req.body.reviewData.email,
          picid: req.body.reviewData.picid,
          rating: Number(req.body.reviewData.rating),
          review: req.body.reviewData.review,
          username: req.body.reviewData.username,
        };
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
  //console.log(review);
  const newReview = new reviewModel(review);
  await newReview.save();

  const bookupdate = await bookModel
    .findOneAndUpdate(
      { _id: req.body.reviewData.bookid },
      {
        nopeople: req.body.nopeople + 1,
        rating:
          req.body.nopeople === 0
            ? Number(req.body.reviewData.rating)
            : (req.body.bookrating * req.body.nopeople +
                Number(req.body.reviewData.rating)) /
              (req.body.nopeople + 1),
      },
      { new: true }
    )
    .then((data) => {
      console.log(data);
    });
  const updatedReviews = await reviewModel.find({ bookid: req.body.bookid });
  console.log(updatedReviews);
  res.send(updatedReviews);
};

const getReview = async (req, res) => {
  let book = {};
  const bookreview = await reviewModel
    .find({
      bookid: req.body.bookid,
    })
    .then((data) => {
      res.send({
        status: 200,
        bookreview: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = { createReview, getReview };
