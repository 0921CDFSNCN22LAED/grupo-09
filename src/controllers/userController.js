const path = require("path");

const userServices = require("../services/userServices");

const userController = {
  register: (req, res) => {
    res.render("../src/views/user/register");
  },

  storeUser: (req, res) => {
    userServices.create(req.body);
    res.redirect("/");
  },

  login: (req, res) => {
    res.render("../src/views/user/login");
  },

  confirmUser: (req, res) => {
    /**Crear en services método compare para comparar si los datos coinciden con algun usuario y crear un if que sirva de respuesta positiva o respuesta negativa **/
    if ((a = b)) {
      userServices.create(req.body);
      res.redirect("/");
    }
  },

  editUser: (req, res) => {
    res.render("../src/views/user/edit"); /** Falta crear la vista edit users */
  },

  updateUser: (req, res) => {
    userServices.update(req.body);
    res.redirect("/");
  },

  destroyUser: (req, res) => {
    userServices.destroy(req.body);
    res.redirect("/");
  },
};

module.exports = userController;
