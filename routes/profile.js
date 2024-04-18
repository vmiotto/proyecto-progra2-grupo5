const express = require("express");
const router = express.Router();

const profilecontroller = require("../controllers/profilecontroller");

/* GET home page. */

router.get("/", profilecontroller.index)
router.get("/miperfil", profilecontroller.perfil)
router.get("/product-add", profilecontroller.add)

module.exports = router;