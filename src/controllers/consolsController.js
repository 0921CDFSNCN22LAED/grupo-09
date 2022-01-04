const consolServices = require("../services/consolServices")
const {validationResult} = require("express-validator")

const consolsController = {
  /**CONSOL SERVICES**/
  /*Create Consol Form*/
  createConsol: (req, res) => {
    res.render("games/consolsCreation",{
      old : req.body
    })
  },

  /*Save Consol*/
  storeConsol: (req, res) => {
    const errors = validationResult(req)

    if(errors.isEmpty()){
      consolServices.create(req.body)
      res.redirect("/games")
    } else {
      res.render("games/consolsCreation",{
        errors : errors.array(),
        old : req.body
      })
    }
    
  },

  /*Edit Consol*/
  editConsol: (req, res) => {
    const idSearch = req.params.id
    consol = consolServices.findOne(idSearch)

    res.render("games/consolsEdit", {
      consol,
    })
  },

  /*Update Consol*/
  updateConsol: (req, res) => {
    const idSearch = req.params.id
    consolServices.update(idSearch, req.body)
    res.redirect("/games")
  },

  /*Destroy Consol*/
  destroyConsol: (req, res) => {
    const idSearch = req.params.id
    consolServices.destroy(idSearch)
    res.redirect("/games")
  },
}

module.exports = consolsController
