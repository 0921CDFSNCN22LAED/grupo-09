const express = require('express')
const router = express.Router()

const gamesController = require("../controllers/gamesController.js")

/*-Index-*/
router.get("/", gamesController.index)

/*-Consol-*/
/**request form**/
router.get("/consolsCreation", gamesController.createConsol)
/**store method**/
router.post("/", gamesController.storeConsol )
/**update method**/
router.put("/:id/edit", gamesController.updateConsol)

/*-Games Creation-*/
/**request form**/
router.get("/gamesCreation", gamesController.createGame)
/**store method**/
router.post("/", gamesController.storeGame)
/**update method**/
router.put("/:id/edit", gamesController.updateGame)

module.exports = router