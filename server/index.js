// entry point of our api

const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/user"); //importing the schemas required
const cors = require("cors");
const axios= require("axios");
const userRoutes= require("./routes/user.js");
const logoutRoutes= require("./routes/logout.js");
const session = require('express-session');
const cookieParser = require("cookie-parser");

// import userRoutes from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());
///app.use(cookieParser());

//db connection

mongoose.connect(
  "mongodb+srv://CVR209:CVR209@cluster0.6miwwwz.mongodb.net/AUTHORISE?retryWrites=true&w=majority"
);

// API requests
// use req to take info from client to server
// use res to take info from  server to client



// code for saving users using gauth......................................................................................

//app.use('/createusers',userRoutes);

//.........................................................................................................................
// code for logout.........................................................................................................

//app.use('/logout',logoutRoutes);

//.........................................................................................................................




//backend port is 3001
app.listen(3001, () => {
  console.log("server connected");
});
