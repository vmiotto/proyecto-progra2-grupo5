const controller = {
    index: function (req, res) {
      res.render("register", { title: "Express" });
    }
    login: function (req, res) {
        res.render("")
    }
  };
  
  module.exports = controller;
  