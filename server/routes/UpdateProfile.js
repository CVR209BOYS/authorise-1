const express = require("express");
const { updateUser } = require("../controllers/UpdateProfile.js");
const router = express.Router();

router.post("/updateprofile", updateUser);

module.exports = router;
