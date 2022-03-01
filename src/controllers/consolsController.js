const consolServices = require("../services/consolServices");
const { validationResult } = require("express-validator");

const consolsController = {
  /**CONSOL SERVICES**/
  /*Create Consol Form*/
  createConsol: (req, res) => {
    res.render("games/consolsCreation", {
      old: req.body,
    });
  },

  /*Save Consol*/
  storeConsol: async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      console.log(req.files);
      await consolServices.create(req.body, req.files.logo, req.files.consol_image);
      res.redirect("/games");
    } else {
      res.render("games/consolsCreation", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  /*Edit Consol*/
  editConsol: async (req, res) => {
    const idSearch = req.params.id;
    consol = await consolServices.findOne(idSearch);

    res.render("games/consolsEdit", {
      consol,
    });
  },

  /*Update Consol*/
  updateConsol: async (req, res) => {
    const idSearch = req.params.id;
    await consolServices.update(idSearch, req.body, req.files);
    res.redirect("/games");
  },

  /*Destroy Consol form*/
  destroy: (req, res) => {
    const consol = consolServices.findOne(req.params.id);
    res.render("games/consolDelete", {
      consol,
    });
  },

  /*Destroy Consol*/
  destroyConsol: async (req, res) => {
    const idSearch = req.params.id;
    await consolServices.destroy(idSearch);
    res.redirect("/games");
  },
};

module.exports = consolsController;
