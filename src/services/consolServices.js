const fs = require("fs")
const path = require("path")

const consolsJSON = path.join(__dirname, "../database/consolas.json")
const consols = JSON.parse(fs.readFileSync(consolsJSON, "utf-8"))


function saveProducts(){
    const to_text = JSON.stringify(consols, null, 4)
    fs.writeFileSync(consolsJSON, to_text, "utf-8")
}


module.exports = {

    getAll(){
        return consols
    },

    findOne(id){
        const consol = consols.find((consol) => {
            return consol.id == id
        })
        return consol
    },

    create(body, file){

        const consol_to_create = {
            
            id : Date.now(),
            ...body,
            consol_image : file
        }

        consols.push(consol_to_create)

        saveProducts()

        
    },

    update(id, body, file){

        const index = consols.findIndex((consol) => {
            return consol.id == id
        })

        if (!file) {
            file = consols[index].consol_image;
          }

        const product_to_update  = {
            id: consols[index].id,
            ...body,
            consol_image: file
            
        }

        consols[index] = product_to_update

        saveProducts()
        
    },

    destroy(id){

        index = consols.findIndex((consol) =>{
            return consol.id == id
        })

        consols.splice(index,1)

        saveProducts()


    }
    
}