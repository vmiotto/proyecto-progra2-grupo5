const express = require("express");
const router = express.Router();
const prodAddValidations = require("../middlewares/productadd-validations")
const profilecontroller = require("../controllers/profilecontroller");
const editValidation = require('../middlewares/edit-validator')
const registerValidations= require("../middlewares/register-validator")//
/* GET home page. */


router.get("/miperfil", profilecontroller.perfil)
router.get("/product-add", profilecontroller.add)
router.post("/product-add", prodAddValidations, profilecontroller.store)
router.get("/:id", profilecontroller.index)
router.get("/edit/:id", profilecontroller.editProfileForm)
router.post("/edit/:id", editValidation, profilecontroller.updateProfile)

module.exports = router;