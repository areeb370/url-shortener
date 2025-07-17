const User = require("../models/user");

async function HandleNewUser(req, res) {
  const newUser = await User.create({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  return res.render("home");
}

exports = {
  HandleNewUser,
};
