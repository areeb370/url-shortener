const express = require("express");
const router = express.Router();
const { HandleNewUser } = require("../controllers/user");

router.post("/signup", HandleNewUser);

module.exports = router;
