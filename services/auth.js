const sessionIdtoUserId = new Map();

function setUser(id, user) {
  sessionIdtoUserId.set(id, user);
}
function getUser(id) {
  return sessionIdtoUserId.get(id);
}

module.exports = {
  setUser,
  getUser,
};
