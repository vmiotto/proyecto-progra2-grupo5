const express = require("express");
const router = express.Router();

const productoController = require("../controllers/productoController");

/* GET home page. */

router.get("/", productoController.index)
router.get("/:id", productoController.id)
router.get('/product/:id', productoController.add);
router.post('/product/:id', productoController.addcomment);




module.exports = router;