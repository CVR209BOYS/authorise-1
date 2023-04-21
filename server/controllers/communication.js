const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const reviewModel = require("../models/review");
const bookModel = require("../models/book");
const pubModel = require("../models/Publication");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { where } = require("../models/Publication");

const contact = async (req, res) => {
  const mail = req.body.email;
  await UserModel.find({
    email: mail,
  })
    .then((data) => {
      console.log(data);
      const { password, ...userInfo } = data;
      res.status(200).json(userInfo);
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({ message: "error ocuured" });
    });
};

const getAllPub = async (req, res) => {
  await pubModel
    .find()
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({ message: "error ocuured" });
    });
};

module.exports = { contact, getAllPub };
