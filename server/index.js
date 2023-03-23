// entry point of our api

const express = require("express");
const mongoose = require("mongoose");
const UserModel = require('./models/Users');  //importing the schemas required
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());

//db connection

mongoose.connect("mongodb+srv://CVR209:CVR209@cluster0.6miwwwz.mongodb.net/AUTHORISE?retryWrites=true&w=majority");

// API requests
// use req to take info from client to server 
// use res to take info from  server to client

app.get("/getusers", async (req, res) => {

    //method 1
    const output = await UserModel.find();
    console.log(output);
    res.json(output);

    //method 2
    // Model.find()
    //     .then(function (models) {
    //         console.log(models);
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     });

});

app.post("/createusers", async (req, res) => {

    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);  // just to check....nothing imp

});

//backend port is 3001
app.listen(3001, () => {
    console.log("server connected");
})