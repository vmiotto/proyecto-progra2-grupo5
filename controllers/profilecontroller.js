
const db = require('../database/models')
const datos= require ("../db/db")
const usuario = db.Usuario
const controller = {
    index: function (req, res) {
      let id = req.params.id
      let filtrado = {
        include: [
          { association: 'productos',
          include: [{ association: 'comentarios'}]},
          {association: 'comentarios'}
        ]
      }
      usuario.findByPk(id, filtrado)
      .then (function(data){
        res.render("profile", { usuario: data });
      })
      

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
  