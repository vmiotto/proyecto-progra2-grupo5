const express = require("express");
const router = express.Router();

const userscontroller = require("../controllers/usuarioController");


/* GET home page. */

router.get("/register", userscontroller.register)
router.get("/register", userscontroller.store)
router.get("/login", userscontroller.login)




module.exports = router;