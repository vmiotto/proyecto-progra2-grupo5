const controller = {
    index: function (req, res) {
      res.render("login", { title: "Express" });
    }
  };
  
  module.exports = controller;
  