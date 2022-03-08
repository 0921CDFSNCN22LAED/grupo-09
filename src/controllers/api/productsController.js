const productsServices = require("../../services/productsServices");
const API_HOST = require("../../constants");

const productsController = {
  /*List Method*/
  list: async (req, res) => {
    const products = await productsServices.getAll();
    const newProducts = [];
    for (let i = 0; i < products.length; i++) {
      newProducts.push({
        id: products[i].id,
        name: products[i].name,
        description: products[i].description,
        detail: `${API_HOST}/api/products/${products[i].id}`,
      });
    }
    const respuesta = {
      meta: {
        status: 200,
        count: products.length,
        url: "api/products",
      },
      data: newProducts,
    };
    res.json(respuesta);
  },

  /*Detail Method*/
  detail: async (req, res) => {
    const product = await productsServices.findOne(req.params.id);
    const newProduct = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      product_image: `${API_HOST}/api/products/${product.id}/${product.product_image}`,
    };
    const respuesta = {
      meta: {
        status: 200,
        url: `api/products/${product.id}`,
      },
      data: newProduct,
    };
    res.json(respuesta);
  },
};

module.exports = productsController;
