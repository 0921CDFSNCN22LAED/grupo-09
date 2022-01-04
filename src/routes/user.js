const express = require("express")
const multer = require('multer')
const path = require("path")
const router = express.Router()

const userController = require("../controllers/userController.js")
const middlewareImages = require("../middlewares/middlewareImages.js")
const validationsUsers = require("../validations/validationsUsers.js")
const middlewareRemember = require("../middlewares/middlewareRemember.js");
const targetFolder = path.resolve(__dirname , "../../public/images/users/avatar")

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, targetFolder)
    },

    filename : (req, file, cb) =>{
        cb(null, `${Date.now()}_avatar${path.extname(file.originalname)}`)
    }
})
const uploadFile = multer({storage})


/*-User Creation-*/
/**register form**/
router.get("/register", userController.register)
/**store method**/
router.post("/", uploadFile.single("user_image"), validationsUsers, userController.storeUser)
/**login form **/
router.get("/login", userController.login)
/**confirm login **/
router.post("/login", middlewareRemember, userController.confirmUser)
/**edit method**/
router.get("/:id/edit", userController.editUser)
/**update method**/
router.put("/:id/edit", userController.updateUser)
/**delete method**/
router.delete("/:id", userController.destroyUser)

module.exports = router
