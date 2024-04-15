const datos = require('../db/db')
const controller = {
  index: function (req, res) {
    res.render("index", { 'datos': datos });
  },
  id: function (req, res) {






    
    res.render("product", { 'id': req.params.id, 'datos': datos });
  }
  };
  
  module.exports = controller;
