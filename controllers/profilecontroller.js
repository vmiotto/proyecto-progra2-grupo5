const db = require('../database/models')
const usuario = db.Usuario
const { validationResult } = require("express-validator")
const bcrypt = require('bcryptjs');
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
      .catch(function(error){
        console.log(error)
      })
    },
    perfil:function (req, res) {
      res.render('profile-edit', { usuario: usuario[0] })
      //res.render('headerlogueado', {usuario: usuario[0] })
    },
    add: function (req,res) {
      
      res.render('product-add', {})
    },
    store: function(req,res){
      const data = req.body;
      console.log('esta es la data que se manda',data)
      const validationErrors = validationResult(req);
      console.log('validationErrors : ', validationErrors)
      if(!validationErrors.isEmpty()){
        return res.render("product-add",{
          errors: validationErrors.mapped(),
          old: data })
      }
      const producto = {
          imagen: data.imagen,
          nombre_producto: data.nombre_producto,
          descripcion: data.descripcion,
          usuario_id: req.session.user.id,
      }
      
      db.Producto.create(producto)
      .then((productoCreado) => {
        return res.redirect('/');
      })
      .catch(error => {
        console.log(error);
      })
      },


    editProfileForm: function(req, res) {
      const userId = req.params.id
      db.Usuario.findByPk(userId)
          .then(usuario => {
              if (!usuario) {
                  return res.redirect('/');
              }
              console.log('Datos del usuario:', usuario);
              res.render("profile-edit", { usuario });
              
          })
          .catch(err => console.error(err));
        
  },
    updateProfile: function(req, res) {
      const userId = req.session.user.id;
      const validationErrors = validationResult(req);
      const data = req.body;

      if (!validationErrors.isEmpty()) {
        db.Usuario.findByPk(userId)
          .then(usuario => {
              if (!usuario) {
                  return res.redirect('/');
              }
           res.render("profile-edit", {
            usuario:usuario,
            errors: validationErrors.mapped(),
            old: data});        
      })
      .catch(err => console.error(err));
    } else{

      // Lógica para actualizar el perfil si no hay errores de validación
      let updates = {
          email: data.email,
          username: data.username,
          fecha: data.fecha,
          dni: data.dni,
          foto: data.foto
      };
      if (data.password) {
          // En un entorno real, deberías cifrar la contraseña antes de guardarla
          updates.password = bcrypt.hashSync(data.password,10)
      }

      db.Usuario.update(updates, { where: { id: userId } })
          .then(function() {
            req.session.user= updates
            return res.redirect(`/profile/${userId}`);
          })
          .catch(err => console.error(err));
          }
  },
};
  
  module.exports = controller;
  