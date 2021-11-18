const path = require('path')

const userController = {
    login: (req,res) =>{
        res.render("../src/views/user/login")
    },

    register: (req,res) =>{
        res.render("../src/views/user/register")
    },
}

module.exports = userController