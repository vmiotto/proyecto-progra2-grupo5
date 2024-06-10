const controller = {
    index: function (req, res) {
      res.render("", { title: "Express" });
    },
    register:  function (req, res) {
        res.render("register", {})
    },
    login: function (req, res) {
        res.render("login", {})
    },
  };
  
  module.exports = controller;
  