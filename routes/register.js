const express = require("express");
const router = express.Router();

const registercontroller = require("../controllers/registercontroller");

/* GET home page. */

router.get("/", registercontroller.index)



module.exports = router;