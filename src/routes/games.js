const express = require('express')
const router = express.Router()

const gamesController = require("../controllers/gamesController.js")

router.get("/", gamesController.index)

module.exports = router