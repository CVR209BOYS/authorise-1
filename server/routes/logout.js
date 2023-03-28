const express = require("express");

const logouts = require("../controllers/logout.js");


const router= express.Router();

router.get('/',logouts);




module.exports = router;

