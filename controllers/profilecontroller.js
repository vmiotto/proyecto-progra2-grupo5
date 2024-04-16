const usuario = require("../db/infousuario")
const controller = {
    index: function (req, res) {
      res.render("profile", { title: "Express" });
    },
    perfil:function (req, res) {
      res.render("profile", { 'perfil': usuario });
    },
  };
  
  module.exports = controller;
  