const {check} = require("express-validator")

module.exports = [
    check("name").notEmpty().withMessage("Debes ingresar un nombre para la  consola").bail()
                 .isLength({min : 3}).withMessage("El nombre de la consola debe ser mas largo"),

    check("consol_image").notEmpty().withMessage("Debes de cargar una imagen para la consola").bail(),
    
    check("logo").notEmpty().withMessage("Debes de cargar un logo para la consola").bail()
    
]