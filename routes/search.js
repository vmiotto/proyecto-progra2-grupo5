const express = require("express");
const router = express.Router();

const searchcontroller = require("../controllers/searchcontroller");

/* GET home page. */

router.get("/", searchcontroller.index)



module.exports = router;