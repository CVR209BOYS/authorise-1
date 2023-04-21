//schema of publication
const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  label: {
    type: String,
    require: true,
  },
  value: {
    type: String,
    require: true,
  },
});

const bookSchema = new mongoose.Schema({
  coverpageurl: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  bookurl: {
    type: String,
    required: true,
    minlength: 9,
  },
  authorEmail: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    default: "neha",
  },
  title: {
    type: String,
    default: "",
  },
  tags: {
    type: [tagSchema],
    default: null,
  },
  publicationId: {
    type: String,
    default: null,
  },
  rating: {
    type: Number,
    default: 0,
    max: 5,
    min: 0,
  },

  nopeople: {
    type: Number,
    default: 0,
  },
});

const bookModel = mongoose.model("Books", bookSchema);
module.exports = bookModel;
