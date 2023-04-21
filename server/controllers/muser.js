const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const axios = require("axios");
// import * as bcrypt from 'bcrypt';
const bcrypt = require("bcrypt");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const createmusers = async (req, res) => {
  const user = req.body;
  console.log("jhbhcdklbsalkvbslkbvlk");
  console.log(user);

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
    console.log("jayant1");
    const newUser = new UserModel(users);
    await newUser.save().catch((err) => {
      console.log(err);
    });
    console.log("user added");
    let senduser = await UserModel.find({ email: user.email }).catch((err) => {
      console.log(err);
    });
    let sendresponse = senduser[0];
    console.log(sendresponse);
    res.send(sendresponse);
  } else {
    console.log("jayant2");
    res.send({
      message: "email already exists",
    });
  }
};

const muserlogin = async (req, res) => {
  let user = req.body;
  console.log(req.body);
  // res.send({ message: res.body });
  let mongouser = await UserModel.find({ email: req.body.email })
  .catch((err) => {
    console.log(err);
  });
  // console.log(mongouser);

  if (mongouser == undefined) {
    res.send({
      message: "user does not exists",
    });
  } else if (!bcrypt.compare(req.body.password, mongouser[0].password)) {
    res.send({
      message: "Invalid credentials",
    });
  } else {
    console.log("login sucessfull jayant");
    let sentuser = mongouser[0];
    console.log(sentuser);
    res.send(sentuser);
  }
  // console.log(publics[0]);
  // let c = false;
  // let users;
  // let bherror = true;

  // users = {
  //   name: publics.name,
  //   email: publics.email,
  // };

  // c = bcrypt.compare(user.password, publics[0].password);

  // if (c) {
  //   res.send(publics[0]);
  //   console.log(publics[0]);
  // } else {
  //   if (bherror) {
  //     res.send({ message: "Invalid Credentails ", status: 403 });
  //   } else {
  //     res.send({ message: "server busy , user not added", status: 500 });
  //     console.log("user not added");
  //   }
  // }
};

module.exports = { createmusers, muserlogin };
