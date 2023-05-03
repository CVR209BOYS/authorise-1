const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { where } = require("../models/Publication");

const createusers = async (req, res) => {
  const user = req.body;
  let userDb = await UserModel.find();
  let c = false;
  let users;
  let bherror = true;
  let sendUser = "";

  const response = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.tokenResponse.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: "application/json",
        },
      }
    )
    .then(async (res) => {
      users = {
        name: res.data.name,
        email: res.data.email,
        picture: res.data.picture,
        authType: "GOOGLE",
      };

      console.log(users);
      req.session.user = users;
      req.session.save();
      console.log("session", req.session);
      userDb.forEach(function (item, index) {
        if (item.email === res.data.email) {
          c = true;
        }
      });
    })
    .catch((err) => {
      bherror = false;
      console.log(err);
    });

  if (c) {
    console.log("user exist");
    sendUser = await UserModel.find({ email: users.email });
  } else {
    if (bherror) {
      const tempUser = new UserModel(users);
      await tempUser.save();
      sendUser = await UserModel.find({ email: users.email });
    } else {
      console.log("error occured, user cant be added");
      res.send({ message: "error" });
    }
  }
  res.send(sendUser[0]);
};

const getusers = async (req, res) => {
  const mail = req.body.email;
  console.log(req.body);
  const Userdata = await UserModel.find({
    email: mail,
  })
    .then((data) => {
      if (data.length == 0) {
        console.log("invalid email");
        res.send({
          status: 403,
          message: "invalid email",
        });
      } else {
        console.log(data);
        res.send({
          status: 200,
          data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = { createusers, getusers };
