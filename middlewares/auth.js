const { getUser } = require("../services/auth");

function RestrictToLoggedIn(req, res, next) {
  const user = getUser(req.cookies.uid);
  if (!user) {
    return res.redirect("/home/login");
  }
  req.user = user;
  next();
}

function AddUser(req, res, next) {
  const user = getUser(req.cookies.uid);
  req.user = user;
  next();
}

module.exports = { RestrictToLoggedIn, AddUser };
