const {check} = require("express-validator")

module.exports = [
    check("name").notEmpty().withMessage("Debes ingresar un nombre de consola").bail()
                 .isLength({min : 3}).withMessage("El nombre de la consola debe ser mas largo"),

    check("image").notEmpty().withMessage("Debes cargar una imagen de la consola").bail(),
    
    check("logo").notEmpty().withMessage("Debes cargar un logo para la consola").bail()
    
]