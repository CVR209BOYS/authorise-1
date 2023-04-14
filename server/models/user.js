// these are user schemas
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
  },
  picture: {
    type: String,
  },
  pid: {
    type: String,
    require: true,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  iswriter: {
    type: Boolean,
    default: false,
  },
  authType: {
    type: String,
    enum: ["GOOGLE", "PASSWORD"],
  },
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
