const fs = require("fs")

const gamesJSON = fs.readFileSync("src/database/juegos.json", "utf-8")
const games = JSON.parse(gamesJSON)

function saveProducts(){
    const to_text = JSON.stringify(gamesJSON, null, 4)
    fs.writeFileSync(gamesJSON, to_text, "utf-8")
}

module.exports = {
    getAll(){
        return games
    },

    create(body){

        const game_to_create = {
            id: Date.now(),
            ...body,
            image: "",
            logo: "",
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

    delete(id){
        const index = games.findIndex((game) => {
            return game.id == id
        })

        games.splice(index,1)

        saveProducts()
    },

}