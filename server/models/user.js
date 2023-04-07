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
<<<<<<< HEAD
    require: true,
  },
  picture: {
    type: String,
    require: true,
=======
    
  },
  picture: {
    type: String,
    
>>>>>>> bf9ed54dc3b1de6cef3d5f687b56ab9c3f8f6942
  },
  pid: {
    type: String,
    require: true,
<<<<<<< HEAD
    default: null,
=======
    default: "",
>>>>>>> bf9ed54dc3b1de6cef3d5f687b56ab9c3f8f6942
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
<<<<<<< HEAD
module.exports = UserModel;
=======
module.exports = UserModel;
>>>>>>> bf9ed54dc3b1de6cef3d5f687b56ab9c3f8f6942
