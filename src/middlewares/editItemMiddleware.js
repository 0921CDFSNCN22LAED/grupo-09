const userServices = require("../services/userServices");

function editItemMiddleware(req, res, next) {
  const user = userServices.findOne(req.session.userLoggedId);
  if (!user.admin) {
    return res.redirect("/");
  }
  next();
}

module.exports = editItemMiddleware;
