const express = require("express");
const router = express.Router();

const userscontroller = require("../controllers/usuarioController");
const registerValidations= require("../middlewares/register-validator")
const loginValidations= require("../middlewares/login-validator")
/* GET home page. */

router.get("/register", userscontroller.register)
router.post("/register", registerValidations, userscontroller.store)
router.get("/login", userscontroller.login)
router.post("/login",loginValidations, userscontroller.logged)
router.post('/logout', userscontroller.logout);




module.exports = router;