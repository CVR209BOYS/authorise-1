//schema of publication
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  bookid: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    default: 0,
    max: 5,
    min: 0,
  },
  review: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    default: "",
  },
  picid: {
    type: String,
    default: "",
  },
});

const reviewModel = mongoose.model("Review", reviewSchema);
module.exports = reviewModel;
