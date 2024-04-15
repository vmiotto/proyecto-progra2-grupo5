const datos = require('../db/db')
const controller = {
    index: function (req, res) {
      res.render("product", { title: "Express" });
    }
  };
  
  module.exports = controller;
  