const consolServices = require("../services/consolServices");

const consolsController = {
  /**CONSOL SERVICES**/
  /*Create Consol Form*/
  createConsol: (req, res) => {
    res.render("games/consolsCreation");
  },

  /*Save Consol*/
  storeConsol: (req, res) => {
    consolServices.create(req.body);
    res.redirect("/games");
  },

  /*Edit Consol*/
  editConsol: (req, res) => {
    const idSearch = req.params.id;
    consol = consolServices.findOne(idSearch);

    res.render("games/consolsEdit", {
      consol,
    });
  },

  /*Update Consol*/
  updateConsol: (req, res) => {
    const idSearch = req.params.id;
    consolServices.update(idSearch, req.body);
    res.redirect("/games");
  },

  /*Destroy Consol*/
  destroyConsol: (req, res) => {
    const idSearch = req.params.id;
    consolServices.destroy(idSearch);
    res.redirect("/games");
  },
};

module.exports = consolsController;
