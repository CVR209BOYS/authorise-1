const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const reviewModel = require("../models/review");
const pubModel = require("../models/Publication");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { where } = require("../models/Publication");

const createPub = async (req, res) => {
  const user = req.body;

  const publisher = await pubModel
    .find({
      email: req.body.email,
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(publisher);
  if (publisher.length != 0) {
    res.send({ status: 403, message: " email exist" });
  }
  const publication = {
    description: req.body.description,
    password: req.body.password,
    email: req.body.email,
    companyName: req.body.companyName,
    employees: req.body.employees,
  };
  const newPub = new pubModel(publication);
  await newPub
    .save()
    .then(async (data) => {
      console.log(data);

      publication.employees.forEach(async (item, index) => {
        console.log(item);
        await UserModel.findOneAndUpdate(
          {
            email: `${item}`,
          },
          { pid: data._id },
          { new: true, upsert: true }
        );
      }),
        console.log("user added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPub = async (req, res) => {
  let pub = {};
  const bookreview = await pubModel
    .find({
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
        pub = data;
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
  res.send({
    status: 200,
    publisher: pub,
  });
};

module.exports = { createPub, getPub };
