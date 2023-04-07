const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const categoryModel = mongoose.model("categories", categorySchema);
module.exports = categoryModel;
