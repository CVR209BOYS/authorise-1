// entry point of our api

const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/user"); //importing the schemas required
const cors = require("cors");
const axios= require("axios");
const userRoutes= require("./routes/user.js");

// import userRoutes from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

//db connection

mongoose.connect(
  "mongodb+srv://CVR209:CVR209@cluster0.6miwwwz.mongodb.net/AUTHORISE?retryWrites=true&w=majority"
);

// API requests
// use req to take info from client to server
// use res to take info from  server to client

// app.get("/getusers", async (req, res) => {
//   //method 1
//   const output = await UserModel.find();
//   console.log(output);
//   res.json(output);

//   //method 2
//   // Model.find()
//   //     .then(function (models) {
//   //         console.log(models);
//   //     })
//   //     .catch(function (err) {
//   //         console.log(err);
//   //     });
// });



// code for saving users using gauth.....................................................................

app.use('/createusers',userRoutes);

//.........................................................................................................................


//backend port is 3001
app.listen(3001, () => {
  console.log("server connected");
});
