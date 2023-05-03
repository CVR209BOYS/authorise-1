const express = require("express");
const { createPub, getPub, addEmp } = require("../controllers/publication.js");

const router = express.Router();

router.post("/createpublisher", createPub);
router.get("/myPub", getPub);
router.post("/check", addEmp);

module.exports = router;
