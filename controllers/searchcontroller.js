const db = require('../database/models')
const producto = db.Producto
const op = db.Sequelize.Op
const controller = {
    index: function (req, res) {
      let infoABuscar = req.query.search
      producto.findAll({
        where: {
          [op.or]: [
            { nombre_producto: { [op.like]: '%' + infoABuscar + '%' } },
            { descripcion: { [op.like]: '%' + infoABuscar + '%' } }
          ]},
        include: [{ association: 'comentarios'}, {association: 'usuarios'}],
        order: [
          ['created_at', 'DESC'] 
         ]
      })
      .then(function(data){
        console.log("buscador: ", JSON.stringify(data,null, 4))
        res.render("search-results", { 'datos': data, 'busqueda': infoABuscar });
      })
      .catch(function(error){
        console.log(error)
      })
    }
  };
  
  module.exports = controller;
  