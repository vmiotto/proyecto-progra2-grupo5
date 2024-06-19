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
};
  
  module.exports = controller;