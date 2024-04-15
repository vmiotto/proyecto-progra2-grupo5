const controller = {
    index: function (req, res) {
      res.render("register", { title: "Express" });
    }
  };
  
  module.exports = controller;
  