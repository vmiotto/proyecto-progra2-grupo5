const express = require("express");
const router = express.Router();
const prodAddValidations = require("../middlewares/productadd-validations")
const profilecontroller = require("../controllers/profilecontroller");

/* GET home page. */


router.get("/miperfil", profilecontroller.perfil)
router.get("/product-add", profilecontroller.add)
router.post("/product-add", prodAddValidations, profilecontroller.store)
router.get("/:id", profilecontroller.index)

module.exports = router;