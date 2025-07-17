const express = require("express");
const router = express.Router();
const { HandleNewUrl } = require("../controllers/url");
const { HandleGetUrl } = require("../controllers/url");

router.post("/", HandleNewUrl);

router.get("/:shortId", HandleGetUrl);

module.exports = router;
