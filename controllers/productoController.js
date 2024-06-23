const { validationResult } = require('express-validator');
const db = require('../database/models')
const producto = db.Producto
const comentario = db.Comentario
const controller = {
  index: function (req, res) {
      producto.findAll(
        {
        include: [
          { association: 'usuarios' },
          { association: 'comentarios' }
        ],
        order: [
         ['created_at', 'DESC'] 
        ]
      }
        )
    .then(function(data){
        console.log(data)
        return res.render('product', 'index', { productos: data });
    })
    .catch(error =>{
        console.log(error);
    });
  },
  id: function (req, res) {
    let id = req.params.id
    let filtrado = {
      include: [
        { association: 'usuarios' },
        { association: 'comentarios',
          include: [{ association: 'usuarios'}] }
      ]
    }
    producto.findByPk(id, filtrado)
      .then(function(data) {
        console.log("producto por id: ", JSON.stringify(data,null, 4))
        return res.render('product', {'producto': data})
      })
      .catch(error => {
        console.log(error);
      });
    },
  add: function(req,res){
    res.render('product', {})
  },
  addcomment: function(req,res){
      const comment = req.body.comentario;
      const productId = req.params.id;
      const userId = req.session.user.id;

      console.log('esta es la info del comentario', req.body)

      if (comentario.length < 3) {
        return res.status(400).send({ error: 'El comentario debe tener al menos 3 caracteres.' });
      }
      const nuevocomentario = {
        comentario: comment,
        usuario_id: userId,
        producto_id: productId,
        created_at: new Date()
      };
      console.log(nuevocomentario)
      db.Comentario
      .create(nuevocomentario)
      .then(function (nuevocomentario) {
        console.log("Comentario creado correctamente:", nuevocomentario);
        return res.redirect(`/product/${productId}`);
      })
      .catch(function (err) {
          console.log("Error al guardar el comentario", err);
          return res.status(500).send("Error al guardar el comentario en la base de datos.");
      });
    },
    editProduct: function(req, res) {
      const productID = req.params.id
      db.Producto.findByPk(productID)
          .then(usuario => {
              if (!usuario) {
                  return res.redirect('/');
              }
              console.log('Datos del usuario:', usuario);
              res.render("product-edit", { usuario });
              
          })
          .catch(err => console.error(err));
        
  },
    updateProduct: function(req, res) {
      const productID = req.params.id;
      const validationErrors = validationResult(req);
      const data = req.body;

      if (!validationErrors.isEmpty()) {
        db.Usuario.findByPk(productID)
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
          imagen: data.email,
          nombre_producto: data.nombre_producto,
          descripcion: data.descripcion,
      };

      db.Producto.update(updates, { where: { id: productID } })
          .then(function() {
            req.session.user= updates
            return res.redirect(`/product/${productID}`);
          })
          .catch(err => console.error(err));
          }
  },

    };

  
  module.exports = controller;