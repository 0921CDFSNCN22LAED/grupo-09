const db = require("../database/models");

//Guardando datos en la DB con JSON
/*
const productsJSON = path.join(__dirname, "../../databaseJSON/productos.json");
const products = JSON.parse(fs.readFileSync(productsJSON, "utf-8"));

function saveProducts() {
  const to_text = JSON.stringify(products, null, 4);
  fs.writeFileSync(productsJSON, to_text, "utf-8");
}
*/

module.exports = {
  async getAll() {
    try {
      return await db.Products.findAll();
    } catch (e) {
      return e;
    }
  },

  async findOne(id) {
    const product = await db.Products.findByPk(id);
    return product;
  },

  async create(body, file) {
    const product = await db.Products.create({
      id: Date.now(),
      ...body,
      product_image: file,
    });
    return product;
  },

  async update(id, body, file) {
    const product = await db.Products.findByPk(id);

    if (!file) {
      file = products[index].product_image;
    }

    await product.update({
      id: products[index].id,
      ...body,
      product_image: file,
    });

    return product;
  },

  async destroy(id) {
    await db.Products.destroy({
      where: {
        id: id,
      },
    });
  },
};
