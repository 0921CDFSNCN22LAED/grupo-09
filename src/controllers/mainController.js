//Obteniendo informacion de la DB con JSON
/*
const productsJSON = fs.readFileSync("databaseJSON/productos.json", "utf-8");
const products = JSON.parse(productsJSON);

const consolsJSON = fs.readFileSync("databaseJSON/consolas.json", "utf-8");
const consols = JSON.parse(consolsJSON);
*/

const mainController = {
  index: (req, res) => {
    res.render("main/index", {
      products,
      consols,
    });
  },
};

module.exports = mainController;
