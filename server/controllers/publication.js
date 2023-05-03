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
  console.log(req.body);

  // let redUser=[];
  const publisher = await pubModel
    .find({
      email: req.body.email,
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(publisher);
  if (publisher.length != 0) {
    res.send({ status: 403, message: "email exist" });
  } else {
    const publication = {
      description: req.body.description,
      email: req.body.email,
      companyName: req.body.name,
      companyName: req.body.name,
      employees: req.body.employees,
    };
    const newPub = new pubModel(publication);
    await newPub
      .save()
      .then(async (data) => {
        console.log(data);
        if (publication.employees.length != 0) {
          await UserModel.findOneAndUpdate(
            {
              email: req.body.email,
              pid: "",
            },
            { pid: data._id },
            { upsert: true }
          );
          publication.employees.forEach(async (item, index) => {
            console.log(item);

            await UserModel.findOneAndUpdate(
              {
                email: item,
                pid: "",
              },
              { pid: data._id },
              { upsert: true }
            );
          });
        } else {
          console.log("no employess currently!");
        }
        console.log("user added");
      })
      .catch((err) => {
        console.log(err);
      });
    res.send({ message: "added", status: 200 });
  }
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

const addEmp = async (req, res) => {
  const email = req.body.email;
  await UserModel.findOne({
    email: email,
    pid: "",
    pid: "",
  })
    .then((data) => {
      if (data == null) {
        res.send({
          status: 403,
          message: "user dosent exist", ///if user dosent exist use this status
        });
      } else {
        res.send({
          status: 200,
          message: "user do exist", ///here user exist so use status 200
        });
      }
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { createPub, getPub, addEmp };
