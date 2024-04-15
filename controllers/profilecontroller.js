const controller = {
    index: function (req, res) {
      res.render("profile", { title: "Express" });
    }
  };
  
  module.exports = controller;
  