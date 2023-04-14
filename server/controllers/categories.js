const express = require("express");
const mongoose = require("mongoose");
const categoryModel = require("../models/categories");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const getCategories = async (req, res) => {
  let categories = await categoryModel.find();
  res.send(categories);
};

module.exports = { getCategories };
