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
        
    };
    //creamos el usuario
    db.User
        .create(user)
        .then(function (user) {
            return res.redirect("/login");
        })
        .catch(function (err) {
            console.log("Error al guardar el usuario", err);
        });
    },
    login: function (req, res) {
      
        res.render("login", {})
    },
  };
  
  module.exports = controller;
  