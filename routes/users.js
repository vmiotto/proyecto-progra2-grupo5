const express = require("express");
const router = express.Router();

const userscontroller = require("../controllers/usuarioController");


/* GET home page. */

router.get("/register", userscontroller.register)
router.post("/register", userscontroller.store)
router.get("/login", userscontroller.login)
router.post("/login", userscontroller.logged)
router.post('/logout', userscontroller.logout);




module.exports = router;