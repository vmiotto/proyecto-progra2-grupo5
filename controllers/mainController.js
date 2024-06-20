const db = require('../database/models')
const controller = {
  index: function (req, res) {
    db.Producto.findAll({
      include: [
        { association: 'usuarios' },
        { association: 'comentarios' }
      ],
      order: [
        ['created_at', 'DESC'] 
      ]
    })
    .then(function(data){
      console.log("productos: ", JSON.stringify(data,null, 4))
      return res.render('index', {'productos': data})
    })
    .catch(function(error){
      console.log(error)
    })
  }

};

module.exports = controller;
