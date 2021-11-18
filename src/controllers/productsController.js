const path = require('path')


const productsController = {
    cart: (req,res) =>{
        res.render("../src/views/products/productCart")
    },

    details: (req,res) =>{
        res.render("../src/views/products/productDetail")
    },

    games: (req, res) => {
        res.render("../src/views/products/gamesDetails");
      }
}

module.exports = productsController