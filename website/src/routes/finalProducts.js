const express = require("express");
const finalProductsController = require("../controllers/finalProductsController");
const router = express.Router();

/*-Cart-*/
router.get("/cart", finalProductsController.cart);

router.post("/finalProducts/:id", finalProductsController.store);

router.delete("/finalProducts", finalProductsController.destroy);

module.exports = router;
