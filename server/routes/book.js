const express = require("express");
const {
  uploadBooks,
  getBooks,
  getBookbyid,
} = require("../controllers/book.js");
// const getBooks = require("../controllers/book.js");

const router = express.Router();

router.post("/upload", uploadBooks);
router.get("/getallbooks", getBooks);
router.post("/getbookbyid", getBookbyid);

module.exports = router;
