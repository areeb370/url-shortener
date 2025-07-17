const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth");

async function HandleNewUser(req, res) {
  const newUser = await User.create({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  return res.redirect("/home");
}

async function HandleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user) {
    return res.render("login", { error: "Invalid email or password" });
  } else {
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect("/home");
  }
}

module.exports = {
  HandleNewUser,
  HandleUserLogin,
};
