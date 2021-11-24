const fs = require("fs")
const productsJSON = fs.readFileSync("src/database/productos.json" , "utf-8")
const products = JSON.parse(productsJSON)

const mainController = {
    index: (req,res) =>{
        res.render("../src/views/index",{
            products,
        })
    },

}


module.exports= mainController