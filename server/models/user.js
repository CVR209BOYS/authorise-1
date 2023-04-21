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
    default: "https://wallpapercave.com/wp/wp8305921.jpg",
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
    default: "GOOGLE",
  },
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
