const db = require("../database/models");
const consolServices = require("../services/consolServices");
const productServices = require("../services/productsServices");

//Obteniendo informacion de la DB con JSON
/*
const productsJSON = fs.readFileSync("databaseJSON/productos.json", "utf-8");
const products = JSON.parse(productsJSON);

const consolsJSON = fs.readFileSync("databaseJSON/consolas.json", "utf-8");
const consols = JSON.parse(consolsJSON);
*/

const mainController = {
  index: async (req, res) => {
    try {
      const consols = await consolServices.getAll();
      const products = await productServices.getAll();
      res.render("main/index", {
        consols: consols,
        products: products,
      });
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = mainController;
