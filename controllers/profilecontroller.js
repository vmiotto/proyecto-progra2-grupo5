const usuario = require("../db/infousuario")
const datos= require ("../db/db")
const controller = {
    index: function (req, res) {
      res.render("profile", { usuario: usuario[0],
      'datos': datos });
    },
    perfil:function (req, res) {
      res.render('profile-edit', { usuario: usuario[0] })
      res.render('headerlogueado', {usuario: usuario[0] })
    },
    add: function (req,res) {
      res.render('product-add', {'usuario': usuario[0]})
    }
  };
  
  module.exports = controller;
  