const db= require("../database/models")
const bcrypt = require('bcryptjs');
const usuarios = db.Usuario
const { validationResult } = require("express-validator");
const op = db.Sequelize.Op;
//const { loginValidationResult }= require("express-validator");

const controller = {
    index: function (req, res) {
      res.render("", { title: "Express" });
    },
    register: function (req, res) {
      
        res.render("register", {})
    },
    store: function(req, res) {
       const validationErrors = validationResult(req);
       console.log("validationErrors : ", validationErrors)
        // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body
        if(validationErrors.isEmpty()){

         } else { 
          return res.render("register",{
               errors: validationErrors.mapped(),
               old:req.body
        })
       }
      
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
      //obtenemos los restultados de las validaciones       
      const logValidationErrors = validationResult(req);
      console.log("validationErrors : ", logValidationErrors)
      // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body         
      if(!logValidationErrors.isEmpty()){
          return res.render("login",{
              errors: logValidationErrors.mapped(),
              old:req.body
          })
      } 
        // Buscar el usuario que se quiere loguear.
    console.log(req.body)
    usuarios
    .findOne({
      where: [{ email: req.body.email }],
    })
    .then(function (usuarioLogueado) {
      const passwordEncriptada = usuarioLogueado.password;
      const comparacion = bcrypt.compareSync(req.body.password, passwordEncriptada);

      //Si tildó recordame => creamos la cookie.
      if (comparacion) {
        req.session.user = usuarioLogueado;
        if (req.body.recordarme !== undefined) {
          res.cookie("usuarioGuardado", usuarioLogueado.id, { maxAge: 1000 * 60 * 5 });
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
        res.clearCookie("usuarioGuardado");
    
        //redireccionar a home
        res.redirect("/users/login");
      },
    
  };
  
  module.exports = controller;
  