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
  addcomment: function(req,res){
      const { comentario } = req.body;
      const productId = req.params.id;
      const userId = req.session.user.id;

      if (comentario.length < 3) {
        return res.status(400).send({ error: 'El comentario debe tener al menos 3 caracteres.' });
      }
      const nuevocomentario = {
        comentario: comentario,
        usuario_id: userId,
        producto_id: productId,
        createdAt: new Date()
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

    }
    };

  
  module.exports = controller;