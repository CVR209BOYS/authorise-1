const express = require("express");
const mongoose = require("mongoose");
const languageModel = require("../models/languages");
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const getLanguages = async (req, res) => {
  let languages = await languageModel.find();
  res.send(languages);
};

module.exports = { getLanguages };
