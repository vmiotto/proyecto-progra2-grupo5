const datos = require('../db/db')
const controller = {
    index: function (req, res) {
      res.render("search-results", { 'datos': datos });
    }
  };
  
  module.exports = controller;
  