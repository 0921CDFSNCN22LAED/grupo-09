const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController.js");

router.get("/cart", productsController.cart);
router.get("/details", productsController.details);
router.get("/games", productsController.games);
router.get("/productEdit", productsController.edit);

module.exports = router;
