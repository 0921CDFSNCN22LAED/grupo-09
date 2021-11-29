const express = require('express')
const router = express.Router()

const gamesController = require("../controllers/gamesController.js")

/*-Index Games-*/
router.get("/", gamesController.index)

/*-Consol Creation-*/
/**request form**/
router.get("/consolsCreation", gamesController.createConsol)
/**store method**/
router.post("/", gamesController.storeConsol )
/**edit method**/
router.get("/;id/edit", gamesController.editConsol)
/**update method**/
router.put("/:id/edit", gamesController.updateConsol)
/**delete method**/
router.delete("/:id", gamesController.destroyConsol)

/*-Games Creation-*/
/**request form**/
router.get("/gamesCreation", gamesController.createGame)
/**store method**/
router.post("/", gamesController.storeGame)
/**update method**/
router.put("/:id/edit", gamesController.updateGame)
/**delete method**/
router.delete("/:id", gamesController.destroyGame)

module.exports = router