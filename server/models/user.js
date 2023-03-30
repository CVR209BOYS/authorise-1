// these are user schemas
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:
    {
      type: String,
      require: true
    },
    picture:
    {
      type: String,
      require: true
    },
    pid:{
        type: Number,
        require: true,
        default: null
    },
    description:{
        type: String,
        default: ""
    },
    iswriter:{
        type:Boolean,
        default:false
    }
});

  const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;