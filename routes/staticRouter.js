const express = require("express");
const Url = require("../models/url");
const router = express.Router();

router.get("/", async (req, res) => {
  if (!req.user) {
    return res.redirect("/home/login");
  } else {
    let urls = await Url.find({ createdBy: req.user._id });
    res.render("home", { urls });
  }
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
