const db = require('../database/models')
const producto = db.Producto
const controller = {
  index: function (req, res) {
      db.Producto.findAll({
        include: [{ association: 'usuarios' }]
    })
    .then(function(data){
        console.log(data)
        return res.render('productos', { productos: data });
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
