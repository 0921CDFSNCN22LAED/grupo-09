const fs = require("fs")

const gamesServices = require("../services/gamesServices")
const consolServices = require("../services/consolServices")


const gamesController = {

    /*INDEX*/
    index: (req, res) => {
        res.render("../src/views/games/details",{
            'consols': consolServices.getAll(),
            'games' : gamesServices.getAll(),
        })
    },

    /*Create Game Form*/
    createGame: (req,res) => {

        res.render("../src/views/games/gamesCreation")
    },

    /*Save Game*/
    storeGame: (req, res) => {

       gamesServices.create(req.body)
        res.redirect("../src/views/games/details")
    },

      /*Update Game*/
      updateGame: (req, res) => {

        const idSearch = req.params.id
        gamesServices.update(idSearch,req.body)
        res.redirect("../src/views/games/details")
    },

    /*Destroy Game*/
    destroyGame : (req,res) => {
        
        gamesServices.destroy(req.body)
        res.redirect("../src/views/games/details")
    },


    /*Create Consol Form*/
    createConsol: (req,res) => {

        res.render("../src/views/games/consolsCreation")
    },

    /*Save Consol*/
    storeConsol: (req, res) => {

        consolServices.create(req.body)
        res.redirect("../src/views/games/details")
    },

    /*Update Consol*/
    updateConsol: (req, res) => {

        consolServices.update(req.body)
        res.redirect("../src/views/games/details")
    },

    /*Destroy Consol*/
    destroyConsol : (req,res) => {

        consolServices.destroy(req.body)
        res.redirect("../src/views/games/details")
    }

    
    


}

module.exports = gamesController