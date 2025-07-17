const express = require("express");
const router = express.Router();
const { HandleNewUser, HandleUserLogin } = require("../controllers/user");

router.post("/", HandleNewUser);
router.post("/login", HandleUserLogin);

module.exports = router;
