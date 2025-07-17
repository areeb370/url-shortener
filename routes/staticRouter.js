const express = require("express");
const Url = require("../models/url");
const router = express.Router();

router.get("/", async (req, res) => {
  let urls = await Url.find({});
  res.render("home", { urls });
});

module.exports = router;
