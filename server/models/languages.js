const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const languageModel = mongoose.model("languages", languageSchema);
module.exports = languageModel;
