//schema of publication
const mongoose = require("mongoose");

const PublicSchema = new mongoose.Schema({
  description: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  companyName: {
    type: String,
    require: true,
  },
  employees: {
    type: [String],
    default: null,
  },
});

const PublicModel = mongoose.model("Publication", PublicSchema);
module.exports = PublicModel;
