const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
/*const logincontroller = require("../controllers/logincontroller");
const productcontroller = require("../controllers/productcontroller");
const profilecontroller = require("../controllers/profilecontroller");
const registercontroller = require("../controllers/registercontroller");
const searchcontroller = require("../controllers/searchcontroller");

/* GET home page. */
router.get("/", mainController.index);




module.exports = router;
