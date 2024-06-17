const db = require('../database/models')
const producto = db.Producto
const controller = {
  index: function (req, res) {
      producto.findAll(
        {
        include: [
          { association: 'usuarios' },
          { association: 'comentarios' }
        ]}
        )
    .then(function(data){
        console.log(data)
        return res.render('product', { productos: data });
    })
    .catch(error =>{
        console.log(error);
    });
  },
  id: function (req, res) {
    let id = req.params.id
    producto.findByPk(id,
      {
        include: [
          { association: 'usuarios' },
          { association: 'comentarios' }
        ]
      })
      .then(function(data) {
        console.log("producto por id: ", JSON.stringify(data,null, 4))
        const usuariosComentadores = data.comentarios
        const hola = []
          for(let i = 0; i < usuariosComentadores.length; i++){
            db.Usuario.findByPk(usuariosComentadores[i].usuario_id,
              {
                include: { association: 'comentarios' }
              })
              .then(function(info){
                console.log("usuarios q comentan: ", JSON.stringify(info,null, 4))
                hola.push(info)
                
              })
              .catch(error => {
                console.log(error);
              })
        }
        return res.render('product', {'usuarioComentador': hola, 'producto': data})
      })
      .catch(error => {
        console.log(error);
      })
    },
  };
  
  module.exports = controller;