const { body } = require("express-validator")
const db = require("../database/models")
const bcryptjs = require('bcryptjs');

const prodAddValidation = [
    body("imagen")
        .notEmpty()
        .withMessage("Debes completar tu Imagen")
        .bail(),
    body("nombre_producto")
        .notEmpty()
        .withMessage("Debes Introducir un password")
        .bail(),
    body("descripcion")
        .notEmpty()
        .withMessage("Debes introducir una descripcion")
        .bail(),
        

]

module.exports = prodAddValidation;