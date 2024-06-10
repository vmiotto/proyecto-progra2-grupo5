const express = require("express");
const router = express.Router();

const productoController = require("../controllers/productoController");

/* GET home page. */

router.get("/", productoController.index)
router.get("/:id", productoController.id)




module.exports = router;