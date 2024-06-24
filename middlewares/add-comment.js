const { body } = require("express-validator")
const db = require("../database/models")
const bcryptjs = require('bcryptjs');
const { add } = require("../controllers/profilecontroller");

const addCommentValidation = [
    
    body("comentario")
        .notEmpty()
        .withMessage("Debes completar el comentario")
        .bail()
        .trim()
        .isLength({ min: 3})
        .withMessage("El comentario debe tener al menos tres caractéres")
]

module.exports = addCommentValidation;