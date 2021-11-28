const fs = require("fs")
const productsJSON = fs.readFileSync("src/database/productos.json" , "utf-8")
const products = JSON.parse(productsJSON)
const consolsJSON = fs.readFileSync("src/database/consolas.json" , "utf-8")
const consols = JSON.parse(consolsJSON)

const mainController = {
    index: (req,res) =>{
        res.render("../src/views/index",{
            products,
            consols,
        })
    },

}


module.exports= mainController