const express = require("express");
const controllers = require("../controllers/muser.js");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");

const router = express.Router();

router.post(
  "/signin",
  [body("email").isEmail(), body("password").isString().isLength({ min: 1 })],
  controllers.muserlogin
);
router.post(
  "/signup",
  [
    body("name").isString().notEmpty(),
    body("email").isEmail(),
    body("password").isString().isLength({ min: 1 }),
  ],
  controllers.createmusers
);

module.exports = router;
