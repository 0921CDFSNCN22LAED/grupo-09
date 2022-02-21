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
    } catch (error) {
      console.log(error);
    }
  },

  async getAllColors() {
    try {
      return await db.Product_colors.findAll();
    } catch (error) {
      console.log(error);
    }
  },

  async getAllMemories() {
    try {
      return await db.Memories.findAll();
    } catch (error) {
      console.log(error);
    }
  },

  async findOne(id) {
    try {
      const product = await db.Products.findByPk(id);
      return product;
    } catch (error) {
      console.log(error);
    }
  },

  async create(body, file) {
    try {
      const product = await db.Products.create({
        id: Date.now(),
        name: body.name,
        description: body.description,
        price: body.price,

        product_image: file,
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  },

  async update(id, body, file) {
    try {
      const product = await db.Products.findByPk(id);

      if (!file) {
        file = product.product_image;
      }

      await product.update({
        id: products.id,
        ...body,
        product_image: file,
      });

      return product;
    } catch (error) {
      console.log(error);
    }
  },

  async destroy(id) {
    try {
      await db.Products.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
