// entry point of our api

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/user"); //importing the schemas required
const bookModel = require("./models/book"); //importing the schemas required
const cors = require("cors");
const axios = require("axios");
const userRoutes = require("./routes/user.js");
const reviewRoutes = require("./routes/review.js");
const pubRoutes = require("./routes/publication.js");
const commRoutes = require("./routes/communication.js");
const muserRoutes = require("./routes/muser.js");
const logoutRoutes = require("./routes/logout.js");
const bookUplRoute = require("./routes/book.js");
const categoriesRoute = require("./routes/categories.js");
const languagesRoute = require("./routes/languages.js");
const updateRoute = require("./routes/UpdateProfile.js");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const secret = process.env.SECRET || "thisshouldbebettersecret";
mongoose.connect(
  "mongodb+srv://CVR209:CVR209@cluster0.6miwwwz.mongodb.net/AUTHORISE?retryWrites=true&w=majority"
);

const store = new MongoStore({
  mongoUrl:
    "mongodb+srv://CVR209:CVR209@cluster0.6miwwwz.mongodb.net/AUTHORISE?retryWrites=true&w=majority",
  secret: secret,
  touchAfter: 24 * 3600,
});
store.on("error", function (e) {
  console.log("SESSION STORE ERROR", e);
});
// import userRoutes from './routes/users.js';

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const sessionConfig = {
  store: store,
  secret: "thisshouldbebettersecret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
///app.use(cookieParser());

//db connection

// API requests
// use req to take info from client to server
// use res to take info from  server to client

// code for saving users using gauth......................................................................................

app.use("/createusers", userRoutes);

//........................................................................................................................

// code for saving users using gauth......................................................................................

app.use("/createmusers", muserRoutes);
app.use("/muserlogin", muserRoutes);

//.........................................................................................................................

// code for logout.........................................................................................................

app.use("/logout", logoutRoutes);
app.get("/user", (req, res) => {
  console.log(req.session);
});

//.........................................................................................................................

// code for book upload....................................................................................................

app.use("/bookupl", bookUplRoute);

//.........................................................................................................................
// code for getting users using gauth......................................................................................

app.use("/getusers", userRoutes);

//.........................................................................................................................
// code for saving review using gauth......................................................................................

app.use("/reviews", reviewRoutes);

//.........................................................................................................................

// code for publisher using gauth..........................................................................................

app.use("/publisher", pubRoutes);

//.........................................................................................................................
// code for communication .................................................................................................

app.use("/communication", commRoutes);

//.........................................................................................................................

// code for languages and categories.......................................................................................
app.use("/getcategories", categoriesRoute);
app.use("/getlanguages", languagesRoute);
app.use("/update", updateRoute);

//backend port is 3001
app.listen(3001, () => {
  console.log("server connected");
});
