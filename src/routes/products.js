const express = require('express')
const router = express.Router()

const productsController = require("../controllers/productsController.js");

/*-Index Products-*/
router.get("/", productsController.products)

/*-Cart-*/
router.get("/cart", productsController.cart);

/*-Product Details-*/
router.get("/details/:id", productsController.details);

/*-Products Creation-*/
/**request form**/
router.get("/productAdd", productsController.add)
/**store method**/
router.post("/", productsController.store)
/**edit method**/
router.get("/:id/edit", productsController.edit)
/**update method**/
router.put("/:id", productsController.update)
/**delete method**/
router.delete("/:id", productsController.destroy)


module.exports = router;
