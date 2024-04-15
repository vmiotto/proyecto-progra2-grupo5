const datos = require('../db/db')
const controller = {
  index: function (req, res) {
    res.render("index", { 'datos': datos });
  }

};

module.exports = controller;
