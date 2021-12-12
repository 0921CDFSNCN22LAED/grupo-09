const express = require('express')
const router = express.Router()

const consolsController = require("../controllers/consolsController.js")


/*-Consol Creation-*/
/**request form**/
router.get("/consolsCreation", consolsController.createConsol)
/**store method**/
router.post("/", consolsController.storeConsol)
/**edit method**/
router.get("/:id/edit", consolsController.editConsol)
/**update method**/
router.put("/:id", consolsController.updateConsol)
/**delete method**/
router.delete("/:id", consolsController.destroyConsol)


module.exports = router