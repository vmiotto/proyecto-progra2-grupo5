const express = require("express");
const router = express.Router();

const logincontroller = require("../controllers/logincontroller");


/* GET home page. */

router.get("/", logincontroller.index)



module.exports = router;