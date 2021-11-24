const path = require("path");

const productsController = {
  cart: (req, res) => {
    res.render("../src/views/products/productCart");
  },

  details: (req, res) => {
    res.render("../src/views/products/productDetail");
  },

  games: (req, res) => {
    res.render("../src/views/products/gamesDetails");
  },

  edit: (req, res) => {
    res.render("../src/views/products/productEdit");
  },

  add: (req, res) => {
    res.render("../src/views/products/productAdd");
  },
};

module.exports = productsController;
