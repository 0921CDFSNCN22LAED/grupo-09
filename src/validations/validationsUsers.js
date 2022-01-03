const {check} = require("express-validator")


module.exports=  [
    check("mail").notEmpty().withMessage("Ingresar un email.").bail()
                 .isEmail().withMessage("Debes ingresar un mail valido: nombre@servicio.com"),

    check("user_name").notEmpty().withMessage("Ingresar un nombre").bail()
                 .isLength({ min : 4}).withMessage("El nombre debe ser mas largo"),

    check("address").notEmpty().withMessage("Ingresar una direccion de envio valida").bail()
                    .isAlphanumeric().withMessage("La direccion debe contener los datos validos."),

    check("password").notEmpty().withMessage("Ingresar una contraseña").bail()
                     .isLength({ min : 7}).withMessage("La contraseña debe ser mas larga(minimo 7 caracteres)")
                     .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i").withMessage("La contraseña debe contener caracteres especiales y 1 mayuscula")
]