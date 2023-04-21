const express = require("express");
const { contact, getAllPub } = require("../controllers/communication");
const router = express.Router();

router.post("/contact", contact);
router.get("/getAllPub", getAllPub);

module.exports = router;
