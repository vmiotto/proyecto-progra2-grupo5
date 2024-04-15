const express = require("express");
const router = express.Router();

const productcontroller = require("../controllers/productcontroller");

/* GET home page. */

router.get("/", productcontroller.index)



module.exports = router;