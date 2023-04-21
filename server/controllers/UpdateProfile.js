const express = require("express");
const mongoose = require("mongoose");
const bookModel = require("../models/book");
const UserModel = require("../models/user");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const updateUser = async (req, res) => {
  console.log("shganjk");
  console.log(req.body);
  await UserModel.findOneAndUpdate(
    { email: req.body.email },
    {
      name: req.body.name,
      description: req.body.description,
    }
  )
    .then(async(data) => {
      console.log("updated");
      await console.log(data);
    })
    .catch();
};

module.exports = { updateUser };
