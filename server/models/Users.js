// these are user schemas
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;