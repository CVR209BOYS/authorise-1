const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/user");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const createusers = async (req, res) => {
  const user = req.body;
  let publics = await UserModel.find();
  let c = false;
  let users;
  let bherror = true;

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
      };

      console.log(users);
      req.session.user = users;
      req.session.save();
      console.log("session", req.session);
      publics.forEach(function (item, index) {
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
    console.log("user exist, welcome");
  } else {
    if (bherror) {
      const newUser = new UserModel(users);
      await newUser.save();
      console.log("user added");
    } else {
      console.log("error occured, user cant be added");
    }
  }
  res.send(users);
};

module.exports = createusers;
