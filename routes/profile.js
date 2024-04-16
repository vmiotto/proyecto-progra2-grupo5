const express = require("express");
const router = express.Router();

const profilecontroller = require("../controllers/profilecontroller");

/* GET home page. */

router.get("/", profilecontroller.index)
router.get("/", profilecontroller.perfil)



module.exports = router;