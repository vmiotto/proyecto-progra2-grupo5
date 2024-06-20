const db= require("../database/models")
const bcrypt = require('bcryptjs');
const usuarios = db.Usuario
const op = db.Sequelize.Op;

const controller = {
    index: function (req, res) {
      res.render("", { title: "Express" });
    },
    register: function (req, res) {
      
        res.render("register", {})
    },
    store: function(req, res) {
      //TO DO: Validations
      console.log('entro a register')
      const user = {
        id: req.body.id,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        fecha: req.body.fecha,
        dni: req.body.dni,
        foto: req.body.foto,        
    };
    console.log("usuario: ", req.body)
    //creamos el usuario
      db.Usuario
        .create(user)
        .then(function (user) {
          console.log("Usuario creado correctamente:", user);
          return res.redirect("../users/login");
        })
        .catch(function (err) {
            console.log("Error al guardar el usuario", err);
            return res.status(500).send("Error al guardar el usuario en la base de datos.");
        });
    },
    login: function (req, res) {    
        res.render("login", {})
        console.log(req.body)
    },
    logged: function (req,res) {
        // Buscar el usuario que se quiere loguear.
    console.log(req.body)
    usuarios
    .findOne({
      where: [{ email: req.body.email }],
    })
    .then(function (usuarioMatch) {
      const passwordEncriptada = usuarioMatch.password;
      const check = bcrypt.compareSync(req.body.password, passwordEncriptada);

      //Si tildó recordame => creamos la cookie.
      if (check) {
        req.session.user = user;
        if (req.body.recordarme !== undefined) {
          res.cookie("usuarioGuardado", user.id, { maxAge: 1000 * 60 * 5 });
        }
      } else {
        res.redirect("/login");
      }
      res.redirect("/");
    })
    .catch(function (e) {
      console.log(e);
    });
    },
    logout: function (req, res) {
        //Destruir la sessión
        req.session.destroy();
    
        //Destruir la cookie
        res.clearCookie("userId");
    
        //redireccionar a home
        res.redirect("/");
      },
    
  };
  
  module.exports = controller;
  