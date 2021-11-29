const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");

/*-User Creation-*/
/**register form**/
router.get("/register", userController.register);
/**store method**/
router.post("/", userController.storeUser);
/**login form **/
router.get("/login", userController.login);
/**confirm login **/
router.post("/", userController.confirmUser);
/**edit method**/
router.get("/;id/edit", userController.editUser);
/**update method**/
router.put("/:id/edit", userController.updateUser);
/**delete method**/
router.delete("/:id", userController.destroyUser);

module.exports = router;
