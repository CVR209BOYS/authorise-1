//schema of publication
const mongoose = require("mongoose");

const PublicSchema = new mongoose.Schema({
    description: {
        type: String,
        default: ""
    },
    email:
    {
      type: String,
      require: true
    },
    companyName:
    {
      type: String,
      require: true
    },
   
});

const PublicModel = mongoose.model("Publication", PublicSchema);
module.exports = PublicModel;