const path = require("path")
const {validationResult} = require("express-validator")

const userServices = require("../services/userServices")

const userController = {
  /*Register user View*/
  register: (req, res) => {
    res.render("user/register")
  },

  /*Login user View*/
  login: (req, res) => {
    res.render("user/login")
  },

  /*Store user in DataBase*/
  storeUser: (req, res) => {

    const errors = validationResult(req)
    
    if(errors.isEmpty()){
      userServices.create(req.body)
      res.redirect("/user/login")
    } else { 
      res.render("user/register",{
        errors : errors.array(),
        old : req.body
      })
    }
   
  },

  /*Edit user view*/
  editUser: (req, res) => {
    res.render("user/edit") 
  },

  /*Update user information*/
  updateUser: (req, res) => {
    userServices.update(req.body)
    res.redirect("/")
  },

  /*Delete user from DataBase*/
  destroyUser: (req, res) => {
    userServices.destroy(req.body)
    res.redirect("/")
  },

  /*Confirm user Login attempt*/
 // confirmUser: (req, res) => {
    /**Crear en services método compare para comparar si los datos coinciden con algun usuario y crear un if que sirva de respuesta positiva o respuesta negativa **/
//  if ((a = b)) {
//  userServices.create(req.body)
//      res.redirect("/")
//    }
//  },
  
}

module.exports = userController
