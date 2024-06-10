const express = require("express");
const router = express.Router();

const userscontroller = require("../controllers/userscontroller");


/* GET home page. */

router.get("/register", userscontroller.register)
router.get("/login", userscontroller.login)



module.exports = router;