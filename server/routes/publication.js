const express = require("express");
const { createPub, getPub, addEmp } = require("../controllers/publication.js");

const router = express.Router();

router.post("/", createPub);
router.get("/myPub", getPub);
router.get("/check", addEmp);

module.exports = router;
