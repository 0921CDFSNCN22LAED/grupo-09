const fs = require("fs")



const productsController = {
  cart: (req, res) => {
    res.render("../src/views/products/productCart");
  },

  details: (req, res) => {
    res.render("../src/views/products/productDetail");
  },

  edit: (req, res) => {
    res.render("../src/views/products/productEdit");
  },
};

module.exports = productsController;
