const express = require("express");
const createusers = require("../controllers/user.js");

const router= express.Router();

router.post('/use',createusers);




module.exports = router;

