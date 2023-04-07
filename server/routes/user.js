const express = require("express");
const { createusers,getusers } = require("../controllers/user.js");

const router = express.Router();

router.post("/", createusers);
router.get("/myUser", getusers);

module.exports = router;
