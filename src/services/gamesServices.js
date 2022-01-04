const fs = require("fs")
const path = require("path")

const gamesJSON = path.join(__dirname, "../database/juegos.json")
const games = JSON.parse(fs.readFileSync(gamesJSON, "utf-8"))

function saveProducts(){
    const to_text = JSON.stringify(games, null, 4)
    fs.writeFileSync(gamesJSON, to_text, "utf-8")
}


module.exports = {
    getAll(){
        return games
    },

    findOne(id){
        const game = games.find((game) => {
            return game.id == id
        })
        return game
    },

    create(body){

        const game_to_create = {
            id: Date.now(),
            ...body,
            image: body.file.filename,
        }

        games.push(game_to_create)


        saveProducts()
    },

    update(id, body){

        const index = games.findIndex((game) => {
            return game.id == id
        })

        game_to_update = {
            id: games[index].id,
            image : games[index].image,
            ...body
            
        }

        games[index] = game_to_update

        saveProducts()

    },

    destroy(id){
        const index = games.findIndex((game) => {
            return game.id == id
        })

        games.splice(index,1)

        saveProducts()
    },

}