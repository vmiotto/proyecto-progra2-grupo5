const express = require("express");
const router = express.Router();

const profilecontroller = require("../controllers/profilecontroller");

/* GET home page. */


router.get("/miperfil", profilecontroller.perfil)
router.get("/product-add", profilecontroller.add)
router.post("/product-add", prodAddValidation, profilecontroller.store)
router.get("/:id", profilecontroller.index)

module.exports = router;