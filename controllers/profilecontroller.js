const usuario = require("../db/infousuario")
const controller = {
    index: function (req, res) {
      res.render("profile", { title: "Express" });
    },
    perfil:function (req, res) {
      res.render('usuario', { usuario: usuario[0] })
    },
  };
  
  module.exports = controller;
  