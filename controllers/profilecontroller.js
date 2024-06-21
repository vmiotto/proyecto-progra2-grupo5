const db = require('../database/models')
const usuario = db.Usuario
const { validationResult } = require("express-validator")
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
      
      res.render('product-add', {})
    },
    store: function(req,res){
      let data = req.body;
      const validationErrors = validationResult(req);
      console.log('validationErrors : ', validationErrors)
      if(!validationErrors.isEmpty()){
        return res.render("product-add",{
          errors: validationErrors.mapped(),
          old: data
   })
      } 
    let producto = {
        imagen: data.imagen,
        nombre_producto: data.nombre_producto,
        descripcion: data.descripcion
    }
    db.Producto.create(producto)
    .then((productoCreado) => {
      return res.redirect('/');
    })
    .catch(error => {
      console.log(error);
    })
    }
  };
  
  module.exports = controller;
  