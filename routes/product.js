const express = require("express");
const router = express.Router();

const productoController = require("../controllers/productoController");
const prodAddValidation = require("../middlewares/productadd-validations");
const addCommentValidation = require("../middlewares/add-comment")

/* GET home page. */

router.get("/", productoController.index)
router.get("/:id", productoController.id)
router.post('/:id/comment',addCommentValidation, productoController.addcomment);
router.get("/edit/:id", productoController.editProduct);
router.post("/edit/:id", prodAddValidation, productoController.updateProduct);
router.post("/delete/:id", productoController.borrar)




module.exports = router;