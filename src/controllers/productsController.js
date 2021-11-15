const path = require('path')


const productsController = {
    cart: (req,res) =>{
        res.sendFile(path.resolve(__dirname, "../views/products/productCart.html"))
    },

    details: (req,res) =>{
        res.sendFile(path.resolve(__dirname, "../views/products/productDetail.html"))
    },

    games: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/products/gamesDetails.html"));
      }
}

module.exports = productsController