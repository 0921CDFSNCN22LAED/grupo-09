const fs = require("fs");

const productsJSON = fs.readFileSync("src/database/productos.json", "utf-8");
const products = JSON.parse(productsJSON);

const consolsJSON = fs.readFileSync("src/database/consolas.json", "utf-8");
const consols = JSON.parse(consolsJSON);

const productsController = {
  products: (req, res) => {
    res.render("../src/views/products/products", {
      products,
      consols,
    });
  },

  cart: (req, res) => {
    res.render("../src/views/products/productCart");
  },

  details: (req, res) => {
    const id = req.params.id;
    //const product = productsService.findOne(id);

    //findOne(id) {
    const product = products.find((prod) => {
      return prod.id == id;
    });
    //return product;
    /** }\,*/
    res.render("../src/views/products/productDetail", {
      product,
    });
  },

  edit: (req, res) => {
    res.render("../src/views/products/productEdit");
  },

  add: (req, res) => {
    res.render("../src/views/products/productAdd");
  },
};

module.exports = productsController;
