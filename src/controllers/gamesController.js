const fs = require("fs")
const consolasJSON = fs.readFileSync("src/database/consolas.json", "utf-8")
const consolas = JSON.parse(consolasJSON)

const gamesController = {
    index: (req, res) => {
        res.render("../src/views/products/gamesDetails",{
            'consolas': consolas
        });
      },

}

module.exports = gamesController