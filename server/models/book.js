//schema of publication
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    description: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    },
    pid: {
        type: Number,
        default: null
    },
    wid: {
        type: Number,
        default: null
    },
    permission:
    {
      type: String,
      default : null
    },
    status:
    {
      type: String,
      default : null
    },
    rating:
    {
        type: Number,
        default: 0
    }
   
});

const bookModel = mongoose.model("Books", bookSchema);
module.exports = bookModel;