const express = require("express");
const controllers = require("../controllers/muser.js");

const router= express.Router();

router.post('/signin', controllers.muserlogin);
router.post('/signup', controllers.createmusers);

module.exports = router;

