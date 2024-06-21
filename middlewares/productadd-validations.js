const { body } = require("express-validator")
const db = require("../database/models")
const bcryptjs = require('bcryptjs');

const prodAddValidation = [
    body("imagen")
        .notEmpty()
        .withMessage("Debes completar tu imagen")
        .bail(),
    body("nombre_producto")
        .notEmpty()
        .withMessage("Debes introducir un nombre")
        .bail(),
    body("descripcion")
        .notEmpty()
        .withMessage("Debes introducir una descripcion")
        .bail(),
  

]

module.exports = prodAddValidation;