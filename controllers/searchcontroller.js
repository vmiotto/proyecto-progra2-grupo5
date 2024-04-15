const controller = {
    index: function (req, res) {
      res.render("search-results", { title: "Express" });
    }
  };
  
  module.exports = controller;
  