const db = require('../database/models')
const producto = db.Producto
const controller = {
  index: function (req, res) {
      producto.findAll(
        //{
        //include: [
          //{ association: 'usuarios' },
          //{ association: 'comentarios' }
        //]}
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
    res.render("product", { 'id': req.params.id, 'datos': datos });
  },
  };
  
  module.exports = controller;