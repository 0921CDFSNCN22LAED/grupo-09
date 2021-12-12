const express = require('express')
const router = express.Router()

const gamesController = require("../controllers/gamesController.js")


/*-Index Games-*/
router.get("/", gamesController.index)

/*-Games Creation-*/
/**request form**/
router.get("/gamesCreation", gamesController.createGame)
/**store method**/
router.post("/", gamesController.storeGame)
/**edit method**/
router.get("/:id/edit", gamesController.editGame)
/**update method**/
router.put("/:id", gamesController.updateGame)
/**delete method**/
router.delete("/:id", gamesController.destroyGame)

module.exports = router