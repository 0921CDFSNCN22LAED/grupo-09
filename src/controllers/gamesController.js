const fs = require("fs");

const gamesServices = require("../services/gamesServices");
const consolServices = require("../services/consolServices");

const gamesController = {
  /*INDEX*/
  index: (req, res) => {
    res.render("games/details", {
      consols: consolServices.getAll(),
      games: gamesServices.getAll(),
    });
  },

  /**GAME SERVICES**/
  /*Create Game Form*/
  createGame: (req, res) => {
    res.render("games/gamesCreation");
  },

  /*Save Game*/
  storeGame: (req, res) => {
    gamesServices.create(req.body);
    res.redirect("/games");
  },

  /*Edit Game*/
  editGame: (req, res) => {
    idSearch = req.params.id;
    const game = gamesServices.findOne(idSearch);

    res.render("games/gamesEdit", {
      game,
    });
  },

  /*Update Game*/
  updateGame: (req, res) => {
    const idSearch = req.params.id;
    gamesServices.update(idSearch, req.body);
    res.redirect("/games");
  },

  /*Destroy Game*/
  destroyGame: (req, res) => {
    const idSearch = req.params.id;
    gamesServices.destroy(idSearch);
    res.redirect("/games");
  },

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

module.exports = gamesController;
