const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const userServices = require("../services/userServices");
const bcryptjs = require("bcryptjs");

const usersJSON = path.join(__dirname, "../database/usuarios.json");
const users = JSON.parse(fs.readFileSync(usersJSON, "utf-8"));

const userController = {
  /*Register Method*/
  register: (req, res) => {
    res.render("user/register");
  },

  /*Login Method*/
  login: (req, res) => {
    res.render("user/login");
  },

  /*Store user in DataBase*/
  storeUser: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      userServices.create(req.body);
      res.redirect("/user/login");
    } else {
      res.render("user/register", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },

  /*Edit user view*/
  editUser: (req, res) => {
    res.render("user/edit");
  },

  /*Update user information*/
  updateUser: (req, res) => {
    userServices.update(req.body);
    res.redirect("/");
  },

  /*Delete user from DataBase*/
  destroyUser: (req, res) => {
    userServices.destroy(req.body);
    res.redirect("/");
  },

  /*Confirm user Login attempt*/
  confirmUser: (req, res) => {
    let loginUser = userServices.findOne(req.body);

    if (loginUser) {
      if (bcryptjs.compareSync(req.body.password, user.password)) {
        delete loginUser.password; //no guarda en session la password
        req.session.loggedUser = loginUser;
        //if(cookies)
        return res.redirect("/index");
      }
      return res.render("user/login", {
        errors: {
          email: {
            msg: "Email o contraseña invalido",
          },
        },
      });
    }

    return res.render("user/login", {
      errors: {
        email: {
          msg: "Email o contraseña invalido adasdasd",
        },
      },
    });
  },
};

module.exports = userController;
