const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');

const editValidation = [
    
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .bail(),
    body("username")
        .notEmpty()
        .withMessage("Debes completar tu usuario")
        .bail(),
   

]

module.exports = editValidation;