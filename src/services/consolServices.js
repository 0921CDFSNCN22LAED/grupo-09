const fs = require("fs")

const consolsJSON = fs.readFileSync("src/database/consolas.json", "utf-8")
const consols = JSON.parse(consolsJSON)

function saveProducts(){
    const to_text = JSON.stringify(consolsJSON, null, 4)
    fs.writeFileSync(consolsJSON, to_text, "utf-8")
}

module.exports = {

    getAll(){
        return consols
    },

    create(body){

        const consol_to_create = {
            id : Date.now(),
            name : req.body.name,
            image : req.body.image,
            logo : req.body.logo,
        }

        consols.push(consol_to_create)

        saveProducts()

        
    },

    update(id, body){

        const index = consols.findIndex((consol) => {
            return consol.id == id
        })

        const product_to_update  = {
            id: products[index].id,
            ...body
            
        }

        consols[index] = product_to_update

        saveProducts()
        
    },

    destroy(id){

        index = products.filter((prod) =>{
            return prod.id == id
        })

        consols.splice(index,1)

        saveProducts()


    }
    
}