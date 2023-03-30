//schema of publication
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    coverpageurl: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    bookurl: {
        type: String,
        default: ""
    },
    authorObjid:{
        type: Number,
        default: null
    },
    title: {
        type: String,
        default: ""
    },
    tags:
    {
      type: [String],
      default : null
    },
    publicationid:
    {
      type: String,
      default : null
    },
    rating:
    {
        type: Number,
        default: 0,
        max:5,
        min:0
    },

    nopeople:
    {
        type: Number,
        default: 0,
        
    }
   
});

const bookModel = mongoose.model("Books", bookSchema);
module.exports = bookModel;