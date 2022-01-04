const { check } = require("express-validator");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Ingresar un email.")
    .bail()
    .isEmail()
    .withMessage("Debes ingresar un mail valido: nombre@servicio.com"),

  check("user_name")
    .notEmpty()
    .withMessage("Ingresar un nombre")
    .bail()
    .isLength({ min: 4 })
    .withMessage("El nombre debe ser mas largo"),

  check("address")
    .notEmpty()
    .withMessage("Ingresar una direccion de envio valida")
    .bail(),

  check("image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),

  check("password")
    .notEmpty()
    .withMessage("Ingresar una contraseña")
    .bail()
    .isLength({ min: 7 })
    .withMessage("La contraseña debe ser mas larga(minimo 7 caracteres)")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
    .withMessage(
      "La contraseña debe contener caracteres especiales y 1 mayuscula"
    ),
  //                     .custom(() => {
  //                        if (req.body.password === req.body.confirmPassword) {
  //                          return true;
  //                       } else {
  //                          return false;
  //                        }
  //                      })
  //                      .withMessage("Las contraseñas deben coincidir")
];
