const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');

const loginValidations = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function(mailLog, {req}){
            return db.Usuario.findOne({
                where: {email:mailLog}
            })
            .then(function(mailUsuario){
                if(!mailUsuario){
                    throw new Error("No existe un usuario con ese email")
                }
            })
        }
    ),
    body("password")
        .notEmpty()
        .withMessage("Debes Introducir un password")
        .custom(function(passUsuario, {req}){
            return db.Usuario.findOne({
                where: {email:req.body.email}
            })
            .then(function(usuarioMatcheado){
                if(usuarioMatcheado){
                    const password = usuarioMatcheado.password;
                    const passwordOk= bcryptjs.compareSync(passUsuario,password);
                    if(!passwordOk){
                        throw new Error("Contraseña incorrecta")
                    }                    
                }
            })
        })
        

]

module.exports = loginValidations;