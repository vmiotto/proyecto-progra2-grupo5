const express = require("express");
const router = express.Router();
const prodAddValidations = require("../middlewares/productadd-validations")
const profilecontroller = require("../controllers/profilecontroller");
const editValidation = require('../middlewares/edit-validator')

/* GET home page. */


router.get("/miperfil", profilecontroller.perfil)
router.get("/product-add", profilecontroller.add)
router.post("/product-add", prodAddValidations, profilecontroller.store)
router.get("/:id", profilecontroller.index)
router.get("/profile/edit", editValidation, profilecontroller.editProfileForm)
router.post("/profile/edit", editValidation, profilecontroller.updateProfile)

module.exports = router;