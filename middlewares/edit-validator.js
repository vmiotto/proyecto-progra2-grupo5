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
        .bail()
        .custom(function(ingreso, {req}){
            return db.Usuario.findOne({
                where: {email:ingreso}
            })
            .then(function(emailMatch){
                if(emailMatch){
                    throw new Error("Email ya existente")
                }
            })
        }
    ),
    body("username")
        .notEmpty()
        .withMessage("Debes completar tu usuario")
        .bail(),
    body("password")
        .notEmpty()
        .withMessage("Debes Introducir tu contraseña")
        .bail()
        .isLength({min:4})
        .withMessage("Tu contraseña tiene que tener minimo 4 caracteres")
        .bail(),

]

module.exports = editValidation;