const {check} = require("express-validator")

module.exports= [
    check("name").notEmpty().withMessage("Debes ingresar el nombre del juego").bail()
                .isLength({min:3}).withMessage("El nombre debe ser mas largo"),

    check("gender").notEmpty().withMessage("Debes seleccionar el genero del juego, ejemplo :'RPG'").bail(),

    check("description").notEmpty().withMessage("Ingresar breve descripcion del juego").bail()
                    .isLength({min:10}).withMessage("La descripcion debe de ser mas larga")

]