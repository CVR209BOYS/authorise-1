const express = require("express");
<<<<<<< HEAD
const { createusers, getusers } = require("../controllers/user.js");
=======
const {createusers} = require("../controllers/user.js");

const router= express.Router();

router.post('/', createusers);

>>>>>>> bf9ed54dc3b1de6cef3d5f687b56ab9c3f8f6942

const router = express.Router();

router.post("/", createusers);
router.get("/myUser", getusers);


module.exports = router;
