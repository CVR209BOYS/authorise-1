//schema of publication
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    description: {
        type: String,
        default: ""
    },
    bid: {
        type: Number,
        default: null
    },
    uid: {
        type: Number,
        default: null
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

const reviewModel = mongoose.model("Review", reviewSchema);
module.exports = reviewModel;