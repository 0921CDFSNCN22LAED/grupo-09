const req = require("express/lib/request")
const fs = require("fs")
const path = require("path")

const productsJSON = path.join(__dirname, "../database/productos.json")
const products = JSON.parse(fs.readFileSync(productsJSON, "utf-8"))

function saveProducts(){
    const to_text = JSON.stringify(products, null, 4)
    fs.writeFileSync(productsJSON, to_text, "utf-8")
}

module.exports = {
    getAll(){
        return products
    },

    findOne(id){

        const product = products.find((producto) => {
            return producto.id == id
        })
        return product
    },

    create(body){

        const product_to_create = {
            id: Date.now(),
            product_image : body.file.filename,
            ...body
        }

        products.push(product_to_create)


        saveProducts()
    },

    update(id, body){

        const index = products.findIndex((producto) => {
            return producto.id == id
        })

        product_to_update = {
            id: products[index].id,
            image : products[index].image,
            ...body
            
        }

        products[index] = product_to_update

        saveProducts()

    },

    destroy(id){
        const index = products.findIndex((product) => {
            return product.id == id
        })

        products.splice(index,1)

        saveProducts()
    },

}