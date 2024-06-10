const db= require("../database/models")
const bcrypt = require('bcryptjs');

const op = db.Sequelize.Op;

const controller = {
    index: function (req, res) {
      res.render("", { title: "Express" });
    },
    register: function (req, res) {
      
        res.render("register", {})
    },
    store: function(req, res) {
      //TO DO: Validations
      const user = {
        id: req.body.id,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        fecha: req.body.fecha,
        dni: req.body.DNI,
        foto: req.body.foto,        
    };
    //creamos el usuario
    db.Usuario
        .create(user)
        .then(function (user) {
            return res.redirect("../users/login");
        })
        .catch(function (err) {
            console.log("Error al guardar el usuario", err);
        });
    },
    login: function (req, res) {    
        res.render("login", {})
    },
    logged: function (req,res) {
        
    }
  };
  
  module.exports = controller;
  