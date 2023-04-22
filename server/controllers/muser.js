const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const axios = require("axios");

const bcrypt = require("bcrypt");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const createmusers = async (req, res) => {
  const user = req.body;
  console.log(req.body.email.length);

  if (
    req.body.email.length == 0 ||
    req.body.name.length == 0 ||
    req.body.password.length == 0
  ) {
    res.send({ status: 403 });
  } else {
    let mongouser = await UserModel.find({
      email: user.email,
    }).catch((err) => {
      console.log(err);
    });

    if (mongouser[0] == undefined) {
      let users = {
        name: user.name,
        email: user.email,
        password: await bcrypt.hash(user.password, 10),
        authType: "PASSWORD",
      };

      const newUser = new UserModel(users);
      await newUser.save().catch((err) => {
        console.log(err);
      });
      console.log("user added");
      let senduser = await UserModel.find({ email: user.email }).catch(
        (err) => {
          console.log(err);
        }
      );
      let sendresponse = senduser[0];
      console.log(sendresponse);
      res.send(sendresponse);
    } else {
      res.send({
        message: "email already exists",
      });
    }
  }
};

const muserlogin = async (req, res) => {
  console.log(req.body);
  // res.send({ message: res.body });
  let mongouser = await UserModel.find({ email: req.body.email })
    .then(async (data) => {
      console.log(data);

      if (data.length == 0) {
        console.log(1);
        res.send({
          status: 402,
          message: "user does not exists",
        });
      } else if (data[0].authType === "GOOGLE") {
        res.send({
          status: 405,
          message: "login with google",
        });
      } else if (
        (await bcrypt.compare(req.body.password, data[0].password)) === false
      ) {
        console.log(2);
        res.send({
          status: 403,
          message: "Invalid credentials",
        });
      } else {
        console.log(3);
        console.log("login sucessfull");
        let sentuser = data[0];
        // console.log(sentuser);
        res.send(sentuser);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { createmusers, muserlogin };
