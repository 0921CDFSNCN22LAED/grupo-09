const path = require('path')

const userController = {
    login: (req,res) =>{
        res.sendFile(path.resolve(__dirname, "../views/user/login.html"))
    },

    register: (req,res) =>{
        res.sendFile(path.resolve(__dirname, "../views/user/register.html"))
    },
}

module.exports = userController