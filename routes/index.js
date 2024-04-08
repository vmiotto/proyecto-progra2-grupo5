const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const logincontroller = require("../controllers/logincontroller");
const productcontroller = require("../controllers/productcontroller");
const profilecontroller = require("../controllers/profilecontroller");
const registercontroller = require("../controllers/resgistercontroller");
const searchcontroller = require("../controllers/searchcontroller");

/* GET home page. */
router.get("/", mainController.index);



module.exports = router;
